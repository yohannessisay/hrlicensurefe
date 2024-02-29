<template>
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    :id="`${modalType ? modalType : ''}Modal`"
    tabindex="-1"
    :aria-labelledby="`${modalType}Label`"
    aria-modal="true"
    role="dialog"
  >
    <div
      :class="
        (modalType && modalType == 'NewLicense') || modalType == 'Renewal'
          ? 'modal-dialog modal-xl relative w-auto pointer-events-none'
          : 'modal-dialog modal-md relative w-auto pointer-events-none'
      "
    >
      <div
        :class="
          isDarkMode
            ? 'modal-content border-none   relative flex flex-col w-full pointer-events-auto bg-secondaryDark bg-clip-padding rounded-md outline-none text-current'
            : 'modal-content border-none   relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current'
        "
      >
        <div
          class="modal-header flex flex-shrink-0 items-center justify-between p-1 border-b border-grey-100 rounded-t-md"
        >
          <h2
            :class="
              isDarkMode
                ? 'text-2xl md:text-2xl lg:text-2xl  ml-4 font-medium text-primary-200  mb-2 sm:text-base md:mb-6'
                : 'text-2xl md:text-2xl lg:text-2xl  ml-4 font-medium text-main-400 mb-2 sm:text-base md:mb-6'
            "
          >
            {{ $t("Required Documents for") }}
            {{ $t(modalType ? modalType : "") }}
            {{ $t("Application") }}
          </h2>
          <button
            type="button"
            class="inline-block px-4 py-2.5 bg-main-400 text-primary-200 font-medium text-lg leading-tight uppercase rounded hover:bg-white hover:text-main-400 transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            X
          </button>
        </div>
        <div class="modal-body relative p-1 sm:p-4">
          <div :class="isDarkMode ? ' rounded-lg' : 'bg-white rounded-lg  '">
            <div class="container mx-auto px-1 sm:px-4">
              <div
                class="lg:flex lg:-mx-4 mt-6 md:mt-12"
                v-if="
                  (modalType && modalType == 'Renewal') ||
                  modalType == 'NewLicense'
                "
              >
                <div
                  class="pricing-plan-wrap shadow-md lg:w-1/3 my-4 md:my-6 sm:mr-4"
                >
                  <div
                    :class="
                      isDarkMode
                        ? 'pricing-plan      bg-secondaryDark rounded-lg   text-center max-w-full mx-auto   transition-colors duration-300'
                        : 'pricing-plan     bg-white rounded-lg    text-center max-w-full mx-auto  transition-colors duration-300'
                    "
                  >
                    <div class="p-2 md:py-4">
                      <h4
                        :class="
                          isDarkMode
                            ? 'font-medium text-primary-200  leading-tight text-2xl border-b-4'
                            : 'font-medium text-main-400 leading-tight text-2xl border-b-4'
                        "
                      >
                        {{ $t("Ethiopian") }}
                      </h4>
                    </div>
                    <div
                      class="pricing-amount transition-colors duration-300 border-b-2 border-lightBlueB-500 mb-4"
                    >
                      <div>
                        <h3 class="text-lg text-yellow-300 font-semibold">
                          {{
                            $t("Attached Documents must be clear and visible.")
                          }}
                        </h3>
                      </div>
                      <h6
                        :class="
                          isDarkMode
                            ? 'text-primary-200  ml-2'
                            : 'text-main-400 ml-2'
                        "
                      >
                        ({{ $t("hover over lists to see details") }})
                      </h6>
                    </div>

                    <ul
                      :class="
                        isDarkMode
                          ? 'bg-secondaryDark border-b-2'
                          : 'bg-white border-b-2'
                      "
                    >
                      <li
                        v-for="(detail, index) in list && list.Ethiopian
                          ? list.Ethiopian
                          : []"
                        :key="index"
                        :class="
                          isDarkMode
                            ? 'text-primary-200 text-lg rounded-lg bg-secondaryDark cursor-pointer'
                            : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                        "
                        data-bs-toggle="tooltip"
                        :title="detail ? detail.tooltip : ''"
                      >
                        <i
                          :class="
                            isDarkMode
                              ? 'text-white  fa fa-arrow-right-long'
                              : 'fa fa-arrow-right-long text-grey-800'
                          "
                        ></i>
                        {{ $t(detail ? detail.name : "") }}
                      </li>
                    </ul>
                    <slot name="ethiopianDetail"> </slot>
                  </div>
                </div>

                <div
                  class="pricing-plan-wrap shadow-md lg:w-1/3 my-4 md:my-6 sm:mr-4"
                >
                  <div
                    :class="
                      isDarkMode
                        ? 'pricing-plan      bg-secondaryDark rounded-lg   text-center max-w-full mx-auto hover:border-indigo-600 transition-colors duration-300'
                        : 'pricing-plan   bg-white rounded-lg   text-center max-w-full mx-auto hover:border-indigo-600 transition-colors duration-300'
                    "
                  >
                    <div class="p-2 md:py-4">
                      <h4
                        :class="
                          isDarkMode
                            ? 'font-medium text-primary-200  leading-tight text-2xl border-b-4'
                            : 'font-medium text-main-400 leading-tight text-2xl border-b-4'
                        "
                      >
                        {{ $t("Foreigner") }}
                      </h4>
                    </div>
                    <div
                      class="pricing-amount border-b-2 border-lightBlueB-500 transition-colors duration-300 mb-4"
                    >
                      <div>
                        <h3 class="text-lg text-yellow-300 font-semibold">
                          {{
                            $t("Attached Documents must be clear and visible.")
                          }}
                        </h3>
                      </div>
                      <h6
                        :class="
                          isDarkMode
                            ? 'text-primary-200  ml-2'
                            : 'text-main-400 ml-2'
                        "
                      >
                        ({{ $t("hover over lists to see details") }})
                      </h6>
                    </div>
                    <ul
                      :class="
                        isDarkMode
                          ? 'bg-secondaryDark border-b-2'
                          : 'bg-white border-b-2'
                      "
                    >
                      <li
                        v-for="(detail, index) in list && list.Foreigners
                          ? list.Foreigners
                          : []"
                        :key="index"
                        :class="
                          isDarkMode
                            ? 'text-primary-200  text-lg rounded-lg bg-secondaryDark cursor-pointer'
                            : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                        "
                        data-bs-toggle="tooltip"
                        :title="detail ? detail.tooltip : ''"
                      >
                        <i
                          :class="
                            isDarkMode
                              ? 'text-primary-200   fa fa-arrow-right-long'
                              : 'fa fa-arrow-right-long text-grey-800'
                          "
                        ></i>
                        {{ $t(detail ? detail.name : "") }}
                      </li>
                    </ul>
                    <slot name="foreignerDetail"> </slot>
                  </div>
                </div>

                <div class="pricing-plan-wrap shadow-md lg:w-1/3 my-4 md:my-6">
                  <div
                    :class="
                      isDarkMode
                        ? 'pricing-plan     bg-secondaryDark rounded-lg   text-center max-w-full mx-auto hover:border-indigo-600 transition-colors duration-300'
                        : 'pricing-plan     border-grey-200 bg-white rounded-lg   text-center max-w-full mx-auto hover:border-indigo-600 transition-colors duration-300'
                    "
                  >
                    <div class="p-2 md:py-4">
                      <h4
                        :class="
                          isDarkMode
                            ? 'font-medium text-primary-200  leading-tight text-2xl border-b-4'
                            : 'font-medium text-main-400 leading-tight text-2xl border-b-4'
                        "
                      >
                        {{ $t("Ethiopian From Abroad") }}
                      </h4>
                    </div>
                    <div
                      class="pricing-amount border-b-2 border-lightBlueB-500 transition-colors duration-300 mb-4"
                    >
                      <h3 class="text-lg text-yellow-300 font-semibold">
                        {{
                          $t("Attached Documents must be clear and visible.")
                        }}
                      </h3>

                      <h6
                        :class="
                          isDarkMode
                            ? 'text-primary-200  ml-2   '
                            : 'text-main-400 ml-2  '
                        "
                      >
                        ({{ $t("hover over lists to see details") }})
                      </h6>
                    </div>
                    <ul
                      :class="
                        isDarkMode
                          ? 'bg-secondaryDark border-b-2'
                          : 'bg-white border-b-2'
                      "
                    >
                      <li
                        v-for="(detail, index) in list &&
                        list.EthiopianFromAbroad
                          ? list.EthiopianFromAbroad
                          : []"
                        :key="index"
                        :class="
                          isDarkMode
                            ? 'text-primary-200  text-lg rounded-lg bg-secondaryDark cursor-pointer'
                            : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                        "
                        data-bs-toggle="tooltip"
                        :title="detail ? detail.tooltip : ''"
                      >
                        <i
                          :class="
                            isDarkMode
                              ? 'text-primary-200   fa fa-arrow-right-long'
                              : 'fa fa-arrow-right-long text-grey-800'
                          "
                        ></i>
                        {{ $t(detail ? detail.name : "") }}
                      </li>
                    </ul>
                    <slot name="ethAbroadDetail"> </slot>
                  </div>
                </div>
              </div>

              <div v-else>
                <div class="pricing-plan-wrap shadow-md my-4 md:my-6 sm:mr-4">
                  <div
                    :class="
                      isDarkMode
                        ? 'pricing-plan border-t-4 border  bg-secondaryDark rounded-lg   text-center max-w-full    transition-colors duration-300'
                        : 'pricing-plan border-t-2  border border-grey-200 bg-white rounded-lg    text-center max-w-full   transition-colors duration-300'
                    "
                  >
                    <div class="p-2 md:py-4">
                      <h4
                        :class="
                          isDarkMode
                            ? 'font-medium text-primary-200  leading-tight text-2xl border-b-4'
                            : 'font-medium text-main-400 leading-tight text-2xl border-b-4'
                        "
                      >
                        {{ $t("For All Applicants") }}
                      </h4>
                    </div>
                    <div
                      class="pricing-amount transition-colors duration-300 border-b-2 border-lightBlueB-500 mb-4"
                    >
                      <div>
                        <h3
                          :class="
                            isDarkMode
                              ? 'text-lg text-primary-200  font-semibold'
                              : 'text-lg text-main-400 font-semibold'
                          "
                        >
                          {{
                            $t("Attached Documents must be clear and visible.")
                          }}
                        </h3>
                      </div>
                    </div>

                    <ul :class="isDarkMode ? 'bg-secondaryDark' : 'bg-white'">
                      <li
                        v-for="(detail, index) in list && list ? list : []"
                        :key="index"
                        :class="
                          isDarkMode
                            ? 'text-primary-200  text-lg rounded-lg bg-secondaryDark cursor-pointer'
                            : 'text-main-400 text-lg rounded-lg bg-white cursor-pointer'
                        "
                        data-bs-toggle="tooltip"
                        :title="detail ? detail.tooltip : ''"
                      >
                        <i
                          :class="
                            isDarkMode
                              ? 'text-primary-200   fa fa-arrow-right-long'
                              : 'fa fa-arrow-right-long text-grey-800'
                          "
                        ></i>
                        {{ $t(detail ? detail.name : "") }}
                      </li>
                    </ul>
                    <div class="grid grid-cols-1 sm:grid-cols-3 mt-8 gap-4">
                      <div>
                        <slot name="ethiopianDetail"> </slot>
                        <h2
                          :class="
                            isDarkMode
                              ? '-mt-4 text-xl text-white'
                              : '-mt-4 text-xl'
                          "
                        >
                          {{ $t("Ethiopian") }}
                        </h2>
                      </div>
                      <div>
                        <slot name="foreignerDetail"> </slot>
                        <h2
                          :class="
                            isDarkMode
                              ? '-mt-4 text-xl text-white'
                              : '-mt-4 text-xl'
                          "
                        >
                          {{ $t("Foreigner") }}
                        </h2>
                      </div>

                      <div>
                        <slot name="ethAbroadDetail"> </slot>
                        <h2
                          :class="
                            isDarkMode
                              ? '-mt-4 text-xl text-white'
                              : '-mt-4 text-xl'
                          "
                        >
                          {{ $t("Ethiopian From Abroad") }}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["modalType", "isDarkMode", "list"],
};
</script>
