import '@mdi/font/css/materialdesignicons.css'
import 'font-awesome/css/font-awesome.min.css'
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    icons:{
        inonfont:'mdi' || 'fas fa' || 'fa'
    },
    theme:{
        dark:{
            background:'#171721'
        }
    }
});
