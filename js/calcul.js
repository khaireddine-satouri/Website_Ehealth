var s=document.getElementById("sexe");
var a=document.getElementById("age");
var t=document.getElementById("taille");
var p=document.getElementById("poid");
var x=document.getElementById("bilan");
var message=document.getElementById("erreur");
x.addEventListener("submit",function(){
    validiter()
    calcul()
});
function validiter(e){
   
if(a.value<=6 || a.value>100){
    message.innerHTML="saisir un age correcte entre 6ans et 100ans";
   a.setAttribute("style","box-shadow: 0 0 5px 1px red");
   e.preventDefault();
    return false;
}
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
    var imc ;
    var pideal;
    var cat_poid,risque;
        imc=p.value/((t.value/100)*(t.value/100));

if(s.options[s.selectedIndex].value=="male"){
   pideal=t.value-100-((t.value-150)/4);
}
else if(s.options[s.selectedIndex].value=="femele"){
    pideal=t.value-100-((t.value-150)/2.5);
}  
if(imc<16){
cat_poid="Insuffisance pondérale sévère";
risque="Faible (mais risque accru d’autres problèmes cliniques)";
}
else if(imc>=16 && imc<17){
cat_poid="Insuffisance pondérale modérée";
risque="Faible (mais risque accru d’autres problèmes cliniques)";
}
else if(imc>=17 && imc<18.5){
cat_poid="Insuffisance pondérale légère";
risque="Faible ";
}
else if(imc>=18.5 && imc<25){
cat_poid="Poid normale";
risque="Moyen";
}
else if(imc>=25 && imc<30){
cat_poid="Surpoid";
risque="Accru";
}
else if(imc>=30 && imc<35){
cat_poid="Obésité de classe I";
risque="Modéré";
}
else if(imc>=35 && imc<40){
cat_poid="Obésité de classe II";
risque="Important";
}
else if(imc>=40){
cat_poid="Obésité de classe III";
risque="trés important";
}
alert("\n---------------------------------------------------------------------------- \n"+
"MON POIDS IDEAL : "+pideal+"kg"+
"\n---------------------------------------------------------------------------- \n"+
"MA CATEGORIE DE POIDS ACTUEL : "+cat_poid+
"\n---------------------------------------------------------------------------- \n"+
"RISQUE MEDICALE ACTUEL : "+risque+
"\n---------------------------------------------------------------------------- \n");
}
/*


*/


/*
var imc;
x.addEventListener('submit',fairebilan);
function fairebilan(){
    imc=p.value/(t.value*t.value);
    alert(imc);
}*/