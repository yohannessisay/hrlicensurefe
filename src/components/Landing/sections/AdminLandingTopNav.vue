<template>
  <section
    class="
      w-full
      bg-white
      shadow-md
      h-large
      px-tiny
      sm:px-small
      flex
      justify-between
      items-center
      fixed
      top-0
      z-50
      glass
    "
  >
    <div class="flex justify-center items-center">
      <RenderIllustration illustration="Logo" class="hidden sm:block" />
      <h3 class="ml-tiny font-AtkinsonHyperlegibleBold">
        HRIS - Lisence, Admin
      </h3>
    </div>
    <button
      variant="outline"
      class="h-small"
      @click="$emit('setShowLogin', true)"
    >
      Log In
    </button>
    <!-- <button
      type="button"
      class="
        inline-block
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out
      "
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      Log In
    </button> -->
  </section>
  <div
    class="
      modal
      fade
      fixed
      top-0
      left-0
      hidden
      w-full
      h-full
      outline-none
      overflow-x-hidden overflow-y-auto
    "
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog  relative w-5/12 pointer-events-none">
      <div
        class="
          modal-content
          border-none
          shadow-lg
          relative
          flex flex-col
          w-full
          pointer-events-auto
          bg-white bg-clip-padding
          rounded-md
          outline-none
          text-current
        "
      >
        <div
          class="
            modal-header
            flex flex-shrink-0
            items-center
            p-4
            border-b border-grey-100
            rounded-t-md
          "
        >
          <h5
            class="text-xl font-medium leading-normal text-gray-800"
            id="exampleModalLabel"
          >
            Sign In
          </h5>
          <button
            type="button"
            class="
              btn-close
              box-content
              h-small
              text-black
              border-none
              rounded-sm
              opacity-50
              focus:shadow-none focus:outline-none focus:opacity-100
              hover:text-black hover:opacity-100 hover:no-underline
            "
            data-bs-dismiss="modal"
            aria-label="Close"
            style="min-height: 28px; min-width: 28px"
          ></button>
        </div>
        <div class="modal-body relative p-2 flex justify-center">
          <form>
            <div class="form-group mb-6 flex justify-center">
              <img
                src="../../../assets/image.png"
                loading="lazy"
                class="w-40"
                alt="HPEL logo"
              />
            </div>
            <div class="form-group mb-6">
              <label
                for="exampleInputEmail2"
                class="form-label inline-block mb-2 text-gray-700"
                >Email address</label
              >
              <input
                type="email"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group mb-6">
              <label
                for="exampleInputPassword2"
                class="form-label inline-block mb-2 text-gray-700"
                >Password</label
              >
              <input
                type="password"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                id="exampleInputPassword2"
                placeholder="Password"
              />
            </div>
            <div class="flex justify-between items-center mb-6">
              <a
                href="#!"
                class="
                  text-blue-600
                  hover:text-blue-700
                  focus:text-blue-700
                  transition
                  duration-200
                  ease-in-out
                "
                >Forgot password?</a
              >
            </div>
            <button
              type="submit"
              class="
                w-full
                px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700
                focus:shadow-lg
                focus:outline-none
                focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out
              "
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RenderIllustration from "@/sharedComponents/RenderIllustration";
export default {
  components: { RenderIllustration },
  emits: ["setShowLogin"],
};
</script>
<style lang="postcss" scoped>
h3 {
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  background: linear-gradient(-70deg, #3674b9, #b5b173);
  -webkit-background-clip: text;
}
</style>
