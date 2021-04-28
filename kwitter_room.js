var firebaseConfig = {
      apiKey: "AIzaSyDbd9bbtAEB8B5Qe0UX5OXSikCZhwQuafI",
      authDomain: "project-kwitter-d10a1.firebaseapp.com",
      databaseURL: "https://project-kwitter-d10a1-default-rtdb.firebaseio.com",
      projectId: "project-kwitter-d10a1",
      storageBucket: "project-kwitter-d10a1.appspot.com",
      messagingSenderId: "346227828195",
      appId: "1:346227828195:web:55d84649b641dfca6c2cd6",
      measurementId: "G-YEVEKLKNG1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name"); 
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
   console.log("Room name = " + Room_names );
   row =" <div class='room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)' > "+ Room_names + "</div><hr> "
   document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value; 

      firebase.database().ref("/").child(room_name).update({
purpose : "adding room name "
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

 function redirectToRoomName(name){
       console.log(name); 
       localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
 }

 function logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
           window.location = "index.html"; 
 }