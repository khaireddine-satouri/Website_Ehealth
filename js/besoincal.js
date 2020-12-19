var s=document.getElementById("sexe");
var a=document.getElementById("age");
var t=document.getElementById("taille");
var p=document.getElementById("poid");
var x=document.getElementById("bilan");
var act=document.getElementsByClassName("activity");
var message=document.getElementById("erreur");
x.addEventListener("submit",function(){
    validiter()
    calcul()
});
function validiter(e){
   
var ok=0;
var inputs1=document.getElementsByClassName("champerreur2");
var changecolor=document.getElementById("choix");
for(var j=0;j<inputs1.length;j++){
    if(inputs1[j].checked){
        ok+=1;
    }  
}
if(ok==0){
 changecolor.setAttribute("style","color:red");
 e.preventDefault();
 return false;
}
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
    var imc,tmr,bmr/*bmr :depense calorique par jour
    tmr : depense calorique minimum au repos
    imc : indice de masse corporelle
    */ ;
    var cat_poid,risque;
        imc=p.value/((t.value/100)*(t.value/100));

if(s.options[s.selectedIndex].value=="male"){
    tmr=(13.7516*p.value)+(5.0033*t.value)-(6.7550*a.value)+66.473;
}
else if(s.options[s.selectedIndex].value=="femele"){
tmr=(9.5634*p.value)+(1.8496*t.value)-(4.6756*a.value)+655.0955;
}  
if(document.getElementById("choix1").checked){
bmr=tmr*1.2;
}
else if(document.getElementById("choix2").checked) {
    bmr=tmr*1.375;
}  
else if(document.getElementById("choix3").checked) {
    bmr=tmr*1.55;
} 
else if(document.getElementById("choix4").checked) {
    bmr=tmr*1.725;
} 
else if(document.getElementById("choix5").checked) {
    bmr=tmr*1.9;
}  
alert("\n---------------------------------------------------------------------------- \n"+
"MON BESOIN CALORIQUES JOURNALIER :  \n"+Math.round(bmr)+"Kcal"+
"\n---------------------------------------------------------------------------- \n");
}