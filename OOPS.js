let user = {
    username: 'Jugal',
    password: '12345',

    getUserDetails: function() {
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.getUserDetails());
// console.log(this); 

function Data(username, loginCount, isLoggedin){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;
    return this;
}

const user1 = new Data('Karan', 34, true);
const user2 = new Data('Harshu', 14, false);    
console.log(user1);
