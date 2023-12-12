# React Easy Captcha Generator

Easily generates Captcha from any text.

## Features

- Generate Captcha with 3 levels: easy, normal, hard.
- Make a package with a rollup module bundler.
- Works on react.js and next.js.

## Installation

```bash
npm i react-captcha-simple    # npm
yarn add react-captcha-simple # yarn
```

## Preview

### easy :

![Web](https://github.com/RahilNIT/react-captcha-simple/blob/master/public/easy.jpg?raw=true)

### normal : 

![Web](https://github.com/RahilNIT/react-captcha-simple/blob/master/public/normal.jpg?raw=true)

### hard: 

![Web](https://github.com/RahilNIT/react-captcha-simple/blob/master/public/hard.jpg?raw=true)

## Usage

```tsx
import Captcha from "react-captcha-simple";

export default function App() {
  return (
    <div className="App">
      <Captcha randomNumber={'123458'} type={'easy'} width={200} height={60} />
    </div>
  );
}
```
