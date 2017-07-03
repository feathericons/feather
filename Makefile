src_files := src/*.js
src_dir   := src

.PHONY: all lint build

all: lint build

lint: dist/icons.json
	./node_modules/.bin/eslint .

build: dist/feather.js dist/feather.min.js

node_modules:
	npm install

dist:
	mkdir dist

dist/icons.json: node_modules dist icons icons/*.svg
	./node_modules/.bin/babel-node bin/build-json.js

dist/feather.js: dist/icons.json $(src_dir) $(src_files)
	./node_modules/.bin/webpack --output-filename feather.js

dist/feather.min.js: dist/icons.json $(src_dir) $(src_files)
	./node_modules/.bin/webpack --output-filename feather.min.js -p
