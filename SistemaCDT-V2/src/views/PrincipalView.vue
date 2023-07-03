<template>
  <div class="container">
    <div class="content">
      <h1 class="title">Bienvenido al comedor del Club de Tenis</h1>
      <h2 class="subtitle">¿Qué desea hacer?</h2>

      <div class="columns">
        <div class="column">
          <b-button type="is-primary" class="button" icon-left="cart" @click="venta()" rounded expanded>
            Ventas
          </b-button>
          <b-button v-if="nivel" type="is-primary" icon-left="user" class="button" @click="adminUsuarios()" rounded expanded>
            Administración de usuarios
          </b-button>
        </div>
      </div>

      <div class="column">
        <div class="button-container">
          <b-button v-if="nivel" type="is-primary" class="button" @click="verInventario()" rounded expanded>
            <div class="button-inner">
              <img src="../assets/inventario.png" alt="inventario" class="inventario-image">
              <span class="button-text">Ver inventario</span>
            </div>
          </b-button>
        </div>
        <div class="button-container">
          <b-button type="is-primary" class="button" @click="reportes()" rounded expanded>
            <div class="button-inner">
              <img src="../assets/reportes.png" alt="reportes" class="reportes-image">
              <span class="button-text">Reportes</span>
            </div>
          </b-button>
        </div>
      </div>
    </div>
  </div>
</div></template>

<script>
export default {
  data() {
    return {
      nivel: true
    }
  },
  methods: {
    validUser() {
      if (localStorage.idUsuario === undefined) {
        localStorage.clear();
        this.$router.push('/');
      } else {
        if (localStorage.idNivel == 1) {
          this.nivel = true;
        }
      }
    },
    venta() {
      this.$router.push('/menus');
    },
    adminUsuarios() {
      this.$router.push('/usuario');
    },

  },
  created() {
    this.validUser();
  }



}
</script>

<style>
.container {
  position: relative;
}

.content {
  margin-top: 80px;
  margin-bottom: 200px;
  padding: 20px;
  border-radius: 5px;
}

.title {
  font-size: 30px;
  margin-bottom: 20px;
  color: #989158
}

.subtitle {
  font-size: 20px;
  margin-bottom: 20px;
  color: #989158
}

.columns {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  margin: 20px;
}

.button-container {
  display: flex;
  flex-direction: column;
}

.button {
  font-size: 24px;
  padding: 20px;
  background-color: transparent;
  color: rgb(0, 0, 0);
  border: 2px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
}

.button-inner {
  display: flex;
  align-items: center;
}

.button-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.button-text {
  margin-left: 10px;
}

.ventas-image {

  left: -100px;
  top: 100%;
  width: 100px;
  height: 100px;
}

.usuario-image {

  left: -100px;
  top: 100px;
  width: 100px;
  height: 100px;
}

.inventario-image {

  left: -100px;
  top: 100px;
  width: 100px;
  height: 100px;
}

.reportes-image {

  left: -100px;
  top: 100px;
  width: 100px;
  height: 100px;
}
</style>
