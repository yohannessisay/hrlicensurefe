<template> 
    <div class="ev-cont">
        <div class="cont">

            <h1>Personal Info</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th class="no-padding">Full Name</th>
                        <th>Gender</th>
                        <th>Nationality</th>
                        <th>Place of Birth</th>
                        <th>Date of Birth</th>
                        <th>Martial Status</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{personalInfo.firstName + " " +personalInfo.fatherName + " " + personalInfo.grandFatherName}}</td>
                        <td>{{personalInfo.gender}}</td>
                        <td>{{personalInfo.nationality}}</td>
                        <td>{{personalInfo.pob}}</td>
                        <td>{{personalInfo.dob}}</td>
                        <td>{{personalInfo.martialStatus}}</td>
                    </tr>
                </tbody>
            </table>
            <h1>Address Info</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>Region</th>
                        <th>Zone</th>
                        <th>Wereda</th>
                        <th>Kebele</th>
                        <th>House Number</th>
                        <th>Residence</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{address.region}}</td>
                        <td>{{address.zone}}</td>
                        <td>{{address.wereda}}</td>
                        <td>{{address.kebele}}</td>
                        <td>{{address.houseNumber}}</td>
                        <td>{{address.residence}}</td>
                    </tr>
                </tbody>
            </table>
            <h1>Contact</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>Mobile Number</th>
                        <th>Telephone Number</th>
                        <th>PO Box</th>
                        <th>Email</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{contact.mobileNumber}}</td>
                        <td>{{contact.telephoneNumber}}</td>
                        <td>{{contact.poBox}}</td>
                        <td>{{contact.email}}</td>
                    </tr>
                </tbody>
            </table>
            <div class="btn-block">
                <button @click.prevent="submit" href="/">Submit Profile</button>
            </div>
        </div>
    </div>        
</template>


<style scoped>
    .table {
        margin: 5px;
        padding: 5px;
    }
    .ev-cont {
      display: flex;
      justify-content: center;
      align-items: center;
      height: inherit;
      padding: 20px;
      }
    .cont {
      width: 80%;
      height: 70%;
      padding: 20px;
      border-radius: 6px;
      background: #fff;
      box-shadow: 0 0 25px 0 #6581a3; 
    }
    h1 {
      font-size: 18px;
      color: #365a86;
    }

    .table > thead > tr > th, table > thead > tr > td, .table > tbody > tr > td{
    border-top: none;
    line-height: 1.42857;
    padding: 12px;
    vertical-align: top;
    }
    .no-padding { 
        padding-left : 0px !important;
    }

    .btn-block {
      margin-top: 10px;
      text-align: center;
    }
    button {
      width: 150px;
      margin-top: 22px;
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
      
        contact: { 
            mobileNumber: '+251900000000',
            email: 'a@a.com',
            telephoneNumber: '940390303',
            poBox: '5445'
        },
        personalInfo: { 
            firstName: 'Eyouel',
            fatherName: 'Ame',
            grandFatherName: 'Someone',
            nationality: 'Ethiopian',
            pob: 'Addis Ababa',
            dob: '12/12/1995',
            gender:'male',
            martialStatus:'single'
        },      
        address: { 
          region: 'A.A',
          kebele: '11',
          zone: '04',
          houseNumber: '5670',
          wereda: '4232',
          residence: 'A.A res'
        }

    }),
    methods: {
        submit:function(){
            console.log(this.address);
        }
    },
    mounted() {
       
    }
  }
</script>