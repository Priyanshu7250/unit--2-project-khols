  // bill address choose
document.querySelector("#paybtn1").addEventListener("click", function(){
  document.querySelector("#paybtn1").style.color="white";
  document.querySelector("#paybtn1").style.backgroundColor="black";
  document.querySelector("#paybtn2").style.backgroundColor="white";
  document.querySelector("#paybtn2").style.color="black";
})
document.querySelector("#paybtn2").addEventListener("click", function(){
  
  document.querySelector("#paybtn2").style.backgroundColor="black";
  document.querySelector("#paybtn2").style.color="white";
  document.querySelector("#paybtn1").style.color="black";
  document.querySelector("#paybtn1").style.backgroundColor="white";
})



// card details input
 document.querySelector("#form").addEventListener("submit", myFormSubmit);

 var signupArr = JSON.parse(localStorage.getItem("signUpDetails")) || [];
 function myFormSubmit(event) {
   event.preventDefault();
   var signupObj = {
     cardHolderName: document.querySelector("#chname").value,
     cardNumber: document.querySelector("#cnum").value,
     exp: document.querySelector("#exp").value,
     security: document.querySelector("#secu").value,


     firstName: document.querySelector("#fname").value,
          lastName: document.querySelector("#lname").value,
          streetAdress: document.querySelector("#stadd").value,
          apartment: document.querySelector("#apart").value,
          zip: document.querySelector("#zip").value,
          city: document.querySelector("#c").value,
          state: document.querySelector("#s").value,
          mobile: document.querySelector("#phone").value,

   };
   
   signupArr.push(signupObj);
   console.log(signupArr);
   localStorage.setItem("signUpDetails", JSON.stringify(signupArr));

    if(document.querySelector("#btb1").addEventListener("click",function(){
      window.location.href = "/payment page/paycomplete.html"
    })); 
    if(document.querySelector("#bt2").addEventListener("click",function(){
      document.querySelector("#form").value="";
      alert("cancel")
    }));   
 }

