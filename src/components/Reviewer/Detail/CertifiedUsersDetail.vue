<template>
  <div class="bg-lightBlueB-200">
    <ReviewerNavBar tab="certifiedUsers" />
    <span v-if="!showLoading">
      <button @click="downloadPdf">Print</button>
      <div class="bg-lightBlueB-200 h-full">
        <div
          v-if="show"
          style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)"
          class="ml-8 mr-8 mb-12"
        >
          <div class="flex justify-center">
            <div
              style="
                width: 800px;
                height: 600px;
                padding: 20px;
                text-align: center;
                border: 10px solid #787878;
              "
              id="main"
            >
              <div
                style="
                  width: 750px;
                  height: 550px;
                  padding: 20px;
                  text-align: center;
                  border: 5px solid #787878;
                "
              >
                <span style="font-size: 50px; font-weight: bold"
                  >Certificate of Completion</span
                >
                <br /><br />
                <span style="font-size: 25px"
                  ><i>This is to certify that</i></span
                >
                <br /><br />
                <span style="font-size: 30px"
                  ><b
                    >{{ certifiedUser.name }} {{ certifiedUser.fatherName }}
                    {{
                      certifiedUser.grandFatherName != null
                        ? certifiedUser.grandFatherName
                        : ""
                    }}</b
                  ></span
                ><br /><br />
                <span style="font-size: 25px"
                  ><i>has completed the course</i></span
                >
                <br /><br />
                <span style="font-size: 30px">Health and Social Care</span>
                <br /><br />
                <span style="font-size: 20px"
                  ><b>with great distinction</b></span
                >
                <br /><br /><br /><br />
                <span style="font-size: 25px"><i>On May 19, 2021</i></span
                ><br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
    <span
      v-if="showLoading"
        class="flex justify-center justify-items-center mt-24"
      >
      <Spinner />
    </span>
  </div>
</template>
<script>
import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";
import Title from "@/sharedComponents/Title";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import store from "../../../store";
import Spinner from "@/sharedComponents/Spinner";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export default {
  computed: {
    // getCertifiedUser() {
    //   return store.getters['reviewer/getUnassigned'][0]
    // }
  },
  components: {
    Title,
    ReviewerNavBar,
    Spinner,
  },
  setup() {
    const store = useStore();
    let route = useRoute();
    let show = ref(false);
    let certifiedUser = ref({});
    let showLoading = ref(false);

    const fetchCertifiedUser = () => {
      showLoading.value = true;
      store
        .dispatch("profile/getProfileById", route.params.applicantId)
        .then((res) => {
          showLoading.value = false;
          certifiedUser.value = res.data.data;
          console.log("certified-+ use", certifiedUser.value);
          // profileInfo.value = res.data.data;
          show.value = true;
          // console.log(profileInfo.value);
        });
    };

    const downloadPdf = () => {
      // var canvas  = document.getElementById("main");
      // html2canvas(document.body).then(function(canvas) {
      //   var imageData = canvas.toDataURL('image/png')
      //   var doc = new jspdf();
      //   doc.addImage(imageData, 'PNG', 10, 10)
      //   doc.save('certi-1.pdf')
      // })
      window.html2canvas = html2canvas;
      var doc = new jsPDF("p", "pt", "a3");
      doc.html(document.querySelector("#main"), {
        callback: function (pdf) {
          console.log("start downloading", pdf);
          pdf.save("certeficate.pdf");
        },
      });
    };
    onMounted(() => {
      fetchCertifiedUser();
    });
    return {
      show,
      downloadPdf,
      certifiedUser,
      showLoading,
    };
  },
};
</script>
<style scoped>
</style>