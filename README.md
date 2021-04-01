# Forkui-lib

![Preview-forkUI](https://user-images.githubusercontent.com/56469693/112981403-c446a800-9178-11eb-91fe-3bd2c7faa878.gif)


Fork UI provides a set of accessible, reusable, and composable React components that make it super easy to create webapps.

# [Docs Site](https://forkui.netlify.app/)

# Features
1. Use common React components directly in your project.
2. Customize these components according to your requirements and theme.
3. UI development and testing done using Storybook.
4. Module Bundler used for this project: rollup.js.
5. Docs Site deployed using Netlify.

# Installing ForkUI
Run the following command to install forkUI library to your React project Directory
`$ npm i forkui-lib`

# Usage
The example below shows how you can import any component from the library and use directly in your code.

```
import {Button} from "forkui-lib";

function App() {
  return(
    <div>
      <p>This is the button component from Forkui.</p>
      <Button text="Button"/>
    </div>
  )
}
```
