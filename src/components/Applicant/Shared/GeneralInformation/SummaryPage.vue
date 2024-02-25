<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <div class="container xl:max-w-6xl mx-auto">
    <!-- Heading start -->
    <header
      :class="
        isDarkMode
          ? 'text-center mx-auto mb-12 lg:px-20 mt-8 sm:mt-0 text-primary-200'
          : 'text-center mx-auto mb-12 lg:px-20 mt-8 sm:mt-0 text-main-400'
      "
    >
      <h2 class="text-3xl leading-normal mb-2 font-bold">
        {{ $t("Summary For New License Application") }}
      </h2>

      <h2 class="text-black leading-relaxed font-light text-lg mx-auto pb-2">
        {{ $t("Here is the detail you have filled in so far") }}
      </h2>
    </header>
    <!-- Department Info -->
    <div class="grid grid-cols-1 gap-4 mr-1 sm:grid-cols-3">
      <div
        :class="
          isDarkMode
            ? 'sm:py-8  p-2 sm:px-12 mb-4 bg-gray-50 rounded-md transform transition duration-300 ease-in-out bg-secondaryDark hover:-translate-y-2'
            : 'sm:py-8  p-2 sm:px-12 mb-4 bg-gray-50 rounded-md transform transition duration-300 ease-in-out bg-white hover:-translate-y-2'
        "
        v-for="dep in multipleDepartment"
        :key="dep"
      >
        <div class="border-b-2 text-main-400 mb-4">
          <div class="text-gray-900 mb-4 flex justify-center">
            <i
              :class="
                isDarkMode
                  ? 'fa fa-university fa-3x text-primary-200'
                  : 'fa fa-university fa-3x text-main-400'
              "
            ></i>
          </div>
          <div class="flex justify-center text-gray-900 mb-4">
            <h3
              :class="
                isDarkMode
                  ? 'text-lg text-primary-200 leading-normal mb-2 font-semibol'
                  : 'text-lg text-main-400 leading-normal mb-2 font-semibold t'
              "
            >
              {{ $t("Department Detail") }}
            </h3>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <h2
              :class="
                isDarkMode
                  ? 'text-primary-200 font-bold text-xl'
                  : 'text-main-400 font-bold text-xl'
              "
            >
              {{ $t("Department") }}
            </h2>
          </div>
          <div>
            <h2
              :class="
                isDarkMode
                  ? 'text-primary-200 text-lg'
                  : 'text-grey-800 text-lg'
              "
            >
              {{ dep.department.name }}
            </h2>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <h2
              :class="
                isDarkMode
                  ? 'text-primary-200 font-bold text-xl'
                  : 'text-main-400 font-bold text-xl'
              "
            >
              {{ $t("Education Level") }}
            </h2>
          </div>
          <div>
            <h2
              :class="
                isDarkMode
                  ? 'text-primary-200 text-lg'
                  : 'text-grey-800 text-lg'
              "
            >
              {{
                dep.educationLevel
                  ? dep.educationLevel.name
                  : dep.educationalLevel
                  ? dep.educationalLevel.name
                  : ""
              }}
            </h2>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <h2
              :class="
                isDarkMode
                  ? 'text-primary-200 font-bold text-xl'
                  : 'text-main-400 font-bold text-xl'
              "
            >
              {{ $t("Institution") }}
            </h2>
          </div>
          <div>
            <h2
              :class="
                isDarkMode
                  ? 'text-primary-200 text-lg'
                  : 'text-grey-800 text-lg'
              "
            >
              {{ dep.institution.name }}
            </h2>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <h2
              :class="
                isDarkMode
                  ? 'text-primary-200 font-bold text-xl'
                  : 'text-main-400 font-bold text-xl'
              "
            >
              {{ $t("Professional Type") }}
            </h2>
          </div>
          <div>
            <h2
              :class="
                isDarkMode
                  ? 'text-primary-200 text-lg'
                  : 'text-grey-800 text-lg'
              "
            >
              {{
                dep.professionType
                  ? dep.professionType.name
                  : dep.professionalType
                  ? dep.professionalType.name
                  : ""
              }}
            </h2>
          </div>
        </div>
      </div>
    </div>

    <!-- Uploaded Files -->
    <div v-if="isSubmitOrDraft" class="vld-parent mt-4">
      <loading
        :active="fileIsLoading"
        :is-full-page="false"
        :color="'#2F639D'"
        :opacity="0.6"
        class="rounded-md"
      ></loading>
      <div class="mt-8">
        <div
          :class="
            isDarkMode
              ? 'bg-secondaryDark flex-shrink px-4 w-full rounded-md text-primary-200'
              : 'bg-white flex-shrink px-4 w-full rounded-md text-main-400'
          "
        >
          <div
            class="py-8 px-2 sm:px-12 mb-12 bg-gray-50 border-b border-white"
          >
            <div class="border-b-2 mb-4">
              <div class="text-gray-900 mb-4 flex justify-center">
                <i class="fa fa-folder fa-3x"></i>
              </div>
              <div class="flex justify-center text-gray-900 mb-4">
                <h3 class="text-3xl leading-normal mb-2 font-semibold">
                  {{ $t("Files Uploaded") }}
                </h3>
              </div>
              <h2
                class="text-xl"
                v-if="
                  (changedDocs && changedDocs.length > 0) || localFileImages
                "
              >
                {{ $t("New Files") }}
              </h2>
            </div>

            <div>
              <div
                v-if="changedDocs && changedDocs.length > 0"
                class="grid grid-cols-1 sm:grid-cols-4 gap-4"
              >
                <div
                  class="mt-4 mb-8 border-4 rounded-md transform transition duration-300 ease-in-out p-2 hover:-translate-y-2"
                  v-for="changed in changedDocs"
                  :key="changed.id"
                >
                  <h4 class="font-bold m-2">{{ $t("Document Type") }}</h4>
                  <h6 class="m-2">{{ changed.docName }}</h6>
                  <div class="flex justify-center rounded-lg p-4">
                    <div class="rounded-md border p-2">
                      {{ $t("Previous") }}
                      <a
                        :href="changed.prevFile"
                        :data-title="changed.docName"
                        data-lightbox="example-2"
                      >
                        <img
                          :src="changed.prevFile"
                          class="w-full h-48 object-cover"
                        />
                      </a>
                    </div>

                    <div class="bg-main-400 rounded-md ml-2 border p-2">
                      <span class="text-white"> {{ $t("New") }}</span>
                      <a
                        :href="changed.newFile"
                        :data-title="changed.docName"
                        data-lightbox="example-2"
                      >
                        <img
                          :src="changed.newFile"
                          class="w-full h-48 object-cover rounded-lg"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-if="localFileImages"
                class="grid grid-cols-1 sm:grid-cols-4 gap-4"
              >
                <div
                  class="mt-4 mb-8 border-4 rounded-md transform transition duration-300 ease-in-out p-2 hover:-translate-y-2"
                  v-for="newDoc in localFileImages"
                  :key="newDoc.id"
                >
                  <h4 class="font-bold m-2">
                    {{ $t("Document Type") }}
                  </h4>
                  <h6 class="m-2">{{ newDoc.documenttype }}</h6>
                  <div class="flex justify-center rounded-lg p-4">
                    <a
                      :href="newDoc.image"
                      :data-title="newDoc.documenttype"
                      data-lightbox="example-2"
                    >
                      <img
                        :src="newDoc.image"
                        class="w-full h-48 object-cover rounded-lg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header mb-0" id="headingOne">
                  <a
                    class="relative hover:bg-grey-400 flex items-center w-full pt-4 h-2 bg-grey-300 focus:bg-grey-300 transition focus:outline-none hover:border-main-400 rounded-md"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {{ $t("Previously uploaded files") }}
                  </a>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body py-4 sm:px-5">
                    <div
                      class="grid grid-cols-1 sm:gap-4 sm:ml-4 sm:w-full sm:grid-cols-4"
                    >
                      <div
                        v-if="!professionChanged"
                        class="mt-4 mb-8 border rounded-md transform transition duration-300 ease-in-out sm:p-2 hover:-translate-y-2"
                        v-for="prev in prevDocs"
                        :key="prev.id"
                      >
                        <h4 class="font-bold sm:m-2">
                          {{ $t("Document Type") }}
                        </h4>
                        <h6 class="m-2 border rounded-md p-1 shadow-md">
                          {{ prev.documentType ? prev.documentType.name : "" }}
                        </h6>
                        <div class="flex justify-center rounded-lg p-4">
                          <div class="rounded-md p-2">
                            <a
                              :href="googleApi + prev.filePath"
                              :data-title="prev.docName"
                              data-lightbox="example-2"
                            >
                              <img
                                :src="googleApi + prev.filePath"
                                class="w-full h-48 object-cover"
                              />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div
                        v-else
                        class="mt-4 mb-8 rounded-md transform transition duration-300 ease-in-out p-2 hover:-translate-y-2"
                        v-for="prev in prevDocs"
                        :key="prev.docName"
                      >
                        <h4 class="font-bold m-2">
                          {{ $t("Document Type") }}Document Type
                        </h4>
                        <h6 class="m-2">
                          {{ prev.documentType ? prev.documentType.name : "" }}
                        </h6>
                        <div class="flex justify-center rounded-lg p-4">
                          <div class="rounded-md p-2">
                            <a
                              :href="prev.path"
                              :data-title="prev.docName"
                              data-lightbox="example-2"
                            >
                              <img
                                :src="prev.path"
                                class="w-full h-48 object-cover"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="mt-8 grid grid-cols-1 gap-4">
      <div
        :class="
          isDarkMode
            ? 'bg-secondaryDark flex-shrink px-4 w-full rounded-md text-primary-200'
            : 'bg-white flex-shrink px-4 w-full rounded-md text-main-400'
        "
      >
        <div class="py-8 px-2 sm:px-12 mb-12 bg-gray-50 border-b border-white">
          <div class="border-b-2 mb-4">
            <div class="text-gray-900 mb-4 flex justify-center">
              <i class="fa fa-folder fa-3x -text-main-400"></i>
            </div>
            <div class="flex justify-center text-gray-900 mb-4">
              <h3 class="text-3xl leading-normal mb-2 font-semibold">
                {{ $t("Files Uploaded") }}
              </h3>
            </div>
          </div>
         
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full">
            <div
              class="mt-4 mb-2 sm:mb-8 border p-2 rounded-md transform transition duration-300 ease-in-out hover:-translate-y-2"
              v-for="localFileData in updatedLocalImages?updatedLocalImages[0].data:[]"
              :key="localFileData.documenttype"
            >
           
              <div class="flex justify-center">
                <div class="mt-4 rounded-md">
                  <a
                    v-if="!isPDF(localFileData.fileName)"
                    :href="localFileData.image"
                    :data-title="localFileData.documenttype"
                    data-lightbox="example-2"
                  >
                    <img
                      :src="localFileData.image"
                      class="w-full h-48 object-cover"
                    />
                  </a>
                  <div v-else class="m-4 p-2 bg-primary-300 rounded-md">
                    {{
                      $t(
                        "The file is uploaded but since it is not an image type this is a placeholder"
                      )
                    }}
                  </div>

                  <h4 class="font-bold border-b m-2">
                    {{ $t("Document Type") }}
                  </h4>
                  <h6 class="m-2">{{ localFileData.documenttype }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 grid grid-cols-1">
      <div
        :class="
          isDarkMode
            ? 'bg-secondaryDark flex-shrink px-4 w-full rounded-md text-primary-200'
            : 'bg-white flex-shrink px-4 w-full rounded-md text-main-400'
        "
      >
        <div
          class="py-2 px-4 mb-12 bg-gray-50 border-b border-white transform transition duration-300 ease-in-out hover:-translate-y-2"
        >
          <div class="mb-4">
            <div class="flex justify-center m-2">
              <h2 class="form-label text-lg inline-block mb-2">
                {{ $t("Feedback on the process and system") }}
                <span class="text-yellow-300">({{ $t("Optional") }}*)</span>
              </h2>
            </div>

            <div class="mb-3 w-full flex justify-center">
              <input
                v-model="localGeneralInfo.feedback"
                @keyup="$emit('checkAgreement', localGeneralInfo.feedback)"
                :class="
                  isDarkMode
                    ? 'form-control block w-full bg-primary-200 text-lg text-main-400 px-3 py-1.5   rounded transition ease-in-out m-0'
                    : 'form-control block w-full border text-main-400 px-3 py-1.5 text-xl   rounded transition ease-in-out m-0  '
                "
                id="feedback"
                rows="6"
                placeholder="Your feedback"
                type="textarea"
              />
            </div>

            <div class="flex justify-center text-gray-900 mb-4 mt-4">
              <div class="form-check">
                <input
                  class="form-check-input appearance-none h-8 w-8 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-blue-600 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  :value="localAgreed"
                  @change="agreement"
                  :disabled="localAgreed"
                  id="agreed"
                />
              </div>
              <h3 class="mb-2 sm:text-lg text-lg">
                {{
                  $t(
                    "By checking here I hereby verify the documents and details filled in are legal."
                  )
                }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref, watch } from "vue";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  components: { Loading },
  emits: ["changeAgreement"],
  props: [
    "multipleDepartment",
    "generalInfo",
    "fileIsLoading",
    "localFileImages",
    "professionChanged",
    "changedDocs",
    "prevDocs",
    "isDarkMode",
    "googleApi",
    "isSubmitOrDraft",
    "localFileData",
  ],
  setup(props, { emit }) {
    const generalInfo = computed(() => props.generalInfo);
    const localImage = computed(() => props.localFileData);
    let updatedLocalImages = ref([]);
    let localGeneralInfo = ref(generalInfo.value);
    let localAgreed = ref(false);
    const agreement = () => {
      localAgreed.value = !localAgreed.value;
      emit("changeAgreement", localAgreed);
    };
    const isPDF = (filename) => {
      if (filename && filename != "" && filename.length > 0) {
        const parts = filename.split(".");
        const isPdf =
          parts.length > 1 ? parts[parts.length - 1].toLowerCase() : "";
        return isPdf === "pdf";
      } else {
        return false;
      }
    };
    watch(localImage, () => {
      console.log(localImage);
      updatedLocalImages.value = localImage.value;
    });
    return {
      localGeneralInfo,
      localAgreed,
      agreement,
      isPDF,
      updatedLocalImages,
    };
  },
};
</script>