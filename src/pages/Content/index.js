let selectedPTag = null;

const popupElement = document.createElement('div');
popupElement.style.position = 'absolute';
popupElement.style.top = '0';
popupElement.style.right = '0';
popupElement.style.width = '200px';
popupElement.style.height = '200px';
popupElement.style.backgroundColor = 'white';
popupElement.style.display = 'none';
popupElement.style.zIndex = '2147483647';

const formElement = document.createElement('form');
formElement.style.padding = '10px';

const inputElement = document.createElement('input');
inputElement.setAttribute('type', 'text');
inputElement.setAttribute('placeholder', 'Enter your name');
inputElement.style.width = '100%';
inputElement.style.marginBottom = '10px';

const buttonElement = document.createElement('button');
buttonElement.textContent = 'Submit';
buttonElement.style.width = '100%';

formElement.appendChild(inputElement);
formElement.appendChild(buttonElement);

popupElement.appendChild(formElement);

document.body.appendChild(popupElement);

function handlePTagClick(event) {
  const pTags = document.querySelectorAll('.ql-editor p');

  if (event.target.matches('.ql-editor p')) {
    const clickedPTag = event.target;

    if (selectedPTag !== null) {
      selectedPTag.style.backgroundColor = '';
    }

    clickedPTag.style.backgroundColor = 'yellow';

    const boundingRect = clickedPTag.getBoundingClientRect();
    popupElement.style.top = boundingRect.top + 'px';
    popupElement.style.left = boundingRect.right + '10px';

    popupElement.style.display = 'block';

    selectedPTag = clickedPTag;
  } else {
    popupElement.style.display = 'none';
    selectedPTag = null;
  }
}

document.addEventListener('click', handlePTagClick);

buttonElement.addEventListener('click', function(event) {
  event.preventDefault();

  const name = inputElement.value;

  console.log(`Hello, ${name}!`);

  popupElement.style.display = 'none';
});