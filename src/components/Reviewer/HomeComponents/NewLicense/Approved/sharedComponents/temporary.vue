<template>
  <div>
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
</template>
<script>
export default {
  props: ["modalData", "qrSrc"],
  setup() {},
};
</script>
