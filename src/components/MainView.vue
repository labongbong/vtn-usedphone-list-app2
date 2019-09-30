<template>
  <div id="main-view" class="main-view">
    <!-- <List></List> -->
    <!-- <OfficeInspection></OfficeInspection> -->
    <!-- <OnSiteInspection></OnSiteInspection> -->
    <LoginModal></LoginModal>
    <!-- <IspTest></IspTest> -->
    
  </div>
</template>

<script>
import List from "./mainview/List.vue";
import OfficeInspection from "./mainview/OfficeInspection.vue";
import OnSiteInspection from "./mainview/OnSiteInspection.vue";
import LoginModal from "./LoginModal.vue";
import IspTest from "./mainview/IspTest.vue";

export default {
  name: "main-view",
  components: {
    List: List,
    OfficeInspection:OfficeInspection,
    OnSiteInspection:OnSiteInspection,
    LoginModal:LoginModal,
    IspTest:IspTest
  }
};
</script>

<style>
.main-view {
  width: 100vw;
  height: 100vh;
  padding: 50px 20px 50px 20px;
}
</style>