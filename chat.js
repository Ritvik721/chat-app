const firebaseConfig = {
    apiKey: "AIzaSyD4yaNypE1bfQKJ4UcoGMGi9fD1byxaj0U",
    authDomain: "let-s-chat-bc96a.firebaseapp.com",
    databaseURL: "https://let-s-chat-bc96a-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-bc96a",
    storageBucket: "let-s-chat-bc96a.appspot.com",
    messagingSenderId: "798341825765",
    appId: "1:798341825765:web:4d41c975b6a1e298e9c00c"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



