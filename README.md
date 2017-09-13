Ionic App Base
==============

A starting project for Ionic that optionally supports using custom SCSS.

## Using this project

We recommend using the [Ionic CLI](https://github.com/ionic-team/ionic-cli) to create new Ionic projects that are based on this project but use a ready-made starter template.

For example, to start a new Ionic project with the default tabs interface, make sure the `ionic` utility is installed:

```bash
$ npm install -g ionic cordova
```

Then run:

```bash
$ ionic start myProject tabs --type=ionic1
```

More info on this can be found on the Ionic [Getting Started](https://ionicframework.com/getting-started) page and the [Ionic CLI](https://github.com/ionic-team/ionic-cli) repo.

## Issues

Issues have been disabled on this repo. If you do find an issue or have a question, consider posting it on the [Ionic Forum](https://forum.ionicframework.com/). If there is truly an error, follow our guidelines for [submitting an issue](https://ionicframework.com/submit-issue/) to the main Ionic repository.

## 自己的备注

### 打包 android app

* 前面都是跟 react native 安装 java、android-sdk 那一套一样
* 配置 android-sdk 环境变量
* 安装 gradle
```bash
brew install gradle // 安装路径：/usr/local/Cellar/gradle/4.1
```
* 平台支持
```bash
ionic cordova platform add android
cordova telemetry on
```
* 执行命令
```bash
ionic cordova build android
```
* 插件缺失
```bash
android // 通过打开android sdk manager后把相应缺少的包（例如 Android SDK Platform 25）安装完成
```


