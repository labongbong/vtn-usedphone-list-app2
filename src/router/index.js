import Vue from 'vue';
import Router from 'vue-router';

import LoginModal from '../components/LoginModal.vue';
import List from '../components/mainview/List.vue';
import OfficeInspection from '../components/mainview/OfficeInspection.vue';
import OnSiteInspection from '../components/mainview/OnSiteInspection.vue';

Vue.use(Router)

export default new Router ({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Login",
            component: LoginModal
        },
        {
            path: "/list",
            name: "List",
            component: List
        },
        {
            path: "/office",
            name: "OfficeInspection",
            component: OfficeInspection
        },
        {
            path: "/onsite",
            name: "OnsiteInspection",
            component: OnSiteInspection
        },
    ]
})