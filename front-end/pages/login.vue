<template>
  <div class="body">
    <b-container>
      <b-col>
        <div class="tittle">Inicio de Sesión</div>

        <b-form action="javascript:void(0)">
          <b-form-group @submit.stop.prevent label="Documento" label-for="id">
            <b-form-input
              class="form-control"
              type="number"
               v-model="user.id"
              placeholder="Ingrese su documento de identidad"
              id="id"
            />
             <b-form-invalid-feedback :state="validateId"
              >Campo obligatorio</b-form-invalid-feedback
            >
          </b-form-group>

          <b-form-group @submit.stop.prevent label="Contraseña" label-for="password">
            <b-form-input
              class="form-control"
              type="password"
              v-model="user.password"
              placeholder="Ingrese su contraseña"
              id="password"
            />
            <b-form-invalid-feedback :state="validatePassword"
              >Campo obligatorio</b-form-invalid-feedback
            >
          </b-form-group>

          <b-button type="submit" block variant="dark" @click="login()">Ingresar</b-button>
        </b-form>
      </b-col>
    </b-container>
  </div>
</template>

<script src= "../assets/login.js"> </script>

<style src="../css/login.css" />