<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name: 'admin'}">Home</b-nav-item>
            <b-nav-item :to="{name: 'users'}">Usuarios</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view />

    <div class="title">{{titleMessage}}</div>

    <b-form action="javascript:void(0)">
      <b-form-group label="Tipo de documento">
        <b-form-select></b-form-select>
      </b-form-group>

      <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control" type="number" placeholder="Identificación" id="id" />
      </b-form-group>

      <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control" placeholder="Nombre" id="name" />
      </b-form-group>

      <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control" placeholder="Apellidos" id="lastName" />
      </b-form-group>

      <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control" type="number" placeholder="Celular" id="phone" />
      </b-form-group>

      <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control" type="email" placeholder="Correo" id="email" />
      </b-form-group>

      <b-form-group label="Rol">
        <b-form-select></b-form-select>
      </b-form-group>

      <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control" type="password" placeholder="Contraseña" id="password" />
      </b-form-group>

      <b-button type="submit" block variant="dark" v-if="!inEdition">Crear usuario</b-button>
      <b-button block variant="dark" v-else>Actualizar usuario</b-button>
      <br />

    </b-form>
    
    <b-button type="submit" block variant="dark" @click="showTable = !showTable">Lista de Usuarios</b-button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>