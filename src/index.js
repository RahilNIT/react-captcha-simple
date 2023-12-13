import ReactDOM from 'react-dom';
import Captcha from './captcha.js';

ReactDOM.render(<Captcha randomNumber={'123458'} type={'hard'} width={200} height={60} />, document.querySelector('#root'));