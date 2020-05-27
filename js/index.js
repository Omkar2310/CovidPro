firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(user.email);
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      var myuse="";
      if(email_id === "pathoskn@ss.com")
      {
        myuse="PathoRado";
        document.getElementById("user_para").innerHTML = "Welcome " + myuse + email_id;
        document.getElementById("path").style.display = "block";
        document.getElementById("doc").style.display = "none";
      }
      if(email_id === "doctorskn@ss.com"){
        myuse="Doctor";
        document.getElementById("user_para").innerHTML = "Welcome " + myuse + email_id;
        document.getElementById("doc").style.display = "block";
        document.getElementById("path").style.display = "none";
      }
      
    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  //console.log(userEmail + ' ' + typeof(userEmail));
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // var userin=userEmail
    
    window.alert("Error : " + errorMessage);

    // ...
  });

}



function logout(){
  firebase.auth().signOut();
}
