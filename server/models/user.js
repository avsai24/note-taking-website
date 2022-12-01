const con = require("./db_connect");

//creating table
async function createTable() {
  let sql=`CREATE TABLE IF NOT EXISTS users (
    userID INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    mobileNumber INT NOT NULL,
    confirmPassword VARCHAR(255) NOT NULL,
    dateOfBirth DATE NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(userID)
  ); `
  await con.query(sql);
}
createTable();

// crud operations

// Read user
async function userExists(username){
  const sql = `SELECT * FROM users
   WHERE username = "${username}"
   `;
  let u = await con.query(sql);
  console.log(u);
  return u;
}

async function login(username, password) {
  const user = await userExists(username);
  if(!user[0]) throw Error('user not found');
  if(user[0].user_password != password) throw Error('password is incorrect');

  return user[0];
}

//grabbig a user based on id or name

async function getUser(user) {
  let sql;
  if(user.userId) {
    sql = `SELECT * FROM users
    WHERE USERNAME = "${user.username}"
    `
  }
  return await con.query(sql);
}

// create user
async function userExists(username){
  const sql = `SELECT * FROM users
   WHERE username = "${username}"
   `;
  let u = await con.query(sql);
  console.log(u);
  return u;
}

async function register(user) {
  let cUser = await getUser(user.userName);
  if(cUser.length > 0) throw Error("Username already in use");

  const sql = `INSERT INTO users (userName, password)
    VALUES ("${user.userName}", "${user.password}");
  `;

  const insert = await con.query(sql);
  const newUser = await getUser(user);
  return newUser[0];
  
}

