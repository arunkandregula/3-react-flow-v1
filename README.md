# Lets see how to make react work with flow.

## Step1 - Branch.
01-introducing-flow

## Step1. Just install flow
1. Installed flow as per [instructions](https://create-react-app.dev/docs/adding-flow/)

- Run yarn add flow-bin (or yarn add flow-bin).
- Add "flow": "flow" to the scripts section of your package.json.
- Run "yarn flow init" to create a .flowconfig file in the root directory.
- Add // @flow to any files you want to type check (for example, to src/App.js).
- Change return type of App() to string
```js
function App(): string {
    return (
        <div className="App">
        Hello
        </div>
    );
}
```

- > npm run flow
- will give errors
