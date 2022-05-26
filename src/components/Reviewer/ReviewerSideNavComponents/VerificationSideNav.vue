<template>
  <div class="mb-2">
    <li class=" justify-start static">
      <transition name="slide-fade-to-left">
        <div class="">
          <div
          @click="changeIcon()"
            class=" justify-center items-center "
          >
            <div class="p-1 ">
              <h3 class="text-lightBlueB-500 mt-tiny">
                <span style="color: white;">
                  <i class="mr-2 fa fa-dashboard"></i>
                </span>
                <span class="text-lg" style="color: white; "
                  >Verification</span
                >
                 <i
                    v-if="!upIcon"
                    class="fas fa-chevron-circle-up float-right mt-2 text-white"
                  ></i>
                  <i
                    v-else
                    class="fas fa-chevron-circle-down float-right mt-2 text-white"
                  ></i>
              </h3>
            </div>
          </div>
        </div></transition
      >
    </li>
    <div v-if="!upIcon" class="ml-20">
            <div class="mb-4">
          <li @click="verficationHandler('verificationRequests')" class=" justify-start ">
            <transition name="slide-fade-to-left">
              <div class="mr-12 ">
                <div class=" justify-center items-center ">
                  <div class="">
                    <h3 class="text-lightBlueB-500 mt-tiny">
                      <span style="color: white;">
                        <i class="mr-2 fas fa-file-signature fa-x fa-light"></i>
                      </span>
                      <span style="color: white; ">Requests</span>
                    </h3>
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </div>
                <div class="mb-4">
          <li @click="verficationHandler('verificationResponses')" class=" justify-start ">
            <transition name="slide-fade-to-left">
              <div class="mr-12 ">
                <div class=" justify-center items-center ">
                  <div class="">
                    <h3 class="text-lightBlueB-500 mt-tiny">
                      <span style="color: white;">
                        <i class="mr-2 fas fa-file-signature fa-x fa-light"></i>
                      </span>
                      <span style="color: white; ">Responses</span>
                    </h3>
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </div>
        </div>
  </div>
</template>

<script>
import { ref,  } from "vue";

export default {
    
    setup(props, {emit}) {
      let upIcon = ref(true)
        const verficationHandler = (menu) => {
            emit("selectVerificationMenu", menu);
        }
        const changeIcon = () =>
        {
          upIcon.value = !upIcon.value;
        }

        return {
            verficationHandler,
            changeIcon,
            upIcon
        }
    }
}
</script>
