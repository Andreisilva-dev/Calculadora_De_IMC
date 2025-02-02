let btn = document.querySelector('.botao');
let res = document.querySelector('.texto')
let fml = document.querySelector('.Formulario');

fml.addEventListener('submit',function(event){
    event.preventDefault();
    medir();
})

btn.addEventListener('click',medir);

function medir(){
    let p = Number(document.querySelector('.weight').value);
    let a = Number(document.querySelector('.height').value);

    let resultado = p / (a * a);

    // res.innerHTML = `Seu IMC é ${resultado.toFixed(2)}`

    if (resultado > 40){
        res.innerHTML = `Seu IMC é ${resultado.toFixed(2)} <br> Está com obsidade grave III`
    }
    else if (resultado >= 30 && resultado <= 39.9){
        res.innerHTML = `Seu IMC é ${resultado.toFixed(2)} <br> Esta com Obsidade II`
    }
    else if (resultado >= 25.0 && resultado <= 29.9){
        res.innerHTML = `Seu IMC é ${resultado.toFixed(2)} <br> Esta com Sobrepeso I`
    }
    else if (resultado >= 18.5 && resultado <= 24.9){
        res.innerHTML = `Seu IMC é ${resultado.toFixed(2)} <br> Esta Normal`
    }
    else if (resultado <= 18.5){
        res.innerHTML = `Seu IMC é ${resultado.toFixed(2)} <br> Esta com magreza`
    }
    else {
        res.innerHTML = `digite valores corretamente`
    }
    

    
}
