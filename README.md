# React Native Old Architecture Performance Test

This repository contains the source code for a performance benchmark test of the old React Native architecture. It is designed to measure the execution time for making numerous calls to a native module using a typical setup.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js
- Yarn
- Xcode (for iOS)
- Android Studio (for Android)

### Installing

To set up the project, follow these steps:

#### Common Setup
 ```bash
yarn 
yarn example android
 ```
Or for IOS
```bash
yarn
cd example/ios && npx pod-install && ../../
yarn example ios
 ```

### Running the Tests
The test measures how long it takes to execute 100,000 calls to the native module. To run the test, simply launch the app in either an Android or iOS device. The app automatically executes the function upon launch and displays the execution time on the screen.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
