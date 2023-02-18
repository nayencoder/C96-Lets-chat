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


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{

room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({

      purpose : "adding room name"

});

localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";

}






function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id) ' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;


      //End code
      });});}
getData();

function redirectToRoomName(name)
{

      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";

}

function logout()
{

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html";
}






