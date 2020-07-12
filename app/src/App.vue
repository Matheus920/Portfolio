<template>
  <v-app>
    <side-menu/>
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
