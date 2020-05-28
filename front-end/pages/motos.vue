<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            
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
        <b-form-input class="form-control"  placeholder="Placa" id="plate" />
      </b-form-group>

      <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control" placeholder="Estado" id="state" />
      </b-form-group>

      <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control" placeholder="Clase" id="class" />
      </b-form-group>

      <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control"  placeholder="Marca" id="brand" />
      </b-form-group>

       <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control"  placeholder="Modelo" id="model" />
      </b-form-group>

       <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control"  placeholder="Color" id="color" />
      </b-form-group>

       <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control"  placeholder="Cilindraje" id="displacement" />
      </b-form-group>

       <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control" type="number"  placeholder="Id Propietario" id="id_owner" />
      </b-form-group>

       <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control" type="number"  placeholder="Nro Soat" id="soat" />
      </b-form-group>

       <b-form-group @submit.stop.prevent label="Fecha de Vencimiento Soat">
        <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
      </b-form-group>

       <b-form-group @submit.stop.prevent>
        <b-form-input class="form-control"  placeholder="Nro Tecnomecanica" id="tecno" />
      </b-form-group>

       <b-form-group @submit.stop.prevent label="Fecha de Vencimiento Tecnomecánica" >
        <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
      </b-form-group>

     

      
      <b-button type="submit" block variant="dark" v-if="!inEdition">Crear moto</b-button>
      <b-button block variant="dark" v-else>Actualizar moto</b-button>
      <br />

    </b-form>
    
    <b-button type="submit" block variant="dark" @click="showTable = !showTable">Lista de Motos</b-button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>