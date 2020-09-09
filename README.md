# Lets see how to make react work with flow.

## Step1 - Branch.
01-introducing-flow

## Step1. Just install flow
1. Installed flow as per [instructions](https://create-react-app.dev/docs/adding-flow/)

- Run yarn add flow-bin (or yarn add flow-bin).
- Add "flow": "flow" to the scripts section of your package.json.
- Run "yarn flow init" to create a .flowconfig file in the root directory.
- Add // @flow to any files you want to type check (for example, to src/App.js).
- Passing string instead of number to foo. Even then flow is not detecting the error. Why ?
```js
 <MyComponentWithFlow foo="one" />
```
- But we restricted props to have foo as a number:
```js
type Props = {
  foo: number,
  bar?: string,
};
```

- > yarn flow
- will give NO errors
```
yarn run v1.22.4
$ flow
Version mismatch! Server binary is Flow v0.133.0 but we are using v0.133.0
Restarting command using the same binary as the server
No errors!

The Flow server is currently in IDE lazy mode and is only checking 1/2051 files.
To learn more, visit flow.org/en/docs/lang/lazy-modes
✨  Done in 1.39s.
```
