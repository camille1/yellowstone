jQuery(document).ready(function(){
	
 // ==== FORMULAIRE : PAGE CONTACT ET PAGE AVIS ==== //
 jQuery('#slickform').submit(
	function slickcontactparse() {
		
		// VALIDATION
		var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		
		// VARIABLES PAGE CONTACT + PAGE AVIS
		var successmessage = "Merci, nous allons vous répondre rapidement!";
		var failedmessage = "Il y a eu un problème, veuillez recommencer!";
		var usersemail = jQuery('#email');
		var usersname = jQuery('#name');
		var userscomment = jQuery('#commentarea');
		var isvalid = 1;
		var url = 'contact.php';
		
		//VALIDATION DES DONNEES DU FORMULAIRE
		
		
		//EMAIL
		if (usersemail.val() == "") {
			jQuery(".contactmessage").html('Merci de saisir une adresse mail').fadeIn().delay(1000).fadeOut();
			jQuery('input[type=submit]', jQuery("#slickform")).removeAttr('disabled');
			return false;
		}
		
		//NOM
		if (usersname.val() == "") {
			jQuery(".contactmessage").html('Merci de saisir votre nom').fadeIn().delay(1000).fadeOut();
			jQuery('input[type=submit]', jQuery("#slickform")).removeAttr('disabled');
			return false;
		}
		
		//MESSAGE
		if (userscomment.val() == "") {
			jQuery(".contactmessage").html('Merci de saisir votre message').fadeIn().delay(1000).fadeOut();
			jQuery('input[type=submit]', jQuery("#slickform")).removeAttr('disabled');
			return false;
		}
		
		var valid = emailReg.test(usersemail.val());
		
		if(!valid) {
			jQuery(".contactmessage").html('Merci de saisir une adresse mail correcte').fadeIn().delay(1000).fadeOut();
			jQuery('input[type=submit]', jQuery("#slickform")).removeAttr('disabled');
			return false;
		}
		//VALIDATION DES DONNEES DU FORMULAIRE
		
		/* 
		 ****** ENVOYER LES DONNEES + RECUPERATION PAR LE SCRIPT PHP ****** 
		*/
		
		jQuery.post(url,{ usersname: usersname.val(), usersemail: usersemail.val(), userscomment: userscomment.val(), isvalid: isvalid } , function(data) {
			
			if(data == 'success'){
				jQuery("#email").val('');
				jQuery("#commentarea").val('');
				jQuery("#name").val('');
				jQuery(".contactmessage").html(successmessage).fadeIn().delay(1000).fadeOut();
				jQuery('input[type=submit]', jQuery("#slickform")).removeAttr('disabled');
			
			} else {
				jQuery(".contactmessage").html(failedmessage).fadeIn().delay(1000).fadeOut();
				jQuery('input[type=submit]', jQuery("#slickform")).removeAttr('disabled');
				return false;
				
			}
			
		});
		
		/* 
		 ****** ENVOYER LES DONNEES + RECUPERATION PAR LE SCRIPT PHP ****** 
		*/
		
	}
	
);
// ==== FORMULAIRE : PAGE CONTACT ET PAGE AVIS  ==== //		
	
});

