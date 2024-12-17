class user{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}corruptted`;
    }
    set password(value){
        this._password = value;
    }
}

const user1 = new user('corrupt@gmail.ai', 'co1234');
// console.log(user1.password);
console.log(user1.email);


// Old syntax

function User(email, password){
this._email = email;
this._password = password;

Object.defineProperty(this, 'email', {
    get: function(){
        return this._email.toUpperCase();
    },
    set: function(value){
        this._email = value;
    }
})

Object.defineProperty(this, 'password', {
    get: function(){
        return this._password.toUpperCase();
    },
    set: function(value){
        this._password = value;
    }
})
}

const admin = new User('jidanboo', 'jidanboo@ai.mail');

console.log(admin.password);
