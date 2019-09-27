<template>
  <div class="on-site-inspection">
    <div class="on-site-inspection__name">Item Info</div>
    <div class="info__IMEI">
      <div>IMEI</div>
      <input placeholder="IMEI" autofocus />
      <button>search</button>
    </div>
    <div class="on-site-inspection__info">
      <div class="info__data" v-for="info in info_data" v-bind:key="info.name">
        <div class="data__name">{{info.name}}</div>
        <div class="data__content">{{info.content}}</div>
      </div>
    </div>
    <div class="on-site-inspection__name">On-site Inspection</div>
    <div class="on-site-inspection__inspection">
      <div class="inspection__list">
        <div class="inspection__head1">Inspection List</div>
        <div class="inspection__head2">Select Result</div>
      </div>
      <div
        class="inspection__list"
        v-for="onsite_inspection in onsite_inspection_data"
        v-bind:key="onsite_inspection.question"
      >
        <div class="list__question">{{ onsite_inspection.question }}</div>
        <div class="list__answer">
          <div
            class="answer__content"
            v-for="onsite_inspection_select in onsite_inspection.selects"
            v-bind:key="onsite_inspection_select"
          >
            <input type="checkbox" v-if="onsite_inspection_select" />
            <div>{{ onsite_inspection_select }}</div>
          </div>
        </div>
      </div>
      <button class="inspection__btn">save</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info_data: [
        { name: "IMEI", content: "" },
        { name: "신청번호", content: "V20190901070249" },
        { name: "판매신청일", content: "2019-09-06 08:48:00.0" },
        { name: "제품군", content: "스마트폰" },
        { name: "제조사", content: "SAMSUNG" },
        { name: "모델명", content: "Galaxy Note 5" },
        { name: "펫네임", content: "SM-N920C" },
        { name: "대리점명", content: "FTP Shop" },
        { name: "", content: "" }
      ],
      onsite_inspection_data: [
        {
          question: "LCD가 정상인가요?",
          selects: {
            select1: "정상",
            select2: "약간 비정상",
            select3: "매우 비정상"
          }
        },
        {
          question: "외관이 깨끗한가요?",
          selects: {
            select1: "정상",
            select2: "약간 비정상",
            select3: "매우 비정상"
          }
        },
        {
          question: "Pen이 있나요?",
          selects: {
            select1: "Y",
            select2: "N",
            select3: ""
          }
        },
        {
          question: "USIM Tary가 있나요?",
          selects: {
            select1: "Y",
            select2: "N",
            select3: ""
          }
        },
        {
          question: "Back Cover가 있나요?",
          selects: {
            select1: "Y",
            select2: "N",
            select3: ""
          }
        },
        {
          question: "TouchID가 정상인가요?",
          selects: {
            select1: "정상",
            select2: "약간 비정상",
            select3: "매우 비정상"
          }
        },
        {
          question: "FaceID가 정상인가요?",
          selects: {
            select1: "정상",
            select2: "약간 비정상",
            select3: "매우 비정상"
          }
        },
        {
          question: "IRIS가 정상인가요?",
          selects: {
            select1: "정상",
            select2: "약간 비정상",
            select3: "매우 비정상"
          }
        },
        {
          question: "Fingerprint?",
          selects: {
            select1: "Y",
            select2: "N",
            select3: ""
          }
        },
        {
          question: "USIM Check?",
          selects: {
            select1: "Y",
            select2: "A",
            select3: "N"
          }
        }
      ]
    };
  }
};
</script>

<style>
.on-site-inspection {
  position: relative;
  padding-top: 10px;
  width: 100%;
  height: 100%;
}

.on-site-inspection__inspection {
  position: relative;
  width: 800px;
  height: 100%;
}

.on-site-inspection__name {
  color: #593d90;
  padding: 15px 0px;
  font-weight: 700;
  font-size: 18px;
}

.on-site-inspection__info {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.info__IMEI {
  display: flex;
  margin-bottom: 15px;
  margin-left: 5px;
  align-items: center;
}

.info__IMEI > div {
  font-weight: 600;
  font-size: 17px;
  margin-right: 15px;
}

.info__IMEI > input {
  border: 1px solid #593d90;
  border-radius: 5px;
  height: 30px;
  width: 180px;
  margin-right: 5px;
  padding: 5px;
}

.info__IMEI > input:focus {
  outline: 2px solid #593d90;
}

.info__IMEI > button {
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
}

.info__IMEI > button:hover {
  border: none;
  outline: none;
  background: linear-gradient(to right, #d444b5, #9a8ff3);
  color: white;
}

.info__data {
  display: flex;
  height: 25px;
  width: 300px;
  padding: 5px;
  margin: 5px;
  align-items: center;
  border-bottom: 1px solid #593d90;
}

.data__name {
  width: 100px;
  text-align: center;
  border-right: 1px solid #593d90;
}

.data__content {
  width: 200px;
  margin-left: 10px;
}

.inspection__list {
  position: relative;
  display: flex;
  width: 100%;
}

.inspection__list:not(:first-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.inspection__head1 {
  font-weight: 600;
  font-size: 17px;
  width: 40%;
  height: 30px;
  text-align: center;
  border-bottom: 1px solid #593d90;
  margin-bottom: 10px;
}

.inspection__head2 {
  font-weight: 600;
  font-size: 17px;
  width: 60%;
  height: 30px;
  text-align: center;
  border-bottom: #593d90 1px solid;
}

.list__question {
  font-size: 17px;
  width: 40%;
  height: 30px;
  padding-left: 30px;
  padding-top: 5px;
  display: flex;
  align-items: center;
}

.list__answer {
  width: 60%;
  font-size: 17px;
  align-items: center;
  display: flex;
}

.answer__content {
  display: flex;
  width: 100px;
}

.list__answer input {
  margin-right: 5px;
}

.list__answer .inspection__btn {
  width: 80px;
  height: 30px;
  /* background: linear-gradient(to right, #d444b5, #9a8ff3); */
  color: #593d90;
  border: 1px solid #593d90;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  position: absolute;
  right: 5px;
}

.inspection__btn:hover {
  border: none;
  outline: none;
  background: linear-gradient(to right, #d444b5, #9a8ff3);
  color: white;
}
</style>