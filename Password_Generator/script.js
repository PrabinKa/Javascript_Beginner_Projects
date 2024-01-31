const passwordBox = document.getElementById('input');
const passwordLength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghizklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChars = "@#$&*%(){}[]";

const ALLCHARS = upperCase + lowerCase + numbers;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    while(passwordLength > password.length){
        password += ALLCHARS[Math.floor(Math.random() * ALLCHARS.length)];
    }

    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand('copy');
}