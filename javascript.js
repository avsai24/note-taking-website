class Allform{
    constructor(username,password){
        this.loginUsername = username;
        this.loginPassword = password;
    }
    
    /*constructor(fname,lname,email,mnumber,feedback){
        this.noteFname = fname;
        this.noteLname = lname;
        this.noteEmail = email;
        this.noteMnumber = mnumber;
        this.noteFeedback = feedback;
    }

    constructor(fname,lname,email,mnumber,password,Cpassword,dob){
        this.registerFname = fname;
        this.registerLname = lname;
        this.registerEmail = email;
        this.registerMnumber = mnumber;
        this.registerPassword = password;
        this.registerCpassword = Cpassword;
        this.registerDob = dob;
    }
    */

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