const submitBtn = document.querySelector('button');
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const containerDiv = document.querySelector('.container');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const props = {
        firstName: firstName,
        lastName: lastName,
    };
    const newParagraph = makeTextComponent(props);

    containerDiv.appendChild(newParagraph);
});

function makeTextComponent(props) {
    const { firstName, lastName } = props;
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `Hello, ${firstName} ${lastName}!`;
    return newParagraph;
}
