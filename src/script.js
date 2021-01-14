const packageDetails = require("./../package.json");

const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

const chinha = ['्', 'ा', 'ि', 'ी', 'ु', 'ू', 'े', 'ै', 'ो', 'ौ','ं',"ॅ","ॉ", 'ः', "ृ"]

const config = {
	apiKey: "AIzaSyCzHYtN3HUc7uNhG15YD3hrnyiX_poQUrM",
	authDomain: "devsavakhed.firebaseapp.com",
	projectId: "devsavakhed",
	storageBucket: "devsavakhed.appspot.com",
	messagingSenderId: "774083254382",
	appId: "1:774083254382:web:b184cb1b0851be9474ae7f",
	measurementId: "G-RCY6EWCX6V",
};

firebase.initializeApp(config);

firebase.auth();
const db = firebase.firestore();

const IDs = [];
const LekhakMulakshara = [];
const PustakMulakshara = [];

setDetails = (id, pustakName, lekhakName) => {
	IDs.push(id)

	let arrayP = [];
	pustakName.forEach((word) => {
		chinha.forEach((chinh) => {			
			word = word.replace(new RegExp(chinh, 'g'), "");			
		})
		arrayP.push(word);
	});
	
	let arrayL = [];
	lekhakName.forEach((word) => {
		chinha.forEach((chinh) => {			
			word = word.replace(new RegExp(chinh, 'g'), "");			
		})
		arrayL.push(word);
	});
	
	LekhakMulakshara.push(arrayL);
	PustakMulakshara.push(arrayP);
};


function addDetails(arrayL, arrayP, id) {
	console.log("to be added successfully");

	const cityRef = db.collection("bookList").doc(id);
	// console.log(cityRef);
	

	const res = cityRef.update(
		{
			"lekhak-mulakshare": arrayL,
			"pustak-mulakshare": arrayP,
		}
		// { merge: true }
	);

	console.log("added successfully");
}

function do_everything (resolve, reject) {
	db.collection("bookList").get().then( (snapshot) => {
		snapshot.forEach((doc) => {
			let book = doc.data();
			// console.log(doc["id"], book["pustakName"], book["lekhak"]);
			setDetails(doc["id"], book["pustakName"], book["lekhak"]);
		});
		resolve("success")
		console.log(PustakMulakshara);
		reject("error")
	}).catch((e) => console.log(e))
}

new Promise(do_everything).then((msg) => {
	console.log(msg.replaceAll('c', 'a'));
	// addDetails(["abc"], ["pqr"], "123test")
}).catch((e) => console.log(e))



