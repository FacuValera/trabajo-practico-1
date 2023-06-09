function operacion(){
    var cantidad = parseInt(document.getElementById("cant1").value);
    var valor = 200;

    if(parseInt(document.getElementById("floatingSelectGrid").value) == 2){
        desc = 0.8;
    } else if (parseInt(document.getElementById("floatingSelectGrid").value) == 3){
        desc = 0.5;
    } else if (parseInt(document.getElementById("floatingSelectGrid").value) == 4){
        desc = 0.15;
    } else {
        desc = 0;
    }

    var descuento = desc;

    var resultado = (cantidad * valor) - ((cantidad * valor) * descuento);
    console.log(resultado)
    document.getElementById("res1").value = "Total a pagar: $ " + resultado;

}

function validar(){

    if((document.getElementById("inputNombre").value == "") ||
       (document.getElementById("inputApellido").value == "") ||
       (document.getElementById("inputEmail").value == "")){
        alert("Complete el formulario.")
    } else if(parseInt(document.getElementById("cant1").value) < 1 || (document.getElementById("cant1").value == "")){
        alert('Ingrese en "Cantidad" un número mayor o igual a 1.')
    } else {
        operacion()
    }


}

buttonresumen.addEventListener('click', validar);