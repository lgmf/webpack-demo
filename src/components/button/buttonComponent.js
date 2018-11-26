import './button.scss';

export default function buttonComponent(clickHandler) {
  let btn = document.createElement('button');

  btn.innerHTML = 'Click me and check the console';
  btn.onclick = clickHandler;
  btn.classList.add('btn');

  return btn;
}