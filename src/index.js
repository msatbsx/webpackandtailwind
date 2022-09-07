import _ from 'lodash';
import './style.css';

function sampleComponent() {
  const outerElement = document.createElement('div');
  outerElement.classList.add('box-2xl');

  const firstInnerElement = document.createElement('div');
  firstInnerElement.classList.add('box-gray');
  outerElement.appendChild(firstInnerElement);

  const secondInnerElement = document.createElement('div');
  secondInnerElement.classList.add('topbox-white');
  firstInnerElement.appendChild(secondInnerElement);

  const firstP = document.createElement('p');
  firstP.classList.add('font-semibold', 'text-lg', 'mb-1', 'text-amber-700');
  firstP.innerHTML = 'Project starter';
  secondInnerElement.appendChild(firstP);

  const secondP = document.createElement('p');
  secondP.classList.add('text-green-600', 'mb-2');
  secondP.innerHTML = 'Let\'s create something amazing.';
  secondInnerElement.appendChild(secondP);

  return outerElement;
}

document.body.appendChild(sampleComponent());