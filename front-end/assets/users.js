import axios from "axios";

export default {
  data() {
    return {
      
      titleMessage: "Crear Usuario",
      token: "",
      isUpdating:false,
      enEdicion: false,
      showTable: true,
      url: "http://localhost:3001/api/v1/",
      user: {
        id: "",
        name: "",
        lastName: "",
        phone: "",
        email: "",
        password: ""
      },
      listUsers: [{}],
      typeId: [],
      opciones_documentos: [
        {
          value: null,
          text: "Seleccione el tipo de id",
          disabled: true
        },
        { value: "CC", text: "01 - CC" },
        { value: "CE", text: "02 - CE" },
        { value: "NIT", text: "03 - NIT" },
        { value: "Pasaporte", text: "04 - Pasaporte" }
      ],

      rol: [],
      opciones_roles: [
        { value: null, text: "Seleccione el rol del user", disabled: true },
        { value: "01", text: "01 - Mécanico" },
        { value: "02", text: "02 - Administrador" }
      ]
    };
  },

  beforeMount() {
    this.showUsers();
  },
  computed: {
    validateId() {
      if (this.isUpdating) return true;
      return this.user.id.length > 0;
    },
    validateName() {
      return this.user.name.length > 0;
    },
    validateLastName() {
      return this.user.lastName.length > 0;
    },
    validatePhone() {
      return this.user.phone.length > 0;
    },
    validateEmail() {
      return this.user.email.length > 0;
    },
    validateRol() {
      return this.user.rol.length > 0;
    },
    validatePassword() {
      return this.user.password.length > 0;
    }
  },

  methods: {
    
    showUsers() {
      this.token = localStorage.getItem("token");
      axios
        .get(this.url + "users", {
          headers: { token: this.token }
        })
        .then(response => {
          console.log(response.data.info);
          this.listUsers = response.data.info;
          for (let i in this.listUsers) {
          //  this.listUsers[i].acciones = true;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    createUser() {
      if (this.user.id.length > 0 && this.user.name.length > 0 && this.user.lastName.length > 0
        && this.user.phone.length > 0 && this.user.email.length > 0  &&  this.user.rol.length > 0
        && this.user.password.length > 0) {
        axios
          .post(this.url + "users", this.user, {
            headers: { token: this.token }
          })
          .then(response => {
            this.showUsers();
            console.log(response);

            this.user = {
              tipo_documento: "",
              id: "",
              name: "",
              lastName: "",
              phone: "",
              email: "",
              rol: 0,
              password: ""
            };
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        alert("LLene todos los campos correctamente");
      }
    },
    eliminarUsuario({ item }) {
      axios
        .delete(this.url + "usuarios/" + item.id, {
          headers: { token: this.token }
        })
        .then(response => {
          let posicion = this.lista_usuarios.findIndex(
            lista_usuarios => lista_usuarios.id == item.id
          );
          this.lista_usuarios.splice(posicion, 1);
          alert("user Eliminado");
        })
        .catch(error => {
          console.log(error);
        });
    },
    cargarUsuario({ item }) {
      this.validacion_actualizar = true;
      axios
        .get(`${this.url}usuarios/${item.id}`, {
          headers: { token: this.token }
        })
        .then(response => {
          var datos = response.data.info;
          this.enEdicion = true;
          this.user.id = datos[0].id;
          this.user.name = datos[0].name;
          this.user.lastName = datos[0].lastName;
          this.user.edad = datos[0].edad;
          this.user.email = datos[0].email;
          this.user.phone = datos[0].phone;
          this.user.rol = datos[0].rol;
        })
        .catch(error => {
          console.log(error);
        });
    },
    actualizarUsuario() {
      if (this.validacion) {
        axios
          .put(`${this.url}usuarios/${this.user.id}`, this.user, {
            headers: { token: this.token }
          })
          .then(response => {
            console.log(response);
            let position = this.lista_usuarios.findIndex(
              user => user.id == this.user.id
            );
            this.lista_usuarios.splice(position, 1, this.user);
            this.enEdicion= false;
            this.user = {
              id: "",
              name: "",
              lastName: "",
              phone: "",
              email: "",
              password: ""
            };
            this.validacion_actualizar = false;
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        alert("LLene todos los campos correctamente");
      }
    }
  }
};
