# React Easy Captcha Generator

Easilty generate QR code from any text or url. It is based on [QR Server API](https://goqr.me/api/doc/create-qr-code/).

## 💡 Features

- Generate Captcha with 3 levels: easy, normal, hard.
- Make a package with rollup module bundler.
- Works on react.js snd next.js.

## 🔧 Installation

```bash
npm i react-captcha-simple    # npm
yarn add react-captcha-simple # yarn
```

## 🖥️ Preview

type={'easy'} : ![Web](https://github.com/RahilNIT/react-captcha-simple/blob/master/public/easy.jpg)
type={'normal'} : ![Web](https://github.com/RahilNIT/react-captcha-simple/blob/master/public/normal.jpg)
type={'hard'}: ![Web](https://github.com/RahilNIT/react-captcha-simple/blob/master/public/hard.jpg)

## 📦 Usage

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
