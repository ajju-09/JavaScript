const three = document.querySelector('#three');
const main = document.querySelector('.main');
const flip = document.querySelector('#flipkart');

// three.addEventListener('click' , (e) => {
//     e.stopPropagation(); // This method stop bubble propogation 
//     console.log("its a 3rd div");
// }, false);
// main.addEventListener('click', (e) => {
//     console.log("Its a main div or container");
// }, false);

// flip.addEventListener('click', (e) => {
//     e.preventDefault(); // This method stop the user from navgating the page (when click the link we cannot redirect to link page)
//     e.stopPropagation();
//     console.log("Clicked on link")

// })


// three.addEventListener('click' , (e) => {
//     console.log("its a 3rd div");
// }, true);
// main.addEventListener('click', (e) => {
//     console.log("Its a main div or container");
// }, true);


//Third filed in event method is EventPropogation
// In event by default event propogation is set to false so we dont need to set false 
// When event Propogation is false then its a bubble (it means down to up means first it display div inside and then main div)

// false is default bt true need to be mention 
// false == bubble
// true == capture

// In capture propogation first it display main div then insider div

main.addEventListener('click', (e) => {
    // console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        let removeIT = e.target.parentNode;
        removeIT.remove();
    }
   
});