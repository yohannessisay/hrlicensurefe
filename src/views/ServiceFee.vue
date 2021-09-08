<template>
  <div
    class="
      card-wrapper
      max-w-7xl
      bg-white
      sm:rounded-lg
      p-large
      flex flex-col
      justify-center
      items-center
      relative
      pt-8
      pb-8
    "
  >
    <button
      id="myCheck"
      class="absolute top-0 right-0 mr-2 mt-24"
      @click="$emit('serviceFeeModal', false)"
      variant="rounded"
    >
      <svg
        viewBox="0 0 329.269 329"
        xmlns="http://www.w3.org/2000/svg"
        class="close-svg fill-current text-primary-100 relative"
      >
        <path
          d="M194.8 164.77L323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
        />
      </svg>
    </button>
    <div id="holder" class="flex justify-center rounded mb-medium pb-4">
      <div class="w-screen max-w-4xl">
        <div class="flex flex-col pt-medium w-full rounded mb-medium">
          <TitleWithIllustration
            illustration="Certificate"
            message="Service Fee"
            class="mt-8"
          />
          <form
            @submit.prevent="submit"
            class="mx-auto max-w-3xl w-full mt-4 mb-small"
          >
            <div class="flex justify-center">
              <div>
                <span>
                  <h2>{{ serviceFeeName }}</h2>
                  <h2>{{ fileSize }}</h2>
                </span>
                <span v-if="showUpload">
                  <label class="text-primary-700"
                    >Upload Service Fee:
                    <div class="dropbox">
                      <input
                        type="file"
                        id="serviceFile"
                        class="photoFile"
                        ref="serviceFileP"
                        v-on:change="handleFileUpload()"
                        style="margin-bottom: 15px !important"
                        accept=".jpeg, .png, .gif, .jpg, .pdf, .tiff , .svg"
                      />
                      <p>
                        Drag your file(s) here to begin<br />
                        or click to browse
                      </p>
                    </div>
                  </label>
                </span>

                <picture v-if="!showUpload && isImage">
                  <p>
                    <a href="javascript:void(0)" @click="reset()"
                      >Upload again</a
                    >
                  </p>
                  <img v-bind:src="filePreview" v-show="showPreview" />
                </picture>

                <div v-if="!showUpload && isPdf">
                  <p>
                    <a href="javascript:void(0)" @click="reset()"
                      >Upload again</a
                    >
                  </p>
                  <embed v-bind:src="filePreview" v-show="showPreview" />
                </div>
                <span v-if="!showUpload && !isImage && !isPdf">
                  <img :src="filePreview" alt="" class="preview" />
                </span>
              </div>
            </div>
          </form>
          <div class="flex flex-col mt-4 ml-xl">
            <div>
              <label class="text-primary-700">Payment Slip</label>
            </div>
            <div>
              <input
                v-on:change="paymentSlipChange(paymentSlip)"
                class="max-w-3xl"
                type="number"
                v-model="paymentSlip"
              />
            </div>
          </div>
        </div>

        <div v-if="!message.showLoading" class="flex justify-center mb-10">
          <button @click="update()" variant="outline">
            Save as Draft
          </button>
          <button @click="save()">
            Submit Payment
          </button>
        </div>

        <div v-if="message.showLoading">
          <Spinner />
        </div>
      </div>
    </div>
  </div>

  <div class="mr-3xl" v-if="message.showFlash">
    <FlashMessage message="Operation Successful!" />
  </div>
  <div v-if="message.showErrorFlash">
    <ErrorFlashMessage message="Operation Failed!" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import FlashMessage from "@/sharedComponents/FlashMessage";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import Spinner from "@/sharedComponents/Spinner";

export default {
  components: {
    TitleWithIllustration,
    FlashMessage,
    ErrorFlashMessage,
    Spinner,
  },

  setup(props, { emit }) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const basePath = "https://storage.googleapis.com/hris-lisence-dev/";

    let message = ref({
      showFlash: false,
      showErrorFlash: false,
      showLoading: false,
    });
    let serviceFeeName = ref("");
    let fileSize = ref("");
    let serviceFile = ref("");
    let serviceFileP = ref("");
    let showPreview = ref(false);
    let filePreview = ref("");
    let showUpload = ref(true);
    let isImage = ref(true);
    let isPdf = ref(false);
    let documentSpecs = ref([]);
    let buttons = ref([]);
    let paymentSlip = ref("");

    let documents = ref([]);

    let dataChanged = ref(false);

    let id = ref("");
    let appType = ref("");
    let appID = ref("");

    const reset = () => {
      showUpload.value = true;
      showPreview.value = false;
      serviceFile.value = "";
      filePreview.value = "";
      isImage.value = true;
      fileSize.value = "";
      isPdf.value = false;
    };
    const handleFileUpload = () => {
      dataChanged.value = true;
      showUpload.value = false;
      serviceFile.value = serviceFileP.value.files[0];
      let reader = new FileReader();
      let fileS = serviceFile.value.size;
      serviceFeeName.value = serviceFile.value.name;
      if (fileS > 0 && fileS < 1000) {
        fileSize.value += "B";
      } else if (fileS > 1000 && fileS < 1000000) {
        fileSize.value = fileS / 1000 + "kB";
      } else {
        fileSize.value = fileS / 1000000 + "MB";
      }
      reader.addEventListener(
        "load",
        function() {
          showPreview.value = true;
          filePreview.value = reader.result;
        },
        false
      );
      if (serviceFile.value) {
        if (/\.(jpe?g|png|gif)$/i.test(serviceFile.value.name)) {
          isImage.value = true;
          reader.readAsDataURL(serviceFile.value);
        } else if (/\.(pdf)$/i.test(serviceFile.value.name)) {
          isImage.value = false;
          isPdf.value = true;
          reader.readAsDataURL(serviceFile.value);
        }
      }
    };
    onMounted(() => {
      message.value.showLoading = true;
      id = +localStorage.getItem("itemId");
      appType = localStorage.getItem("applicationType");
      store.dispatch("serviceFee/getApplicationStatuses").then((res) => {
        buttons.value = res.data.data[0].buttons;
        message.value.showLoading = false;
      });
      documentSpecs = store.getters[(appType + "/getDocumentSpecs", id)];
      store.dispatch(appType + "/getDraft", id).then((res) => {
        const results = res.data.data;
        documents = results.documents;
        appID = results.id;
        message.value.showLoading = false;
        for (let i = 0; i < documents.length; i++) {
          if (documents[i].documentTypeCode == "SF") {
            showUpload.value = false;
            isImage.value = true;
            serviceFile.value = documents[i];
            showPreview.value = true;
            filePreview.value = basePath + documents[i].filePath;
          }
        }
      });
    });
    const update = () => {};
    const paymentSlipChange = (payment) => {
      paymentSlip.value = payment;
    };
    const save = () => {
      message.value.showLoading = true;
      id = +localStorage.getItem("itemId");
      appType = localStorage.getItem("applicationType");
      let sendStr = "";
      if (appType == "newlicense") {
        sendStr = "newlicense";
      } else if (appType == "renewal") {
        sendStr = "renewal";
      } else if (appType == "goodstanding") {
        sendStr = "goodstanding";
      } else {
        sendStr = "verification";
      }
      store.dispatch(sendStr + "/getDraft", id).then((res) => {
        appType = localStorage.getItem("applicationType");
        const results = res.data.data;
        results.paymentSlip = paymentSlip.value;
        let saveObject = {
          save: {
            action: "UploadPaymentEvent",
            data: results,
          },
          appType: appType,
          id: id,
        };
        store.dispatch("serviceFee/addLicense", saveObject).then((res) => {
          if (res.data.status == "Success") {
            let formData = new FormData();
            formData.append("SF", serviceFile.value);
            let payload = { document: formData, id: id, appT: appType };
            store
              .dispatch("serviceFee/uploadDocuments", payload)
              .then((res) => {
                if (res.status == 200) {
                  message.value.showFlash = !message.value.showFlash;
                  message.value.showLoading = false;
                  setTimeout(() => {
                    location.reload(true);
                  }, 1500);
                } else {
                  showErrorFlash.value = !showErrorFlash.value;
                }
              })
              .catch((err) => {});
          }
        });
      });
    };
    return {
      serviceFile,
      serviceFileP,
      showPreview,
      filePreview,
      showUpload,
      isImage,
      isPdf,
      handleFileUpload,
      reset,
      documents,
      buttons,
      save,
      update,
      basePath,
      message,
      fileSize,
      serviceFeeName,
      paymentSlipChange,
      paymentSlip,
    };
  },
};
</script>
<style>
.card-wrapper {
  width: 600px;
  height: auto;
}
#holder {
  width: 600px;
  height: auto;
}
.photoFile {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 260px;
  position: absolute;
  cursor: pointer;
  border-radius: 0%;
}
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}

img {
  width: 250px;
  height: 250px;
  border-radius: 0px;
}
.withdraw {
  background-image: linear-gradient(to right, #d63232, #e63636) !important;
  color: white;
  border-color: tomato;
}
.close-svg {
  width: 16px;
}
</style>
