import algolia from 'algoliasearch';
import icons from '../dist/icons.json';
import tags from '../src/tags.json';

const ALGOLIA_APP_ID = '5EEOG744D0';

if (
  process.env.TRAVIS_PULL_REQUEST === 'false' &&
  process.env.TRAVIS_BRANCH === 'master'
) {
  console.log('Syncing Algolia records...');
  syncAlgolia();
} else {
  console.log('Skipped Algolia sync.');
}

function syncAlgolia() {
  const client = algolia(ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY);

  const index = client.initIndex('icons');

  const records = Object.keys(icons).map(name => ({
    name,
    tags: tags[name] || [],
  }));

  index.clearIndex((err, content) => {
    if (err) throw err;
    console.log(content); // eslint-disable-line no-console
  });

  index.addObjects(records, (err, content) => {
    if (err) throw err;
    console.log(content); // eslint-disable-line no-console
  });
}
