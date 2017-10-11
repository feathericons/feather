# Feather

[![Travis branch](https://img.shields.io/travis/colebemis/feather/master.svg?style=flat-square)](https://travis-ci.org/colebemis/feather)
[![npm](https://img.shields.io/npm/v/feather-icons.svg?style=flat-square)](https://www.npmjs.com/package/feather-icons)
[![npm](https://img.shields.io/npm/dm/feather-icons.svg?style=flat-square)](https://npm-stat.com/charts.html?package=feather-icons&from=2017-06-01)
[![Code Climate](https://img.shields.io/codeclimate/github/colebemis/feather.svg?style=flat-square)](https://codeclimate.com/github/colebemis/feather)
[![CDNJS version](https://img.shields.io/cdnjs/v/feather-icons.svg?style=flat-square)](https://cdnjs.com/libraries/feather-icons)

## What is Feather?

Feather is a collection of **simply beautiful open source icons**. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability.

**[feathericons.com](https://feathericons.com)**

```
npm install feather-icons
```

## Table of Contents

* [Quick Start](#quick-start)
* [Usage](#usage)
  * [Client-side JavaScript](#client-side-javascript)
  * [Node](#node)
* [API Reference](#api-reference)
	* [`feather.icons`](#feathericons)
	* [`feather.toSvg()`](#feathertosvgkey-options)
	* [`feather.replace()`](#featherreplaceoptions)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Related Projects](#related-projects)
* [License](#license)

## Quick Start

Start with this [CodePen Template](https://codepen.io/pen?template=WOJZdM) to begin prototyping with Feather in the browser.

Or copy and paste the following code snippet into a blank `html` file.

```html
<!DOCTYPE html>
<html lang="en">
  <title></title>
  <script src="https://unpkg.com/feather-icons/dist/feather.min.js"></script>
  <body>

    <!-- example icon -->
    <i data-feather="circle"></i>

    <script>
      feather.replace()
    </script>
  </body>
</html>
```

## Usage

At its core, Feather is a collection of [SVG](https://svgontheweb.com/#svg) files. This means that you can use Feather icons in all the same ways you can use SVGs (e.g. `img`, `background-image`, `inline`, `object`, `embed`, `iframe`). Here's a helpful article detailing the many ways SVGs can be used on the web: [SVG on the Web – Implementation Options](https://svgontheweb.com/#implementation)

The following are additional ways you can use Feather.

### Client-side JavaScript

#### 1. Install

> **Note:** If you intend to use Feather with a CDN, you can skip this installation step.

Install with [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```
npm install feather-icons --save
```

Or just copy [`feather.js`](https://unpkg.com/feather-icons/dist/feather.js) or [`feather.min.js`](https://unpkg.com/feather-icons/dist/feather.min.js) into your project directory. You don't need both `feather.js` and `feather.min.js`.

#### 2. Include

Include `feather.js` or `feather.min.js` with a `<script>` tag. These files are located in the `dist` directory of the npm package.

```html
<script src="path/to/dist/feather.min.js"></script>
```

Or load the script from a CDN provider.

```html
<!-- choose one -->
<script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
<script src="https://unpkg.com/feather-icons/dist/feather.min.js"></script>
```

After including the script, `feather` will be available as a global variable.

#### 3. Use

To use an icon on your page, add a `data-feather` attribute with the icon name to an element.

```html
<i data-feather="circle"></i>
```

See the complete list of icons at [feathericons.com](https://feathericons.com).

#### 4. Replace

Call the `feather.replace` method.

```html
<script>
  feather.replace()
</script>
```

All elements that have a `data-feather` attribute will be replaced with SVG markup corresponding to their `data-feather` attribute value. See the [API Reference](#api-reference) for more information about `feather.replace()`.

### Node
#### 1. Install

Install with [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```
npm install feather-icons --save
```

#### 2. Require

```javascript
var feather = require('feather-icons')
```

#### 3. Use
```javascript
feather.icons.circle
// <circle cx="12" cy="12" r="10"></circle>

feather.toSvg('circle')
// '<svg class="feather feather-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>'

feather.toSvg('circle', { class: 'my-class', 'stroke-width': 1 })
// '<svg class="feather feather-circle my-class" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>'
```

See the [API Reference](#api-reference) for more information about the available properties and methods of the `feather` object.

### Sprite

*Coming soon*

## API Reference

### `feather.icons`

An object with SVG path information for every icon.

#### Usage

```javascript
feather.icons.circle
// <circle cx="12" cy="12" r="10"></circle>

feather.icons.clock
// '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 15 15"/>'
```

### `feather.toSvg(key, [options])`

Returns an SVG string.

#### Parameters

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| `key`     | string | Icon name |
| `options` (optional) | Object |  Key-value pairs in the `options` object will be mapped to HTML attributes on the `<svg>` tag (e.g. `{ foo: 'bar' }` maps to `foo="bar"`). All default attributes on the `<svg>` tag can be overridden with the `options` object. |

#### Usage

```javascript
feather.toSvg('circle')
// '<svg class="feather feather-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>'

feather.toSvg('circle', { 'stroke-width': 1 })
// '<svg class="feather feather-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>'

feather.toSvg('circle', { class: 'foo bar' })
// '<svg class="feather feather-circle foo bar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>'
```

[View Source](https://github.com/colebemis/feather/blob/master/src/to-svg.js)

### `feather.replace([options])`

Replaces all elements that have a `data-feather` attribute with SVG markup corresponding to the element's `data-feather` attribute value.

#### Parameters

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| `options` (optional)  | Object | Key-value pairs in the `options` object will be mapped to HTML attributes on the `<svg>` tag (e.g. `{ foo: 'bar' }` maps to `foo="bar"`). All default attributes on the `<svg>` tag can be overridden with the `options` object. |

#### Usage

> **Note:** `feather.replace()` only works in a browser environment.

Simple usage:
```html
<i data-feather="circle"></i>
<!--
<i> will be replaced with:
<svg class="feather feather-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
-->

<script>
  feather.replace()
</script>
```

You can pass `feather.replace()` an `options` object:
```html
<i data-feather="circle"></i>
<!--
<i> will be replaced with:
<svg class="feather feather-circle foo bar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
-->

<script>
  feather.replace({ class: 'foo bar', 'stroke-width': 1 })
</script>
```

The id and classes on a placeholder element (i.e. `<i>`) will be copied to the `<svg>` tag:

```html
<i id="my-circle-icon" class="foo bar" data-feather="circle"></i>
<!--
<i> will be replaced with:
<svg id="my-circle-icon" class="feather feather-circle foo bar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
-->

<script>
  feather.replace()
</script>
```

[View Source](https://github.com/colebemis/feather/blob/master/src/replace.js)

## Roadmap

- [x] Write contributing guidelines
- [ ] Write icon design guidelines
- [ ] Add usage examples
- [ ] Add SVG sprite
- [ ] Add tests
- [ ] Track code coverage
- [ ] Use Prettier to enforce consistent code style
- [ ] Add search/filter functionality to project website
- [ ] Handle icon aliases
- [ ] Handle usage of custom icons
- [ ] Improve SVG accessibility

## Contributing

For more info on how to contribute please see the [contribution guidelines](https://github.com/colebemis/feather/blob/master/CONTRIBUTING.md).

Caught a mistake or want to contribute to the documentation? [Edit this page on Github](https://github.com/colebemis/feather/blob/master/README.md)

## Related Projects

 - [angular-feather](https://github.com/michaelbazos/angular-feather) - Feather icons for Angular applications
 - [react-feather](https://github.com/carmelopullara/react-feather) - Feather icons as React components
 - [vue-feather-icon](https://github.com/mage3k/vue-feather-icon) - Feather icons as Vue components

## License

Feather is licensed under the [MIT License](https://github.com/colebemis/feather/blob/master/LICENSE).

[👋](mailto:cole@colebemis.com)
