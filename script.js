  const sidebar =document.querySelector("#sidebar");
 const toggleBtn =document.querySelector("#toggleBtn");
 const menuItems =document.querySelectorAll(".menu span");
const mainContent =document.querySelector("#mainContent");

let isOpen = false;

toggleBtn.addEventListener("click",()=>{
   if(!isOpen){
    //Open sidebar
    sidebar.classList.add('open');
    mainContent.classList.add('shift');
    menuItems.forEach(span=>span.style.display ='inline');
    toggleBtn.textContent = 'X';
    toggleBtn.style.color="red";


    isOpen = true;
   }else{
    //Close sidebar
    sidebar.classList.remove('open');
    mainContent.classList.remove('shift');
    menuItems.forEach(span=>span.style.display='none');
    toggleBtn.textContent='☰'
    toggleBtn.style.color="white";
    isOpen=false
   }

})

// image slider functionality


let index =0;
    const images =document.querySelectorAll("img");

  function showImage(){
    // entire image hidden
 for(let i=0;i<images.length;i++){
    images[i].style.display="none";

}
// only the first index image index =0 is shown
images[index].style.display="inline-block";
    
   
  }

 showImage();
 

function nextImage(){
// Hide all images
 
showImage()
   index++;
if(index>=images.length) index =0;

  


}

function prevImage(){
    // Hide all
showImage();
    index--;
if(index<0)index =images.length-1; 
    
}