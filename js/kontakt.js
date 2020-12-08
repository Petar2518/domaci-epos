function proveri(form)
{
	if (form.name.value==""){
	alert('Niste uneli vaše ime.');		
	return false;
}
          if ((form.email.value.indexOf('@') == -1)) {
			alert('Greška pri unosu email adrese.');
			return false;
		}if (isNaN(form.phone.value) || (form.phone.value=="")){
			alert('Greška pri unosu broja telefona.');
			return false;		
		}if (form.message.value==""){
	alert('Greška pri unosu poruke.');
	return false;
	}
confirm('Da li želite da pošaljete ovu poruku?')           
return true;
}