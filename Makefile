node_modules:
	npm install

dist:
	mkdir dist

dist/icons.json: node_modules dist icons icons/*.svg
	./node_modules/.bin/babel-node bin/build-json.js
