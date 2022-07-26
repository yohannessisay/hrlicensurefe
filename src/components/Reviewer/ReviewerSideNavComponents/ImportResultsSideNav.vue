<template>
  <div class="mb-2">
    <li class=" justify-start static">
      <transition name="slide-fade-to-left">
        <div class="">
          <div
          @click="importResultsMenuHandler('importResults')"
            class=" justify-center items-center "
          >
            <div class="p-1 ">
              <h3 class="text-lightBlueB-500 mt-tiny">
                <span style="color: white;">
                  <i class="mr-2 fa fa-upload"></i>
                </span>
                <span class="text-lg" style="color: white; "
                  >Import Results</span
                >
              </h3>
            </div>
          </div>
        </div></transition
      >
    </li>
  </div>
</template>

<script>
export default {
    
    setup(props, {emit}) {
        const importResultsMenuHandler = (menu) => {
            emit("selectImportResultsMenu", menu);
        }

        return {
            importResultsMenuHandler,
        }
    }
}
</script>
