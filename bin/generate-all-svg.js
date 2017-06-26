/**
 * Generates an SVG file with all of the other SVGs placed inside of symbol elements.
 */

const fs = require('fs')
    , path = require('path')
    , xml2js = require('xml2js');

const ICONS_DIR = 'icons';
const OUTPUT_FILE = 'all-icons.svg';

const allIcons = {
    'svg': {
        '$': { xmlns: 'http://www.w3.org/2000/svg' },
        'symbol': []
    }
};

/**
 * Walks a directory synchronously.
 * @param {string} root The root directory to walk.
 * @param {function} callback called for each directory and file found.
 * 
*/
function walkdir(root, callback) {
    const dirstack = [root];
    while (dirstack.length > 0) {
        const currentdir = dirstack.pop();
        const files = fs.readdirSync(currentdir);
        files.forEach((filename) => {
            const filepath = path.join(currentdir, filename);
            const filestat = fs.statSync(filepath);
            if (filestat.isDirectory()) {
                dirstack.push(filepath);
                callback(filename, filepath, true);
            } else if (filestat.isFile()) {
                callback(filename, filepath, false);
            }
        });
    }
}

/**
 * Removes the stroke attribute from an svg element
 * and its children. This will run forever if there are any
 * cyclic references.
 */
function removeStrokeAttr(root) {
    const queue = [root];
    while (queue.length > 0) {
        const element = queue.pop();

        if (element['$'] && element['$']['stroke']) {
            delete element['$']['stroke'];
        }

        for (let key in element) {
            if (key === '$') continue;
            let child = element[key];
            if (typeof child === 'object') queue.push(child);
        }
    }
}

/**
 * Creates an entry for the icon in the global allIcons.
 * @param {*} filepath The name of the icon's file.
 * @param {*} icon The parsed XML for the icon.
 */
function writeIcon(filename, icon) {
    // checking for malformed icons:
    if (!icon['svg']) { throw new Error('No SVG tag found in icon.'); }

    if (icon['$']) {
        // Already defined for allIcons
        if (icon['$']['xmlns']) { delete icon['$']['xmlns']; }
    } else {
        icon['$'] = {};
    }

    let symbol = icon['svg'];
    removeStrokeAttr(symbol);

    let basename;
    const dotIndex = filename.lastIndexOf('.');
    if (dotIndex >= 0) { basename = filename.substr(0, dotIndex); }
    else { basename = filename; }

    symbol['$']['id'] = basename;
    allIcons['svg']['symbol'].push(symbol);

    console.log(`added icon ${basename}`);
}

/**
 * Writes the output SVG file with all of the other icons.
 */
function writeAllIconsFile() {
    const builder = new xml2js.Builder();
    const xml = builder.buildObject(allIcons);
    return new Promise((resolve, reject) => {
        fs.writeFile(OUTPUT_FILE, xml, (err) => {
            if (err) { reject(err); }
            else { resolve(); }
        });
    });
}

/**
 * Walks all icon svg files, parses them, then passes them over to writeIcon.
 */
function walkIconFiles() {
    const parser = new xml2js.Parser();

    return new Promise((resolve, reject) => {
        let waiting = 0, walked = false; // icons that are being read and processed.
        walkdir(ICONS_DIR, (filename, filepath, isdir) => {
            if (isdir || !filepath.endsWith('.svg')) return;
            waiting++;
            fs.readFile(filepath, function(err, data) {
                if (err) {
                    console.error(`Error while reading file ${filepath}.`, err);
                    return;
                } else {
                    parser.parseString(data, function(err, result) {
                        if (err) {
                            console.error(`Error while parsing XML for file ${filepath}.`, err);
                        } else {
                            writeIcon(filename, result);
                        }
                    });
                }
                waiting--;
                if (waiting == 0 && walked) {
                    // done walking and no more files so resolve.
                    resolve();
                } 
            });
        });

        walked = true;
        
        if (waiting == 0) {
            // done walking and no more files so resolve.
            resolve();
        }
    });
}

walkIconFiles()
    .then(() => writeAllIconsFile())
    .then(() => {
        console.log(`Wrote all icons file ${OUTPUT_FILE}`);
    });