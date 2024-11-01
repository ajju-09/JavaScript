const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
   

    if(height === '' || height < 0 || isNaN(height)){
        // result.innerHTML = `Plz enter valid height ${height}`;
        alert(`Plz enter a valid height ${height}`);    
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Plz enter valid weight ${weight}`;
        alert(`Plz enter a valid weight ${weight}`);
    }
    else{
        const bmi = (weight/ ((height*height) / 10000)).toFixed(2);
        if(bmi <= 18.6){
            result.innerHTML = `${bmi}<br>Under Weight`;
            // result.innerHTML = `<span>Under Weight</span>`;
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML = `${bmi}<br>Normal weight`;
            // result.innerHTML = `<span>Under Weight</span>`;
        }
        else if(bmi < 18.6){
            result.innerHTML = `${bmi}<br>Over Weight`;
            // result.innerHTML = `<span>Under Weight</span>`;
        }
    }


});