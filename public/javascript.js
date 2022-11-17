class Allform{
    constructor(loginUsername, loginPassword, noteFname, noteLname, noteEmail, noteMnumber, noteFeedback, registerFname,registerLname, registerEmail, registerMnumber, registerPassword, registerCpassword, registerDob  ){
        this.loginUsername = loginUsername;
        this.loginPassword = loginPassword;
        
        this.noteFname = noteFname;
        this.noteLname = noteLname;
        this.noteEmail = noteEmail;
        this.noteMnumber = noteMnumber;
        this.noteFeedback = noteFeedback;

        this.registerFname = registerFname;
        this.registerLname = registerLname;
        this.registerEmail = registerEmail;
        this.registerMnumber = registerMnumber;
        this.registerPassword = registerPassword;
        this.registerCpassword = registerCpassword;
        this.registerDob = registerDob;
    }
       
    //getter method for login

    getLoginUsername(){
        return this.loginUsername;
    }
    getLoginPassword(){
        return this.loginPassword;
    }

    //getter method for note

    getNoteFname(){
        return this.noteFname;
    }
    getNoteLname(){
        return this.noteLname;
    }
    getNoteEmail(){
        return this.noteEmail;
    }
    getNoteMnumber(){
        return this.noteMnumber;
    }
    getNoteFeedback(){
        return this.noteFeedback;
    }

    //getter method for register

    getRegisterFname(){
        return this.registerFname;
    }
    getRegisterLname(){
        return this.registerLname;
    }
    getRegisterEmail(){
        return this.registerEmail;
    }
    getRegisterMnumer(){
        return this.registerMnumber;
    }
    getRegisterPassword(){
        return this.registerPassword;
    }
    getRegisterCpassword(){
        return this.registerCpassword;
    }

}

let Login= document.getElementById("login_form");
if(Login) Login.addEventListener('submit', loginForm);

function loginForm(e){
    e.preventDefault();

    let loginUsername = document.getElementById('username').value;
    let loginPassword = document.getElementById('password').value;
    let LOGINobj = new Allform(loginUsername, loginPassword);
    console.log(LOGINobj);
    document.getElementById("login_form").reset();
}

const Note = document.getElementById("note_form");
if(Note) Note.addEventListener('submit', noteForm);

function noteForm(e){
    e.preventDefault();

    let noteFname = document.getElementById('fname').value;
    let noteLname = document.getElementById('lname').value;
    let noteEmail = document.getElementById('email').value;
    let noteMnumber = document.getElementById('mnumber').value;
    let noteFeedback = document.getElementById('feedback').value;
    let NOTEobj = new Allform(noteFname, noteLname, noteEmail, noteMnumber, noteFeedback);
    console.log(NOTEobj);
    document.getElementById("note_form").reset();
}

const Register = document.getElementById("register_form");
if(Register) Register.addEventListener('submit', RegisterForm);

function RegisterForm(e){
    e.preventDefault();
    

    let registerFname = document.getElementById('fname').value;
    let registerLname = document.getElementById('lname').value;
    let registerEmail = document.getElementById('email').value;
    let registerMnumber = document.getElementById('mnumber').value;
    let registerPassword = document.getElementById('password').value;
    let registerCpassword = document.getElementById('Cpassword').value;
    let registerDob = document.getElementById('dob').value;
    document.getElementById('dob').innerHTML = registerDob;
    let REGISTERobj = new Allform(registerFname, registerLname, registerEmail, registerMnumber, registerPassword, registerCpassword, registerDob);
    console.log(REGISTERobj);
    document.getElementById("register_form").reset();
}