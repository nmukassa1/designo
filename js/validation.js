//VATIABLES
const form = document.querySelector('form');
const inputs = document.getElementsByTagName('input');
const textarea = document.querySelector('textarea');

//EVENT LISTENERS
form.addEventListener('submit', validate);

//FUNCTIONS
function validate(e) {
    for(let i = 0; i < inputs.length; i++) {
        // If filed is valid, allow form to submit
        if(!inputs[i].validity.valid) {
            // If field isn't valid show error
            showError();
            // Prevent form from being submitted
            e.preventDefault();
        } 
    }   
    if(!textarea.validity.valid) {
        showError();
        e.preventDefault();
    }
}

function showError() {
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].validity.valueMissing) {
            //If the field is empty, display error
            const span = inputs[i].nextElementSibling;
            span.classList.add('spanActive');
        } //else {
        //     const span = inputs[i].nextElementSibling;
        //     span.className = '';
        // }
    }
    if(textarea.validity.valueMissing) {
        //If textarea is empty, display error
        const span = textarea.nextElementSibling;
        span.classList.add('spanActive');
    } else {
        const span = textarea.nextElementSibling;
        span.className = '';
    }
}
