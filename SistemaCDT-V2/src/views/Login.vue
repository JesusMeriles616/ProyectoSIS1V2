<template>
  <div class="container  ">

    <div class="card-content columns ">
      <div class="column">
        <img src="../assets/user.png" width="150" alt="" />
      </div>
      <div class="has-text-left column">

        <section class="has-text-black mt-5">
          <b-field label="Correo electronico">
            <b-input placeholder="Ingrese su nombre" type="text" v-model="email"></b-input>
          </b-field>

          <b-field label="Contraseña">
            <b-input password-reveal placeholder="Ingrese su contraseña" type="password" v-model="password">
            </b-input>
          </b-field>
        </section>
        <div class="card-footer mt-4">
          <b-button type="is-primary" expanded @click="loginA()">
            Inicia sesion
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import firebase from 'firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { db } from '@/firebase.js'

//import 'sweetalert2/src/sweetalert2.scss'
//import firebase from '@/firebase.js';

export default {
  name: 'login',
  components: {

  },
  data() {
    return {
      //data,
      
      email: "",
      password: "",
      showPassword: false,
      isInvalid: false,

      //user1
    }
  },
  methods: {

    //loginA(){  this.$router.push('/');},
    loginA() {
      const auth = getAuth();
      auth.setPersistence("local");
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((res) => {
          console.log(res);
          this.$router.push("/dashboard");
        })
        .catch((err) => {
          console.log(err.message);
          Swal.fire({
            icon: "error",
            title: "Error.",
            text: err.message,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        });

   // const errorCode = error.code;
    //const errorMessage = error.message;
    alert("Bienvenido " + this.email);
    },  

//const auth = getAuth();


    async login() {
      try {
        this.usuario = document.getElementById("usuarioi").value;
        this.password = document.getElementById("passwordi").value;
        console.log(this.usuario);
        console.log(this.password);
        const usuariosRef = db.collection('Usuarios');
        const snapshot = await usuariosRef
          .where('Nombre', '==', this.usuario)
          .where('Password', '==', this.password)
          .get();

        if (snapshot.empty) {
          console.log('Credenciales inválidas');
          this.isInvalid = true;
          return;
        }

        snapshot.forEach((doc) => {
          console.log('Credenciales válidas:');
          alert("Bienvenido " + this.usuario);

          localStorage.idUsuario = doc.id;
          localStorage.nombre = this.usuario;
          localStorage.idNivel = doc.data().idNivel;
          console.log(localStorage.nombre);
          this.$router.push('/principal');
          // Realiza las acciones necesarias después de verificar las credenciales válidas
        });
      } catch (error) {
        console.error('Error al verificar las credenciales:', error);
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },


  },
  created() {
    localStorage.clear();


  }

}
</script>


