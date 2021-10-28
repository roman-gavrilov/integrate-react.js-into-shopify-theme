# Integrate-react.js-into-shopify-theme
Tutorial to integrate the react.js into shopify theme

https://prnt.sc/1w0rgx0

## Step
note: you have to run ```theme watch``` command first


1. Download the shopify theme with theme kit ```theme download```
2. Convert the theme as webpack theme ```$ npm init```
3. Install react, react-dom and webpack package ```$ npm install --save react react-dom ``` and ```$ npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader core-js webpack webpack-cli webpack-merge```
4. Create ajax-cart-side.jsx in scripts folder(create ```scripts```folder in the root of the theme)
5. Create ```.babelrc``` file in the root of theme file
```

{
   "presets":[
      [
         "@babel/preset-env",
         {
            "useBuiltIns":"usage",
            "corejs":3
         }
      ],
      "@babel/preset-react"
   ]
}
```
6. Create ```webpack.common.js``` ```webpack.prod.js``` ```webpack.dev.js``` files in the root of theme file


webpack.common.js
```
const path = require("path")

module.exports = {
  entry: {
    'ajax-cart-side': "./scripts/ajax-cart-side.jsx"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "assets")
  }
}
```

webpack.prod.js
```
const merge = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "production"
})
```

webpack.dev.js
```
const merge = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  watch: true
})
```

8. Update the package.json file with this scripts
```
  "scripts": {
    "dev": "webpack --config webpack.dev.js --progress --color",
    "build": "webpack --config webpack.prod.js --progress --color"
  }
```
8. Finally, ```npm run dev``` Run!!!
9. You can use React.js in ```assets/ajax-cart-side.js```

For example: 
```
import React from "react"
import ReactDom from "react-dom"

const Test = () => {
	return <div>This is tutorial to integrate react.js into shopify theme with webpack</div>
}

const root = document.getElementById('cart__drawer_items');
ReactDom.render(<Test />, root);
```


Issues: when you install it, may a few issues will happen.  In that case, ```npm link webpack``` ```npm install webpack``` or change the merge like this ```const { merge } = require('webpack-merge');``` in webpack.dev.js and webpack.prod.js

```Error: Cannot find module 'v8-compile-cache'```

In this case, you have to install ```v8-compile-cache``` module with ```npm install --save v8-compile-cache ```

##
If you have question, please reach out to me here!

gmail: roman.gavrilov.0309@gmail.com<br>
skype: live:.cid.47c14b6b0b7e8b07
