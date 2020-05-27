// Initialize Firebase
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
 const dbRef = firebase.database().ref();

function retriveData()
{
	retriveHistory();
 //document.getElementById("histab").style.display="block";
document.getElementById("reptab").style.display="block";
var search=document.getElementById("search").value;
var ref = firebase.database().ref('PathRep');
// const userListUI = document.getElementById("userDate");
const mytt = document.getElementById("userID");
var impinfo="";
ref.on("child_added", function(snapshot) {
  //console.log(snapshot.key);
var key1=snapshot.key;
	ref.child(key1).on("child_added", function(snap) {
		console.log(snap.key);
		var myx=snap.key;
		if(myx === search)
		{
		// let $p1 = document.createElement("li");
		// $p1.innerHTML = snapshot.key + ' ' +snap.key;
		// console.log( snapshot.key + ' ' + snap.key);
		// $p1.setAttribute("child-key", snapshot.key+'/'+snap.key);
		console.log(snapshot.key + ' ' + snapshot)
		var x=snapshot.key;
		var data=x.split('-')
		var y=data[1]+'/'+data[0] +'/'+ data[2];
		$("tr:eq(11)").append("<th style=\"color:white\">	"+   y +"\t"  + "	</th>");
		// $p1.addEventListener("click", searchItem)

		console.log("hiiii");
		// $p1.appendChild()
		
		mycreateTable(snapshot.key+'/'+snap.key);
		// if(cnt==1)
		// {
		// 	cnt=0;
		// }
		// // console.log(impinfo);
		// userListUI.append($p1);
		console.log("Found");
		}

		 // return true;
	
	});
	
		// console.log(impinfo);
	//$("#userID").html(impinfo);
});	
}


function reload() {
	// body...
	location.reload();
return false;
}

function mycreateTable(x) {

	// body...
	var userID=x;
	const userRef = dbRef.child('PathRep/' + userID);
	// var trnumber=["first","second","third","first","second","third","first","second","third","first","second","third"]
	var cnt=12;
	userRef.on("child_added",snap => {

		var mydata=snap.key + ' - ' + snap.val() ;
		//console.log(mydata);
		var myd="";
		if(!snap.val)
		{
			myd="--";
		}
		else{
		myd=snap.val();
	}
		$("tr:eq("+cnt+")" ).append("<td>" + myd + "</td>");
		cnt=cnt+1;
		// mytab+="<tr><td>"+mydata+"</td></tr>";
		// $("tr:first").append("<td>	"+   snap.val()   + "	</td>");
		// $("#userID").append("<tr><td>"+mydata+"</td></tr>");
		// $("#userID").html("<table><tr><td>"+mydata+"</td></tr></table>");
		// $("#userID").append("<br/>");
	});

	
}



function retriveHistory() {
	// body...
var search=document.getElementById("search").value;
var ref = firebase.database().ref('History');
var impinfo="";
var  mp=new Map();
ref.on("child_added", function(snapshot) {
  //console.log(snapshot.key);
var key1=snapshot.key;
	// ref.child(key1).on("child_added", function(snap) {
	// 	console.log(snap.key);
		var myx=snapshot.key;
		if(myx === search)
		{
		
		console.log(snapshot.key + ' ' +snapshot.val())
		mp=mycreateTableHis(snapshot.key);

		$("tr:first").append("<td> Name :" + mp.get("name")  +"</td>" + 
			"<td>Age : " + mp.get("age")  +"</td>" + "<td> Gender : " + mp.get("gen")  +"</td>"
			+ "<td> DOA : " + mp.get("doa")  +"</td>" + "<td> IPD No. " + snapshot.key  +"</td>"
			);
		$("tr:eq("+2+")").append("<td>Fever >100.4F (38C)c : "+ mp.get("Fever") +"</td>" +
          "<td>Cough (new onset or worsening of chronic cough) : " +mp.get("Cough") + "</td>"+
          "<td>Shortness of breath (dyspnea) : " +mp.get("ShortBreath") + "</td>" +
          "<td>Muscle aches (myalgia) / Headache : " +mp.get("myalgia") + "</td>" +
         "<td>Runny nose (rhinorrhea) : "+mp.get("rhinorrhea") + "</td>");

		$("tr:eq("+3+")").append(
		"<td>Sore throat : "+mp.get("soreThroat")  +"  </td>" +
          "<td>Subjective fever (felt feverish) : " +mp.get("Feverish")+"</td>" +
          "<td>Chills  : " +mp.get("Chills") +"</td>" +
          "<td>Nausea / vomiting / Abdominal pain / Loose motions : "+mp.get("NauseVomitLoo") +"</td>"
          + 
          "<td>Other symptoms : "+mp.get("OtherSymptoms")+"</td>"
          );


			$("tr:eq("+5+")").append(
				"<td>Patient under investigation (PUI) : "+ mp.get('PatientUnderInvestigation')  + "</td>" +
          "<td>Laboratory-confirmed case  : " + mp.get("LabConfirmed") + "</td>" +
          "<td>Any Community contact with another COVID19 case: " + mp.get("communitySpread") + "</td>" +
          "<td>Any healthcare contact : " + mp.get("HealthCareContact")  + "</td>" +
          "<td>Travel to another City / State / Country"+ mp.get("TravelAnyCity") + "</td>"
				)
			$("tr:eq("+7+")").append(
			"<td>Chronic Lung Disease (asthma/emphysema/COPD) " + mp.get("ChronicLungDiseas") + "Days : " + mp.get("ChronicLungDiseasDays")+"</td>"+
          "<td>Diabetes Mellitus" + mp.get("Diabetes") + "Days : " + mp.get("Diabetes")+ "</td>"+
          "<td>Cardiovascular disease" + mp.get("Cardiovascular") + "Days : " + mp.get("CardiovascularDays")+"</td>"+
          "<td>Chronic Renal disease" + mp.get("ChronicRenal") + "Days : " + mp.get("ChronicRenalDays")+ "</td> " +
          "<td>Chronic Liver disease" +  mp.get("ChronicLiver") + "Days : " + mp.get("ChronicLiverDays")+  "</td>"
          );

			$("tr:eq("+8+")").append(
			"<td>ImmunocompromisedCondition " + mp.get("ImmunocompromisedCondition") + "Days : " + mp.get("ImmunocompromisedConditionDays")+"</td>"+
          "<td>Neurologic/neurodevelopmental" + mp.get("Neurologic") + "Days : " + mp.get("NeurologicDays")+ "</td>"+
          "<td>Other chronic diseases" + mp.get("OtherChronicDisease") + "Days : " + mp.get("OtherChronicDiseaseDays")+"</td>"+
          "<td>If femal Pregnant?" + mp.get("Pregnant") + "Days : " + mp.get("PregnantDays")+ "</td> " +
          "<td>Current Smoker" +  mp.get("CurrentSmoker") + "Days : " + mp.get("CurrentSmokerDays")+  "</td>" +
           "<td>Former Smoker" +  mp.get("FormerSmoker") + "Days : " + mp.get("FormerSmokerDays")+  "</td>"
          );

			$("tr:eq("+10+")").append(
			"<td>Temperature " + mp.get("Temperature") + "</td>"+
          "<td>PulseRate  " + mp.get("PulseRate") + "</td>" +
          "<td>Respiratory Rate " + mp.get("RespiRate") + "</td>" + 
          "<td>Oxygen Saturation " + mp.get("OxySat") + "</td>" +
          "<td>Blood Pressure " + mp.get("BP") + "</td>" 
          );

		// $p1.addEventListener("click", searchItem)
		console.log(mp);
		console.log("hiiii");
		// $p1.appendChild()
		
		//mycreateTableHis(snapshot.key+'/'+snap.key);
		// if(cnt==1)
		// {
		// 	cnt=0;
		// }
		// // console.log(impinfo);
		// userListUI.append($p1);
		console.log("Found");
		}

});	

document.getElementById("histab").style.display="block";

}



function mycreateTableHis(x) {

	var userID=x;
	const userRef = dbRef.child('History/' + userID);
	
	var map=new Map();
	userRef.on("child_added",snap => {
		map.set(snap.key,snap.val());
	});
	return map;
	
}