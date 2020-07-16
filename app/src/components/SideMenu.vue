<template>
  <v-container class="primary side-menu pt-0 pb-0">
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
        <v-row>
            <v-icon color="white">mdi-map-marker</v-icon> Guarulhos - SP - Brazil
        </v-row>
        <v-row no-gutters class="mt-5">
            <v-col cols="6">
                <v-btn class ="pl-0" text color="white" :to="{name: 'Projects'}"><v-icon>mdi-bookshelf</v-icon>Projects</v-btn>
            </v-col>
            <v-col cols="6">
                <v-btn text color="white" :to="{name: 'Education'}"><v-icon>mdi-school</v-icon>Education</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <p class="pl-3 mb-0">
                I'm a fullstack developer who loves to learn new things. Besides my focus being destined
                to the JS stack, i'm also got other relevant skills such as Data Science and desktop languages
                such as Java and C#. Currently i'm looking for an internship opportunity. Feel free to contact me!
            </p>
        </v-row>
        <v-row class="mt-0">
            <v-btn icon href="mailto:matheusm920@gmail.com" target="_blank"><v-icon color="white">mdi-gmail</v-icon></v-btn>
            <v-btn href="https://www.linkedin.com/in/matheus-moreira-da-silva-9ab50615a/" icon target="_blank"><v-icon color="white">mdi-linkedin</v-icon></v-btn>
            <v-btn href="https://github.com/Matheus920" target="_blank" icon><v-icon color="white">mdi-github</v-icon></v-btn>
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
    color: white;
}
</style>