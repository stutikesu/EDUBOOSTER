let navbar =document.getElementsByClassName("navbar")[0]
let Admin = document.getElementsByClassName("Admin.html")[0]

taskbar.addEventListener("click",()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }    
})