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
      <b-form-group v-model="user.typeId" required label="Tipo de documento" >
        <b-form-select></b-form-select>
      </b-form-group>

      <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control" type="number" v-model="user.id"  placeholder="Identificación" id="id" />
         <b-form-invalid-feedback :state="validateId">Campo obligatorio</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control" v-model="user.name" placeholder="Nombre" id="name" />
         <b-form-invalid-feedback :state="validateName">Campo obligatorio</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control" v-model="user.lastName" placeholder="Apellidos" id="lastName" />
         <b-form-invalid-feedback :state="validateLastName">Campo obligatorio</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control" v-model="user.phone" type="number" placeholder="Celular" id="phone" />
         <b-form-invalid-feedback :state="validatePhone">Campo obligatorio</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control" v-model="user.email" type="email" placeholder="Correo" id="email" />
         <b-form-invalid-feedback :state="validateEmail">Campo obligatorio</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group required v-model="user.rol" label="Rol">
        <b-form-select></b-form-select>
      </b-form-group>

      <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control" v-model="user.password" type="password" placeholder="Contraseña" id="password" />
         <b-form-invalid-feedback :state="validatePassword">Campo obligatorio</b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit"  @click="create()" block variant="dark" v-if="!inEdition">Crear usuario</b-button>
      <b-button @click="update()" block variant="dark" v-else>Actualizar usuario</b-button>
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