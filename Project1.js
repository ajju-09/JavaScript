const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');

btn.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        if(e.target.id === 'pink' ){
            body.style.backgroundColor = '#ffe5ec';
        }
        else if(e.target.id === 'blue' ){
            body.style.backgroundColor = '#bde0fe';
        }
        else if(e.target.id === 'brown' ){
            body.style.backgroundColor = '#936639';
        }
        else if(e.target.id === 'violet' ){
            body.style.backgroundColor = '#b8b8ff';
        }
    });
});