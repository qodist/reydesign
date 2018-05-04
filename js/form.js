// Initialize Firebase
var config = {
    apiKey: "AIzaSyAzesPTmTD5fYzSc9DjsBWhTjSUDjZjeEI",
    authDomain: "contact-form-d4ad2.firebaseapp.com",
    databaseURL: "https://contact-form-d4ad2.firebaseio.com",
    projectId: "contact-form-d4ad2",
    storageBucket: "contact-form-d4ad2.appspot.com",
    messagingSenderId: "458355951699"
  };
  firebase.initializeApp(config);

  // Reference message collection
  var messageRef = firebase.database().ref("messages");

  // Listen for submit form
  document.getElementById("contactForm").addEventListener("submit", submitForm);

  // Submit form
  function submitForm(e){
    e.preventDefault();

    // Get values
    var name = getInputVal("name");
    var address = getInputVal("address");
    var phone = getInputVal("phone");
    var email = getInputVal("email");
    var message = getInputVal("message");

    // Save message
    saveMessage(name, address, phone, email, message);

    // Show alert
    document.querySelector(".alert").style.display = "block";

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Clear input fields
    document.getElementById("contactForm").reset();
};

//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
};

function saveMessage(name, address, phone, email, message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        address: address,
        phone: phone,
        email: email,
        message: message
    });
};