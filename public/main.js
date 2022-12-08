
// Fetch method implementation:
async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if(response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }
  
  
 class User{
    constructor(userName, password , firstName, lastName, mobileNumber){
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber
        
    }

    getuserName(){
        return this.userName;
    }
    getpassword(){
        return this.password;
    }
    getfirstName(){
        return this.firstName;
    }
    getlastName(){
        return this.lastName;
    }
    getmobileNumber(){
        return this.mobileNumber;
    }
    

}

// login functionality
let Login= document.getElementById("login_form");
if(Login) Login.addEventListener('submit', loginForm);

function loginForm(e) {
    e.preventDefault();
    
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    let login = new User(userName, password);

    fetchData("/users/login", login , "POST")
     .then((data) => {
     console.log(data);
     window.location.href = "note.html";
  })
    .catch((err) => {
     console.log(`Error!!! ${err.message}`)
  }) 
    
  console.log(login);
    document.getElementById("login_form").reset();
}


//register functionality
let Register = document.getElementById("register_form");
if(Register) Register.addEventListener('submit', RegisterForm);

function RegisterForm(e){
    e.preventDefault();

    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let userName = document.getElementById("email").value;
    let mobileNumber = document.getElementById("mnumber").value;
    let password = document.getElementById("password").value;

    let register = new User(firstName, lastName, userName, mobileNumber, password);
    
    fetchData("/users/register", register, "POST")
        .then((data) => {
        setCurrentUser(data);
        window.location.href = "note.html";
     })
    .catch((err) =>{
         console.log(err);
     })
    
    document.getElementById("register_form").reset();
}

class Note {
    constructor(feedback){
        this.feedback = feedback;
    }

    getfeedback(){
        return this.feedback;
    }
}

let noteForm = document.getElementById("note_form");
if(noteForm) noteForm.addEventListener('submit', note);

function note(e){
    e.preventDefault();

    let feedback = document.getElementById("feedback").value;
    let note = new Note(feedback);
    console.log(note);
    document.getElementById("note_form").reset();
}


// stateful mechanism for user
// logging in a user
function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

// getting current user function
// FIX this next class
function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

// logout function for current user
function removeCurrentUser() {
  localStorage.removeItem('user')
}