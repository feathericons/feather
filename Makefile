src_files := src/*.js
src_dir   := src

.PHONY: all lint test build

all: lint test build

lint: dist/icons.json
	./node_modules/.bin/eslint .

test:
	./node_modules/.bin/jest

build: dist/feather.js dist/feather.min.js dist/icons

node_modules:
	npm install

dist:
	mkdir dist

dist/icons.json: node_modules dist icons icons/*.svg
	./node_modules/.bin/babel-node bin/build-icons-json.js

dist/feather.js: dist/icons.json $(src_dir) $(src_files)
	./node_modules/.bin/webpack --output-filename feather.js

dist/feather.min.js: dist/icons.json $(src_dir) $(src_files)
	./node_modules/.bin/webpack --output-filename feather.min.js -p

dist/icons: dist/icons.json
	rm -rf dist/icons
	mkdir -p dist/icons
	./node_modules/.bin/babel-node bin/build-svgs.js
