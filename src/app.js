import './app.scss';
import buttonComponent from './components/button/buttonComponent';

function appComponent() {
  let element = document.createElement('div');
  let btn = buttonComponent(() => console.log('clicked'));

  element.classList.add('app');
  element.appendChild(btn);

  return element;
}

document.body.appendChild(appComponent());
