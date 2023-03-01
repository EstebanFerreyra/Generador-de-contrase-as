function Validacion(){
    let long = document.getElementById("long").value;
    if(long < 12){
        let resultado = document.getElementById("resultado");
        resultado.style.display = "block";
        resultado.style.backgroundColor= "red";
        resultado.innerHTML = "Para mayor seguridad la contraseña debe superar los 12 caracteres";
        setInterval(function(){
            resultado.style.display = "none";
        }, 2500);
    } else {
        GeneradorPass(long);
    }
}

function GeneradorPass(long){
    let pass = "";
    let chars = "QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyiuiopasdfghjklñzxcvbnm1234567890.,-_{}[]+'¡?=)(/&%$#<>"
    for(let i = 0; i < long; i++){
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    let resultado = document.getElementById("resultado");
    resultado.style.display = "block";
    resultado.style.backgroundColor = "blue";
    resultado.innerHTML = "La contraseña es: "+ pass;
}