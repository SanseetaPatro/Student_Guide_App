
  
  // Initialize Firebase
  var config = {
                apiKey: "AIzaSyBkZ9YAFJ0GwWsKqmSIAeI2sgWNSvEHqag",
                authDomain: "myproject-567b2.firebaseapp.com",
                databaseURL: "https://myproject-567b2.firebaseio.com",
                storageBucket: "myproject-567b2.appspot.com",
                messagingSenderId: "246512689087"
        };
        firebase.initializeApp(config);

     const txtEmail = document.getElementById('txtEmail');
     const txtPassword = document.getElementById('txtPassword');
     const login = document.getElementById('login');
     const btnSignUp = document.getElementById('btnSignUp');
     const btnLogout = document.getElementById('btnLogout');
     

 login.addEventListener('click', e =>   {

    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    document.getElementById('message').innerHTML = "successfully logged in";
        
    promise.catch(e => console.log(e.message));
 });

 btnSignUp.addEventListener('click', e => {

    //TODO: CHECK 4 REAL EMAILS
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    document.getElementById('message').innerHTML = "successfully signed up";
        

    promise.
    catch(e => console.log(e.message));
 });

 btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
        document.getElementById('message').innerHTML = "successfully logged out";
        
 });

 firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser)    {
        console.log(firebaseUser);
        //btnLogout.classList.remove('hide');
        document.getElementById("btnLogout").style.visibility = "visible";
        //document.getElementById('message').innerHTML = "successfully logged in";
    }   else {
        console.log('not logged in');
        document.getElementById("btnLogout").style.visibility = "hidden";
    }
 })
 
