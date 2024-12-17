// class user{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     toEncrypt(){
//         return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const newUser = new user('karan', 'karan@gmail.com', 'karenarrf');
// console.log(newUser.toEncrypt());
// console.log(newUser.changeUsername());


// Behind the scene

function admin(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;   
}

admin.prototype.toEncrypt = function() {
    return `${this.password}abc`;
}
admin.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`;
}

const kiran = new admin('kiran', 'kiran@gmail.com', 'kiranfafah');

console.log(kiran.toEncrypt());
console.log(kiran.changeUsername());
