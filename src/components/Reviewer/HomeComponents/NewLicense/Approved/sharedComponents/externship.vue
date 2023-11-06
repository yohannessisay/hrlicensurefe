<template>
  <div>
    <div class="p-8 m-8" contenteditable="true" id="externshipPrintedDiv">
      <div class="grid grid-cols-2 mb-8 mt-24">
        <div class="flex justify-start" contenteditable="false">
          <img :src="qrSrc" alt="" style="height: 150px; width: 150px" />
        </div>
      </div>
      <h5 class="mt-4">ለ፡____________________________________</h5>
      <h5 class="mt-4">
        ጉዳዩ፡-ከውጭ ሀገር ትምህርታቸውን አጠናቀው ስለመጡ ኢትዮጵያዊያን Externship መመደብን ይመለከታል፡፡
      </h5>
      <p class="mt-8 px-8 tracking-widest">
        ከዚህ በታች ስሟ（ሙ） በሰንጠረዡ የተገለፁው የጤና ባለሙያ
        <span
          v-for="education in modalData && modalData.data && modalData.data.educations
            ? modalData.data.educations
            : []"
          :key="education.id"
        >
          {{
            `በ ________ ሀገር ከሚገኘው  
                  ${education.institution.name} 
                  በ
                  ${education && education.prefix ? education.prefix.name : ""} ${
              education &&
              education.isDropped != true &&
              education.professionType &&
              education.professionType.name == "other"
                ? education.otherProfessionType
                : education.professionType
                ? education.professionType.name
                : ""
            }, `
          }}
        </span>
        የትምህርት መስክ በመከታተል ኢትዮጵያ ውስጥ ኤክስተርንሽፕ (Externship) ለመስራት በቀን___________ቀርቦ ከተገመገመ
        በኃላ____________________________በሚል ፀድቆላቸዋል፡፡ ስለዚህም ልምምዱን ከ__/__/__ ጀምሮ
        ለ_________________________እንዲከታተሉ የተመደቡ መሆኑን እየገለጽን፤የትምህርት ተቋሙ
        በ_______________________መጨረሻ ላይ አስፈላጊውን፤ግምገማ በማድረግ የባለሙያዋን/ውን ውጤት እንድታሣውቁን
        እንጠይቃለን፡፡
      </p>

      <div class="grid justify-items-center mt-8">
        <table class="border text-center text-sm font-light">
          <thead class="border-b font-medium bg-primary-200">
            <tr>
              <th scope="col" class="border-r px-6 py-4">#ተ.ቁ</th>
              <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                የባለሙያ ስም
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-neutral-500">
              <td
                class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500"
              >
                1
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
            </tr>
          </tbody>
        </table>
      </div>
      <h5 class="mt-8 text-right">//ከሰላምታ ጋር//</h5>
      <div class="text-left mt-8">
        <h5>ግልባጭ</h5>
        <h5>ለ፡ጤናና ጤና-ነክ ተቋማት እና ባለሙያዎች ቁጥጥር መሪ ሥራ አስፈፃሚ ጤና ሚኒስቴር</h5>
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
