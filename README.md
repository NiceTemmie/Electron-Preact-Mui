# Electron-Preact-Mui
A fully commented Boilerplate/Quickstart for Electron framework, using Preact and Mui (Materials design framework for React) (compiling with Webpack)

### Installation
Download or copy the repo and just ```npm install```

You might get an error while executing ```npm run app``` for the first time, just ctrl+R or ```npm run webpack``` beforehand

### Usage
``` bash
# Start Electron and Webpack in developement mode
npm run app
# Start Electron in production mode, Webpack remain in developement mode
npm run app:prod

# Compile the code with dev settings
npm run webpack
# Compile the code with prod settings
npm run webpack:prod
``` 
Ctrl+R while on your Electron App to update your front, no need to restart your app for every code modification.

### Exporting
You shoudn't rely too much on thoses script as I'm a Linux user I honestly didn't test out the windows and macOS executable
``` bash
# Compile the Electron app for Linux
npm run build:linux
# Compile the Electron app for Windows
npm run build:win
# Compile the Electron app for MacOs
npm run build:macOS
```

## Additionals notes (should read)
The goal of this 'project' is to make a very simple, understandable and clean boilerplate for any electron app.
Feel free to update or report bugs as I may be a little inexperienced with front-end framework like webpack or babel.

The boilerplate should be fully compatible with React package as the aliasing is aready setup due to Mui

As mentionned earlier I didn't test the executable for MacOS and Windows so it may be complety broken: I can't tell. Linux one tho is working perfectly for me !

While exporting with npm run build : ```[...] --ignore='src/.*|webpack[^\\\\]*\\.js$|\\.babelrc' ``` -> ignores files:
- ..in ./src 
- ..starting by webpack & ending by .js
- and .babelrc
##### BE AWARE OF IT
