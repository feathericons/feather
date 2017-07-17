# How to contribute

If you would like to contribute to the project please follow the guidelines set out below. Keep in mind that they are not here to make your contribution a painful experience, but to simplify our jobs looking through issues and pull requests.

## Pull Request

Pull Request for new features, bugs (etc) are often appreciated.

- __Make your commit message as descriptive as possible.__ Include as much information as you can. Explain anything that the file diffs themselves won’t make apparent.
- __Document your pull request__. Explain your fix, link to the relevant issue, add screenshots when adding new icons.
- __Make sure the target of your pull request is the relevant branch__. Most of bugfix or new feature should go to the `master` branch.
- __Include only related work__. If your pull request has unrelated commit, won't be accepted.

## Icon request

First answer the question why you are suggesting the icon?
Create a issue with title [Icon request] then label with the proper tag `icon request` and add as much info as you can.

## Report a bug

Before reporting any issues, please use the search tool to see if someone filed the same bug before.

When creating a new issue make sure to include the following:
- Version of `Feather` in use. Are you running from source/master? Are you using a released build? Which release?
- Your environment. What is your operating system? 32 or 64 bits?
- Step to reproduce. Even if the step is only one line change, __include it!__ Include the actual result and what you expected.
- Any message or error you get in the console, if you do.
- A screenshot of any visual bug.

Here is what a great bug report would look like:
```
Check not rendering properly

Version: Release v3.1.0
Downloaded from: Import using webpack
OS: Mac OSX

How to reproduce:
 - Import `check` icon
 - Add to a React component/view
 - Run the react app
 - Notice that the `check` isn't rendering correctly which seems a encoding problem
Actual result:
 - Import `check` icon
 - Add to a React component/view
 - Run the react app
 - Check is displayed with correct encoding (e.g UTF-8)

No console output
...
```