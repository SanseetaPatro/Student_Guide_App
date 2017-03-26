 var config = {
                apiKey: "AIzaSyBkZ9YAFJ0GwWsKqmSIAeI2sgWNSvEHqag",
                authDomain: "myproject-567b2.firebaseapp.com",
                databaseURL: "https://myproject-567b2.firebaseio.com",
                storageBucket: "myproject-567b2.appspot.com",
                messagingSenderId: "246512689087"
        };
        firebase.initializeApp(config);

   function submitClick(){
      var username = document.getElementById("username").value;
      var password  = document.getElementById("password").value;
      var pwd = document.getElementById("pwd").value;
      var roll  = document.getElementById("roll").value;
      var phn = document.getElementById("phn").value;
      var eid = document.getElementById("eid").value;
      var role = document.getElementById("role").value;
   window.alert("Successfully Registered");
   var database = firebase.database();
   var ref = database.ref('regForm');
   
   var data ={
      username : username,
      password : password,
      cPassword : pwd,
      roll : roll,
      phone: phn,
      email: eid,
      role: role
   }

ref.push(data);

}
