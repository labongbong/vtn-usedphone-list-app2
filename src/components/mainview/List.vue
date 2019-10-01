<template>
  <div class="list">
    <div class="list__upload">
      <div class="list__upload-input">
        <v-file-input label="File input" color="#593d90"></v-file-input>
      </div>
      <button class="list__uploadBtn">
        <i class="fas fa-cloud-upload-alt"></i>
        <span>Upload</span>
      </button>
      <button class="list__uploadBtn">
        <i class="fas fa-plus"></i>
        <span>Add</span>
      </button>
    </div>
    <div class="show-list">
      <div class="show-list-top">
        <div class="show-list__filters">
          <!-- <input class="filters__filter" placeholder="Stock No."/> -->
          <input class="filters__filter" placeholder="IMEI" v-model="filter_con.imei"/>
          <input class="filters__filter" placeholder="Status" v-model="filter_con.status"/>
          <input class="filters__filter" placeholder="Store" v-model="filter_con.store_nm"/>
          <input class="filters__filter" placeholder="Model Code" v-model="filter_con.model_cd"/>
          <input class="filters__filter" placeholder="Pick-up Date" v-model="filter_con.p_dt"/>
          <input class="filters__filter" placeholder="File Name" v-model="filter_con.file_nm"/>
        </div>
        <div class="show-list__btns">
          <button class="filters__btn" @click="getUsedPhoneData()">
            <i class="fas fa-search"></i>
            search
          </button>
          <button class="filters__btn">
            <i class="fas fa-cloud-download-alt" @click="test()"></i>
            export
          </button>
        </div>
      </div>
      <div class="show-list__table">
        <table class="table__content">
          <th nowrap v-for="item in all_Items">{{ item.text }}</th>
          <tr nowrap v-for="device in devices">
            <td nowrap v-for="de in device">{{ de }}</td>
          </tr>
        </table>
        <div class="table__page"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import XLSX from "xlsx";
import { manageUsedPhoneData } from "../../api";
// import RegisterModal from "./RegisterModal.vue";
import bus from "../../utils/bus.js";

export default {
  data: () => ({
    all_Items: [
      // { name: "Stock No.", vlaue: "V20190901070249" },
      // { name: "IMEI 1", value: "123456" },
      // { name: "IMEI 2", value: "123457" },
      // { name: "Modify IMEI", value: "123444" },
      // { name: "Serial No.", value: "abc123" },
      // { name: "Store", value: "FTP Shop" },
      // { name: "Pick-up Date", value: "2019-10-01" },
      // { name: "Wharehouse", value: "house1" },
      // { name: "R-check Grade", value: "A" },
      // { name: "Manufacturer", value: "SAMSUNG" },
      // { name: "ModelCode", value: "SS01" },
      // { name: "ModelName", value: "Galaxy S10" },
      // { name: "on-site Ispection", value: "Y" },
      // { name: "Office Inspection", value: "N" }
            { text: "StockNo.", value: "stock_no" },
      { text: "IMEI1", value: "imei_1" },
      { text: "IMEI2", value: "imei_2" },
      { text: "SerialNo.", value: "serial_no" },
      { text: "store", value: "store_nm" },
      { text: "Pick-up", value: "p_dt" },
      { text: "Warehouse", value: "w_dt" },
      { text: "Insepection", value: "i_dt" },
      { text: "Manufacturer", value: "mfr" },
      { text: "ModelCode", value: "mdl_cd" },
      { text: "ModelName", value: "mdl_nm" },
      { text: "ModelCode(SKTL)", value: "sktl_mdl_cd" },
      { text: "Color", value: "clr" },
      { text: "Memory", value: "mem_cap" },
      { text: "BuyGrade", value: "buy_grd" },
      { text: "ChattingGrade", value: "cht_grd" },
      { text: "Month", value: "mnth" },
      { text: "BuyingPrice(no VAT)", value: "buy_prc_wo_vat" },
      { text: "BuyerName", value: "buyr_nm" },
      { text: "InspectMngr", value: "inspt_mgr" },
      { text: "BoxNo.", value: "box_no" },
      { text: "BoxComment", value: "box_cmt" },
      { text: "Power", value: "pwr" },
      { text: "Charging", value: "chrg" },
      { text: "Usim", value: "usim" },
      { text: "Components", value: "cpnt" },
      { text: "LCD_Burnin", value: "lcd_brin" },
      { text: "LCD_Touch", value: "lcd_tch" },
      { text: "LCD_Stained", value: "lcd_stn" },
      { text: "LCD_Bruised", value: "lcd_brs" },
      { text: "LCD_Pressured", value: "lcd_prs" },
      { text: "LCD_Liquid damage", value: "lcd_dmg" },
      { text: "LCD_Line", value: "lcd_ln" },
      { text: "LCD_Screenon", value: "lcd_on" },
      { text: "Sound", value: "snd" },
      { text: "Camera", value: "cam" },
      { text: "Vibration", value: "vbr" },
      { text: "Bluetooth", value: "bth" },
      { text: "Illumination Sensor", value: "ilm_snsr" },
      { text: "Gyroscope Sensor", value: "gyro_snsr" },
      { text: "Proximity Sensor", value: "prox_snsr" },
      { text: "Wi-Fi", value: "wifi" },
      { text: "Button", value: "btn" },
      { text: "Touch on housing", value: "tch_on_hous" },
      { text: "FingerPrint", value: "fngr_prt" },
      { text: "Iris", value: "iris" },
      { text: "FaceID", value: "face_id" },
      { text: "Tempered glass", value: "tmpr_gls" },
      { text: "Camera lens", value: "cam_lens" },
      { text: "Housing", value: "hous" },
      { text: "Pen", value: "pen" },
      { text: "BackCover", value: "bk_cvr" },
      { text: "Sim Tray", value: "sim_tray" },
      { text: "Selling Grade", value: "sel_grd" },
      { text: "Note", value: "note" },
      { text: "YEAR", value: "yr" },
      { text: "cmpny_cd", value: "cmpny_cd" },
      { text: "cnfrm_grd", value: "cnfrm_grd" },
      { text: "file_nm", value: "file_nm" },
      { text: "Actions", value: "action", sortable: false }
    ],

    filter_con: {
      imei: "",
      store_nm: "",
      model_cd: "",
      status: "",
      p_dt: "",
      file_nm: ""
    },
        devices: [],
    org_retr_data: [],
    
  }),
  methods: {


    //DB호출 api : post method
    getUsedPhoneData() {
      var vm = this;
      manageUsedPhoneData({
        tel_num: this.$store.state.user.tel_num,
        token: this.$store.state.token,
        filter_con: this.filter_con,
        httpMethod: "SELECT_MASTER_DATA"
      })
        .then(response => {
          vm.org_retr_data = response.data.rt_data;
          vm.make_grid_data();
          console.log("데이터 가져오기 완료", response);
        })
        .catch(error => {
          console.log(error);
        });
    },

        //조회해온 db를 header value에 매핑시켜 array로 전달
    make_grid_data() {
      this.devices = this.org_retr_data.map(e => {
        var r = {};
        //배열 e의 모든 요소의 인덱스를 출력
        for(var i=0; i<e.length; i++) { 
          r[this.all_Items[i].value] = e[i];
        }
        return r;
      });
    },

    test () {
      console.log(this.devices);
    }

  }
};
</script>

<style>
.list {
  width: 100vw;
  height: 100vh;
  padding: 50px 20px 50px 20px;
}
.list__upload {
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
}
.list__upload-input {
  width: 300px;
}

.list__upload-input i {
  background: linear-gradient(to right, #d444b5, #9a8ff3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.list__uploadBtn,
.filters__btn {
  width: 80px;
  height: 30px;
  /* background: linear-gradient(to right, #d444b5, #9a8ff3); */
  color: #593d90;
  border: 1px solid #593d90;
  border-radius: 5px;
  margin-left: 20px;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
}

.list__uploadBtn:hover,
.filters__btn:hover {
  border: none;
  background: linear-gradient(to right, #d444b5, #9a8ff3);
  color: white;
}

.list__uploadBtn span {
  margin-left: 5px;
}

.show-list {
  position: relative;
  width: 100%;
}

.show-list__table {
  overflow-x : auto;
}

.show-list-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.filters__filter {
  border: 1px solid #593d90;
  border-radius: 5px;
  height: 30px;
  width: 150px;
  margin-right: 5px;
  padding: 5px;
}

.filters__filter:focus {
  outline: 2px solid #593d90;
}

.table__content {
  border: 2px solid #593d90;
  width: 100%;
}

.table__content td,
.table__content th {
  border: 1px solid #8c8c8c;
  padding: 5px;
  text-align: center;
}

.table__content th {
  border-bottom: 1px solid #593d90;
}
</style>