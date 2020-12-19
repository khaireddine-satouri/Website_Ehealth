let ex1bra=document.getElementById("exbras1");
let ex2bra=document.getElementById("exbras2");
let ex3bra=document.getElementById("exbras3");

let exbra1detail=document.getElementById("exbras1detail");
let exbra2detail=document.getElementById("exbras2detail");
let exbra3detail=document.getElementById("exbras3detail");
ex1bra.addEventListener("click", () => {
    exbra2detail.style.display = "none";
    exbra3detail.style.display = "none";
   
    exbra1detail.style.display = "block"; 
   })
ex2bra.addEventListener("click", () => {
    exbra1detail.style.display = "none";
    exbra3detail.style.display = "none";
   
    exbra2detail.style.display = "block"; 
   })
   ex3bra.addEventListener("click", () => {
    exbra1detail.style.display = "none";
    exbra2detail.style.display = "none";

    exbra3detail.style.display = "block"; 
   })

   let ex1dos=document.getElementById("exdos1");
let ex2dos=document.getElementById("exdos2");
let ex3dos=document.getElementById("exdos3");
let exdos1detail=document.getElementById("exdos1detail");
let exdos2detail=document.getElementById("exdos2detail");
let exdos3detail=document.getElementById("exdos3detail");
ex1dos.addEventListener("click", () => {
    exdos2detail.style.display = "none";
    exdos3detail.style.display = "none";
    exdos1detail.style.display = "block"; 
   })
   ex2dos.addEventListener("click", () => {
    exdos1detail.style.display = "none";
    exdos3detail.style.display = "none";
    exdos2detail.style.display = "block"; 
   })
   
   let ex1jambe=document.getElementById("exjambe1");
let ex2jambe=document.getElementById("exjambe2");
let ex3jambe=document.getElementById("exjambe3");
let ex4jambe=document.getElementById("exjambe4");
let ex5jambe=document.getElementById("exjambe5");
let exjambe1detail=document.getElementById("exjambe1detail");
let exjambe2detail=document.getElementById("exjambe2detail");
let exjambe3detail=document.getElementById("exjambe3detail");
let exjambe4detail=document.getElementById("exjambe4detail");
let exjambe5detail=document.getElementById("exjambe5detail");
ex1jambe.addEventListener("click", () => {
    exjambe2detail.style.display = "none";
    exjambe3detail.style.display = "none";
    exjambe4detail.style.display = "none";
    exjambe5detail.style.display = "none";
    exjambe1detail.style.display = "block"; 
   })
ex2jambe.addEventListener("click", () => {
    exjambe1detail.style.display = "none";
    exjambe3detail.style.display = "none";
    exjambe4detail.style.display = "none";
    exjambe5detail.style.display = "none";
    exjambe2detail.style.display = "block"; 
   })
   ex3jambe.addEventListener("click", () => {
    exjambe1detail.style.display = "none";
    exjambe2detail.style.display = "none";
    exjambe4detail.style.display = "none";
    exjambe5detail.style.display = "none";
    exjambe3detail.style.display = "block"; 
   })
   ex4jambe.addEventListener("click", () => {
    exjambe1detail.style.display = "none";
    exjambe2detail.style.display = "none";
    exjambe3detail.style.display = "none";
    exjambe5detail.style.display = "none";
    exjambe4detail.style.display = "block"; 
   })
   ex5jambe.addEventListener("click", () => {
    exjambe1detail.style.display = "none";
    exjambe2detail.style.display = "none";
    exjambe3detail.style.display = "none";
    exjambe4detail.style.display = "none";
    exjambe5detail.style.display = "block"; 
   })