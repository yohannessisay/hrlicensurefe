<template>
  <div class="w-screen max-w-2xl mt-0 h-screen rounded-md">
    <div
      class="
        flex flex-col
        mt-large
        w-full
        bg-white
        blue-box-shadow-light
        rounded
        mb-large
      "
    >
      <div class="mt-large flex justify-center">
        <h2 class="text-2xl font-bold">Change password</h2>
      </div>
      <new-password-form />
    </div>
  </div>
</template>

<script>
import NewPasswordForm from "./NewPasswordForm";

export default {
  components: {
    NewPasswordForm,
  },
  name: "AdminPasswordInfo",
  setup() {
    return {};
  },
};
</script>