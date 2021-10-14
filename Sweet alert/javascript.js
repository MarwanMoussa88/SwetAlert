
//let displayDiv=document.getElementById("outer-container");



//const text1=document.getElementsByClassName("text")





function showMessage()
{

    const div = document.createElement("div");
    const button=document.createElement("button");
    button.setAttribute("id","butt")
    div.setAttribute("id","container")
    document.body.appendChild(div);
    document.body.style.background="rgba(0,0,0,.4)";
    
    for(let i=0;i<arguments.length;i++)
    {
        div.innerHTML+=arguments[i]+"<br>";
    }
    
    button.textContent="OK"
    div.appendChild(button)

    button.onclick =function()
    {
        div.style.display="none"
        document.body.style.background="white";
    }

    
    
    /*text1[0].textContent=arguments[0];
    text1[1].textContent=arguments[1];


    if(window.getComputedStyle(displayDiv).display==="none")
        displayDiv.style.display="block";
    else    
        displayDiv.style.display="none";    */

      
}   


//showMessage("marwan","moussa")




const butt1=document.createElement("button")
butt1.setAttribute("id","butt1")
butt1.textContent="Try me!" 


document.body.append(butt1)
butt1.onclick=function()
{
    showMessage("marwan")
}














