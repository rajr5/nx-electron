<p align="center"><img src="https://raw.githubusercontent.com/bennymeg/nx-electron/master/nx-electron.png" width="240"></p>

<div align="center">

# Nx Electron

Electron builders and schematics for Nrwl Nx platform.

[![licence](https://img.shields.io/github/license/bennymeg/nx-electron.svg)](https://github.com/bennymeg/nx-electron/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/nx-electron.svg)](https://www.npmjs.com/package/nx-electron)
[![Dependencies status](https://david-dm.org/bennymeg/nx-electron/status.svg)](https://david-dm.org/bennymeg/nx-electron)
![Downloads](https://img.shields.io/npm/dt/nx-electron)
[![star this repo](https://img.shields.io/github/stars/bennymeg/nx-electron?style=social)](https://github.com/bennymeg/nx-electron)


</div>

<hr></br>

# Features

Nx Electron provides a set of power ups on [Nx](https://nx.dev) for developing cross platform desktop apps using [Electron](https://electronjs.org/).

- **Schematics**: Provides schematics for developing cross platform apps in a mono repo environment.
- **Typescript**: Uses Typescript to help reduce errors, and create more structured code.
- **Obfuscation**: Since Electron are used on the client machines, nx-electron obfuscates you code (and only it).
- **Minimization**: Electron apps tend to be quite large, hence we use webpack to bundle, and minimize to code.
- **Live Update**: Provides continuos live reload for your backend code.
- **Event Templates**: Provides templates for common events like squirrel setup events, auto update events and IPC events.
- **Packaging**: Packages your frontend and backend webpack bundles into single electron package.
- **Making**: Makes your frontend and backend webpack bundles into single executable. 🆕

# Getting Started

## Prerequisite

This module is based on Nx, you will need to [set up an Nx workspace](https://nx.dev/web/getting-started/getting-started) before you can use nx-electron.

```bash
npx create-nx-workspace@11
```

You should also create a frontend project in you workspace (in any nx supported framework you like) for you electron app.

## Installation

```bash
npm install -D nx-electron
```

## Creating Nx Electron Application

```bash
nx g nx-electron:app <electron-app-name> --frontendProject=<frontend-app-name>
```

**NOTE:** You should add a frontend project to you workspace prior to invoking this command.

**NOTE:** On certain frontend platforms (such as Angular, React, etc...) it is important to change the baseHref field to "./", and use the hash strategy on the router in order for it to work well with electron. Further details can be found [here](https://github.com/bennymeg/nx-electron/issues/18#issuecomment-616982776).

## Building Nx Electron Application

- Run `nx build <electron-app-name>` to build your application.

## Serving Nx Electron Application

- Run `nx serve <electron-app-name>` to serve your application.

## Packaging Nx Electron Application

- Run `nx run <electron-app-name>:package [--options]` to package your application.
- Or `nx run <electron-app-name>:make --prepackgeOnly` to package your application.

The options that can be passed are described [here](https://github.com/bennymeg/nx-electron/blob/master/src/builders/package/schema.json).

## Making Nx Electron Application

- Run `nx run <electron-app-name>:make [--options]` to make your application.

The options that can be passed are described [here](https://github.com/bennymeg/nx-electron/blob/master/src/builders/package/schema.json).

## Configuring static packaging / making options

It is possible to configure all the packaging / making [options](https://www.electron.build/configuration/configuration) in _`.\apps\<electron-app-name>\src\app\options\maker.options.json`_. For more information [read this article](https://github.com/bennymeg/nx-electron/blob/master/docs/packaging.md).
**Notice:** the option you define at this file will override the options you pass manually via the command line or choose via the angular console.

## Migrating Nx Electron Application

To migrate automaticlly run `ng update nx-electron@<version>`.
You can find detailed information in the following articles:

- [v8.0.0](https://github.com/bennymeg/nx-electron/blob/master/docs/migration/migrating.v8.md)
- [v9.0.0](https://github.com/bennymeg/nx-electron/blob/master/docs/migration/migrating.v9.md)
- [v10.0.0](https://github.com/bennymeg/nx-electron/blob/master/docs/migration/migrating.v10.md)

## Testing Nx Electron Application

- Run `nx test <electron-app-name>` to test your application.

## Debugging Nx Electron Application

- Follow [this instructions](https://github.com/bennymeg/nx-electron/blob/master/docs/debugging.md) in order to configure the debugger your IDE.

## Minimal Project Structure

Regardless of what framework you chose, the resulting file tree will look like this:

```treeview
<workspace name>/
├── apps/
│   ├── electron-app-name/
│   ├── frontend-app-name/
│   └── frontend-app-name-e2e/
├── libs/
├── tools/
├── nx.json
├── package.json
├── tsconfig.json
└── tslint.json
```

<!-- ## Documentation ##
- 👨🏼‍💻 [API](https://github.com/bennymeg/nx-electron/blob/master/docs/API.md),
- 👩🏼‍🏫 [Examples](https://github.com/bennymeg/nx-electron/blob/master/docs/examples),
- 📜 [Change log](https://github.com/bennymeg/nx-electron/blob/master/docs/CHANGELOG.md),
- 🖋 [Licence](https://github.com/bennymeg/nx-electron/blob/master/LICENSE) -->

## Support

If you're having any problem, please [raise an issue](https://github.com/bennymeg/nx-electron/issues/new) on GitHub and we'll be happy to help.

## Contribute

- Follow [this instructions](https://github.com/bennymeg/nx-electron/blob/master/CONTRIBUTING.md) in order to learn how to contribute to this project.

## Versioning

This repository follows the semantic versioning rules while adhering to Nx and Angular version scheme.

## Attribution

This project is highly inspired by (and dependent on) Nrwl [Nx](https://nx.dev) platform.
Under the hood, we use [Electron Builder](https://github.com/electron-userland/electron-builder) to package and make electron application executables.

</br><hr>
**Author:** Benny Megidish.
