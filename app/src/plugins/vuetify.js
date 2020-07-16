import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';
import 'material-design-icons-iconfont/dist/material-design-icons.css' 

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.lightBlue.darken1,
                secondary: colors.shades.white,
                
            }
        }
    },
    icons: {
        iconfont: 'md'
    }
});
