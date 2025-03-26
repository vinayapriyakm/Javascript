function formvalidation(){
    let Name=document.myform.name.value;
    let Number=document.myform.number.value;
    let Email=document.myform.email.value;
    let Password=document.myform.password.value;
    let newpass=document.myform.confirmpassword.value; 
 
    
    if(Name==""){
        alert("Name is empty");
        return false;
    }
    
    if(Number==""){
        alert("Number is empty");
        return false;
    
        }
        else if(Number.length!=10 || isNaN(Number)){
            alert("Number should be equal to digits");
            return false;
        }

    if(Email==""){
        alert("Email is empty");
        return false;
        } 

        if(!Email.includes("@") || !Email.includes(".")){
            alert("Email is not valid");
            return false;
                }

    if(Password=="" || Password.length<8){
        alert("Password has atleast 8 character");
        return false;
    }
    if(newpass!==Password){
        alert("password must be same");
        return false;
    }
   return alert("successfully");

   return true;

    }
    

