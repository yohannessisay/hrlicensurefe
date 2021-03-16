<template>

    <div class="formbox">
      <form action="/">
        <div class="banner">
          <h1>Personal Information</h1>
        </div>

        <div class="item">
           <div class="left">
                <p class="">First Name</p>
                <div class="">
                    <input v-model ="personalInfo.firstName" type="text" name="name" placeholder="First" />
                </div>
           </div> 
           <div class="right">
                <p class="">Nationality</p>
                <div class="">
                    <input v-model ="personalInfo.nationality" type="text" name="name" placeholder="Nationality" />
                </div>
            </div>   
        </div>


        <div class="item">
           <div class="left">
                <p class="">Father Name</p>
                <div class="">
                    <input v-model ="personalInfo.fatherName" type="text" name="fatherName" placeholder="Father Name" />
                </div>
           </div> 
           <div class="right">
                <p class="">Place of birth(Optional)</p>
                <div class="">
                    <input v-model ="personalInfo.pob" type="text" name="placeOfBirth" placeholder="Place of Birth" />
                </div>
            </div>   
        </div>

        <div class="item">
           <div class="left">
                <p class="">Grand Father Name</p>
                <div class="">
                    <input v-model ="personalInfo.grandFatherName" type="text" name="gradFatherName" placeholder="Grand Father Name" />
                </div>
           </div> 
           <div class="right">
                <p>Date of birth(Optional)</p>
                <input v-model ="personalInfo.dob" type="date" name="bdate" required/>
                <i class="fas fa-calendar-alt"></i>
            </div>   
        </div>
        <div class="item">
           <div class="left">
                <div class="radio">
                    <p>Gender</p>
                    <div class="radio-option">
                        <div class="left-radio">
                            <input v-model ="personalInfo.gender" type="radio" value="male" id="male" name="gender"/>
                            <label for="male" class="radio"><span>Male</span></label>
                        </div>
                        <div class="left-radio">
                            <input v-model ="personalInfo.gender" type="radio" value="female" id="female" name="gender"/>
                            <label for="female" class="radio"><span>Female</span></label>
                        </div>
                    </div>
                </div>
           </div>  
           <div class="right">
                <div class="radio">
                    <p>Martial Status</p>
                    <div class="radio-option">
                        <div class="left-radio">
                            <input v-model ="personalInfo.martialStatus" type="radio" value="single" id="single" name="martial"/>
                            <label for="single" value="single" class="radio"><span>Single</span></label>
                        </div>
                        <div class="left-radio">
                            <input v-model ="personalInfo.martialStatus" type="radio" value="married" id="married" name="marital"/>
                            <label for="married" value = "married" class="radio"><span>Married</span></label>
                        </div>
                        <div class="right-radio">
                            <input v-model ="personalInfo.martialStatus" type="radio" value="divorced" id="divorced" name="marital"/>
                            <label for="divorced" value="divorced" class="radio"><span>Divorced</span></label>
                        </div>
                    </div>
                </div>
           </div>
           
        </div>
        <div class="item">
           <div class="left">
                <div class="">
                  <p>User Type</p>
                  <select class="" v-model="personalInfo.userType"> 
                      <option value="">Select User Type</option>
                      <!-- <option v-for="data in userType" value="data.id">{{data.name}}</option> -->
                  </select>
                </div>
           </div>  
           <div class="right">
                <div class="">
                  <p>Expert Level</p>
                  <select class="" v-model="personalInfo.expertLevel" @change="fetchExpertLevel"> 
                      <option value="">Select Expert Level</option>
                  </select>
                </div>
           </div>
           
        </div>
                <div class="item">
           <div class="left">
                <div class="">
                  <p>Health Office</p>
                  <select class="" v-model="personalInfo.healthOffice" @change="fetchHealthOffice"> 
                      <option value="">Select Health Office</option>
                  </select>
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

    </style>

<script>
 

  export default {

    data: () => ({

        personalInfo: { 
            firstName: null,
            grandFatherName: null,
            fatherName: null,
            nationality: null,
            pob: null,
            dob: null,
            gender:null,
            martialStatus:null,




        },
        userType: {},
        expertLevel: {},
        healthOffice: {}
    }),
    methods: {
        nextStep:function(){
            console.log(this.personalInfo);
        }
    },
    mounted() {
     axios
      .get('http://localhost:5000/api/lookups/userTypes')
      .then(response => (this.personalInfo.userType = response.data));
    }
  }
</script>