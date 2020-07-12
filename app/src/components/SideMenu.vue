<template>
  <v-container class="primary side-menu">
      <div class="d-flex align-center flex-column">
        <v-row>
            <v-col>
                <v-avatar size=164>
                    <v-img :src="image">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-avatar>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="pb-0">
                <p class="text-h5">MATHEUS MOREIRA</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="pt-0">
                <p class="text-subtitle-1 text-center">Fullstack Developer</p>
            </v-col>
        </v-row>
      </div>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            image: require('../assets/me.jpeg')
        }
    }
}
</script>

<style>
.side-menu {
    margin-left: 0 !important;
    height: 100%;
    width: 20% !important;
}
</style>