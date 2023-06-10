function Validate()
{
Error=" "
n=document.getElementById("name").value; 
e=document.getElementById("email").value;
console.log(e,n);
let regName=/^[a-zA-Z]+ [a-zA-Z]+$/ ;
let regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!regName.test(n))
       Error+=" Invalid name,";
if(!regEmail.test(e))
       Error+="Invalid Email";
if(Error != " ")           
     alert(Error);
}