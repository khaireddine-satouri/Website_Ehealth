var s=document.getElementById("sexe");
var a=document.getElementById("age");
var p=document.getElementById("poid");
var x=document.getElementById("bilan");
var diagnostique=document.getElementById("affich");
var f=document.getElementById("frequence");
var tent=document.getElementsByClassName('tentrainement');
var message=document.getElementById("erreur");
x.addEventListener("submit",function(){
    validiter()
    calcul()
});
function validiter(e){
    var ischecked1=false;
    var ischecked2=false;
    var changecolor1=document.getElementById("info1");
    var changecolor2=document.getElementById("info2");
if(a.value<=6 || a.value>100){
    message.innerHTML="saisir un age correcte entre 6ans et 100ans";
   a.setAttribute("style","box-shadow: 0 0 5px 1px red");
   e.preventDefault();
    return false;
}
if(p.value<20 || p.value>400){
    message.innerHTML="saisir un poid correcte entre 20kg et 400kg";
    p.setAttribute("style","box-shadow: 0 0 5px 1px red");
    e.preventDefault();
    return false;
}
if(f.value<20 || f.value>150){
    message.innerHTML="saisir votre férequence cardiaque au repos correctement ( si vous êtes sûre par cette valeur il faut consulter un médecin le plus vite possible )";
    f.setAttribute("style","box-shadow: 0 0 5px 1px red");
    e.preventDefault();
    return false;
}

for(var i=0;i<document.getElementsByTagName("input").length;i++){
    if(document.getElementsByTagName("input")[i].name=="tsport"){
    if(document.getElementsByTagName("input")[i].checked){
       ischecked1=true; 
    }
} 
      if(document.getElementsByTagName("input")[i].name=="tentrainement"){
        if(document.getElementsByTagName("input")[i].checked){
           ischecked2=true;
        }   
} 
}
if(!ischecked1){
 changecolor1.setAttribute("style","color:red");
 e.preventDefault();
 return false;
}
if(!ischecked2){
    changecolor2.setAttribute("style","color:red");
    e.preventDefault();
    return false;
   }
}
function calcul(){
    
var fmax_edwar,fmax_spanaus,fopt ;
if(s.options[s.selectedIndex].value=="male"){
    fmax_edwar=214-0.5*a.value-0.11*p.value;
    fmax_spanaus=223-0.9*a.value;
}
else if(s.options[s.selectedIndex].value=="femele"){
    fmax_edwar=210-0.5*a.value-0.11*p.value;
    fmax_spanaus=226-0.9*a.value;
}
if(document.getElementById("choix12").checked){
    if(document.getElementById("choix21").checked){
        fopt=(fmax_edwar-f.value)*0.8+f.value;
    }
    else if(document.getElementById("choix22").checked){
     fopt=(fmax_edwar-f.value)*0.6+f.value;
     }
     else if(document.getElementById("choix23").checked){
         fopt=(fmax_edwar-f.value)*0.5+f.value;
     }
}
else if(document.getElementById("choix11").checked){
 if(document.getElementById("choix21").checked){
     fopt=(fmax_spanaus-f.value)*0.8+f.value;
 }
 else if(document.getElementById("choix22").checked){
  fopt=(fmax_spanaus-f.value)*0.6+f.value;
  }
  else if(document.getElementById("choix23").checked){
      fopt=(fmax_spanaus-f.value)*0.5+f.value;
  }
 
 }

 alert("-------------------------------------------------------------------- \n"+
 "ZONE 1 : entre "+Math.round(fopt*0.5)+"BPM et "+Math.round(fopt*0.6)+"BPM\n"+
 "*Intensité : trés faible \n"+
 "*Efféts : échauffement / écupération ; coeur sain \n"+
 "*Sensations : pas d'essouflement, efforts très modéré \n"+
 "*durée : pas d'interval précis mais peut être utilisé comme référence pour les trails, les ultras-marathons et les ultras-triathlons \n"+
 "-------------------------------------------------------------------- \n");
 
alert("-------------------------------------------------------------------- \n"+
"ZONE 2 : entre "+Math.round(fopt*0.6)+"BPM et "+Math.round(fopt*0.7)+"BPM\n"+
 "*Intensité : faible \n"+
 "*Efféts : confort / endurance fondamentale ; utilisation de graisse aprés 20 à 40 minutes effectuées dans cette zone \n"+
 "*Sensations : faible essouflement, discussion , efforts faible \n"+
 "*durée : meilleur zone pour améliorer votre endurance de sorties longues (plus de 1h30) \n"+
 "-------------------------------------------------------------------- \n");
alert("-------------------------------------------------------------------- \n"+
"ZONE 3 : entre "+Math.round(fopt*0.7)+"BPM et "+Math.round(fopt*0.8)+"BPM\n"+
 "*Intensité : modérée (zone aérobie)\n"+
 "*Efféts : endurance active et condition physique générale \n"+
 "*Sensations : ésoufflement modérée, légère fatigue musculaire \n"+
 "*durée : vous pouvez maintenir vos allures rapides (ex : allure de compétition 10 km) pendant une durée plus longue. \n Mais cet effort ne doit pas se prolonger plus de 45 minutes successives \n"+
 "-------------------------------------------------------------------- \n");
 alert("-------------------------------------------------------------------- \n"+
"ZONE 4 : entre "+Math.round(fopt*0.8)+"BPM et "+Math.round(fopt*0.9)+"BPM\n"+
 "*Intensité : élevée (zone de seuil anaérobie) \n"+
 "*Efféts : résistance, capacité anaérobie et aérobie, perfermance et capacité cardio \n"+
 "*Sensations : respiration difficile, fatigue musculaire modéré \n"+
 "*durée : effort ne dépasse pas 10 minutes successive ou bien des répétitions courts en résistance (ne dépassent pas 5 minutes)\n et le cumul de ces répétitions ne doit pas éxéder 45 minutes\n"+
 "-------------------------------------------------------------------- \n");
 alert("-------------------------------------------------------------------- \n"+
"ZONE 5 : supérieure à "+Math.round(fopt*0.9)+"BPM \n"+
 "*Intensité : maximale (zone rouge) \n"+
 "*Efféts : résistance dure, capacité anaérobie, effort très intense, perfermance maximale et vitesse \n"+
 "*Sensations : respiration trés difficile, fatigue musculaire \n"+
 "*durée : doit être travaillée uniquement sur des efforts fractionnés courts (2 minutes au maximum pour les sportifs confirmé)  \n"+
"-------------------------------------------------------------------- \n"); 
} 

