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

![Web](https://raw.githubusercontent.com/RahilNIT/react-captcha-simple/master/public/easy.jpg?token=GHSAT0AAAAAACLMOJGRDSYT4T2FFAU5C3TCZLYJTSA)

### normal : 

![Web](https://raw.githubusercontent.com/RahilNIT/react-captcha-simple/master/public/normal.jpg?token=GHSAT0AAAAAACLMOJGQV4XUCNNE6ZEAFR66ZLYJT3Q)

### hard: 

![Web](https://raw.githubusercontent.com/RahilNIT/react-captcha-simple/master/public/hard.jpg?token=GHSAT0AAAAAACLMOJGRMGNLDYEMQPVNKNF2ZLYJT6Q)

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
