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
  var gen;
  let name = document.querySelector('#name').value;
  let address = document.querySelector('#addr').value;
  let phone = document.querySelector('#phone').value;
  let mrnum = document.querySelector('#mrno').value;
  let age = document.querySelector('#age').value;
  let doa = document.querySelector('#datepicker-13').value;
  // let doa = document.querySelector('#datepicker-14').value;
  if (document.getElementById('m').checked) {
  gen = document.getElementById('m').value;
  }
  else if (document.getElementById('f').checked) {
  gen = document.getElementById('f').value;
  }
  else{
    gen = document.getElementById('o').value;
  }
console.log(name+ ' ' + address + ' ' + phone + ' ' + gen + ' ' + mrnum + ' ' + doa + ' ' +age);
  //send message values
  //sendMessage(name,kk, email, password, bio, job, interest);

  formMessage.child(mrnum).set({
    name: name,
    address: address,
    phone: phone,
    gen:gen,
    mrnum : mrnum,
    doa : doa,
    age : age
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