<template>
  <div class="w-screen bg-white flex items-center justify-center">
    <div
      class="w-screen max-w-6xl mt-medium mb-large box-shadow-pop bg-lightGrey-100"
    >
      <div class="flex mb-large mt-medium justify-center">
        <div class="w-64 h-40 container box-shadow-pop rounded-lg">
          <div class="mt-8">
            <div class="my-auto flex justify-center items-center">
              <h2 class="text-lightBlueB-500 text-2xl">{{ accepted.length }}</h2>
            </div>
            <div class="flex justify-center items-center">
              <h2 class=" text-lightBlueB-500 text-2xl">Accepted</h2>
            </div>
          </div>
        </div>
        <div class="flex justify-start flex-wrap ml-12">
          <div>
            <picture>
              <img
                style="border-radius: 50%"
                src="https://placeimg.com/95/95"
              />
            </picture>
            <h4 class="mt-2">Applicant Name</h4>
          </div>
        </div>
        <div class="ml-12 w-64 h-40  container box-shadow-pop rounded-lg">
          <div class="mt-8">
            <div class="my-auto flex justify-center items-center">
              <h2 class="text-red-200 text-2xl">{{rejected.length}}</h2>
            </div>
            <div class="flex justify-center items-center">
              <h2 class=" text-red-200 text-2xl">Rejected</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="">
          <svg
            width="40"
            height="60"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            @click="previous()"
            v-if="index != 0"
          >
            <polyline
              points="30 10 10 30 30 50"
              stroke="rgba(103,128,159,1)"
              stroke-width="3"
              stroke-linecap="butt"
              fill="none"
              stroke-linejoin="round"
            >
              &gt;
            </polyline>
          </svg>
        </div>

        <div class="flex flex-col justify-center items-center ml-large ">
          <div class="ml-medium">
            <label
              class="justify-center items-center ml-large text-grey-200 text-2xl"
            >
              {{ documentTypeName }}
            </label>
            <!-- <h5 class="ml-8 text-black-100 text-3xl">
              Addis Ababa
            </h5> -->
            <div class="flex justify-start flex-wrap">
              <!-- <div v-for="file in docs" v-bind:key="file.name">
                <Title class="" :message="file.name" />
                <picture>
                  <img :src="basePath + file.filePath" />
                </picture>
              </div> -->
              <picture>
                <img
                  v-bind:src="
                    'https://hrlicensurebe.dev.k8s.sandboxaddis.com/' +
                      docs[index].filePath
                  "
                />
              </picture>
              <!-- {{docs[0].filePath}} -->
            </div>
          </div>
          <div class="mt-medium" v-if="!showButtons">
            <button class="mr-medium" @click="accept(docs[index])">Accept</button>
            <button class="decline" @click="reject(docs[index])">Reject</button>
          </div>
          <div class="relative pt-1 mt-medium">
            <div
              class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-grey-100 w-screen max-w-2xl"
            >
              <div
                :style="width"
                class="shadow-none flex flex-col text-center whitespace-nowrap  justify-center bg-primary-400"
              ></div>
            </div>
          </div>
          <div>
            <div
              class="ml-10 h-3 relative max-w-xl rounded-full overflow-hidden"
            >
              <div class="w-full h-full absolute"></div>
              <div
                id="bar"
                class="transition-all ease-out duration-1000 h-full bg-green-500 relative w-0"
              ></div>
            </div>
          </div>
        </div>

        <div class="ml-large">
          <svg
            width="40"
            height="60"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            @click="next()"
            v-if="index != docs.length - 1"
            class="hover:text-primary-60"
          >
            <polyline
              points="10 10 30 30 10 50"
              stroke="rgba(103,128,159,1)"
              stroke-width="3"
              stroke-linecap="butt"
              fill="none"
              stroke-linejoin="round"
            >
              &gt;
            </polyline>
          </svg>
        </div>
      </div>

      <div class="flex justify-center items-center mb-medium" v-if="showButtons">
        <button class="" variant="outline" @click="action(buttons[0].action)">{{buttons[0].name}}</button>
        <button class="decline display bg-red-200" @click="action(buttons[1].action)">{{buttons[1].name}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    const newLicense = ref({
      declinedFields: "",
      remark: "",
      documents: [{ filePath: "" }],
      applicationStatus: {
        buttons: [{ action: "", name: "" }]
      }
    });
    let buttons = ref([
      { action: "", name: "" },
      { action: "", name: "" },
      { action: "", name: "" },
      { action: "", name: "" }
    ]);
    let documentTypes = ref([]);
    let documentTypeName = ref("");
    let docs = ref([{ filePath: "" }]);
    let index = ref(0);
    let amount = ref(1);
    let width = ref("width:11.11111%");
    let accepted = ref([]);
    let rejected = ref([]);
    let showButtons = ref(false);
    let disableNext = ref(true);
    let nextClickable = ref(false);
    let foundInRejected = ref(false);
    let foundInAcceptted = ref(false);
    const created = async () => {
      store
        .dispatch("reviewer/getApplication", route.params.applicationId)
        .then(res => {
          newLicense.value = res.data.data;
          buttons.value = res.data.data.applicationStatus.buttons;
          docs.value = res.data.data.documents;
          console.log(buttons.value);
        });
    };
    const fetchDocumentTypes = async () => {
      store.dispatch("reviewer/getDocumentTypes").then(res => {
        documentTypes.value = res.data.data;
        console.log(documentTypes.value);
      });
    };
    const next = () => {
      // alreadyIn.value == false;
      if (nextClickable.value == true) {
        index.value = index.value + 1;
        amount.value = ((index.value + 1) / docs.value.length) * 100;
        width.value = "width:" + amount.value + "%";
        findDocumentType(documentTypes.value, docs.value[index.value]);
        nextClickable.value = false;
      }
    };
    const previous = () => {
      index.value = index.value - 1;
      amount.value = ((index.value + 1) / docs.value.length) * 100;
      width.value = "width:" + amount.value + "%";
      findDocumentType(documentTypes.value, docs.value[index.value]);
      nextClickable.value = true;
    };
    const findDocumentType = (obj, ab) => {
      for (var prop in obj) {
        if (obj[prop].code == ab.documentTypeCode) {
          documentTypeName.value = obj[prop].name;
        }
      }
    };
    const accept = doc => {
      nextClickable.value = true;
      console.log(accepted.value.length);
      if (accepted.value.length > 0) {
        if (!accepted.value.includes(doc.documentTypeCode)) {
          accepted.value.push(doc.documentTypeCode);
          console.log(accepted.value);
          if (index.value == docs.value.length - 1) {
            showButtons.value = true;
          }
          console.log(rejected.value.includes(doc.documentTypeCode));
          if (rejected.value.includes(doc.documentTypeCode)) {
            console.log("Hehe");
            rejected.value.splice(rejected.value.indexOf(doc.documentTypeCode), 1);
          }
        }
      } else {
        accepted.value.push(doc.documentTypeCode);
        console.log(accepted.value);
        if (index.value == docs.value.length - 1) {
          showButtons.value = true;
        }
        console.log(rejected.value.includes(doc.documentTypeCode));
        if (rejected.value.includes(doc.documentTypeCode)) {
          console.log("Hehe");
          rejected.value.splice(rejected.value.indexOf(doc.documentTypeCode), 1);
        }
      }
      // accepted.value.push(doc.documentTypeCode);
      // console.log(accepted.value);
      // if (index.value == docs.value.length - 1) {
      //   showButtons.value = true;
      // }
    };

    const reject = doc => {
      nextClickable.value = true;
      console.log(rejected.value.length);
      if (rejected.value.length > 0) {
        if (!rejected.value.includes(doc.documentTypeCode)) {
          rejected.value.push(doc.documentTypeCode);
          console.log(rejected.value);
          if (index.value == docs.value.length - 1) {
            showButtons.value = true;
          }
          console.log(accepted.value.includes(doc.documentTypeCode));
          if (accepted.value.includes(doc.documentTypeCode)) {
            console.log("Hehe");
            accepted.value.splice(accepted.value.indexOf(doc.documentTypeCode), 1);
          }
        }
      } else {
        rejected.value.push(doc.documentTypeCode);
        console.log(rejected.value);
        if (index.value == docs.value.length - 1) {
          showButtons.value = true;
        }
        console.log(accepted.value.includes(doc.documentTypeCode));
        if (accepted.value.includes(doc.documentTypeCode)) {
          console.log("Hehe");
          accepted.value.splice(rejected.value.indexOf(doc.documentTypeCode), 1);
        }
      }
      // nextClickable.value = true;
      // rejected.value.push(doc.documentTypeCode);
      // if (index.value == docs.value.length - 1) {
      //   showButtons.value = true;
      // }
      // console.log(rejected.value);
    };

    const action = (actionValue) => {
      newLicense.value.declinedFields = rejected.value;
      let appId = newLicense.value.id;
      let req = {
        action: actionValue,
        data: newLicense.value
      };
      console.log(req);
      store.dispatch("newlicense/editNewLicense", req).then((res) => {
        console.log(res.data.data);
      });
    };

    onMounted(() => {
      created();
      fetchDocumentTypes();
      findDocumentType(documentTypes.value, docs.value[0]);
    });
    return {
      newLicense,
      index,
      docs,
      next,
      previous,
      amount,
      width,
      documentTypes,
      findDocumentType,
      documentTypeName,
      accepted,
      rejected,
      accept,
      reject,
      buttons,
      action,
      showButtons,
      disableNext,
      nextClickable,
      foundInRejected,
      foundInAcceptted
    };
  }
};
</script>
<style>
#accepte {
  border-color: tomato;
}
svg:hover {
  color: #000000;
  cursor: pointer;
}
.decline {
  background-image: linear-gradient(to right,#d63232, #e63636) !important;
}
</style>
