  // Initialize Firebase
  var config = {
    apiKey: "apiKey",
	authDomain: "projectId.firebaseapp.com",
	databaseURL: "https://databaseName.firebaseio.com",
	storageBucket: "bucket.appspot.com",
  };
  firebase.initializeApp(config);

  // Get Elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogIn = document.getElementById('btnLogIn');
  const btnGoogleSignIn = document.getElementById('btnGoogleSignIn');
  const btnFacebookSignIn = document.getElementById('btnFacebookSignIn');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogOut = document.getElementById('btnLogOut');
  
  // Add Log In event
  btnLogIn.addEventListener('click', e => {
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();

      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise
          //.then(user => console.log(user))
          .catch(e => console.log(e.message));
  });
  
  // Add Google Sign In event
  btnGoogleSignIn.addEventListener('click', e => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/plus.login');
      const auth = firebase.auth();

      auth.signInWithPopup(provider).then(result => {
          // result.user gives you a Google signed-in user
          console.log(result);
      }).catch(e => {
          // Handle Errors here.
          console.log(e.message)
      });
  });

  // Add Google Sign In event
  btnFacebookSignIn.addEventListener('click', e => {
      const provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('user_birthday');
      const auth = firebase.auth();

      auth.signInWithPopup(provider).then(result => {
          // result.user gives you a Google signed-in user
          console.log(result);
      }).catch(e => {
          // Handle Errors here.
          console.log(e.message)
      });
  });
  // Add Log Out event
  btnLogOut.addEventListener('click', e => {
      firebase.auth().signOut();
  });

  // Add Sign Up event
  btnSignUp.addEventListener('click', e => {
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();

      const promise = auth.createUserWithEmailAndPassword(email, pass);
      promise
          .then(user => console.log(user))
          .catch(e => console.log(e.message));
  });

  // Add Auth State Changed event listener
  firebase.auth().onAuthStateChanged(user => {
      if (user)
      {
          console.log(user);
          btnLogOut.classList.remove('hide');
      } else {
          console.log('not logged in');
          btnLogOut.classList.add('hide');
      }
  });


  