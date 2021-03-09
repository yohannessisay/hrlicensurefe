<template>

    <div class="formbox">
      <form action="/">
        <div class="banner">
          <h1>Address</h1>
        </div>

        <div class="item">
           <div class="left">
                <p class="">Region</p>
                <div class="">
                    <input v-model ="addressInfo.region" type="text" name="name" placeholder="First" />
                </div>
           </div> 
           <div class="right">
                <p class="">Kebele</p>
                <div class="">
                    <input v-model ="addressInfo.kebele" type="text" name="name" placeholder="Nationality" />
                </div>
            </div>   
        </div>


        <div class="item">
           <div class="left">
                <p class="">Zone</p>
                <div class="">
                    <input v-model ="addressInfo.zone" type="text" name="name" placeholder="Zone" />
                </div>
           </div> 
           <div class="right">
                <p class="">House No(Optional)</p>
                <div class="">
                    <input v-model ="addressInfo.houseNumber" type="text" name="name" placeholder="House No." />
                </div>
            </div>   
        </div>

        <div class="item">
           <div class="left">
                <p class="">Wereda</p>
                <div class="">
                    <input v-model ="addressInfo.wereda" type="text" name="name" placeholder="Wereda" />
                </div>
           </div> 
           <div class="right">
                <p>Residence</p>
                <div class="">
                    <input v-model ="addressInfo.residence" type="text" name="name" placeholder="Residence" />
                </div>
            </div>   
        </div>
            

        <div class="btn-block">
          <button @click.prevent="nextStep" href="/">Next</button>
        </div>
      </form>
    </div>

</template>
    <style scoped>

      .right{
          float: right;
              
          width: calc(50% - 20px);
      }
     .left{
          float: left;
              
          width: calc(50% - 20px);
      }

      .right-radio{
          float: right;
              
          width: calc(50% - 5px);
      }
     .left-radio{
          float: left;
              
          width: calc(25% - 5px);
      }

      h1 {
      position: absolute;
      margin: 0;
      font-size: 38px;
      color: #fff;
      z-index: 2;
      }
      .formbox {
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      padding: 20px;
      }
      form {
      width: 55%;
      height: 60%;
      padding: 20px;
      border-radius: 6px;
      background: #fff;
      box-shadow: 0 0 25px 0 #6581a3; 
      }
      .banner {
      position: relative;
      height: 210px;  
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      }
      .banner::after {
      content: "";
      background-color: rgba(0, 0, 0, 0.3); 
      position: absolute;
      width: 100%;
      height: 100%;
      }
      input, select, textarea {
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
      }
      input {
      width: calc(100% - 10px);
      padding: 5px;
      }
      input[type="date"] {
      padding: 4px 5px;
      }
      select {
      width: 100%;
      padding: 7px 0;
      background: transparent;
      }
      textarea {
      width: calc(100% - 12px);
      padding: 5px;
      }
      item{
          color: #6581a3;
      }
     .item:hover i, .radio label:hover, input:hover::placeholder {
      color: #587599;
      }

      .item input:hover, .item select:hover, .item textarea:hover {
      border: 1px solid transparent;
      box-shadow: 0 0 6px 0 #6581a3;
      color: #587599;
      }
      .item {
      position: relative;
      margin: 10px 0;
      }

      .item i, input[type="date"]::-webkit-calendar-picker-indicator {
      position: absolute;
      font-size: 20px;
      color: #a9a9a9;
      }
      .item i {
      right: 2%;
      top: 30px;
      z-index: 1;
      }
      [type="date"]::-webkit-calendar-picker-indicator {
      right: 1%;
      z-index: 2;
      opacity: 0;
      cursor: pointer;
      }
      input[type=radio], input[type=checkbox]  {
      display: none;
      }
      label.radio {
      position: relative;
      display: inline-block;
      margin: 5px 20px 15px 0;
      cursor: pointer;
      }
      .radio span {
      margin-left: 30px;
      }
      label.radio:before {
      content: "";
      position: absolute;
      left: 0;
      width: 17px;
      height: 17px;
      border-radius: 50%;
      border: 2px solid #ccc;
      }
      input[type=radio]:checked + label:before, label.radio:hover:before {
      border: 2px solid #6581a3;
      }
      label.radio:after {
      content: "";
      position: absolute;
      top: 6px;
      left: 5px;
      width: 8px;
      height: 4px;
      border: 3px solid #6581a3;
      border-top: none;
      border-right: none;
      transform: rotate(-45deg);
      opacity: 0;
      }
      input[type=radio]:checked + label:after {
      opacity: 1;
      }
      .btn-block {
      margin-top: 10px;
      text-align: center;
      }
      button {
      width: 150px;
      margin-top: 6px;
      padding: 10px;
      border: none;
      border-radius: 5px; 
      background: #6581a3;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
      }
      button:hover {
      background: #6581a3;
      }
      @media (min-width: 568px) {
      .name-item, .city-item {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      }
      .name-item input, .city-item input {
      width: calc(50% - 20px);
      }
    .name-item p, .city-item p {
      width: calc(50% - 20px);
      }
      .city-item select {
      width: calc(50% - 8px);
      }
      }
    </style>

<script>
 

  export default {

    data: () => ({

      addressInfo: { 
          region: null,
          kebele: null,
          zone: null,
          houseNumber: null,
          wereda:null,
          residence:null



      }
    }),
    methods: {
        nextStep:function(){
            console.log(this.addressInfo);
        }
    },
    mounted() {
       
    }
  }
</script>