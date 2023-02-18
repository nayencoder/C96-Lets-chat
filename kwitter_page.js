//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyA5B_CEQ1v5O1ScTyIFnjOg5Br5831byIA",
      authDomain: "kwitter3-5e4c2.firebaseapp.com",
      databaseURL: "https://kwitter3-5e4c2-default-rtdb.firebaseio.com",
      projectId: "kwitter3-5e4c2",
      storageBucket: "kwitter3-5e4c2.appspot.com",
      messagingSenderId: "200702190057",
      appId: "1:200702190057:web:feddfc4d7e1013a9e0ab78"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function send()
{

      msg = document.getElementById("msg").value;
      firebase.database(),ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });
      document.getElementById("msg").value ="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
