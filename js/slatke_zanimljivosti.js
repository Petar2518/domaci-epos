

function proveriSZ(form)
{
	if (form.name.value==""){
	alert('Niste uneli vaše ime.');		
	return false;
    }
    if ((form.email.value.indexOf('@') == -1)) {
		alert('Greška pri unosu email adrese.');
		return false;
        }   
alert("Uspešno ste poslali podatke.")

return true;
}