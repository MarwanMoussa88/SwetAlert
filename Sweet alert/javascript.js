
let displayDiv=document.getElementById("outer-container");



const text1=document.getElementsByClassName("text")


function showMessage()
{

    text1[0].textContent=arguments[0];
    text1[1].textContent=arguments[1];


    if(window.getComputedStyle(displayDiv ).display==="none")
        displayDiv.style.display="block";
    else    
        displayDiv.style.display="none";    
      
}


showMessage("ahmed","moussa")




