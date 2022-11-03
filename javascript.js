/*window.alert("welcome to my site!!!");
document.querySelector('h1').style.color="yellow";
/*......................................................................*/
const noteForm = document.getElementById("note_form");

if(noteForm) noteForm.addEventListener('submit',displayNoteform);

function displayNoteform(e){
    e.preventDefault();
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let mnumber = document.getElementById("mnumber").value;
    let feedback = document.getElementById("feedback").value;

    console.log(`First Name =${fname}`);
    console.log(`Last Name =${lname}`);
    console.log(`Email =${email}`);
    console.log(`mnumber =${mnumber}`);
    console.log(`feedback =${feedback}`);

}

/*.....................................................................*/

const loginForm = document.getElementById("login_form");

if(loginForm) loginForm.addEventListener('submit',displayLoginform);

function displayLoginform(e){
    e.preventDefault();
    let Login_username = document.getElementById("uname").value;
    let Login_password = document.getElementById("password").value;
    
    console.log(`User Name =${Login_username}`);
    console.log(`Password =${Login_password}`);

}

/*....................................................................*/

const RegisterForm = document.getElementById("register_form");

if(RegisterForm) RegisterForm.addEventListener('submit',displayRegisterform);

function displayRegisterform(e){
    e.preventDefault();
    let Register_fname = document.getElementById("fname").value;
    let Register_lname = document.getElementById("lname").value;
    let Register_email = document.getElementById("email").value;
    let Register_mnumber = document.getElementById("mnumber").value;
    let Register_password = document.getElementById("password").value;
    let Register_cpassword = document.getElementById("Cpassword").value;
    let Register_dob = document.getElementById("dob").value;

    console.log(`First Name =${Register_fname}`);
    console.log(`Last Name =${Register_lname}`);
    console.log(`Email =${Register_email}`);
    console.log(`Mobile Number =${Register_mnumber}`);
    console.log(`Password =${Register_password}`);
    console.log(`Password =${Register_cpassword}`);
    console.log(`Date Of Birth =${Register_dob}`);

}
