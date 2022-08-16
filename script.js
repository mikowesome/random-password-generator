// Variables
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`",
"!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
",","|",":",";","<",">",".","?","/"];
let passwordLength = 15;

// DOM
let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")
let generatebtn = document.getElementById("generate")
let lightbtn = document.getElementById("light-mode")
let darkbtn = document.getElementById("dark-mode")
let container = document.querySelector(".container")
let para1 = document.getElementById("para-1")
let para2 = document.getElementById("para-2")
let para3 = document.getElementById("para-3")
let divBorder = document.querySelector("#div-border")


// Events
generatebtn.addEventListener('click', () => generateRandomPassword())
lightbtn.addEventListener('click', () => switchLightMode())
darkbtn.addEventListener('click', () => switchDarkMode())

// functions
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
    for (let i = 0; i < passwordLength; i++) {
        password1.textContent += generateRandomCharacter();
        password2.textContent += generateRandomCharacter();
    }
}

function switchLightMode() {
    container.setAttribute('style', 'background-color: #ECFDF5')
    para1.setAttribute('style', 'color: #2B283A')
    para2.setAttribute('style', 'color: #10B981')
    para3.setAttribute('style', 'color: #6B7280')
    divBorder.setAttribute('style', 'border: thin solid #D5D4D8')
    password1.setAttribute('style', 'color: #5DEF92')
    password2.setAttribute('style', 'color: #5DEF92')
}

function switchDarkMode() {
    container.setAttribute('style', 'background-color: #1F2937')
    para1.setAttribute('style', 'color: white')
    para2.setAttribute('style', 'color: #4ADF86')
    para3.setAttribute('style', 'color: #D5D4D8')
    divBorder.setAttribute('style', 'border: thin solid #2F3E53')
    password1.setAttribute('style', 'color: #55F991')
    password2.setAttribute('style', 'color: #55F991')
}
