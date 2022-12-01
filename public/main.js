
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

    //postdata
    postData('https://localhost:3000/users/login', {username : Username, password : Password})
    .then((data) => {
        if(!data.message){
            window.location.href = "login.html";
        }
    })
    .catch((error) => {
        const errText = error.message;
        console.log(`Error! ${errText}`)
    });



    let LOGINobj = new User(Username, Password);
    console.log(LOGINobj);
    document.getElementById("login_form").reset();
}


let Register = document.getElementById("register_form");
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

    let Feedback = document.getElementById('feedback').value;
    let feedbackobj = new feedbackform(Feedback);
    console.log(feedbackobj);
    document.getElementById("note_form").reset();
}


// login button script
const loginBtn = document.getElementById('users');
document.getElementById("btnlogin").addEventListener('click', getUsers);

function getUsers(e){
    e.preventDefault();
    if(loginBtn.innerText === ""){
    fetch("http://localhost:3000/users/")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        data.forEach( USER => {
            let section = `
            <div class = "user">
                <h2>${USER.username}</h2>
                <h2>${USER.password}</h2>
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




