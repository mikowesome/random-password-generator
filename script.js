const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`",
"!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
",","|",":",";","<",">",".","?","/"];

let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")
let generatebtn = document.getElementById("generate")

generatebtn.addEventListener('click', () => generateRandomPassword())

function generateRandomIndex() {
    let randomIndex = Math.floor( Math.random() * characters.length )
    return randomIndex;
}

function generateRandomCharacter() {
    return characters[generateRandomIndex()];
}

function clearGeneratedPassword() {
    password1.textContent = "";
    password2.textContent = "";
}

function generateRandomPassword() {
    clearGeneratedPassword()
    for (let i = 1; i < 16; i++) {
        password1.textContent += generateRandomCharacter();
        password2.textContent += generateRandomCharacter();
    }
}
