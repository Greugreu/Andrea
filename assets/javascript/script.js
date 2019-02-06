
function validerFrm(){
  var nom=$('#nom').val();
  var prenom=$('#prenom').val();
  var mail=$('#mail').val();
  var password=$('#password').val();
  var error=new Array();
  if (nom===""){
    error.push('Veuillez saisir votre nom');
  }
  if (prenom===""){
    error.push('Veuillez saisir votre prenom');
  }
  if (mail===""){
    error.push('Veuillez saisir votre adresse mail');
  }
  if (password===""){
    error.push('Veuillez saisir votre mot de passe');
  }
  if (error.length !=0){
    var message="<ul>";
    for (var i=0; i<error.length;i++){
      message+="<li>";
      message+=error[i];
      message+="</li>"
    }
    message+="</ul>";
    document.write(message);
  }
  else {
    alert("Formulaire bien rempli");
  }
}
alert(validerFrm());
