<template>
  <div class="office-inspection">
    <div class="office-inspection__name">Item Info</div>
    <div class="info__IMEI">
      <div>IMEI</div>
      <input placeholder="IMEI" autofocus />
      <button>search</button>
    </div>
    <div class="office-inspection__info">
      <div class="info__data" v-for="info in office_info_data">
        <div class="data__name">{{ info.name }}</div>
        <div class="data__content">{{ info.content }}</div>
      </div>
    </div>
    <div class="office-inspection__name">Office Inspection</div>
    <div class="office-inspection__inspection">
      <div class="inspection__list-office">
        <div class="inspection__head1-office">Inspection List</div>
        <div class="inspection__head2-office">On-site Result</div>
        <div class="inspection__head3-office">Select Result</div>
      </div>
      <div class="inspection__list-office" v-for="office_inspection in office_inspection_data">
        <div class="list__question-office">{{ office_inspection.question }}</div>
        <div class="list__onsite-result-office">Y</div>
        <div class="list__answer-office">
          <div
            class="answer-office__content"
            v-for="office_inspection_select in office_inspection.selects"
          >
            <input type="checkbox" v-if="office_inspection_select" />
            <span>{{ office_inspection_select }}</span>
          </div>
        </div>
      </div>
      <button class="inspection__office-btn">save</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      office_info_data: [
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
      onsite_result: [{ key: "", result: "Y" }],
      office_inspection_data: [
        {
          question: "LCD가 정상 여부",
          selects: {
            select1: "정상",
            select2: "잔상",
            select3: "불량"
          }
        },
        {
          question: "LCD 잔상",
          selects: {
            select1: "약잔상",
            select2: "중잔상",
            select3: "강잔상"
          }
        },
        {
          question: "LCD 백화 및 흑반점",
          selects: {
            select1: "정상",
            select2: "불량",
            select3: ""
          }
        },
        {
          question: "LCD 백화 및 흑반점",
          selects: {
            select1: "정상",
            select2: "불량",
            select3: ""
          }
        },
        {
          question: "액정 기스",
          selects: {
            select1: "없음",
            select2: "있음",
            select3: ""
          }
        },
        {
          question: "뒷판 기스",
          selects: {
            select1: "없음",
            select2: "3개 이하",
            select3: "3개 이상"
          }
        },
        {
          question: "테두리 기스",
          selects: {
            select1: "없음",
            select2: "3개 이하",
            select3: "3개 이상"
          }
        },
        {
          question: "Speaker_mic",
          selects: {
            select1: "P",
            select2: "S",
            select3: "F"
          }
        },
        {
          question: "Vibrator",
          selects: {
            select1: "P",
            select2: "S",
            select3: "F"
          }
        },
        {
          question: "GPS",
          selects: {
            select1: "P",
            select2: "S",
            select3: "F"
          }
        },
        {
          question: "Cmaera_back",
          selects: {
            select1: "P",
            select2: "S",
            select3: "F"
          }
        },
        {
          question: "Bluetooth",
          selects: {
            select1: "P",
            select2: "S",
            select3: "F"
          }
        },
        {
          question: "Iluminance",
          selects: {
            select1: "P",
            select2: "S",
            select3: "F"
          }
        },
        {
          question: "Accelo",
          selects: {
            select1: "P",
            select2: "S",
            select3: "F"
          }
        },
        {
          question: "Magneto",
          selects: {
            select1: "P",
            select2: "S",
            select3: "F"
          }
        },
        {
          question: "Button_up",
          selects: {
            select1: "P",
            select2: "S",
            select3: "F"
          }
        },
        {
          question: "Touch",
          selects: {
            select1: "P",
            select2: "S",
            select3: "F"
          }
        },
        {
          question: "Button_down",
          selects: {
            select1: "P",
            select2: "S",
            select3: "F"
          }
        },
        {
          question: "Button_menu",
          selects: {
            select1: "P",
            select2: "S",
            select3: "F"
          }
        },
        {
          question: "Gyro",
          selects: {
            select1: "P",
            select2: "S",
            select3: "F"
          }
        }
      ]
    };
  }
};
</script>

<style>
.office-inspection {
  width: 100vw;
  height: 100vh;
  padding: 50px 20px 50px 20px;
  position: relative;
}

.office-inspection__inspection {
  position: relative;
  width: 900px;
  padding-bottom: 150px;
}

.office-inspection__name {
  color: #593d90;
  padding: 15px 0px;
  font-weight: 700;
  font-size: 18px;
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

.office-inspection__info {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.inspection__list-office {
  position: relative;
  display: flex;
  width: 100%;
}

.inspection__list-office:not(:first-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.inspection__head1-office {
  font-weight: 600;
  font-size: 17px;
  width: 35%;
  height: 30px;
  text-align: center;
  border-bottom: 1px solid #593d90;
  margin-bottom: 10px;
}

.inspection__head2-office {
  font-weight: 600;
  font-size: 17px;
  width: 20%;
  height: 30px;
  text-align: center;
  border-bottom: #593d90 1px solid;
}

.inspection__head3-office {
  font-weight: 600;
  font-size: 17px;
  width: 45%;
  height: 30px;
  text-align: center;
  border-bottom: #593d90 1px solid;
}

.list__question-office {
  font-size: 17px;
  width: 35%;
  height: 30px;
  padding-left: 30px;
  padding-top: 5px;
  display: flex;
  align-items: center;
}

.list__onsite-result-office {
  font-size: 17px;
  width: 20%;
  height: 30px;
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.list__answer-office {
  width: 45%;
  font-size: 17px;
  align-items: center;
  display: flex;
  padding-left: 50px;
}

.answer-office__content {
  display: flex;
  width: 120px;
}

.list__answer-office input {
  margin-right: 5px;
}

.inspection__office-btn {
  width: 80px;
  height: 30px;
  color: #593d90;
  border: 1px solid #593d90;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  position: absolute;
  right: 5px;
  margin-top: 20px;
}

.inspection__office-btn:hover {
  border: none;
  outline: none;
  background: linear-gradient(to right, #d444b5, #9a8ff3);
  color: white;
}
</style>