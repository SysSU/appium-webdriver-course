# Appium Webdriver Course Example App
This is the example app that I created while following along with the Mobile Automation with [Appium 2.0 and WebdriverIO - 2023](https://www.udemy.com/course/appium-webdriverio-mobile-automation/)
course on Udemy. This repo serves as notes for myself.

- [Appium Webdriver Course Example App](#appium-webdriver-course-example-app)
  - [Setup](#setup)
    - [Node](#node)
    - [Java](#java)
    - [Android Virtual Device](#android-virtual-device)
    - [Appium](#appium)
  - [Appium Inspector](#appium-inspector)
    - [Android Desired Capabilities](#android-desired-capabilities)


## Setup
This setup is for Windows, however, you should be able to deduce from the setup instructions what you need to do for other operating systems.

### Node
- Install Node V20
- Ensure you are using NPM and not Yarn, yarn is not working as of this writing
- Run `npm install` to install dependencies

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
- Install Appium (Should be installed already when running [Setup](#setup))
- Start Appium `npm run appium --  -a 127.0.0.1 -p 4724` (Note the port is different from default so we can debug and run tests at the same time)

### Android Desired Capabilities
Add the following desired capabilities to the "Desired Capabilities" section within the inspector. Note `appium:deviceNam` and `appium:app` values need to match based on the system the code is running on. 

Also If you want to debug and run tests at the same time ensure you have two emulators open with different `appium:platformVersion`. For example you can have two emulators, one with Android 11 and one with Android 12.

```json
{
  "appium:deviceName": "--Name-Of-Android-Device--",
  "appium:app": "--Full-Path-To-APK-File--",
  "appium:platformVersion": "12.0",
  "appium:automationName": "UIAUtomator2",
  "platformName": "Android"
}
```