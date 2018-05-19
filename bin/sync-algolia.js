import algolia from 'algoliasearch';
import icons from '../dist/icons.json';
import tags from '../src/tags.json';

const ALGOLIA_APP_ID = '5EEOG744D0';

if (
  process.env.TRAVIS_PULL_REQUEST === 'false' &&
  process.env.TRAVIS_BRANCH === 'master'
) {
  syncAlgolia();
} else {
  console.log('Skipped Algolia sync.');
}

function syncAlgolia() {
  // ALGOLIA_ADMIN_KEY must be added as an environment variable in Travis CI
  const client = algolia(ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY);

  console.log('Initializing target and temporary indexes...');
  const index = client.initIndex('icons');
  const indexTmp = client.initIndex('icons_tmp');

  console.log(
    "Copying target index's settings, synonyms and rules into temporary index...",
  );
  scopedCopyIndex(client, index.indexName, indexTmp.indexName)
    .then(() => {
      const objects = Object.keys(icons).map(name => ({
        name,
        tags: tags[name] || [],
      }));

      console.log('Adding objects to the temporary index...');
      return addObjects(indexTmp, objects);
    })
    .then(() => {
      console.log('Moving temporary index to target index...');
      return moveIndex(client, indexTmp.indexName, index.indexName);
    });
}

function scopedCopyIndex(
  client,
  indexNameSrc,
  indexNameDest,
  scope = ['settings', 'synonyms', 'rules'],
) {
  return new Promise((resolve, reject) => {
    client.copyIndex(indexNameSrc, indexNameDest, scope, (error, contents) => {
      if (error) reject(error);
      resolve(contents);
    });
  });
}

function addObjects(index, objects) {
  return new Promise((resolve, reject) => {
    index.addObjects(objects, (error, contents) => {
      if (error) reject(error);
      resolve(contents);
    });
  });
}

function moveIndex(client, indexNameSrc, indexNameDest) {
  return new Promise((resolve, reject) => {
    client.moveIndex(indexNameSrc, indexNameDest, (error, contents) => {
      if (error) reject(error);
      resolve(contents);
    });
  });
}
