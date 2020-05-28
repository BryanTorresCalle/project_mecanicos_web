import axios from "axios";

export default {
  beforeMount() {
    
  },
  data() {
    return {
    url: "http://localhost:3001/api/v1/",
    user:{
       id:"",
       password:""
     }
     
    };
  },

  computed: {
    validateId() {
      return this.user.id.length > 0;
    },

    validatePassword() {
      return this.user.password.length > 0;
    }
  },
  methods: {
    login() {
      let url = this.url + "login";
      if (this.user.id.length > 0 && this.user.password.length > 0) {
        axios
          .post(url, this.user)
          .then(response => {
            let data = response.data;
            console.log("Data:", data);
            localStorage.setItem("token", data.info);
            localStorage.setItem("id", this.user.id);
            localStorage.setItem("rol", data.rol);
            this.$router.push("/home");
          })
          .catch(error => {
            alert("ID o clave erróneas");
            console.log(error.response);
          });
      } else {
        alert("Llene todos los campos");
      }
      
    }
    
  },
};
