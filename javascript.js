const Login= document.getElementById("login_form");
if(Login) Login.addEventListener('submit', loginForm);

function loginForm(e){
    e.preventDefault();

    let loginUsername = document.getElementById('username').value;
    let loginPassword = document.getElementById('password').value;

    class LoginForm{
        constructor(username,password){
            this.loginUsername = username;
            this.loginPassword = password;
        }

        getUsername(){
            return this.loginUsername;
        }
        getPassword(){
            return this.loginPassword;
        }
        setUsername(UserName){
            this.loginUsername = UserName;
        }
        setPassword(PassWord){
            this.loginPassword = PassWord;
        }

    }
    let LoginObj = new LoginForm(loginUsername, loginPassword);
    console.log(LoginObj);
    document.getElementById("login_form").reset();
}

/*....................................................*/

const Note = document.getElementById("note_form");
if(Note) Note.addEventListener('submit', noteForm);

function noteForm(e){
    e.preventDefault();

    let noteFname = document.getElementById('fname').value;
    let noteLname = document.getElementById('lname').value;
    let noteEmail = document.getElementById('email').value;
    let noteMnumber = document.getElementById('mnumber').value;
    let noteFeedback = document.getElementById('feedback').value;

    class NoteForm{
        constructor(fname,lname,email,mnumber,feedback){
            this.noteFname = fname;
            this.noteLname = lname;
            this.noteEmail = email;
            this.noteMnumber = mnumber;
            this.noteFeedback = feedback;
        }

        getFirstname(){
            return this.noteFname;
        }
        getLastname(){
            return this.noteLname;
        }
        getEmail(){
            return this.noteEmail;
        }
        getMnumber(){
            return this.noteMnumber;
        }
        getFeedback(){
            return this.noteFeedback;
        }


        setFirstname(FirstName){
            this.noteFname = FirstName;
        }
        setLastname(LastName){
            this.noteLname = LastName;
        }
        setEmail(Email){
            this.noteEmail = Email;
        }
        setMnumber(MobileNumber){
            this.noteMnumber = MobileNumber;
        }
        setFeedback(Feedback){
            this.noteFeedback = Feedback;
        }

    }
    let NoteObj = new NoteForm(noteFname,noteLname,noteEmail,noteMnumber,noteFeedback);
    console.log(NoteObj);
    document.getElementById("note_form").reset();
}

/*.................................................................*/

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

    class RegisterForm{
        constructor(fname,lname,email,mnumber,password,Cpassword,dob){
            this.registerFname = fname;
            this.registerLname = lname;
            this.registerEmail = email;
            this.registerMnumber = mnumber;
            this.registerPassword = password;
            this.registerCpassword = Cpassword;
            this.registerDob = dob;
        }

        getFirstname(){
            return this.registerFname;
        }
        getLastname(){
            return this.registerLname;
        }
        getEmail(){
            return this.registerEmail;
        }
        getMnumber(){
            return this.registerMnumber;
        }
        getPassword(){
            return this.registerPassword;
        }
        getCpassword(){
            return this.registerCpassword;
        }
        getDob(){
            return this.registerDob;
        }
            

        setFirstname(FirstName){
            this.registerFname = FirstName;
        }
        setLastname(LastName){
            this.registerLname = LastName;
        }
        setEmail(Email){
            this.registerEmail = Email;
        }
        setMnumber(MobileNumber){
            this.registerMnumber = MobileNumber;
        }
        setPassword(PassWord){
            this.registerPassword = PassWord;
        }
        setCpassword(CPassword){
            this.registerCpassword = CPassword;
        }
        setDob(DOB){
            this.registerDob = DOB;
        }

    }

    let RegisterObj = new RegisterForm(registerFname,registerLname,registerEmail,registerMnumber,registerPassword,registerCpassword,registerDob);
    console.log(RegisterObj);
    document.getElementById("register_form").reset();
}

