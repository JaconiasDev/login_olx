 const form = document.querySelector(".conteiner");
 const divSpan = document.querySelector(".divspan")

 let VerifyEmail = (email)=>{
    let emailTrim = email.trim();
    if(emailTrim == ""){
        return false;
    }
    return true 
 }


 form.addEventListener("submit",(evt)=>{
   const email = document.querySelector(".email");
   if(!VerifyEmail(email.value)){

    evt.preventDefault();
    divSpan.classList.add("divspanErro");
    email.classList.add("validatioEmail");

   }else{

    divSpan.classList.remove("divspanErro");
    email.classList.remove("validatioEmail");

   }

 })