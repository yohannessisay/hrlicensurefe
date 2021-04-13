<template>
  <div class="w-screen bg-white flex items-center justify-center">
    <div
      class="w-screen max-w-6xl mt-medium mb-large box-shadow-pop bg-lightGrey-100"
    >
      <div class="flex mb-large mt-medium justify-center">
        <div class="w-64 h-40 container box-shadow-pop rounded-lg">
          <div class="mt-8">
            <div class="my-auto flex justify-center items-center">
              <h2 class="text-lightBlueB-500 text-2xl">0</h2>
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
              <h2 class="text-red-200 text-2xl">0</h2>
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
            <label class="ml-large text-grey-200 text-2xl"> Residence</label>
            <h5 class="ml-8 text-black-100 text-3xl">
              Addis Ababa
            </h5>
          </div>
          <div class="mt-medium">
            <button class="mr-medium">Accept</button>
            <button class="bg-red-500">Reject</button>
          </div>
          <div class="relative pt-1 mt-medium">
            <div
              class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-grey-100 w-screen max-w-2xl"
            >
              <div
                style="width:30%"
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

      <div class="flex justify-center mb-medium">
        <button variant="outline">I will finish Later</button>
        <button class="outline display bg-red-200">Reject Application</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>
<style>
#accepte {
  border-color: tomato;
}
</style>
