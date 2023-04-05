const hamburg=document.getElementById('hamburg');
const navbar=document.getElementById('navbar');
const close=document.getElementById('close');
if(hamburg){
  hamburg.addEventListener("click",()=>{
  navbar.classList.add('active');
  })
}
if(close){
    close.addEventListener("click",()=>{
        navbar.classList.remove('active');
        })
}