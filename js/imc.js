var t=document.getElementById("taille");
var p=document.getElementById("poid");
var message=document.getElementById("erreur");
var x=document.getElementById("bilan");
x.addEventListener("submit",function(){
    validiter()
    calcul()
});
function validiter(e){
if(t.value<100 || t.value>251){
    message.innerHTML="saisir une taille correcte en centimétre";
    t.setAttribute("style","box-shadow: 0 0 5px 1px red");
    e.preventDefault();
    return false;
}
if(p.value<20 || p.value>400){
    message.innerHTML="saisir un poid correcte entre 20kg et 400kg";
    p.setAttribute("style","box-shadow: 0 0 5px 1px red");
    e.preventDefault();
    return false;
}
}
function calcul(){
var imc;
imc=p.value/((t.value/100)*(t.value/100));
alert("\n-------------------------------------------\n"+
"MON IMC : "+imc+
"\n-------------------------------------------\n");
}