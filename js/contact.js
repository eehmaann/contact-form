var regex1=/^\d{10}$/;
var regex2= /^\(\d{3}\)\d{3}-\d{4}$/;
var regex3= /^\d{3}-\d{3}-\d{4}$/;

function createTimeZones(){
	var timeZoneDropDown = document.getElementById("timeZone");
	var timeZoneSelectList = {
     "usTimeZones": ["Atlantic Standard Time ", "Eastern Standard Time", "Central Standard Time", "Mountain Standard Time", 
     "Pacific Standard Time", "Alaska Standard Time", "Hawaii-Aleutian Standard Time"]
 	}
// use a loop to go through each option and put the different parts into each option
 	for (var i = 0; i < timeZoneSelectList.usTimeZones.length; i++) {
     //create <option>
     	var option = document.createElement("option");  
     // create text node
     	var text = document.createTextNode(timeZoneSelectList.usTimeZones[i]);
     // add text node to <option>
     	option.appendChild(text);
     // set value="" on the <option>
     	option.setAttribute("value", timeZoneSelectList.usTimeZones[i]);
     // add the new <option> to the <select>
     	timeZoneDropDown.appendChild(option);
 	}

}

        
window.addEventListener("load", function(){
	var phoneBoxes = document.getElementById("phonePreferred");
	var phoneForms = document.getElementById("phoneForms");
	var phoneNumberTextBox = document.getElementById("phone")
	var phonehint= document.getElementById("phonehint");
	var email =document.getElementById("emailTextBox");
	var emailAddress= email.value;
	var form=document.forms[0];
	
	if(emailAddress==""){
		alert("It's blank");
	}
	
	createTimeZones();
	
	//opens with phoneBoxes unchecked and phone forms showing	
	phoneBoxes.checked=false;	
	phoneForms.style.display="none";
	
	//email.addEventListener("keyup", function() {
		var emailAddress= email.value;
		alert(emailAddress);
	//})
	
	phoneBoxes.addEventListener("change", function(){
      if( phoneBoxes.checked){
        phoneForms.style.display = "block";
          }
         else{
               phoneForms.style.display = "none";
            }
        }, false)
        
	
	phone.addEventListener("keyup", function(){
	var check = phoneNumberTextBox.value;
	if(check.match(regex1)){
       phoneNumberTextBox.value= check.substring(0,3)+"-"+check.substring(3, 6)+"-"+check.substring(6);
        phoneHint.style.display="none";
    }
    else if(check.match(regex2)){
       phoneNumberTextBox.value= check.substring(1,4)+"-"+check.substring(5);
        phoneHint.style.display="none";
    }
    else if(check.match(regex3)){
      //  remove error message
      phoneHint.style.display="none";
    }
    else{
        //produce error message
       phoneHint.style.display="block";
    }
})
var my_func = function(event) {
    // Checks to see both conditions of blank email, and blank phone or invalid length phone is present..  
    emailAddress= email.value;
    if(emailAddress==""){
        alert("You must provide an email!");
        event.preventDefault();
    }
};

form.addEventListener("submit", my_func, true);


})