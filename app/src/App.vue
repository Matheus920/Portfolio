<template>
  <v-app>
    <v-container class="ml-0 mr-0 pt-0 pb-0" style="height:100%">
      <v-row style="height: 100%">
        <v-col cols="3" class="pl-0 pt-0 pb-0"><side-menu/></v-col>
        <v-col><router-view/></v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import SideMenu from './components/SideMenu'
export default {
  name: 'App',
  components: {
    SideMenu
  },
  data: () => ({
    //
  }),
};
</script>