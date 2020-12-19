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
var img;
if(s.options[s.selectedIndex].value=="male"){
   img=(1.2*(p.value/((t.value/100)*(t.value/100))))+(0.23*a.value)-10.8-5.4;
   if(img<15){
    alert("\n-------------------------------------------\n"+
    "MON IMC : "+Math.round(img*100)/100+"%"+
    "\n-------------------------------------------\n"+
    "CONCLUSION :\nVous n'avez pas assez de masse grasse ! Dans le cadre d’une maigreur excessive, il vous faut davantage de masse graisseuse pour que votre corps soit plus résistant et en meilleure santé. nous vous conseille d’en parler à votre médecin afin de déterminer si vous devez absolument augmenter votre masse graisseuse, ou s’il n’y a pas d’urgence étant donné que vous êtes déjà très maigre à la base."); 
}
else if(img>=15 && img<=20){
    alert("\n-------------------------------------------\n"+
    "MON IMC : "+Math.round(img*100)/100+"%"+
    "\n-------------------------------------------\n"+
    "CONCLUSION :\nFélicitations ! Votre Indice de Masse Graisseuse est tout à fait dans la norme recommandée. Vous vous situez dans la fourchette idéale. Pas de panique donc, il faudra juste penser à entretenir cet équilibre entre votre masse musculaire et votre masse graisseuse. Comment ? En pratiquant une activité physique et en mangeant équilibré.");
}
else if(img>20){
    alert("\n-------------------------------------------\n"+
    "MON IMC : "+Math.round(img*100)/100+"%"+
    "\n-------------------------------------------\n"+
    "CONCLUSION :\nOups, votre masse graisseuse est trop importante par rapport à votre masse musculaire. Qu’est ce que ça veut dire ? Cela signifie que vous n’avez pas de bonnes habitudes alimentaires et que vous consommez trop de matières grasses. Il n’est jamais bon d’avoir trop de graisse dans notre organisme. Pour éviter de prendre des risques pour votre santé, nous vous conseille vivement d’aller consulter votre médecin afin de déterminer si votre IMG trop élevé représente une menace ou non, puis de reprendre une alimentation pauvre en graisse afin de revenir à un IMG normal.");
}
}
else if(s.options[s.selectedIndex].value=="femele"){
    img=(1.2*(p.value/((t.value/100)*(t.value/100))))+(0.23*a.value)-5.4;
    if(img<25){
        alert("\n-------------------------------------------\n"+
        "MON IMC : "+Math.round(img*100)/100+"%"+
        "\n-------------------------------------------\n"+
        "CONCLUSION :\nVous n'avez pas assez de masse grasse ! Dans le cadre d’une maigreur excessive, il vous faut davantage de masse graisseuse pour que votre corps soit plus résistant et en meilleure santé. nous vous conseille d’en parler à votre médecin afin de déterminer si vous devez absolument augmenter votre masse graisseuse, ou s’il n’y a pas d’urgence étant donné que vous êtes déjà très maigre à la base."); 
    }
    else if(img>=25 && img<=30){
        alert("\n-------------------------------------------\n"+
        "MON IMC : "+Math.round(img*100)/100+"%"+
        "\n-------------------------------------------\n"+
        "CONCLUSION :\nFélicitations ! Votre Indice de Masse Graisseuse est tout à fait dans la norme recommandée. Vous vous situez dans la fourchette idéale. Pas de panique donc, il faudra juste penser à entretenir cet équilibre entre votre masse musculaire et votre masse graisseuse. Comment ? En pratiquant une activité physique et en mangeant équilibré.");
    }
    else if(img>30){
        alert("\n-------------------------------------------\n"+
        "MON IMC : "+Math.round(img*100)/100+"%"+
        "\n-------------------------------------------\n"+
        "CONCLUSION :\nOups, votre masse graisseuse est trop importante par rapport à votre masse musculaire. Qu’est ce que ça veut dire ? Cela signifie que vous n’avez pas de bonnes habitudes alimentaires et que vous consommez trop de matières grasses. Il n’est jamais bon d’avoir trop de graisse dans notre organisme. Pour éviter de prendre des risques pour votre santé, nous vous conseille vivement d’aller consulter votre médecin afin de déterminer si votre IMG trop élevé représente une menace ou non, puis de reprendre une alimentation pauvre en graisse afin de revenir à un IMG normal.");
    }
}

}