// JavaScript Code For Log In Page Strats From Here

//STEP - 01. User Info Assign In Variable
let usrName = "AdminOfBank";//User Name Assign Here
let usrPassword = "admin12345";//User Password Assign Here
let usrEmail = "adminofbank2021@gmail.com";//User Email Assign Here

//STEP - 02. Get All Input And Message Tags Using Inout's Id And Assign In Variable
let userNameVar = document.getElementById('usrName');//Get User Name

let userEmailVar = document.getElementById("usrEmail");//Get User Email 

let userPasswordVar = document.getElementById("usrPassword");//Get User Password

//STEP - 02.1 . Apply Event Listener To User Name Inputs
userNameVar.addEventListener("focus", function(){
    userNameVar.style.background="#f19d9d";
    userNameVar.style.color="white";
});

userEmailVar.addEventListener("focus", function(){
    userEmailVar.style.background="#f19d9d";
    userEmailVar.style.color="white";
});

userPasswordVar.addEventListener("focus", function(){
    userPasswordVar.style.background="#f19d9d";
    userPasswordVar.style.color="white";
});

//STEP - 02.2 . Apply Event Listener Again To Email Inputs
userNameVar.addEventListener("keyup", function(){
         if (userNameVar.value == usrName) {
            userNameVar.style.border='2px solid #56e28e';
            userNameVar.style.background='#222';
         }
        
});



userEmailVar.addEventListener("keyup", function(){
         if (userEmailVar.value == usrEmail) {
            userEmailVar.style.border='2px solid #56e28e';
            userEmailVar.style.background='#222';
         }
         
});

userPasswordVar.addEventListener("keyup", function(){
         if (userPasswordVar.value == usrPassword) {
            userPasswordVar.style.border='2px solid #56e28e';
            userPasswordVar.style.background='#222';
         }
         
});

//STEP - 02.3 . Apply Event Listener To User Name Inputs

userNameVar.addEventListener("blur", function(){
    if (userNameVar.value !== usrName) {     
           userNameVar.style.border ='1px solid #ddd';
           userNameVar.style.background ='red';
         
}else if(userNameVar.value == usrName){
            userNameVar.style.border='2px solid #56e28e';
            userNameVar.style.background='#222';
}   
});

userEmailVar.addEventListener("blur", function(){
    if (userEmailVar.value !== usrEmail) {     
           userEmailVar.style.border ='1px solid #ddd';
           userEmailVar.style.background ='red';
         
}else if(userEmailVar.value == usrEmail){
            userEmailVar.style.border='2px solid #56e28e';
            userEmailVar.style.background='#222';
}   
});


userPasswordVar.addEventListener("blur", function(){
    if (userPasswordVar.value !== usrPassword) {     
           userPasswordVar.style.border ='1px solid #ddd';
           userPasswordVar.style.background ='red';
         
}else if(userPasswordVar.value == usrPassword){
            userPasswordVar.style.border='2px solid #56e28e';
            userPasswordVar.style.background='#222';
}   
});


//STEP - 03. Add Enent Listener On Submit Button 
function loginIntoBank(){
    let submitButton = document.getElementById("submitInfo");//Get Submit Button
submitButton.addEventListener("click", function(){



//STEP - 04. Get All Input And Message Tags Using Inout's Id And Assign In Variable
let userNameVar = document.getElementById('usrName');//Get User Name
userNameVar = userNameVar.value;//Value Of This Input
let userEmailVar = document.getElementById("usrEmail");//Get User Email 
userEmailVar = userEmailVar.value;//Value Of This Input
let userPasswordVar = document.getElementById("usrPassword");//Get User Password
userPasswordVar = userPasswordVar.value;//Value Of This Input


// Get The Message Tags
let successMssg = document.getElementById("successMessage");//Get Success Message Tag
let errorMssg = document.getElementById("erorrMessage");//Get Erorr Message Tag



//STEP - 05. Check The All Value Of Input's Using If, Else Statements
if (userNameVar == usrName && userEmailVar == usrEmail && userPasswordVar == usrPassword) {
    window.location.href="homePage.html";
}else if(userNameVar == "" || userEmailVar == "" || userPasswordVar == ""){
     
     
     errorMssg.innerText = "No Input Can't Be Empty!";
}else{
    errorMssg.innerText = "Your Providing Information Do Not Matched!";
   
}

});

}
loginIntoBank();//Call The Function Here


//============================================
//JavaScript Code For Log In Page Ends To Here
//============================================

