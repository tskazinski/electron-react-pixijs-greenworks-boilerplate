<p align="left">
Electron-React-PixiJS-Greenworks boilerplate build upon <a href="https://github.com/electron-react-boilerplate/electron-react-boilerplate">Electron React Boilerplate</a> with the addition of <a href="https://github.com/inlet/react-pixi">React PixiJS</a> and <a href="https://github.com/greenheartgames/greenworks">Greenworks</a> (a node.js plugin to integrate nw.js/electron games with steamworks). The purpose of this boilerplate is to provide a starting point for anyone planning to create React-PixiJS games to be uploaded on <a href="https://partner.steamgames.com/">Steamworks</a> and available on <a href="https://store.steampowered.com/">Steam</a>.  
<br><br>
The electron-react-boilerplate which this boilerplate is based on utilizes <a href="http://electron.atom.io/">Electron</a>, <a href="https://facebook.github.io/react/">React</a>, <a href="https://github.com/reactjs/redux">Redux</a>, <a href="https://github.com/reactjs/react-router">React Router</a>, <a href="http://webpack.github.io/docs/">Webpack</a> and <a href="https://github.com/gaearon/react-hot-loader">React Hot Loader</a> for rapid application development (HMR).
<br><br>
I will attempt to improve this boilerplate going forward but I welcome any forks and pull requests with any improvements.
</p>

<br>

<div align="center">

![Electron Boilerplate Demo](https://media.giphy.com/media/5vYj8SYPKG0EiOKxUn/giphy.gif)

</div>

<br>

<div align="left">

The following versions were used in the current boilerplate:

* electron-react-boilerplate v0.17.1
* electron v3.0.10
* inlet/react-pixi v0.4.3
* pixi.js v4.7.1
* react v16.6.3
* node.js v10.2.0
* greenworks.js v0.14.0

</div>

## Steps for getting boilerplate on Steam

Prerequisites:

You signed up for <a href="https://partner.steamgames.com/">Steamworks</a> and paid the product submission fee to setup a new product for distribution via Steam.
You are familiar with uploading game deliverables onto steam, see <a href="https://partner.steamgames.com/doc/sdk/uploading">this reference</a> for details.

First, perform the install steps as outlined below under the Install section.

Next, create the steam_appid.txt file and place it in your project root, you will add your steam ap id in there.

Now go into the steam folder of root and add the following 3 files from your steamworks sdk zip file obtained from <a href="https://partner.steamgames.com/">Steamworks</a>.
* steam_api64.dll
* sdkencryptedappticket64.dll
* greenworks-win64.node

Note: you will need different files for different platforms/architectures, the above is for Windows x64, see <a href="https://medium.com/@Raicuparta/getting-an-html5-game-on-steam-4-steamworks-d50df104ddf0">here</a> for more details.

Then, package the app for the local platform:

```bash
$ yarn package
```

The above will create a release folder in your project root.

Copy the steam_appid.txt from your project root to the /release/win-unpacked folder.

Note: running \release\win-unpacked\ElectronReact.exe should work properly now and connect to steam (assuming you are logged into steam in your environment).

Now copy the entire contents of release\win-unpacked\* onto your steamworks upload directory (), ie:
steamworks_sdk\tools\ContentBuilder\content\*

Now upload the contents onto your steam account, see <a href="https://partner.steamgames.com/doc/sdk/uploading">here</a> for more info.

Make the new uploaded build the default branch in steamworks.

Restart your steam and you will now see your boilerplate between your other games like so:

<img src="https://media.giphy.com/media/5vYj8SYPKG0EiOKxUn/giphy.gif">

## Install

- **If you have installation or compilation issues with this project, please see [our debugging guide](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/400)**

First, clone the repo via git:

```bash
git clone --depth 1 --single-branch --branch master https://github.com/tskazinski/electron-react-pixijs-greenworks-boilerplate.git your-project-name
```

And then install the dependencies with yarn.

```bash
$ cd your-project-name
$ yarn
```

## Run

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ yarn dev
```

If you don't need autofocus when your files was changed, then run `dev` with env `START_MINIMIZED=true`:

```bash
$ START_MINIMIZED=true yarn dev
```

## Packaging

To package apps for the local platform:

```bash
$ yarn package
```

To package apps for all platforms:

First, refer to the [Multi Platform Build docs](https://www.electron.build/multi-platform-build) for dependencies.

Then,

```bash
$ yarn package-all
```

To package apps with options:

```bash
$ yarn package --[option]
```

To run End-to-End Test

```bash
$ yarn build-e2e
$ yarn test-e2e

# Running e2e tests in a minimized window
$ START_MINIMIZED=true yarn build-e2e
$ yarn test-e2e
```

:bulb: You can debug your production build with devtools by simply setting the `DEBUG_PROD` env variable:

```bash
DEBUG_PROD=true yarn package
```

## CSS Modules

This boilerplate is configured to use [css-modules](https://github.com/css-modules/css-modules) out of the box.

All `.css` file extensions will use css-modules unless it has `.global.css`.

If you need global styles, stylesheets with `.global.css` will not go through the
css-modules loader. e.g. `app.global.css`

If you want to import global css libraries (like `bootstrap`), you can just write the following code in `.global.css`:

```css
@import '~bootstrap/dist/css/bootstrap.css';
```

## SASS support

If you want to use Sass in your app, you only need to import `.sass` files instead of `.css` once:

```js
import './app.global.scss';
```

## Static Type Checking

This project comes with Flow support out of the box! You can annotate your code with types, [get Flow errors as ESLint errors](https://github.com/amilajack/eslint-plugin-flowtype-errors), and get [type errors during runtime](https://github.com/codemix/flow-runtime) during development. Types are completely optional.

## Dispatching redux actions from main process

See [#118](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/118) and [#108](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/108)


## License

MIT © [Electron React Boilerplate](https://github.com/electron-react-boilerplate)
