<template>
  <div id="App">
    <Navigation></Navigation>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import { getUserFromCookie, getAuthFromCookie } from "./utils/cookies.js";

import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
import LoginModal from "./components/LoginModal.vue";
import List from "./components/mainview/List.vue";
import OfficeInspection from "./components/mainview/OfficeInspection.vue";
import OnSiteInspection from "./components/mainview/OnSiteInspection.vue";

export default {
  name: "App",
  components: {
    Navigation: Navigation,
    Footer: Footer,
    LoginModal: LoginModal,
    List: List,
    OfficeInspection: OfficeInspection,
    OnSiteInspection: OnSiteInspection
  },
  data: () => ({
    //
  }),
    // 테스트 용
  created() {
    this.$store.commit("SET_USER", {user_name: '곽정신', user_id: '50331'});
    this.$store.commit("SET_TOKEN", 'AAAAAAA');
    // if (getUserFromCookie()) {
    //   this.$store.commit("SET_USER", JSON.parse(getUserFromCookie()));
    //   this.$store.commit("SET_TOKEN", getAuthFromCookie());
    // }
  }
};
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

button {
  outline: none;
  cursor: pointer;
}

a {
  text-decoration: none;
}
</style>
