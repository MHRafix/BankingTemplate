//============================================================
// JavaScript Main Page's Deposite Money Code Strats From Here
//============================================================

function depositMoney(){
    // Step 01. Get Submit Button And Add Event Listener

    let depositSubmitBtn = document.getElementById("depositeButton");
    depositSubmitBtn.addEventListener("click", function(){
    
    // Step 02. Get The Amount Input Value And Deposite Amount Tag
    let depositeAmount = document.getElementById("depositeAmount");//Deposite Amount Input Assign Here
    let depositAmountValue = depositeAmount.value;//Deposite Amount Input's Value Assign Here
    
    let depositAmountTag = document.getElementById("totalDeposit");//Deposit Amount Tag
    let depositAmountTagValue = depositAmountTag.innerText;//Previous Deposit Amount Value Assign Here
    
    // Step 03. Get Total Balance Amount Tag
    let totalBlncAmountTag = document.getElementById("totalBalance");//Total Balance Amount Input Assign
    let totalBlncAmountValue = totalBlncAmountTag.innerText;//Total Balance Amount Input Value Assign Here
    totalBlncAmountValue = Number(totalBlncAmountValue);//Total balance Amount Value Convert To Intiger
    // Step 04. Check And Validation Using If Else Conditions
    if (depositAmountValue !== "") {
    let depositeAmountResult = Number(depositAmountTagValue) + Number(depositAmountValue);//New Deposite Result
        depositAmountTag.innerText = depositeAmountResult;//New Deposite Amount Set
       

        // Step 05. Update The Main Balance 
        totalBlncAmountTag.innerText =  totalBlncAmountValue + Number(depositAmountValue);
       
       depositeAmount.value = "";//Clear The Deposite Amount Field

}else{
    let erorrMssg = document.getElementById("erorrMessage");
    erorrMssg.innerText = "Empty Amount Is Not Allowed!"
}
    
    });
}

depositMoney();//Call The Function Here

//========================================================
// JavaScript Main Page's Deposite Money Code Ends To Here
//========================================================

//============================================================
// JavaScript Main Page's Deposite Money Code Strats From Here
//============================================================

// Step 01. MAke A Function And Call It After The Closing Tag Of The Function
function withDrawMoney(){
// Step 02. Get The With Draw Button And Add Click Event Into The With Draw Button
let withDrawBtn = document.getElementById("withdrawButton");//With Draw Button Assign Here
withDrawBtn.addEventListener("click", function(){
     // Step 03. Get The With Draw Input Value And Convert It
     let withDrawInput = document.getElementById("withdrawAmount");//Get The With Draw Input 
     let withDrawInputValue = withDrawInput.value;//With Draw Input Value Assign Here
     let cnvtWithDrawInputValue = Number(withDrawInputValue);//With Draw Input Value Convert From String To Intiger
     // Step 04. Get The WithDraw Money Tag And Covert It 
     let withDrawMoney2 = document.getElementById("totalWithdraw");//WithDraw Money From The Tag
     let withDrawMoneyValue = withDrawMoney2.innerText;//With Draw money Value Assign Here
     let cnvtWithDrawMoneyValue = Number(withDrawMoneyValue);//With Draw Money Convert From String To Intiger

   
    // Step 06. Check And Validation WithDraw Money System
    if (withDrawInputValue !== "") {
    let withdrawMoneyRes = cnvtWithDrawMoneyValue - cnvtWithDrawInputValue ;//WithDraw Money Result
    withDrawMoney2.innerText = withdrawMoneyRes;
    //Step 05. Update Total Balance
    let totalBlncAmountTag = document.getElementById("totalBalance");//Total Balance Amount Input Assign
    let totalBlncAmountValue = totalBlncAmountTag.innerText;//Total Balance Amount Input Value Assign Here
    let cnvtTotalBlncAmountValue = Number(totalBlncAmountValue);//Total balance Amount Value Convert To Intiger

        let totalBalanceAfterWithDraw = cnvtTotalBlncAmountValue - cnvtWithDrawInputValue;//Total Money After WithDraw 
        totalBlncAmountTag.innerText = totalBalanceAfterWithDraw;
        //Step 07. Clear The WithDraw Input Field
        withDrawInput.value = "";
    }else{
         let erorrMessageTwo = document.getElementById("erorrMessageTwo");
         erorrMessageTwo.innerText = "Empty Amount Is Not Allowed!"
}
    
});
}
withDrawMoney();//Call The withDrawMoney Function Here

//============================================================
// JavaScript Main Page's Deposite Money Code Ends To Here
//============================================================