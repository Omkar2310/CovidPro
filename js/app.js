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


  //que1

  var cough="NO";
  var fever="NO";
  var ShortBreath="NO";
  var myalgia="NO";
  var rhinorrhea="NO";
  var soreThroat="NO";
  var Feverish="NO";
  var chills="NO";
  var NauVomLoo="NO";
  var otherSymp="NO";
    if ($('#Cough').is(":checked"))
    {
  // it is checked
      cough=$('#Cough').val();
    }
    if ($('#Fever').is(":checked"))
    {
  // it is checked
      fever=$('#Fever').val();
    }
    if ($('#myalgia').is(":checked"))
    {
  // it is checked
      myalgia=$('#myalgia').val();
    }
    if ($('#soreThroat').is(":checked"))
    {
  // it is checked
      soreThroat=$('#soreThroat').val();
    }

    if ($('#ShortBreath').is(":checked"))
    {
  // it is checked
      ShortBreath=$('#ShortBreath').val();
    }
    if ($('#rhinorrhea').is(":checked"))
    {
  // it is checked
      rhinorrhea=$('#rhinorrhea').val();
    }
    if ($('#Feverish').is(":checked"))
    {
  // it is checked
      Feverish=$('#Feverish').val();
    }
    if ($('#chills').is(":checked"))
    {
  // it is checked
      chills=$('#chills').val();
    }
    if ($('#NauVomLoo').is(":checked"))
    {
  // it is checked
      NauVomLoo=$('#NauVomLoo').val();
    }

    
  // it is checked
      otherSymp=document.getElementById('otherSymp').value;


    //Que 2
    var PUI="NO";
    if ($('#PUI').is(":checked"))
    {
  // it is checked
      PUI=$('#pui').val();
    }

    var LabCon="NO";
    if ($('#LabConfrm').is(":checked"))
    {
  // it is checked
      LabCon=$('#LabConfrm').val();
    }

    var commuSpread="NO";
    if(document.getElementById('CommuContYes').checked)
    {
      commuSpread="Yes";
    }
    else{
      commuSpread="No";
    }

    var anyHealthCont="";
    anyHealthCont=document.getElementById('heacareCont').value;

    var anyCityTravel="";
    anyCityTravel=document.getElementById('otherCity').value;


    //get que3
    var chroniclugdi="NO";
    var chroniclugdidays="0";
    if ($('#copd').is(":checked"))
    {
  // it is checked
      chroniclugdi=$('#copd').val();
      console.log(chroniclugdi);
      chroniclugdidays=$('#dura1').val();
      console.log(chroniclugdidays);
    }


    var diabetes="NO";
    var diabetesdays="0";
    if ($('#diabetes').is(":checked"))
    {
  // it is checked
      diabetes=$('#diabetes').val();
      console.log(diabetes);
      diabetesdays=$('#dura2').val();
      console.log(diabetesdays);
    }

    var cardiovas="NO";
    var cardiovasdays="0";
    if ($('#cardiovas').is(":checked"))
    {
  // it is checked
      diabetes=$('#cardiovas').val();
      console.log(cardiovas);
      cardiovasdays=$('#dura3').val();
      console.log(cardiovasdays);
    }

    var chronicrenal="NO";
    var chronicrenaldays="0";
    if ($('#chronicrenal').is(":checked"))
    {
  // it is checked
      chronicrenal=$('#chronicrenal').val();
      console.log(chronicrenal);
      chronicrenalsdays=$('#dura4').val();
      console.log(chronicrenalsdays);
    }

    var chronicliver="NO";
    var chronicliverdays="0";
    if ($('#chronicliver').is(":checked"))
    {
  // it is checked
      chronicliver=$('#chronicliver').val();
      console.log(chronicliver);
      chronicliverdays=$('#dura5').val();
      console.log(chronicliverdays);
    }


     var hivcancer="NO";
    var hivcancerdays="0";
    if ($('#hivcancer').is(":checked"))
    {
  // it is checked
      chronicliver=$('#hivcancer').val();
      console.log(hivcancer);
      hivcancerdays=$('#dura6').val();
      console.log(hivcancerdays);
    }

    var neurolog="NO";
    var neurologdays="0";
    if ($('#neurolog').is(":checked"))
    {
  // it is checked
      chronicliver=$('#neurolog').val();
      console.log(neurolog);
      neurologdays=$('#dura7').val();
      console.log(neurologdays);
    }

    var otherchronic="NO";
    var otherchronicdays="0";
    // if ($('#chronodisease').is(":checked"))
    {
  // it is checked
      otherchronic=$('#chronodisease').val();
      console.log(otherchronic);
      otherchronicdays=$('#dura8').val();
      console.log(otherchronicdays);
    }

    var ispreg="NO";
    var ispregdays="0";
    if ($('#pregnant').is(":checked"))
    {
  // it is checked
      ispreg=$('#pregnant').val();
      console.log(ispreg);
      ispregdays=$('#dura9').val();
      console.log(ispregdays);
    }

    var issmoke="NO";
    var issmokedays="0";
    if ($('#csmoke').is(":checked"))
    {
  // it is checked
      issmoke=$('#csmoke').val();
      console.log(issmoke);
      issmokedays=$('#dura10').val();
      console.log(issmokedays);
    }

    var isfsmoke="NO";
    var isfsmokedays="0";
    if ($('#fsmoke').is(":checked"))
    {
  // it is checked
      isfsmoke=$('#fsmoke').val();
      console.log(isfsmoke);
      isfsmokedays=$('#dura11').val();
      console.log(isfsmokedays);
    }



//On Examination

  
  var Temp="";
   Temp=$('#temp').val();
    console.log(Temp);

  var Pulse="";
   Pulse=$('#pulserate').val();
    console.log(Pulse);

    var RespiRate="";
   RespiRate=$('#resprate').val();
    console.log(RespiRate);

    var OxySat="";
   OxySat=$('#oxysatu').val();
    console.log(OxySat);

    var BP="";
   BP=$('#bp').val();
    console.log(BP);




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
    age : age,
    gen:gen,
    mrnum : mrnum,
    doa : doa,
    Fever : fever,
    Cough : cough,
    ShortBreath : ShortBreath,
    myalgia : myalgia,
    rhinorrhea : rhinorrhea,
    soreThroat : soreThroat,
    Feverish : Feverish,
    Chills : chills,
    NauseVomitLoo : NauVomLoo,
    OtherSymptoms : otherSymp, 
    PatientUnderInvestigation : PUI,
    LabConfirmed : LabCon,
    communitySpread : commuSpread,
    HealthCareContact : anyHealthCont,
    TravelAnyCity : anyCityTravel,
    ChronicLungDiseas : chroniclugdi,
    ChronicLungDiseasDays : chroniclugdidays,
    Diabetes : diabetes,
    DiabetesDays : diabetesdays,
    CardioVascular : cardiovas,
    CardioVascularDays : cardiovasdays,
    ChronicRenal : chronicrenal,
    ChronicRenalDays : chronicrenaldays,
    ChronicLiver : chronicliver,
    ChronicLiverDays : chronicliverdays,
    ImmunocompromisedCondition : hivcancer,
    ImmunocompromisedConditionDays : hivcancerdays,
    Neurologic : neurolog,
    NeurologicDays : neurologdays,
    OtherChronicDisease : otherchronic,
    OtherChronicDiseaseDays : otherchronicdays,
    Pregnant : ispreg,
    PregnantDays :ispregdays,
    CurrentSmoker : issmoke,
    CurrentSmokerDays : issmokedays,
    FormerSmoker : isfsmoke,
    FormerSmokerDays : isfsmokedays,
    Temperature : Temp,
    PulseRate : Pulse,
    RespiRate :RespiRate,
    OxySat : OxySat,
    BP : BP
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
