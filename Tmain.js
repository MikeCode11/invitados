
nombre_invitado_array = [];
    
function submit()
{
    var ver_invitado_array = [];

    for (var j = 1; j <= 4; j++) 
    {
        var nombre_invitado = document.getElementById("nombre_invitado_"+j).value;
        console.log(nombre_invitado);
        nombre_invitado_array.push(nombre_invitado);
    }

    console.log(nombre_invitado_array);

    var longitud_nombre_invitado_array = nombre_invitado_array.length;
    console.log(longitud_nombre_invitado_array);

    for (var k = 0; k < longitud_nombre_invitado_array; k++) 
    {
        ver_invitado_array.push("<h4>NOMBRE - "+ nombre_invitado_array[k] + "</h4>");
        console.log(ver_invitado_array);
    }

    console.log(ver_invitado_array);
    document.getElementById("ver_nombre_con_comas").innerHTML = ver_invitado_array;

    var remover_comas = ver_invitado_array.join(" ");
    console.log(remover_comas);
    document.getElementById("ver_nombre_sin_comas").innerHTML = remover_comas;


    document.getElementById("botón_enviar").style.display = "none";
    document.getElementById("botón_ordenar").style.display = "inline-block";

}

function sorting()
{
    nombre_invitado_array.sort();
    console.log(nombre_invitado_array);

    var display_student_array_sorting = [];

    var longitud_nombre_invitado_array = nombre_invitado_array.length;
    console.log(longitud_nombre_invitado_array);

    for (var k = 0; k < longitud_nombre_invitado_array; k++) 
    {
        display_student_array_sorting.push("<h4>NOMBRE - " + nombre_invitado_array[k] + "</h4>");
        console.log(display_student_array_sorting);
    }

    var remover_comas = display_student_array_sorting.join(" ");
    console.log(remover_comas);

    document.getElementById("ver_nombre_sin_comas").innerHTML = remover_comas;
}
function searching(){
var S=document.getElementById("s1").value;
var found=0;
var j;
for(j=0; j<names_of_people.length; j++){
    if(s==names_of_peoples[j])
    found=found+1;
}
document.getElementById("p2").innerHTML="name found"+found+"time/s";
console.log("found name")+found+"time/s";
}

