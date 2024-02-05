const nameError = document.querySelector('.name-error');
const phoneError = document.querySelector('.phone-error');
const emailError = document.querySelector('.email-error');
const messageError = document.querySelector('.message-error');
const submitError = document.querySelector('.submit-error');

function validateName(){
    const name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = `Name is required.`;
        return false
    }
    if(!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
        nameError.innerHTML = `Write full name.`;
        return false
    }

    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

function validatePhoneNumber(){
    const number = document.getElementById('contact-number').value;

    if(number.length == 0){
        phoneError.innerHTML = "Phone No is required.";
        return false;
    }
    if(number.length > 0 && number.length != 10){
        phoneError.innerHTML = "Must have 10 digits.";
        return false;
    }
    if(!number.match(/^[0-9]*$/)){
        phoneError.innerHTML = `Only digits please.`
        return false
    }

    phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

function validateEmail(){
    const email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = `Email is required.`;
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = `Enter Valid email`;
        return false;
    }
    emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

function validateMessage(){
    let message = document.getElementById('contact-message').value;

    let required = 30;
    let left = required - message.length;

    if(left == 30){
        messageError.innerHTML = `Message is required.`;
        return false;
    }
    if(left > 0){
        messageError.innerHTML =`${left} more characters required.`
        return false;
    }

    messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhoneNumber() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = `Please fix Error to submit.`;
        setTimeout(function(){
            submitError.style.display = "none";
        }, 3000)
        return false;
    }
}
