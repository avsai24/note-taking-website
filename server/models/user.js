const users = [
    {
        username : "anchavenkatasai0@gmail.com",
        password : "Venkat@24",
        firstname : "venkatasai",
        mobilenumber : 4013767625,
        password : "Venkat@24",
        cpassword : "Venkat@24",
        dob : "24/1/2000"

    },
    {
        username : "hitesh@gmail.com",
        password : "Hitesh@4844",
        fname : "hithesh",
        lname : "medavarapu",
        mnumber : 1234567890,
        password : "Hitesh@4844",
        cpassword : "Hitesh@4844",
        dob : "01/01/2001"
    },
    {
        username : "suryakiran@gmail.com",
        password : "Surya@123",
        firstname : "suryakiran",
        lastname : "kattragadda",
        mobilenumber : 7894561230,
        password : "Surya@123",
        cpassword : "Surya@123",
        dob : "05/05/2000"
    },
];

let getUser = () => users;

function login(username, password){
    const user = users.filter((u) => u.username == username);
    if(!user[0]) throw Error('User Not Found');
    if(user[0].password !== password) throw Error('Password is incorrect.');

    return user[0];
}

module.exports = { getUser, login};