<template>
  <div
    class=" overflow-y-auto overflow-x-hidden shadow-xl  fixed lg:sticky h-screen lg:h-auto z-40 top-0 bg-gray-900 pt-4"
  style="max-width: 380px; background: #285180;"
  >
    <div class="px-8 h-screen" >
   <!--  -->
 <ul class="py-1 ">
        <div class="mb-3">
          <li @click="selectMenu(1)" class=" justify-start ">
            <transition name="slide-fade-to-left">
              <div
                class="mr-12 "
              >
                <div class=" justify-center items-center ">
                  <div class="p-1 ">
                    <h3 class="text-lightBlueB-500 mt-tiny">
                      <span style="color: white;">
                        <i
                          class="fas fa-file-signature fa-x fa-light"
                        ></i> </span
                      >
                      <span style="color: white; ">Draft</span>
                    </h3>
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </div>
         <div class="mb-3">
            <li @click="selectMenu(2)" class=" justify-start ">
            <transition name="slide-fade-to-left">
              <div
                class="mr-12 "
              >
                <div class=" justify-center items-center ">
                  <div class="p-1 ">
                   <h3 class="text-lightBlueB-500 mt-tiny">
                      <span style="color: white;">
                        <i
                          class="mr-2 fas fa-exchange-alt fa-x fa-light"
                        ></i> </span
                      >
                       <span style="color: white; ">Withdrawn</span>
                    </h3>

                  </div>
                </div>
              </div>
            </transition>
          </li>
        </div>
     

        <div class="mb-3">
            <li @click="submittedDD" class=" justify-start ">
               <div v-if="dropdown.submitted" class="dropdown-menu absolute  shadow-md mt-10 ml-1 " style="color: #648ea3; width: 200px;">
    
            <ul class="block w-full bg-white shadow float-right ">
                <li @click="selectMenu(3)"> 
                      <!-- <span style="color: #648ea3;"> -->
                        <p class=" text-sm" style="color: #648ea3; ">
                        <i
                          class="mr-2 far fa-address-book fa-x fa-light"
                        ></i>
                    Submitted</p>
                    </li>
                <li @click="selectMenu(4)" > 
                      <!-- <span style="color: #648ea3;"> -->
                       <p class=" text-sm" style="color: #648ea3; ">
                        <i
                          class="mr-2 far fa-address-book fa-x fa-light"
                        ></i>In Review</p></li>
               
            </ul>
        
    
</div>
      
            <transition name="slide-fade-to-left">
              <div
                class="mr-12 "
              >
                <div class=" justify-center items-center ">
                  <div class="p-1 ">
                   <h3 class="text-lightBlueB-500 mt-tiny">
                      <span style="color: white;">
                       <i
                          class="mr-2 far fa-address-book fa-x fa-light"
                        ></i> </span
                      >
                       <span style="color: white; ">submitted</span>
                    </h3>

                  </div>
                </div>
                       </div>
            </transition>
          </li>
        </div>


 <div class="mb-3">
            <li @click="approvedDD" class=" justify-start ">
               <div v-if="dropdown.approved" class="dropdown-menu absolute  shadow-md mt-10 ml-1 " style="color: #648ea3; width: 200px;">
    
            <ul class="block w-full bg-white shadow float-right">
                <li @click="selectMenu(5)"> 
                      <!-- <span style="color: #648ea3;"> -->
                       <p  class=" text-sm" style="color: #648ea3; ">
                        <i
                          class="mr-2 far fa-thumbs-up fa-x fa-light"
                        ></i>
                    Approved </p>
                    </li>
                <li @click="selectMenu(6)" > 
                      <!-- <span style="color: #648ea3;"> -->
                        <p class=" text-sm" style="color: #648ea3; ">
                       <i
                          class="mr-2 far fa-thumbs-up fa-x fa-light"
                        ></i>Approved Payment</p></li>
               
            </ul>
        
    
</div>
            <transition name="slide-fade-to-left">
              <div
                class="mr-12 "
              >
                <div class=" justify-center items-center ">
                  <div class="p-1 ">
                   <h3 class="text-lightBlueB-500 mt-tiny">
                     <span style="color: white;">
                        <i
                          class="mr-2 far fa-thumbs-up fa-x fa-light"
                        ></i> </span
                      >
                       <span style="color: white; ">Approved</span>
                    </h3>

                  </div>
                </div>
               


              </div>
            </transition>
          </li>
        </div>


     
        <!-- <div>
          <li @click="selectMenu(4)" class="w-1/2 flex justify-start mb-6">
            <transition name="slide-fade-to-left">
              <div
                class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
              >
                <div class="flex justify-center items-center w-48 h-20">
                  <div class="p-1">
                    <div class="flex content-center justify-center"></div>

                    <h3 class="text-lightBlueB-500 mt-tiny">
                      <span style="color: #648ea3;">
                        <i
                          class="mr-2 far fa-id-card fa-3x fa-light"
                        ></i> </span
                      >In Review
                    </h3>
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </div> -->
        
<div class="mb-3">
            <li @click="declinedDD" class=" justify-start ">
              <div v-if="dropdown.declined" class="dropdown-menu absolute  shadow-md mt-10 ml-1 " style="color: #648ea3; width: 200px;">
    
            <ul class="block w-full bg-white shadow float-right">
                <li @click="selectMenu(7)" > 
                      <!-- <span style="color: #648ea3;"> -->
                        <p class=" text-sm" style="color: #648ea3; ">
                        <i
                          class="mr-2 far fa-address-book fa-x fa-light"
                        ></i>
                    Declined</p>
                    </li>
                <li  @click="selectMenu(8)" > 
                      <!-- <span style="color: #648ea3;"> -->
                     <p class=" text-sm" style="color: #648ea3; ">
                        <i
                          class="mr-2 far fa-address-book fa-x fa-light"
                        ></i>Declined Payment</p></li>
               
            </ul>
        
    
</div>
            <transition name="slide-fade-to-left">
              <div
                class="mr-12 "
              >
                <div class=" justify-center items-center ">
                  <div class="p-1 ">
                   <h3 class="text-lightBlueB-500 mt-tiny">
                      <span style="color: white;">
                        <i
                          class="mr-2 far fa-thumbs-down fa-x fa-light"
                        ></i> </span
                      >
                       <span style="color: white; ">Declined</span>
                    </h3>

                  </div>
                </div>
                


              </div>
            </transition>
          </li>
        </div>

        <!-- <div>
          <li @click="selectMenu(6)" class="w-1/2 flex justify-start mb-6">
            <transition name="slide-fade-to-left">
              <div
                class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
              >
                <div class="flex justify-center items-center w-48 h-20">
                  <div class="p-1">
                    <div class="flex content-center justify-center"></div>

                    <h3 class="text-lightBlueB-500 mt-tiny">
                      <span style="color: #648ea3;">
                        <i
                          class="mr-2 fa fa-money-bill fa-3x fa-light"
                        ></i> </span
                      >Approved Payment
                    </h3>
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </div> -->
   

<div class="mb-3">
          <li @click="selectMenu(9)" class=" justify-start ">
            <transition name="slide-fade-to-left">
              <div
                class="mr-12 "
              >
                <div class=" justify-center items-center ">
                  <div class="p-1 ">
                    <h3 class="text-lightBlueB-500 mt-tiny">
                     <span style="color: white;">
                        <i
                          class="mr-2 far fa-id-badge fa-x fa-light"
                        ></i> </span
                      >
                       <span style="color: white; ">Under Supervision</span>
                    </h3>
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </div>


        <!-- <div>
          <li @click="selectMenu(8)" class="w-1/2 flex justify-start mb-6">
            <transition name="slide-fade-to-left">
              <div
                class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
              >
                <div class="flex justify-center items-center w-48 h-20">
                  <div class="p-1">
                    <div class="flex content-center justify-center"></div>

                    <h3 class="text-lightBlueB-500 mt-tiny">
                      <span style="color: #648ea3;">
                        <i
                          class="mr-2 fa fa-credit-card-alt fa-3x fa-light"
                        ></i> </span
                      >Declined Payment
                    </h3>
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </div> -->
      
      </ul>
<!--  -->
    </div>
  </div>
</template>
<script>
import Navigation from "@/views/Navigation";
import { ref } from "vue";
export default {
  props: ["display"],
  components: {
    Navigation,
  },
  data() {
    return {};
  },
  methods: {
    selectMenu(menu) {
      this.$emit("changeDisplay", menu);
    },
  },
  setup()
  {
        let dropdown =ref({
       submitted: false,
       approved:false,
       declined:false
     });

 const submittedDD =()=>
  {
    dropdown.value.submitted=!dropdown.value.submitted;
dropdown.value.approved=false;
dropdown.value.declined=false;
  }
   const approvedDD =()=>
  {
    dropdown.value.approved=!dropdown.value.approved;
dropdown.value.submitted=false;
dropdown.value.declined=false;
  }
   const declinedDD =()=>
  {
    console.log("declined clicked");
    dropdown.value.declined=!dropdown.value.declined;
dropdown.value.approved=false;
dropdown.value.submitted=false;
  }


return {
      dropdown,
      submittedDD,
      approvedDD,
      declinedDD
    };

  }

};
</script>
