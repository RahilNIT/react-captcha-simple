import ReactDOM from 'react-dom';
import Captcha from './Captcha.js';

ReactDOM.render(<Captcha randomNumber={'123458'} type={'easy'} width={200} height={60} />, document.querySelector('#root'));