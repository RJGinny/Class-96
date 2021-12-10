//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBRFyFO0tWvsrO1PbHXGIuUF3fIzQ2UHho",
      authDomain: "kwitter-app-cdc3e.firebaseapp.com",
      databaseURL: "https://kwitter-app-cdc3e-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-cdc3e",
      storageBucket: "kwitter-app-cdc3e.appspot.com",
      messagingSenderId: "1059013549399",
      appId: "1:1059013549399:web:db683620ab99bda934f212"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name")
    room_name=localStorage.getItem("room_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }
    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";
    }