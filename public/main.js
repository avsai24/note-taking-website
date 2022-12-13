
import { fetchData, setCurrentUser, setCurrentNote, getCurrentUser } from './fetch.js'

 //user class :

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
    
    let user = new User(userName, password);

    fetchData("/users/login", user , "POST")
     .then((data) => {
     console.log(data);
     window.location.href = "note.html";
  })
    .catch((err) => {
      let p = document.querySelector('.error');
      p.innerHTML = err.message;
  }) 
    
  
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

    let user = new User(userName, password, firstName, lastName, mobileNumber);
    
    fetchData("/users/register", user, "POST")
        .then((data) => {
        setCurrentUser(data);
        window.location.href = "note.html";
     })
    .catch((err) =>{
        let p = document.querySelector('.error');
        p.innerHTML = err.message;
     })
    
   
    document.getElementById("register_form").reset();
}

//note class:

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
    let user = getCurrentUser();
    note.userID = user.userID;
    fetchData("/notes/create", note, "POST")
        .then((data) => {
        setCurrentNote(data);
        window.location.href = "note.html";
     })
    .catch((err) =>{
        let p = document.querySelector('.error');
        p.innerHTML = err.message;
     })
    window.location.href = "note.html";
    document.getElementById("note_form").reset();
}

//function to show feedbacks based on userID in webpage
let user = getCurrentUser();
if(user && noteForm) getNotes();

function getNotes(){
    let user = getCurrentUser();
     fetchData("/notes/", user,"post")
     .then((data)=>{
         let ul=document.getElementById("allNotes");

         data.forEach((note)=>{
             let li=document.createElement('li');
             let text=document.createTextNode(note.feedback);
             li.appendChild(text);
             ul.appendChild(li);

         })
     })
     .catch((err)=>console.log(`Error! ${err}`));

 }


