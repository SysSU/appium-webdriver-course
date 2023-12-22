# Appium Webdriver Course Example App
This is the example app that I created while following along with the Mobile Automation with [Appium 2.0 and WebdriverIO - 2023](https://www.udemy.com/course/appium-webdriverio-mobile-automation/)
course on Udemy. This repo serves as notes for myself.

## Setup
This setup is for Windows, however, you should be able to deduce from the setup instructions what you need to do for other operating systems.

### Node
- Install Node V20
- Ensure you are using NPM and not Yarn, yarn is not working as of this writing

### Java
- [Install Java JDK 11](https://adoptium.net/en-GB/temurin/releases/?os=windows&version=11)
  - Set `JAVA_HOME` env variable if not already set

### Android Virtual Device
- [Install Android Studio](https://developer.android.com/studio/install)
- Set `ANDROID_HOME` env variable if not already set
- Add `platform-tools` to path if not already set (`%ANDROID_HOME%\platform-tools`)
- Add `tools` to path if not already set (`%ANDROID_HOME%\tools`)
- [Create Android Virtual Device](https://developer.android.com/studio/run/managing-avds) in Android Studio (Create Device with Android version 11)

### Appium
- Install appium dsrivers by running the following in a terminal
  - `appium driver install xcuitest` (You may have to run this twice)
  - `appium driver install uiautomator2`
  - `appium driver list` to verify they have been installed


## Appium Inspector
[Appium inspector](https://github.com/appium/appium-inspector) is an application that allows you to locate selectors for elements within mobile applications. 

- Install from github repo
- TBD