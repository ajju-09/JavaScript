const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Asyn task is Complete');
    },1000);
    resolve();
});

promiseOne.then(function(){
    console.log("Promise Consumed"); 
});

new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("Asyn task 2 complete");
    }, 1000);
    resolve();
}).then(function(){
    console.log('Asyn promise Consumed');
});


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({Username: 'Javascript', email: 'js@gmail.com'});
    }, 1000);
});

promiseThree.then(function(user){
    console.log(user);
});

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({Username: 'Gendasomai', Password: '21224'});
        }else{
            console.log("ERROR: Something went wrong!");
        }
        
    },1000);
});

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Promise is either resolve or rejected')
);

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({Username: 'Java', Password: '@#$%^'});
        }else{
            console.log("ERROR: Something went wrong!");
        }
    },1000);
});

async function consumePromiseFive(){

    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

consumePromiseFive();

// async function getAllUsers(){
//     try{
//         const UserUrl = await fetch('https://api.github.com/users/ajju-09');
//         const data = await UserUrl.json();
//         console.log(data);
        
//     }catch(error){
//         console.log("E: ", error);
//     }
    
// }
// getAllUsers();

fetch('https://api.github.com/users/ajju-09')
.then((response) => {
    return response.json();
})
.then((data) => console.log(data))
.catch((error) => console.log(error));

