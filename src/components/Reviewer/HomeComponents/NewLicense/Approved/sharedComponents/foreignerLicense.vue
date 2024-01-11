<template>
  <div>
    <div class="p-2 m-2" contenteditable="true" id="foreignersPrintedDiv">
      <div class="grid grid-cols-2 mt-32">
        <div class="flex justify-start" contenteditable="false">
          <img :src="qrSrc" alt="" style="height: 150px; width: 150px" />
        </div>
      </div>
      <h2 class="mt-8 ml-8" contenteditable="true">
        ለ፡____________________________________
      </h2>
      <h2 class="mt-8 ml-8" contenteditable="true">ጉዳዩ፡-የሙያ ስራ ፍቃድ ምዝገባን ይመለከታል</h2>
      <p class="mt-8 px-12 tracking-widest">
        በቀን
        {{
          modalData && modalData.data && modalData.data.certifiedDate
            ? modalData.data.certifiedDate.slice(0, 10)
            : ""
        }}
        ዓ.ም በቁጥር
        {{
          modalData && modalData.data && modalData.data.newLicenseCode
            ? modalData.data.newLicenseCode
            : ""
        }}. የተጻፈውን ደብዳቤ ለውጭ ሀገር ዜጋ የጤና ባለሙያ የሙያ ፍቃድ መጠየቃችሁ ይታወቃል፡፡ በዚህም መሰረት የቀረቡ የትምህርት
        ማስረጃዎች ከተገመገሙ በኃላ በስማቸው ትይዩ በተጠቀሰው ሥያሜ ከቀን
        {{
          modalData && modalData.data && modalData.data.certifiedDate
            ? modalData.data.certifiedDate.slice(0, 10)
            : ""
        }}
        ጀምሮ ለ ___. የተመዘገቡና የሙያ ፍቃድ የተሰጣቸው መሆኑን እየገለጽን፤ ጊዜአቸውን ጨርሰው ወይም አቋርጠው ተቋሙን ከለቀቁ ይህን
        የሙያ ፍቃድ ደብዳቤ ተመላሽ እንድታደርጉ እናሳስባለን፡፡
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
              class="border-b dark:border-neutral-500"
              v-for="(educations, index) in modalData &&
              modalData.data &&
              modalData.data.educations
                ? modalData.data.educations
                : []"
              :key="educations.id"
            >
              <td
                class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500"
              >
                {{ (index += 1) }}
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
              <td contenteditable="false" class="whitespace-nowrap border-r px-6 py-4">
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
      <div class="text-left ml-4 px-8">
        <h5 class="mt-4 text-right">//ከሰላምታ ጋር//</h5>
        <h5 class="mt-8">ግልባጭ</h5>
        <h5>ለ፡ብቃትና ሰው ሀብት አስተዳደር ስራ አስፈጻሚ አዲስ አበባ</h5>
        <h5>ጤና ሚኒስቴር</h5>
        <h5>ለ፡ጤናና ጤና-ነክ ተቋማት እና ባለሙያዎች ቁጥጥር መሪ ሥራ አስፈፃሚ</h5>
        <h5>ጤና ሚኒስቴር</h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["modalData", "qrSrc"],
  setup() {},
};
</script>
