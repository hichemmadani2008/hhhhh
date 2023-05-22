const dd= document.querySelector("#dd");
const tt= document.querySelector("#tt");

dd.addEventListener("click", () => {

    if(tt.style.display == "none"){
        tt.style.display = "block";
    }
    else{
        tt.style.display = "none";
    }
    
})