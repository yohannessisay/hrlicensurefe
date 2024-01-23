<template>
  <div v-if="letterType == 'FED'">
    <div contenteditable="true" class="p-2 m-2" id="temporaryPrintedDiv">
      <div class="grid grid-cols-2 mb-8 mt-24">
        <div class="flex justify-start" contenteditable="false">
          <img :src="qrSrc" alt="" style="height: 150px; width: 150px" />
        </div>
      </div>
      <h2 contenteditable="true">ለ__________________________</h2>
      <div class="text-center mb-8">
        <h2 class="mt-8">ስለ ውጭ ሃገር የጤና ባለሙያዎች ምዝገባ ጉዳይ</h2>
      </div>
      በቀን

      {{
        modalData && modalData.data && modalData.data.certifiedDate
          ? modalData.data.certifiedDate.slice(0, 10)
          : ""
      }}

      በቁጥር
      <span class="" contenteditable="true"> ___________________ </span>
      የተጻፈውን ደብዳቤ ይመለከታል። በቀረበው ጥያቄ መሰረት የተጠቃሹ የትምህርት ማስረጃ ከተገመገመ በሁዋላ በስማችው ትይዩ በተጠቀሰው
      ስያሜ
      <p>
        ከ <span>___/___/___</span> ዓ.ም ጀምሮ ለ
        <span class="">
          {{
            modalData && modalData.data && modalData.data.licenseExpirationDate
              ? Number(modalData.data.licenseExpirationDate.slice(0, 4)) -
                Number(new Date().toISOString().slice(0, 4))
              : ""
          }}</span
        >
        ዓመት የተመዘገቡ መሆኑን እና ከ
        <span class="">
          {{
            modalData && modalData.data && modalData.data.licenseExpirationDate
              ? Number(modalData.data.licenseExpirationDate.slice(0, 4)) -
                Number(new Date().toISOString().slice(0, 4))
              : ""
          }}</span
        >
        ዓመት በሁዋላ በሃገር ውስጥ ካሉ ፈቃዳቸው ማደስ እንደሚገባ እየገለጽን ይህን ፈቃድ ሰጥተናችዋል።
      </p>

      <div class="grid justify-items-center mt-8 mb-12" contenteditable="false">
        <table class="border text-center text-sm font-light">
          <thead class="border-b font-medium bg-primary-200">
            <tr>
              <th scope="col" class="border-r px-6 py-4">#ተ.ቁ</th>
              <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                የባለሙያ ስም
              </th>
              <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                የሙያ ስያሜ
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(educations, index) in modalData &&
              modalData.data &&
              modalData.data.educations
                ? modalData.data.educations
                : []"
              :key="educations.id"
              class="border-b dark:border-neutral-500"
            >
              <td
                class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500"
              >
                {{ index + 1 }}
              </td>
              <td contenteditable="false" class="whitespace-nowrap border-r px-6 py-4">
                {{
                  modalData && modalData.data && modalData.data.profile
                    ? modalData.data.profile.name +
                      " " +
                      modalData.data.profile.fatherName +
                      " " +
                      modalData.data.profile.grandFatherName
                    : []
                }}
              </td>
              <td class="whitespace-nowrap border-r px-6 py-4" contenteditable="false">
                {{ educations && educations.prefix ? educations.prefix.name : "" }}
                {{
                  educations && educations.isDropped != true
                    ? educations.professionType &&
                      educations.professionType.name == "other"
                      ? educations.otherProfessionType
                      : educations.professionType
                      ? educations.professionType.name
                      : ""
                    : ""
                }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h5 class="mt-8 text-right">//ከሰላምታ ጋር//</h5>
    </div>
  </div>
  <div class="p-8" v-else id="temporaryPrintedDiv">
    <div class="flex justify-end p-2 mt-40">
      <div class="grid grid-cols1">
        <h2 contenteditable="true">ቁጥር <span class="underline">አ/አ/ም/መ/ጤ/ክ/አስ</span></h2>
        <h2>Ref No</h2>
        <h2>
          ቀን
          <span class="underline">{{ new Date().toISOString().slice(0, 10) }}</span>
        </h2>
        <h2>Date</h2>
        <h2>
          File Number
          <span class="underline">{{
            modalData && modalData.data ? modalData.data.newLicenseCode : ""
          }}</span>
        </h2>
      </div>
    </div>
    <div class="p2">
      <h2 contenteditable="true">ለ <span class="underline">_______</span></h2>
      <h2 contenteditable="true" class="underline">አዲስ አበባ</h2>
    </div>

    <div class="flex justify-center">
      <h2 class="underline" contenteditable="true">ጉዳዩ:- የ ሙያ ስያሜን ይመለከታል</h2>
    </div>

    <div class="mt-12" contenteditable="true">
      {{
        modalData && modalData.data && modalData.data.profile
          ? `${modalData.data.profile.alternativeName} ${modalData.data.profile.alternativeFatherName} ${modalData.data.profile.alternativeGrandFatherName}`
          : ""
      }}
      የተባሉት የጤና ባለሙያ የሙያ ስያሜ ጠቅሰን እንድናሳዉቅ በቀን
      <span>{{ new Date().toISOString().slice(0, 10) }}</span>
      በተፃፈ ደብዳቤ በጠየቃቸሁን መሰረት ያቀረቡት ማስረጃ በቀን
      <span>{{ new Date().toISOString().slice(0, 10) }}</span>
      በእዲስ አበባ የምግብ እና መድኃኒት ባለሰልጣን ባለሙያዎች ብቃት ማረጋገጫ ዳይሬከቶሬት ያቀረቡት የትምህርት ማስረጃ ቀርቦ ከተመረመረ
      በኋላ በ
      <span contenteditable="false">
        <span
          v-for="education in modalData && modalData.data && modalData.data.educations
            ? modalData && modalData.data && modalData.data.educations
            : []"
          :key="education.id"
        >
          {{ education.professionType.name }}
        </span>
        <span class="ml-1" contenteditable="false">{{
          modalData && modalData.data ? modalData.data.newLicenseCode : ""
        }}</span>
      </span>
      ሙያ የተመዘገቡ መሆኑን ተረጋግጧል፡፡ ስለዚህ የሙያ ስያሜያቸው
      <span
        contenteditable="false"
        v-for="education in modalData && modalData.data && modalData.data.educations
          ? modalData && modalData.data && modalData.data.educations
          : []"
        :key="education.id"
      >
        {{ education.professionType.name }}
      </span>
      <span class="ml-1" contenteditable="false">{{
        modalData && modalData.data ? modalData.data.newLicenseCode : ""
      }}</span>
      መሆኑን እንገልፃለን፡፡
    </div>
    <div class="flex justify-end mt-20 mb-24">
      <div class="grid grid-cols-1">
        <h2 class="mr-8">ከሰላምታ ጋር</h2>
        <h2 class="mr-8 mt-12">
          {{
            modalData && modalData.data && modalData.data.licenseReviewer
              ? modalData.data.licenseReviewer.reviewer.amharic_name
              : ""
          }}
        </h2>
        የጤና ባለሙያዎች ፍቃድ አሰጣጥ ኦፊሰር
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["modalData", "qrSrc", "letterType"],
  setup() {},
};
</script>
<style scoped>
@import url("https://fonts.cdnfonts.com/css/times-new-roman");
* {
  font-family: "Times New Roman", sans-serif !important;
}
</style>
