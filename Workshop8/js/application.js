
var RIDES = {
    property: 10,

    initialize: function() {
      RIDES.clearFields();
      RIDES.loadUsers();
      
    },

    initializeEvents: function() {
    },

    loadUsers: function() {
      //leer de localStorage los usuarios
      var users = [];
      if (localStorage.getItem('users')) {
          users = JSON.parse(localStorage.getItem('users'));
      }
      //agregar cada usuario al DOM
      users.forEach(function(user, index, users,users_table) {
        RIDES.addUser(user);
      });

    },
    addUser: function(user) {
        // crear una HTML fila
				var row = "<tr><td>"+user.name+"</td><td>"+user.userName+"<tr><td>"+user.phnumber+"</td></tr>";

				// agregar a la tabla
				var table = document.getElementById("users_table");
				table.innerHTML = table.innerHTML + row;

        // agregarlo a localStorage
        var users = [];
        if (localStorage.getItem('users_table')) {
            users = JSON.parse(localStorage.getItem('users_table'));
        }
        users.push(user);
        localStorage.setItem('users_table', JSON.stringify(users));

				//clear field
				RIDES.clearFields();
    },

    clearFields: function() {
			document.getElementById('username').value = '';
      document.getElementById('phnumber').value = '';
			document.getElementById('name').value = '';
			document.getElementById('password').value = '';
			document.getElementById('name').focus();
    }
    
};

RIDES.initialize();
RIDES.initializeEvents();

