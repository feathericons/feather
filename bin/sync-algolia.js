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

  indexTmp.setSettings({
    searchableAttributes: ['unordered(name)', 'unordered(tags)'],
    customRanking: ['asc(name)'],
  });

  const records = Object.keys(icons).map(name => ({
    name,
    tags: tags[name] || [],
  }));

  console.log('Pushing data to the temporary index...');
  indexTmp.addObjects(records, err => {
    if (err) throw err;
  });

  console.log('Moving temporary index to target index...');
  client.moveIndex(indexTmp.indexName, index.indexName, err => {
    if (err) throw err;
  });
}
