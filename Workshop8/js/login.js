RIDES.initializeEvents = function() {
      if(document.getElementById('addUserButton')) {
        document.getElementById('addUserButton').addEventListener('click', function() {
        	// obtener la información del form
  				var user = {
            userName: document.getElementById('username').value,
            phnumber: document.getElementById('phnumber').value,
            name: document.getElementById('name').value,
            pass: document.getElementById('password').value
          };

          RIDES.addUser(user);
        });
      }
};

RIDES.initializeEvents();
