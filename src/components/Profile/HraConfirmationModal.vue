<template>
  <div
    :class="
      isDarkMode
        ? 'card-wrapper max-w-4xl bg-secondaryDark text-white rounded-md p-4 mb-4 justify-center tracking-wide relative'
        : 'card-wrapper max-w-4xl bg-white p-4 mb-4 text-grey-800 rounded-md shadow-md justify-center tracking-wide relative'
    "
  >
    <div class="border p-4 rounded-md">
      <h2 class="font-bold text-xl tracking-wide border-b-4">
        Kindly note that if you are currently employed as a public servant and
        your information is already registered in the Ministry of Health Human
        Resource Administration (HRA) database through your health facility,
        please click on the "YES" button to fetch your data from the HRA
        database by providing your Employee ID and File Number. OR You can click
        on "NO" button and fill out your profile as new
      </h2>
      <h2 class="mt-4 font-bold text-xl tracking-wide">
        በአሁን ሰአት በህዝብ አገልጋይነት ተቀጥረው የሚሰሩ ከሆነ እና መረጃዎ በጤና ተቋምዎ በኩል በጤና ጥበቃ ሚኒስቴር
        የሰው ሃብት አስተዳደር (HRA) ዳታቤዝ ውስጥ የተመዘገበ ከሆነ እባክዎን መረጃዎን ከሲስትሙ(HRA) ላይ ለማምጣት
        አዎ የሚለውን ቁልፍ ይጫኑ ።በመቀጠልም የሰራተኛ መታወቂያዎን እና የፋይል ቁጥርዎን በማቅረብ ይቀጥሉ። ካልሆነም
        አይ የሚለውን ቁልፍ በመጫን እና መረጃዎን እንደ አዲስ መሙላት ይችላሉ
      </h2>

      <h2 class="text-main-400 font-bold text-xl tracking-wide"></h2>
    </div>

    <div class="flex flex-col pt-medium rounded mb-medium w-72">
      <div class="text-center">
        <span class="text-lg">
          <h2 class="text-xl">
            {{
              // eslint-disable-next-line prettier/prettier
              $t(
                `Are you registered on HRA ( Human Resource Administration System ) Before ?`
              )
            }}
          </h2>
        </span>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <button
        class="inline-block px-6 py-2.5 bg-white hover:bg-primary-600 hover:text-white text-primary-600 border font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
        @click="$emit('approvalModal', 1)"
        type="button"
      >
        {{ $t("Yes") }}
      </button>
      <button
        class="inline-block px-6 py-2.5 bg-main-400 hover:text-main-400 hover:border text-white font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
        @click="$emit('approvalModal', 2)"
        type="button"
      >
        {{ $t("No") }}
      </button>
    </div>
  </div>
</template>

<script>
import {} from "vue";

export default {
  props: ["isDarkMode"],
  components: {},
  emits: ["approvalModal","back"],
  setup() {
    return {};
  },
};
</script>
<style></style>
