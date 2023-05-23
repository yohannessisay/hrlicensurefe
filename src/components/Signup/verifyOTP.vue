<template>
  <div class="bg-black flex justify-center" style="margin-top: 400px">
    <div class="grid grid-rows-2">
      <div>
        <h2 class="sm:text-xs lg:text-2xl text-main-400 font-bold">
          Please type in the code sent to your phone
        </h2>
      </div>

      <v-otp-input
        id="otp"
        ref="otpInput"
        input-classes="otp"
        separator="-"
        :num-inputs="6"
        :should-auto-focus="true"
        input-type="tel"
        :is-input-num="true"
        :conditionalClass="['one', 'two', 'three', 'four', 'five', 'six']"
        :placeholder="['*', '*', '*', '*', '*', '*']"
        @on-change="handleOnChange"
        @on-complete="handleOnComplete"
      />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import VOtpInput from "vue3-otp-input";

export default {
  components: { VOtpInput },
  setup() {
    const otpInput = ref(null);

    const handleOnComplete = (value) => {};

    const handleOnChange = (value) => {};

    const clearInput = () => {
      otpInput.value.clearInput();
    };

    return { handleOnComplete, handleOnChange, clearInput, otpInput };
  },
};
</script>
<style>
.otp {
  max-width: 40px !important;
  height: 40px !important;
  padding: 5px !important;
  margin: 0 10px !important;
  font-size: 20px !important;
  border-radius: 4px !important;
  border: 1px solid rgba(0, 0, 0, 0.3) !important;
  text-align: center !important;
}
/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: #e4e4e4;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
</style>
