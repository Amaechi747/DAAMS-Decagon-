const container = document.querySelector(".container");
const logo = document.querySelector("#logo");
const loading = document.querySelector("#loader");

//elements
const formHeader = document.createElement("h1");
const signUpLink = document.createElement("p");
const loginLink = document.createElement("p");
// login form elements
const loginForm = document.createElement("form");
const loginNameInput = document.createElement("input"); //--->signup form inherits this element !!important!!
const loginPasswordInput = document.createElement("input");
const loginButton = document.createElement("button");
//signup elements
const signUpForm = document.createElement("form");
const firstName = document.createElement("input");
const lastName = document.createElement("input");
const stackDiv = document.createElement("div");
const selectStack = document.createElement("select");
const stackNoInput = document.createElement("input");
const signUpPasswordInput = document.createElement("input");
const signUpconfirmPasswordInput = document.createElement("input");
const signUpButton = document.createElement("button");

//on page load
window.addEventListener("DOMContentLoaded", onLoad);
// other listeners
signUpLink.addEventListener("click", createSignUpForm);
// listener for stack animation
selectStack.addEventListener("click", stackAnimation);

//components
//on page load
function onLoad() {
  createLoginForm();
}

// loginForm
function createLoginForm() {
  loginForm.className = "col-12";
  formHeader.textContent = "Login";
  formHeader.className = "placeholder-wave";
  loginNameInput.id = "username";
  loginNameInput.placeholder = "Squad No: 011/040";
  loginPasswordInput.placeholder = "password";
  loginPasswordInput.type = "password";
  loginPasswordInput.id = "password";
  loginButton.textContent = "Enter";
  loginButton.className = "btn btn-primary";
  signUpLink.textContent = "Create An Account Instead";
  signUpLink.id = "signup-link";
  signUpLink.style.cursor = "default";
  loginForm.append(
    formHeader,
    loginNameInput,
    loginPasswordInput,
    loginButton,
    signUpLink
  );
  container.appendChild(loginForm);

  // login event listeners
  loginButton.addEventListener("click", loginToDashboard);
}

//signUpForm
function createSignUpForm() {
  //removing the last 4 elements of the form
  const formChildren = loginForm.children;
  for (let i = formChildren.length - 1, j = 0; j < 3; i--, j++) {
    loginForm.removeChild(formChildren[i]);
  }
  formHeader.textContent = "Create New Account";
  formHeader.style.fontSize = "150%";
  firstName.placeholder = "firstname";
  lastName.placeholder = "lastname";
  loginNameInput.id = "email"; //----------------------------> id changed from 'login id' !!important!!
  loginNameInput.placeholder = "email";
  stackDiv.id = "stackDiv";
  const stacks = [
    "Empty",
    "Android",
    "Go",
    "iOS",
    "Java",
    "Node.js",
    "Python",
    ".NET",
  ];
  //send this stacks
  stackNames = (x = stacks) => stacks;
  selectStack.id = "stackSelector";
  selectStack.className = "dropdown-menu";
  //appending all icons to the 'stackDiv'
  for (let i = 1; i <= 7; i++) {
    if (i === 1) {
      const tempStackOptions = document.createElement("option");
      tempStackOptions.className = "dropdown-item";
      tempStackOptions.textContent = "Choose Your Stack";
      tempStackOptions.disabled = "true";
      tempStackOptions.selected = "true";
      selectStack.appendChild(tempStackOptions);
    }
    const stackOptions = document.createElement("option");
    stackOptions.className = "dropdown-item";
    stackOptions.textContent = stacks[i];
    selectStack.appendChild(stackOptions);
    const image = document.createElement("img");
    image.src = `img/icons/icon${i}.png`;
    image.id = `icon${i}`;
    image.className = "stacks";
    image.style.width = "80px";
    stackDiv.appendChild(image);
  }
  stackNoInput.placeholder = "Sq No: 011/040";
  (signUpPasswordInput.placeholder = "choose password"),
    (signUpPasswordInput.type = "password");
  signUpconfirmPasswordInput.placeholder = "confirm password";
  signUpconfirmPasswordInput.type = "password";
  signUpButton.textContent = "Create My Account";
  signUpButton.className = "btn btn-primary";
  loginLink.textContent = "Already Have An Account? Login Instead";
  loginLink.id = "signup-link";
  loginForm.append(
    firstName,
    lastName,
    selectStack,
    stackDiv,
    stackNoInput,
    signUpPasswordInput,
    signUpconfirmPasswordInput,
    signUpButton,
    loginLink
  );

  //adding validator listeners to the signup form -----> !!important
  loginNameInput.addEventListener("keyup", emailValidator);
  firstName.addEventListener("keyup", firstNameValidator);
  lastName.addEventListener("keyup", lastNameValidator);
  stackNoInput.addEventListener("keyup", stackNoValidator);
  signUpPasswordInput.addEventListener("keyup", passwordValidator);
  signUpconfirmPasswordInput.addEventListener(
    "keyup",
    confirmPasswordValidator
  );
  signUpButton.addEventListener("click", createAccount);
}

//--------->function for stack animation
var tempImageIndex;
function stackAnimation() {
  if (tempImageIndex) {
    let currentImage = document.querySelector(`#icon${tempImageIndex}`);
    currentImage.style.scale = 1;
    currentImage.style.borderRadius = "0%";
    currentImage.style.boxShadow = "none";
  }
  const chosenStack = selectStack.value;
  const stacks = stackNames();
  var index = 0;
  for (let stack of stacks) {
    if (stack == chosenStack) {
      index = stacks.indexOf(stack);
      break;
    }
  }
  const stackImage = document.querySelector(`#icon${index}`);
  tempImageIndex = index;
  if (stackImage) {
    stackImage.style.scale = 1.5;
    stackImage.style.borderRadius = "15%";
    stackImage.style.boxShadow = "3px 5px 9px grey";
  }
}

//-------->function for signup email validation
function emailValidator() {
  // formHeader.textContent = "Enter a valid email address";
  let pattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const status = pattern.test(loginNameInput.value);
  [loginNameInput.style.borderColor, formHeader.textContent] = status
    ? ["green", " Create New Account"]
    : ["red", "Enter a valid email address"];
}

//-------->function for signup firstName validation ----> must be greater than 2 ---!!important
function firstNameValidator() {
  [formHeader.textContent, firstName.style.borderColor] =
    firstName.value.length > 2
      ? ["create new account", "green"]
      : ["first name too short", "red"];
}

//-------->function for signup lastName validation ----> must be greater than 2 ---!!important
function lastNameValidator() {
  [formHeader.textContent, lastName.style.borderColor] =
    lastName.value.length > 2
      ? ["create new account", "green"]
      : ["first name too short", "red"];
}

//---------->function for signup squadNo validation
function stackNoValidator() {
  const id = stackNoInput.value.split("");
  [formHeader.textContent, stackNoInput.style.borderColor] =
    id.length === 7 && id[3] === "/"
      ? ["Create new account", "green"]
      : ["Enter the number as on your ID card", "red"];
}

//------->function for signup passwordinput validation
function passwordValidator() {
  //password length should be greater then 5
  signUpPasswordInput.style.borderColor =
    signUpPasswordInput.value.length > 5 ? "green" : "red";
}

//------->function for signup confirm passwordinput  validation
function confirmPasswordValidator() {
  const password = signUpPasswordInput.value;
  [formHeader.textContent, signUpconfirmPasswordInput.style.borderColor] =
    password === signUpconfirmPasswordInput.value
      ? ["Create new account", "green"]
      : ["Passwords do not match", "red"];
}
//--------------> final validator for creating account,,,,,button !!important
function createAccount(event) {
  event.preventDefault();
  if (
    loginNameInput.style.borderColor === "green" &&
    stackNoInput.style.borderColor === "green" &&
    signUpconfirmPasswordInput.style.borderColor === "green"
  ) {
    logo.style.animationDuration = "0.5s";
    signUpButton.textContent = "Creating Account...";
    formHeader.textContent = "please wait...";
    const data = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: loginNameInput.value,
      stack: selectStack.value,
      squadNo: stackNoInput.value,
      password: signUpPasswordInput.value,
    };
    //send to newAccount function -------->!important
    newAccount(data);
  } else {
    formHeader.textContent = "correct invalid fields and try again";
  }
}

//--------->function to send new account req
async function newAccount(body) {
  let token = await loader(
    "/api/create-account",
    "POST",
    { "Content-Type": "application/json" },
    body
  );
  token = await token.json();
  token = token.token;
  location.replace(`/decadev?auth=${token}`);
}

//loader function
async function loader(endpoint, reqMethod, headers, body) {
  loading.style.width = "5%";
  let width = Number(loading.style.width.split("")[0]);
  const intervalId = setInterval(() => {
    width += width < 75 ? 13 : 0;
    loading.style.width = width.toString().concat("%");
  }, 1000);
  let res = await fetch(endpoint, {
    method: reqMethod,
    headers: headers,
    body: JSON.stringify(body),
  });
  clearInterval(intervalId);
  loading.style.width = "100%";
  return res;
}

//login validators
async function loginToDashboard(event) {
  event.preventDefault();
  if (loginNameInput.value.length < 1 || loginPasswordInput.value.length < 1) {
    loginButton.style.borderColor = "red";
  } else {
    const body = {
      squadNo: loginNameInput.value,
      password: loginPasswordInput.value,
    };
    let token = await loader(
      "/api/login",
      "POST",
      { "Content-Type": "application/json" },
      body
    );
    token = await token.json();
    if (token.message === "Incorrect login") {
      formHeader.textContent = "Invalid login. Try again";
      formHeader.style.color = "red";
    } else {
      location.replace(`/decadev?auth=${token.token}`);
    }
  }
}
