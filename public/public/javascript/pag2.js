let form2 = document.querySelector(".form2")
let Input_passwd = document.querySelector(".passwd");
let divspan = document.querySelector(".divspan");
let olhoPass = document.querySelector(".olhoPass");

let verifyPass = (passw) =>{
    if(passw.trim() == ""){
        return false
    }
    return true;
}

olhoPass.addEventListener("click", (evt)=>{

    if(olhoPass.getAttribute("name") == "eye-off-outline"){
        olhoPass.setAttribute("name", "eye-outline");
        Input_passwd.setAttribute("type","text");
    }else{
        olhoPass.setAttribute("name", "eye-off-outline");
        Input_passwd.setAttribute("type","password");
    }

})


form2.addEventListener("submit", (evt)=>{

    let Input_passwd = document.querySelector(".passwd");
    let divspan = document.querySelector(".divspan");

    if(!verifyPass(Input_passwd.value)){
        evt.preventDefault();
        Input_passwd.classList.add("validatioEmail");
        divspan.classList.add("divspanErro");
    }else{
        Input_passwd.classList.remove("validatioEmail");
        divspan.classList.remove("divspanErro");
    }

})