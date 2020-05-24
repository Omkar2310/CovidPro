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
let formMessage = firebase.database().ref('PathRep/');

var onComplete = function(error) {
    if (error) {
        console.log('Operation failed');
    } else {
        console.log(' Operation completed');
    }
};


//listen for submit event//(1)
document
  .getElementById('pathoform')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let pno = document.querySelector('#pno').value;
  let hb = document.querySelector('#hb').value;
  let tlc = document.querySelector('#tlc').value;
  let burea = document.querySelector('#burea').value;
  let scretan = document.querySelector('#scretan').value;
  let sna = document.querySelector('#sna').value;
  let sk = document.querySelector('#sk').value;
  let scl = document.querySelector('#scl').value;
  let smg = document.querySelector('#smg').value;
  let sgot = document.querySelector('#sgot').value;
  let sgpt = document.querySelector('#sgpt').value;
  let alp = document.querySelector('#alp').value;
  let salbu = document.querySelector('#salbu').value;

  
console.log(hb + ' ' +tlc + ' ' +burea + ' ' +scretan + ' ' +sna + ' ' +sk + ' ' +scl + ' ' +smg
+ ' ' +sgot + ' ' +sgpt + ' ' +alp + ' ' +salbu  
 );
  //send message values
  //sendMessage(name,kk, email, password, bio, job, interest);

  formMessage.child(pno).set({
    hb: hb,
    tlc: tlc,
    burea: burea,
    scretan: scretan,
    sna: sna,
    scl: scl,
    sk : sk,
    smg : smg,
    sgot : sgot,
    sgpt : sgpt,
    alp : alp,
    salbu : salbu
  },onComplete);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('pathoform').reset();
}

//Send Message to Firebase(4)

function sendMessage(name,key, email, password, bio, job, interest) {
  
}