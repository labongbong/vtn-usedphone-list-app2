<template>
  <div class="office-inspection">
    <div class="office-inspection__name">Item Info</div>
    <div class="info__IMEI">
      <div>IMEI</div>
      <input placeholder="IMEI" autofocus />
      <button>search</button>
    </div>
    <div class="office-inspection__info">
      <div class="info__data">
        <div class="data__name">IMEI</div>
        <div class="data__content"></div>
      </div>
      <div class="info__data">
        <div class="data__name">신청번호</div>
        <div class="data__content">V20190901070249</div>
      </div>
      <div class="info__data">
        <div class="data__name">판매신청일</div>
        <div class="data__content">2019-09-06 08:48:00.0</div>
      </div>
      <div class="info__data">
        <div class="data__name">제품군</div>
        <div class="data__content">스마트폰</div>
      </div>
      <div class="info__data">
        <div class="data__name">제조사</div>
        <div class="data__content">SAMSUNG</div>
      </div>
      <div class="info__data">
        <div class="data__name">모델명</div>
        <div class="data__content">Galaxy Note 5</div>
      </div>
      <div class="info__data">
        <div class="data__name">펫네임</div>
        <div class="data__content">SM-N920C</div>
      </div>
      <div class="info__data">
        <div class="data__name">대리점명</div>
        <div class="data__content">FTP Shop</div>
      </div>
      <div class="info__data">
        <div class="data__name"></div>
        <div class="data__content"></div>
      </div>
    </div>
    <div class="office-inspection__name">On-site Inspection</div>
    <div class="office-inspection__inspection">
      <div class="inspection__list-office">
        <div class="inspection__head1-office">Inspection List</div>
        <div class="inspection__head2-office">On-site Result</div>
        <div class="inspection__head3-office">Select Result</div>
      </div>
      <div class="inspection__list-office">
        <div class="list__question-office">LCD 정상 여부</div>
        <div class="list__onsite-result-office">Y</div>
        <div class="list__answer-office">
          <div>
            <input type="checkbox" />
            <span>정상</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>잔상</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>불량</span>
          </div>
        </div>
      </div>
      <div class="inspection__list-office">
        <div class="list__question-office">LCD 잔상</div>
        <div class="list__onsite-result-office">Y</div>
        <div class="list__answer-office">
          <div>
            <input type="checkbox" />
            <span>약잔상</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>중잔상</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>강잔상</span>
          </div>
        </div>
      </div>
      <div class="inspection__list-office">
        <div class="list__question-office">LCD 백화 및 흑반점</div>
        <div class="list__onsite-result-office">Y</div>
        <div class="list__answer-office">
          <div>
            <input type="checkbox" />
            <span>정상</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>불량</span>
          </div>
        </div>
      </div>
      <div class="inspection__list-office">
        <div class="list__question-office">액정 기스</div>
        <div class="list__onsite-result-office">Y</div>
        <div class="list__answer-office">
          <div>
            <input type="checkbox" />
            <span>없음</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>있음</span>
          </div>
        </div>
      </div>
      <div class="inspection__list-office">
        <div class="list__question-office">뒷판 기스</div>
        <div class="list__onsite-result-office">Y</div>
        <div class="list__answer-office">
          <div>
            <input type="checkbox" />
            <span>없음</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>3개 이하</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>3개 초과</span>
          </div>
        </div>
      </div>
      <div class="inspection__list-office">
        <div class="list__question-office">테두리 기스</div>
        <div class="list__onsite-result-office">Y</div>
        <div class="list__answer-office">
          <div>
            <input type="checkbox" />
            <span>없음</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>3개 이하</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>3개 초과</span>
          </div>
        </div>
      </div>
      <div class="inspection__list-office">
        <div class="list__question-office">Speaker_mic</div>
        <div class="list__onsite-result-office">Y</div>
        <div class="list__answer-office">
          <div>
            <input type="checkbox" />
            <span>P</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>S</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>F</span>
          </div>
        </div>
      </div>
      <div class="inspection__list-office">
        <div class="list__question-office">Vibrator</div>
        <div class="list__onsite-result-office">Y</div>
        <div class="list__answer-office">
          <div>
            <input type="checkbox" />
            <span>P</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>S</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>F</span>
          </div>
        </div>
      </div>
      <div class="inspection__list-office">
        <div class="list__question-office">GPS</div>
        <div class="list__onsite-result-office">Y</div>
        <div class="list__answer-office">
          <div>
            <input type="checkbox" />
            <span>P</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>S</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>F</span>
          </div>
        </div>
      </div>
      <div class="inspection__list-office">
        <div class="list__question-office">Camera_back</div>
        <div class="list__onsite-result-office">Y</div>
        <div class="list__answer-office">
          <div>
            <input type="checkbox" />
            <span>P</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>S</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>F</span>
          </div>
        </div>
      </div>
      <div class="inspection__list-office">
        <div class="list__question-office">Bluetooth</div>
        <div class="list__onsite-result-office">Y</div>
        <div class="list__answer-office">
          <div>
            <input type="checkbox" />
            <span>P</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>S</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>F</span>
          </div>
        </div>
      </div>
      <div class="inspection__list-office">
        <div class="list__question-office">Iluminance</div>
        <div class="list__onsite-result-office">Y</div>
        <div class="list__answer-office">
          <div>
            <input type="checkbox" />
            <span>P</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>S</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>F</span>
          </div>
        </div>
      </div>
      <div class="inspection__list-office">
        <div class="list__question-office">Accelo</div>
        <div class="list__onsite-result-office">Y</div>
        <div class="list__answer-office">
          <div>
            <input type="checkbox" />
            <span>P</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>S</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>F</span>
          </div>
        </div>
      </div>
      <div class="inspection__list-office">
        <div class="list__question-office">Magneto</div>
        <div class="list__onsite-result-office">Y</div>
        <div class="list__answer-office">
          <div>
            <input type="checkbox" />
            <span>P</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>S</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>F</span>
          </div>
        </div>
      </div>
      <div class="inspection__list-office">
        <div class="list__question-office">Button_up</div>
        <div class="list__onsite-result-office">Y</div>
        <div class="list__answer-office">
          <div>
            <input type="checkbox" />
            <span>P</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>S</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>F</span>
          </div>
        </div>
      </div>
      <div class="inspection__list-office">
        <div class="list__question-office">Touch</div>
        <div class="list__onsite-result-office">Y</div>
        <div class="list__answer-office">
          <div>
            <input type="checkbox" />
            <span>P</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>S</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>F</span>
          </div>
        </div>
      </div>
      <div class="inspection__list-office">
        <div class="list__question-office">Button_down</div>
        <div class="list__onsite-result-office">Y</div>
        <div class="list__answer-office">
          <div>
            <input type="checkbox" />
            <span>P</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>S</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>F</span>
          </div>
        </div>
      </div>
      <div class="inspection__list-office">
        <div class="list__question-office">Button_menu</div>
        <div class="list__onsite-result-office">Y</div>
        <div class="list__answer-office">
          <div>
            <input type="checkbox" />
            <span>P</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>S</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>F</span>
          </div>
        </div>
      </div>
      <div class="inspection__list-office">
        <div class="list__question-office">Gyro</div>
        <div class="list__onsite-result-office">Y</div>
        <div class="list__answer-office">
          <div>
            <input type="checkbox" />
            <span>P</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>S</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>F</span>
          </div>
        </div>
      </div>
      <button class="inspection__office-btn">save</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.office-inspection {
  position: relative;
  width: 100%;
  height: inherit;
}

.office-inspection__inspection {
  position: relative;
  height: inherit;
  width: 950px;
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
  justify-content: space-evenly;
  display: flex;
}

.list__answer-office input {
  margin-right: 5px;
}

.inspection__office-btn {
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

.inspection__office-btn:hover {
  border: none;
  outline: none;
  background: linear-gradient(to right, #d444b5, #9a8ff3);
  color: white;
}
</style>