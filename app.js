var config = {
  apiKey: "AIzaSyBjjcGO7mjaWsyNTgHipcigiBw79IRgpGI",
    authDomain: "covid19pro-c7cbf.firebaseapp.com",
    databaseURL: "https://covid19pro-c7cbf.firebaseio.com",
    projectId: "covid19pro-c7cbf",
    storageBucket: "covid19pro-c7cbf.appspot.com",
    messagingSenderId: "381278041834",
    appId: "1:381278041834:web:c4de25becc29a5bb7ec993",
    measurementId: "G-BKHR3LZ055"
};
firebase.initializeApp(config);

//

//Reference for form collection(3)
let formMessage = firebase.database().ref('History/');

var onComplete = function(error) {
    if (error) {
        console.log('Operation failed');
    } else {
        console.log(' Operation completed');
    }
};


//listen for submit event//(1)
document
  .getElementById('registrationform')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  let bio = document.querySelector('#bio').value;
  let job = document.querySelector('#job').value;
  let interest = document.querySelector('#interest').value;
console.log(email);
  //send message values
  //sendMessage(name,kk, email, password, bio, job, interest);

  formMessage.child(name).set({
    name: name,
    email: email,
    password: password,
    bio: bio,
    job: job,
    Interest: interest
  },onComplete);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('registrationform').reset();
}

//Send Message to Firebase(4)

function sendMessage(name,key, email, password, bio, job, interest) {
  
}