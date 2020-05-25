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

const usersRef = dbRef.child('PathRep');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {

	let user = snap.val();
	//console.log(user);
	
	//$li.setAttribute("child-key", snap.key);
	console.log(snap.key);
	var key1=snap.key;
	usersRef.child(key1).on("child_added",snapp =>{
	let userr = snapp.val();
	//console.log(userr);
	let $li = document.createElement("li");
	$li.innerHTML = snapp.key;	
	console.log(snapp.key);
	$li.setAttribute("child-key", snap.key+'/'+snapp.key);
	$li.addEventListener("click", userClicked)
	userListUI.append($li);
	});	
	

	

});


function userClicked(e) {

	var userID = e.target.getAttribute("child-key");
	//console.log(userID);
	const userRef = dbRef.child('PathRep/' + userID);
	
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => {

		
		var $p = document.createElement("p");
		$p.innerHTML = snap.key  + " - " +  snap.val()
		userDetailUI.append($p);


	});

}


