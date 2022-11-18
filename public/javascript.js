const { rmSync } = require("fs");
const { getUser } = require("../server/models/user");

class User{
    constructor(Firstname, Lastname, Username, Mobilenumber, Password, Confirmpassword, Dob ){
        this.Username = Username;
        this.Password = Password;
        
        this.Firstname = Firstname;
        this.Lastname =Lastname;
        this.Username = Username;
        this.Mobilenumber = Mobilenumber;
        this.Password = Password;
        this.Confirmpassword = Confirmpassword;
        this.Dob = Dob;
    }
       

    getUsername(){
        return this.Username;
    }
    getPassword(){
        return this.Password;
    }

    getFirstname(){
        return this.Firstname;
    }
    getLastname(){
        return this.Lastname;
    }
    getEmail(){
        return this.Email;
    }
    getMobilenumber(){
        return this.Mobilenumber;
    }
    
    getConfirmpassword(){
        return this.Confirmpassword;
    }
    getdob(){
        return this.Dob;
    }

}

let Login= document.getElementById("login_form");
if(Login) Login.addEventListener('submit', loginForm);

function loginForm(e){
    e.preventDefault();

    let Username = document.getElementById('username').value;
    let Password = document.getElementById('password').value;
    let LOGINobj = new User(Username, Password);
    console.log(LOGINobj);
    document.getElementById("login_form").reset();
}

const Note = document.getElementById("note_form");
if(Note) Note.addEventListener('submit', noteForm);

const Register = document.getElementById("register_form");
if(Register) Register.addEventListener('submit', RegisterForm);

function RegisterForm(e){
    e.preventDefault();
    

    let Firstname = document.getElementById('fname').value;
    let Lastname = document.getElementById('lname').value;
    let Username = document.getElementById('email').value;
    let Mobilenumber = document.getElementById('mnumber').value;
    let Password = document.getElementById('password').value;
    let Confirmpassword = document.getElementById('Cpassword').value;
    let Dob = document.getElementById('dob').value;
    document.getElementById('dob').innerHTML = Dob;
    let REGISTERobj = new User(Firstname, Lastname, Username, Mobilenumber, Password, Confirmpassword, Dob);
    console.log(REGISTERobj);
    document.getElementById("register_form").reset();
}


class feedbackform{
    constructor(Feedback){
        this.Feedback = Feedback;
    }
    getFeedback(){
        return this.Feedback;
    }

}


function noteForm(e){
    e.preventDefault();

    let Firstname = document.getElementById('fname').value;
    let Lastname = document.getElementById('lname').value;
    let Email = document.getElementById('email').value;
    let Mobilenumber = document.getElementById('mnumber').value;
    let Feedback = document.getElementById('feedback').value;
    let NOTEobj = new User(Firstname, Lastname, Email, Mobilenumber);
    let feedbackobj = new feedbackform(Feedback);
    console.log(NOTEobj);
    console.log(feedbackobj);
    document.getElementById("note_form").reset();
}


// button script
const loginBtn = document.getElementById('btnlogin');
loginBtn.addEventListener('click',getUser);

function getUsers(e){
    e.preventDefault();
    if(loginBtn.innerText === ""){
    fetch("https://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => {
        data.forEach( USER => {
            let section = `
            <div class = "user">
                <h2>${USER.Username}</h2>
                <h2>${USER.Password}</h2>
            </div>
        `
        loginBtn.innerHTML+=section; 
        })
     })
     .catch(err =>{
        console.log(err);
     })
    }
}