
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyC6terfEGOx7NQp5PrnUhilA1JVSSEXRC4",
      authDomain: "kwitter-2da5f.firebaseapp.com",
      databaseURL: "https://kwitter-2da5f-default-rtdb.firebaseio.com",
      projectId: "kwitter-2da5f",
      storageBucket: "kwitter-2da5f.appspot.com",
      messagingSenderId: "417319029940",
      appId: "1:417319029940:web:0a0d77bd43e8fa48bb1be1"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
      localStorage.setItem("room_name",room_name);
      window.location=kwitter_page.html;
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row="<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });
});}
getData();
function redirectToRoomName(name) 
{ 
      console.log(name); 
      localStorage.setItem("room_name", name); 
      window.location = "kwitter_page.html"; 
}
function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";    
}
