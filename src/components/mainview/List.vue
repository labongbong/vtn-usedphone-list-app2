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
          <input class="filters__filter" placeholder="Stock No." />
          <input class="filters__filter" placeholder="IMEI" />
          <input class="filters__filter" placeholder="Status" />
          <input class="filters__filter" placeholder="Store" />
          <input class="filters__filter" placeholder="Model Code" />
          <input class="filters__filter" placeholder="Pick-up Date" />
          <input class="filters__filter" placeholder="File-name" />
        </div>
        <div class="show-list__btns">
          <button class="filters__btn">
            <i class="fas fa-search"></i>
            search
          </button>
          <button class="filters__btn">
            <i class="fas fa-cloud-download-alt"></i>
            export
          </button>
        </div>
      </div>
      <div class="show-list__table">
        <table class="table__content">
          <th>Stock No.</th>
          <th>IMEI1</th>
          <th>IMEI2</th>
          <th>Serial No.</th>
          <th>Store</th>
          <th>Pick-up Date</th>
          <th>Warehouse</th>
          <th>Inspection</th>
          <th>Manufacturer</th>
          <th>ModelCode</th>
          <th>ModelName</th>
          <tr>
            <td>1</td>
            <td>123456</td>
            <td>123456</td>
            <td>abc123</td>
            <td>A</td>
            <td>2019-11-11</td>
            <td>house1</td>
            <td>Y</td>
            <td>samsung</td>
            <td>SS01</td>
            <td>Galaxy10</td>
          </tr>
          <tr>
            <td>2</td>
            <td>123456</td>
            <td>123456</td>
            <td>abc123</td>
            <td>A</td>
            <td>2019-11-11</td>
            <td>house1</td>
            <td>Y</td>
            <td>LG</td>
            <td>LG01</td>
            <td>V50</td>
          </tr>
          <tr>
            <td>3</td>
            <td>123456</td>
            <td>123456</td>
            <td>abc123</td>
            <td>A</td>
            <td>2019-11-11</td>
            <td>house1</td>
            <td>Y</td>
            <td>LG</td>
            <td>LG01</td>
            <td>V50</td>
          </tr>
        </table>
        <div class="table__page"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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