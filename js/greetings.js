const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function submitlogin(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const typeUserName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, typeUserName);
    paintGreetings(typeUserName);
}

function paintGreetings(username) {
    greeting.innerText = `안녕하세요 ${username}, 님!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", submitlogin);
} else {
    //show the greeting
    paintGreetings(savedUsername);
}


