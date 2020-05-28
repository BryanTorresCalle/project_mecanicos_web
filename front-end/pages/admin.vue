<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name: 'admin'}">Home</b-nav-item>
            <b-nav-item :to="{name: 'users'}">Usuarios</b-nav-item>
            <b-nav-item :to="{name: 'motos'}">Motos</b-nav-item>
            <b-nav-item :to="{name: 'maintenance'}">Mantenimiento</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view />
  </div>
</template>


<script>
export default {};
</script>

<style>
</style>