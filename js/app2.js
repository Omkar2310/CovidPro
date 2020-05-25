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
  let mrno = document.querySelector('#mrno').value;
  let date = document.querySelector('#datepicker-13').value;
  var dateArray=date.split('/');
  var fdate = dateArray[0] + '-' + dateArray[1] + '-' + dateArray[2];
  let hb = document.querySelector('#hb').value;
  let tlc = document.querySelector('#tlc').value;
  let nl = document.querySelector('#nl').value;
  let platelets = document.querySelector('#platelets').value;
  let pbs = document.querySelector('#pbs').value;
  let reccount = document.querySelector('#reccount').value;
  let bsl = document.querySelector('#bsl').value;
  let burea = document.querySelector('#burea').value;
  let scretan = document.querySelector('#scretan').value;
  let sna = document.querySelector('#sna').value;
  let sk = document.querySelector('#sk').value;
  let scl = document.querySelector('#scl').value;
  let smg = document.querySelector('#smg').value;
  let sbilluT = document.querySelector('#serbilliTotal').value;
  let sbilluD = document.querySelector('#serbilliDirect').value;
  let sbilluID = document.querySelector('#serbilliInDirect').value;
  let sgot = document.querySelector('#sgot').value;
  let sgpt = document.querySelector('#sgpt').value;
  let alp = document.querySelector('#alp').value;
  let salbu = document.querySelector('#salbu').value;
  let suric = document.querySelector('#suacid').value;
  let sldh = document.querySelector('#sldh').value;
  let esr = document.querySelector('#esr').value;
  let crp = document.querySelector('#crp').value;
  let cktotal = document.querySelector('#cktotal').value;
  let tropti = document.querySelector('#tropti').value;
  let ddimer = document.querySelector('#ddimer').value;
  let pt = document.querySelector('#pt').value;
  let aptt = document.querySelector('#aptt').value;
  let sferitin = document.querySelector('#sferitin').value;
  let sprocal = document.querySelector('#sprocal').value;
  let cxr = document.querySelector('#cxr').value;
  let ecg = document.querySelector('#ecg').value;
  let sramaly = document.querySelector('#sramaly').value;



  console.log(mrno);
console.log(hb + ' ' +tlc + ' ' +burea + ' ' +scretan + ' ' +sna + ' ' +sk + ' ' +scl + ' ' +smg
+ ' ' +sgot + ' ' +sgpt + ' ' +alp + ' ' +salbu  
 );
let formMessage = firebase.database().ref('PathRep/' + fdate);
  //send message values
  //sendMessage(name,kk, email, password, bio, job, interest);

  formMessage.child(mrno).set({
    
    hb: hb,
    tlc: tlc,
    nl : nl,
    platelets : platelets,
    PBS : pbs,
    RecticCount :reccount,
    BSL : bsl,
    BloodUrea : burea,
    Serumcretanine: scretan,
    SerumNa: sna,
    Serumcl: scl,
    Serumk : sk,
    Serummg : smg,
    SerumBillirubinTotal : serbilliTotal,
    SerumBillirubinDirect : serbilliDirect,
    SerumBillirubinInDirect : serbilliInDirect,
    SGOT : sgot,
    SGPT : sgpt,
    ALP : alp,
    Serumalbumin : salbu,
    SerumUricAcid : suacid,
    SerumLDH : sldh,
    ESR : esr,
    CRP : crp,
    CKTotal : cktotal,
    CKMB : ckmb,
    TropTI : tropti,
    DDimer : ddimer,
    PT : pt,
    APTT : aptt,
    SerumFerritin : sferitin,
    SerumProcal : sprocal,
    CXR : cxr,
    ECG : ecg,
    SrAmylase : sramaly
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