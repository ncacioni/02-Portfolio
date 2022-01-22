const form = document.getElementById('contact-form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const msg = document.getElementById('message');

function checkInputs() {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const msgValue = msg.value.trim();

    if(usernameValue === '') {
        setErrorForUser(username, 'El Nombre no puede estar vacío');
        return false;
    }
    else{
        setSuccessForUser(username);
    }

    if(emailValue === '') {
        setErrorForEmail(email, 'El Email no puede estar vacío');
        return false;
    }

    else if(!isEmail(emailValue)){
        setErrorForEmail(email, 'Email inválido');
        return false;
    }

    else {
        setSuccessForEmail(email);
    }
    
    if(subjectValue === '') {
        setErrorForSubject(subject, 'Inserta un asunto');
        return false;
    }

    else{
        setSuccessForSubject(subject);
    }

    if(msgValue === '') {
        setErrorForMsg(msg, 'Escribe tu mensaje');
        return false;
    }

    else{
        setSuccessForMsg(msg);
    }

    return true;

}

function setErrorForUser(input, message) {

    const formControl = input.parentElement;
    
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'field error name';
}

function setSuccessForUser(input) {

    const formControl = input.parentElement;

    formControl.className = 'field name success';
}

function setErrorForEmail(input, message) {
    const formControl = input.parentElement;
    
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'field email error';
}

function setSuccessForEmail(input) {

    const formControl = input.parentElement;

    formControl.className = 'field email success';
}

function setErrorForMsg(element, message) {

    const formControl = element.parentElement;
    
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'field textarea error';
}

function setSuccessForMsg(element) {

    const formControl = element.parentElement;

    formControl.className = 'field textarea success';
}


function setErrorForSubject(input, message) {

    const formControl = input.parentElement;
    
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'field error';
}

function setSuccessForSubject(input) {

    const formControl = input.parentElement;

    formControl.className = 'field success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}