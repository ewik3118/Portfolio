
function empty(field, error, lang){
	if(field.value == "" || field.value == " ") {
				// error.parentNode.style.display = "block";
		// error.parentNode.previousElementSibling.style.border = "2px solid #d04c18";
		if(lang == "/pl/contact")
		error.innerHTML = "Pole nie może być puste. ";
			else
		error.innerHTML = "Field can't be empty. ";
		return false;
		
	} else {
		error.innerHTML = "";
		// error.parentNode.style.display = "none";
		// error.parentNode.previousElementSibling.style.border = "2px solid #fffeda";

		return true;
		
	}
}

function maxLength(field, len, error, lang){
	if(field.value.length > len) {

		
		// error.parentNode.style.display = "block";
		// error.parentNode.previousElementSibling.style.border = "2px solid #d04c18";
		zm = error.innerHTML;
		if(lang == "/pl/contact")
		error.innerHTML = zm + "Pole może zawierać maksymalnie " + len + " znaków. ";
		else	
		error.innerHTML = zm + "Field must be " + len + "maximum. ";
		

		return false;
	} else {
		// error.parentNode.style.display = "none";
		// error.parentNode.previousElementSibling.style.border = "2px solid #fffeda";

		return true;
	}
}

function minLength(field, len, error, lang){
	if(field.value.length < len) {
		
				// error.parentNode.style.display = "block";
		// error.parentNode.previousElementSibling.style.border = "2px solid #d04c18";
		zm = error.innerHTML
		if(lang == "/pl/contact")
		{	
		error.innerHTML = zm + "Pole może zawierać minimalnie " + len + " znaków. ";
		}
	else
		error.innerHTML = zm + "Field must be " + len + "minimum. ";


		return false; 
	} else {
		// error.parentNode.style.display = "none";
		// error.parentNode.previousElementSibling.style.border = "2px solid #fffeda";

		return true;
	}
}

function format(field, exp, error, lang, namPl, namEn){
	if(exp != "none"){
	if(exp.test(field.value)) {
		// error.parentNode.style.display = "none";
		// error.parentNode.previousElementSibling.style.border = "2px solid #fffeda";

		return true;
	} else {
		// error.parentNode.style.display = "block";
		// error.parentNode.previousElementSibling.style.border = "2px solid #d04c18";
		zm = error.innerHTML
		if(lang == "/pl/contact")
		error.innerHTML = zm + "Nieprawidłowy format pola " + namPl + ". ";
		else
		error.innerHTML = "Valid format " + namEn + ". ";
		return false;
	}
} else{
// error.parentNode.style.display = "none";
		// error.parentNode.previousElementSibling.style.border = "2px solid #fffeda";

 return true;

}
}

function validate(field, error, exp, lenMin,lenMax, namPl, namEn, lang){
		var checkEmpty = empty(field, error,lang); 
		if(checkEmpty)
		{
			 var checkMinLen = minLength(field, lenMin, error, lang);		
			 var checkMaxLen = maxLength(field, lenMax, error, lang);
			 var checkFormat = format(field, exp, error, lang, namPl,namEn);
		}
		var bool = "";
		if( checkMinLen && checkEmpty && checkFormat && checkMaxLen) 

			{
			 error.parentNode.style.display = "none";
		error.parentNode.previousElementSibling.style.border = "2px solid #fffeda";


				return bool = true;
			}
		 else{

			 error.parentNode.style.display = "block";
			 error.parentNode.previousElementSibling.style.border = "2px solid #d04c18";
		 
		 return	bool = false;
		 }
		
}

function init(){


	var zm = true;
	 var lang = window.location.pathname;
 
 var btn = document.getElementById("sendFormBtn");


 if(lang == "/pl/contact" || lang == "/en/contact"){
 

var btn = document.getElementById("sendFormBtn");
var name = document.getElementById("contact_name");
	var comName = document.getElementById("errorName").getElementsByTagName("span")[0];
		var surname = document.getElementById("contact_surname");
	var comSurname = document.getElementById("errorSurname").getElementsByTagName("span")[0];
		var phone = document.getElementById("contact_phone");
	var comPhone = document.getElementById("errorPhone").getElementsByTagName("span")[0];
		var email = document.getElementById("contact_email");
	var comEmail = document.getElementById("errorEmail").getElementsByTagName("span")[0];
		var message = document.getElementById("contact_message_text");
	var comMessage = document.getElementById("errorMessage").getElementsByTagName("span")[0];



	comName.parentNode.style.height = comName.offsetHeight+"px";
		comSurname.parentNode.style.height = comSurname.offsetHeight+"px";
		comMessage.parentNode.style.height = comMessage.offsetHeight+"px";
		comPhone.parentNode.style.height = comPhone.offsetHeight+"px";
		comEmail.parentNode.style.height = comEmail.offsetHeight+"px";
		var sendFormCommunicate = document.getElementById("sendFormCommunicate");
	if(zm){
	btn.onclick = function() {
		
		var x = validate(name,comName,/^[a-zA-ZążęłóśćńźŁĘĄŚĆŻŹŃÓ\- ]+$/, 2, 30, "imię","name",  lang)
		var y = validate(surname,comSurname,/^[a-zA-ZążęłóśćńźŁĘĄŚĆŻŹŃÓ\- ]+$/, 2, 30 , "nazwisko","surname", lang)
		var z = validate(phone,comPhone,/^[0-9+ ]+$/, 7, 16 , "telefon","phone", lang)
		var a = validate(email,comEmail,/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, 6, "none" , "e-mail","e-mail", lang)	
		var b = validate(message,comMessage,"none" , 5, 1000 , "wiadomość","message", lang)	
	
		comName.parentNode.style.height = comName.offsetHeight+"px";
		comSurname.parentNode.style.height = comSurname.offsetHeight+"px";
		comMessage.parentNode.style.height = comMessage.offsetHeight+"px";
		comPhone.parentNode.style.height = comPhone.offsetHeight+"px";
		comEmail.parentNode.style.height = comEmail.offsetHeight+"px";
		

		if (x && y && z && a && b){

			return true;
		}
		else{
			if(lang == "/pl/contact")
			sendFormCommunicate.innerHTML = "Popraw błedy w formularzu:";
			if(lang == "/en/contact")
			sendFormCommunicate.innerHTML = "Correct the mistakes in the form:";

			return false;
		}
	}
}
}
}

	
$(document).on('turbolinks:load', init)







// test1.name
// test1.prototype.Test2();









//range(2010, 2016), range(2012, 2014), range(2007, 2009)


// przedzialy = 





// var arr1 = [];
// x = 2010
// for(var i = 0; i<=2016-x; i++){
// 	arr1[i] =  x+i;
// }
// var arr2 = [];
// y = 2012
// for(var i = 0; i<=2014-y; i++){
// 	arr2[i] =  y+i;
// }


// var arr3 = [];
// z = 2007
// for(var i = 0; i<=2009-z; i++){
// 	arr3[i] =  z+i;
// }

// var array1 = arr1.concat(arr2);
// var array = array1.concat(arr3);





// for(var i = 2007; i<=2016; i++){

// }


