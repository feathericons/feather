# Contribution Guidelines

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to Feather. Feel free to propose changes to this document in a pull request.

## Pull Requests

> **Note:** At the moment we are not accepting pull requests containing _**icons**_. The best way to contribute an icon is to create an issue with a screenshot and link to an SVG of your icon.

Pull requests for new features, bug fixes, etc. are often appreciated. Please checkout the [project roadmap](https://github.com/colebemis/feather#roadmap) and raise an issue to discuss any of the items on the list.

**Working on your first Pull Request?** You can learn how from this *free* series
[How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

Guidelines for pull requests:
- __Make your commit messages as descriptive as possible.__ Include as much information as you can. Explain anything that the file diffs themselves won’t make apparent.
- __Document your pull request__. Explain your fix, link to the relevant issue, add screenshots when adding new icons.
- __Make sure the target of your pull request is the relevant branch__. Most of bugfix or new feature should go to the `master` branch.
- __Include only related work__. If your pull request has unrelated commit, it won't be accepted.

## Icon Requests

Before creating an icon request, please search to see if someone has requested the icon already. If there is an open request, please add a :+1:.

If the icon has not already been requested, [create an issue](https://github.com/colebemis/feather/issues/new?title=Icon%20Request:) with a title of `Icon request: <icon name>` and add as much information as possible.

## Bug Reports

Before reporting an issue, please search to see if someone has filed a similar issue before. If there is already an open issue, please add a :+1: and/or leave a comment with additional information.

When creating a new issue make sure to include the following:
- Version of `Feather` in use. Are you running from source/master? Are you using a released build? Which release?
- Your environment. What is your operating system? 32 or 64 bits?
- Step to reproduce. Even if the step is only one line change, __include it!__ Include the actual result and what you expected.
- Any message or error you get in the console, if you do.
- A screenshot of any visual bug.

Here is what a great bug report would look like:

```
## Prerequisites

Version: Release v3.1.0
Running from: Import using webpack
Operating system: Mac OSX
Bits: 64 bits

## Step to reproduce

 - Import `check` icon
 - Add to a React component/view
 - Run the react app
 - Notice that the `check` isn't rendering correctly which seems a encoding problem
 
### Actual behavior:

 - Import `check` icon
 - Add to a React component/view
 - Run the react app
 - Check is displayed with correct encoding (e.g UTF-8)

## Any message or error

No console output
...

## Resources

No resources
...
```
