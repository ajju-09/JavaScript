function setUsername(username){
    this.username = username;
    console.log("called");
    
}

function createUser(username, email, password) {
    // setUsername.call(this, username);
    setUsername(username);
    this.eamil = email;
    this.password = password;
}

const user1 = new createUser('User1', 'user@user1gmail.com', '12345');
console.log(user1);
