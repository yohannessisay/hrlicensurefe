<template>
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
    id="generatePdf"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="generatePdfLabel"
    aria-hidden="true"
  >
    <div
      :class="
        modalData &&
        modalData.data &&
        modalData.data.applicantType &&
        (modalData.data.applicantType.code == 'ETH' ||
          modalData.data.applicantType.code == 'ETHABRO')
          ? 'modal-dialog modal-dialog-centered modal-xl ml-8 mr-8 relative w-auto pointer-events-none'
          : 'modal-dialog modal-dialog-centered modal-lg  relative w-auto pointer-events-none'
      "
    >
      <div
        class="
          modal-content
          border-none
          shadow-lg
          relative
          flex flex-col
          w-full
          pointer-events-auto
          bg-white
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
            justify-between
            p-2
            rounded-t-md
          "
        ></div>
        <!-- if applicant is ethiopian -->
        <div
          class="modal-body relative p-4"
          v-if="
            modalData &&
              modalData.data &&
              modalData.data.applicantType &&
              (finalData.data.applicantType.code == 'ETH' ||
                finalData.data.applicantType.code == 'ETHABRO')
          "
        >
          <!-- if professions are less than 3 -->

          <div class="vld-parent">
            <loading
              :active="isLoading"
              :is-full-page="true"
              :color="'#2F639D'"
              :opacity="0.7"
            ></loading>

            <span v-if="educations ? educations.length <= 3 : 0">
              <div class="flex justify-center">
                <div
                  class="grid grid-rows-1 text-primary-600 font-bold text-2xl"
                >
                  በኢትዮፕያ ፌደራላዊ ዴሞክራሲያዊ ሪፐብሊክ
                </div>
              </div>
              <div class="flex justify-center">
                <div
                  class="grid grid-rows-1 text-primary-600 font-bold text-2xl"
                >
                  Federal Democratic Republic Ethiopia
                </div>
              </div>
              <div class="flex justify-center">
                <div
                  class="grid grid-rows-1 text-primary-600 font-bold text-xl"
                >
                  የጤና ሚኒስቴር
                </div>
              </div>
              <div class="flex justify-center">
                <div
                  class="grid grid-rows-1 text-primary-600 font-bold text-xl"
                >
                  Ministry of Health
                </div>
              </div>
              <div class="flex justify-center mt-4">
                <div class="grid grid-cols-2">
                  <div>የጤና ባለሙያዎች የሙያ ምዝገባና ፈቃድ የምስከር ወረቀት</div>
                  <div>Health Professionals Registration and Certification</div>
                </div>
              </div>

              <div class="flex justify-center mt-8">
                <div class="grid grid-cols-2">
                  <div>
                    በኢትዮጵያ ፌዴራላዊ ዴሞክራሲያዊ ረፐብሊክ የጤና ሚንስቴር በአዋጅ ቁጥር
                    {{
                      modalData.data &&
                      modalData.data.renewalReviewer &&
                      modalData.data.renewalReviewer.reviewer &&
                      modalData.data.renewalReviewer.reviewer.expertLevelId ===
                        3
                        ? "1112/2011"
                        : modalData.data &&
                          modalData.data.renewalReviewer &&
                          modalData.data.renewalReviewer.reviewer.regionId &&
                          modalData.data.renewalReviewer.reviewer.region
                            .code === "AA"
                        ? "64/2011"
                        : modalData.data &&
                          modalData.data.renewalReviewer &&
                          modalData.data.renewalReviewer.reviewer.regionId &&
                          modalData.data.renewalReviewer.reviewer.region
                            .code === "ORO"
                        ? "661/2009"
                        : "-"
                    }}
                    አንቀጽ
                    {{
                      modalData.data &&
                      modalData.data.renewalReviewer &&
                      modalData.data.renewalReviewer.reviewer &&
                      modalData.data.renewalReviewer.reviewer.expertLevelId ===
                        3
                        ? "73"
                        : modalData.data &&
                          modalData.data.renewalReviewer &&
                          modalData.data.renewalReviewer.reviewer &&
                          modalData.data.renewalReviewer.reviewer.region &&
                          modalData.data.renewalReviewer.reviewer.region
                            .code === "AA"
                        ? "44/8"
                        : modalData.data &&
                          modalData.data.renewalReviewer &&
                          modalData.data.renewalReviewer.reviewer &&
                          modalData.data.renewalReviewer.reviewer.region &&
                          modalData.data.renewalReviewer.reviewer.region
                            .code === "ORO"
                        ? "3/3"
                        : "-"
                    }}
                    ስልጣን መሰረት
                    <span class="font-bold text-yellow-300 underline"
                      >{{
                        modalData &&
                        modalData.profile &&
                        modalData.profile.alternativeName
                          ? modalData.profile.alternativeName
                          : ""
                      }}
                      {{
                        modalData &&
                        modalData.profile &&
                        modalData.profile.alternativeFatherName
                          ? modalData.profile.alternativeFatherName
                          : ""
                      }}
                      {{
                        modalData &&
                        modalData.profile &&
                        modalData.profile.alternativeGrandFatherName
                          ? modalData.profile.alternativeGrandFatherName
                          : ""
                      }}</span
                    >
                    ተገቢውን መስፈርት አሟልተው ስለተገኙ ሚኒስቴር መስሪያ ቤቱ <br />
                    <div class="flex justify-center mt-8 mb-2">
                      <span
                        v-for="department in educations"
                        :key="department.id"
                        class="underline text-yellow-300 font-bold"
                        style="word-break: break-word"
                      >
                        {{
                          department.professionType &&
                          department.professionType.amharicProfessionalType
                            ? department.prefix
                              ? department.prefix.amharic_name +
                                " " +
                                department.professionType
                                  .amharicProfessionalType
                              : department.professionType
                                  .amharicProfessionalType
                            : department.otherProfessionAmharic
                            ? department.otherProfessionAmharic
                            : ""
                        }} </span
                      ><br />
                    </div>
                    ሙያ መዝግቦ ይህን የሙያ ስራ ፈቃድ ሰጥቷል።
                  </div>
                  <div>
                    Under the Federal Democratic Republic of Ethiopia the
                    Minstry of Health by Virtue of proclamation No.
                    {{
                      modalData.data &&
                      modalData.data.renewalReviewer &&
                      modalData.data.renewalReviewer.reviewer &&
                      modalData.data.renewalReviewer.reviewer.expertLevel &&
                      modalData.data.renewalReviewer.reviewer.expertLevel
                        .code === "FED"
                        ? "1112/2019"
                        : modalData.data &&
                          modalData.data.renewalReviewer &&
                          modalData.data.renewalReviewer.reviewer &&
                          modalData.data.renewalReviewer.reviewer.region &&
                          modalData.data.renewalReviewer.reviewer.region
                            .code === "AA"
                        ? "64/2019"
                        : modalData.data &&
                          modalData.data.renewalReviewer &&
                          modalData.data.renewalReviewer.reviewer &&
                          modalData.data.renewalReviewer.reviewer.region &&
                          modalData.data.renewalReviewer.reviewer.region
                            .code === "ORO"
                        ? "661/2002"
                        : "-"
                    }}
                    Article
                    {{
                      modalData.data &&
                      modalData.data.renewalReviewer &&
                      modalData.data.renewalReviewer.reviewer &&
                      modalData.data.renewalReviewer.reviewer.expertLevel &&
                      modalData.data.renewalReviewer.reviewer.expertLevel
                        .code === "FED"
                        ? "73"
                        : modalData.data &&
                          modalData.data.renewalReviewer &&
                          modalData.data.renewalReviewer.reviewer &&
                          modalData.data.renewalReviewer.reviewer.region &&
                          modalData.data.renewalReviewer.reviewer.region
                            .code === "AA"
                        ? "44/8"
                        : modalData.data &&
                          modalData.data.renewalReviewer &&
                          modalData.data.renewalReviewer.reviewer &&
                          modalData.data.renewalReviewer.reviewer.region &&
                          modalData.data.renewalReviewer.reviewer.region
                            .code === "ORO"
                        ? "3/3"
                        : "-"
                    }}is given the authority to issue
                    <span class="font-bold text-yellow-300 underline"
                      >{{
                        modalData && modalData.profile && modalData.profile.name
                          ? modalData.profile.name
                          : ""
                      }}
                      {{
                        modalData &&
                        modalData.profile &&
                        modalData.profile.fatherName
                          ? modalData.profile.fatherName
                          : ""
                      }}
                      {{
                        modalData &&
                        modalData.profile &&
                        modalData.profile.grandFatherName
                          ? modalData.profile.grandFatherName
                          : ""
                      }}</span
                    ><br />
                    <div class="grid grid-rows-3 justify-center mt-8 mb-2">
                      <span
                        v-for="department in educations"
                        :key="department.id"
                        class="underline text-yellow-300 font-bold"
                        style="word-break: break-word"
                      >
                        {{
                          department && department.professionType
                            ? department.prefix
                              ? department.prefix.name +
                                " " +
                                department.professionType.name
                              : department.professionType.name
                            : department.otherProfessionType
                        }} </span
                      ><br />
                    </div>
                    Having duly satisfied the requirements of the Ministry
                    hereby registered and licensed as
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-2 mt-8">
                <div class="flex justify-start">
                  ይህ የሙያ የስራ ፈቃድ የሚያገለግለው ከ
                  <span class="font-bold text-yellow-300">
                    {{
                      modalData.certifiedDate
                        ? toEthiopian(
                            moment(modalData.certifiedDate)._d.toISOString(),
                            false
                          )
                        : ""
                    }}</span
                  >
                  -እስከ-
                  <span class="font-bold text-yellow-300">
                    {{
                      modalData.licenseExpirationDate !== null
                        ? toEthiopian(
                            moment(
                              modalData.licenseExpirationDate
                            )._d.toISOString(),
                            false
                          )
                        : " አልተገለጸም"
                    }}</span
                  >
                </div>
                <div>
                  The license is valid from
                  <span class="font-bold text-yellow-300">
                    {{
                      modalData.certifiedDate
                        ? moment(modalData.certifiedDate).format("MMM DD, YYYY")
                        : ""
                    }}</span
                  >
                  -To-
                  <span class="font-bold text-yellow-300">
                    {{
                      modalData.licenseExpirationDate
                        ? moment(modalData.licenseExpirationDate).format(
                            "MMM DD, YYYY"
                          )
                        : " Not specified"
                    }}</span
                  >
                </div>
              </div>
            </span>
          </div>
          <!-- End of professions that are less than 3 part -->

          <!-- if professions are greater than 3 -->
          <div
            class="container px-6 mx-auto"
            v-if="educations ? educations.length > 4 : 0"
          >
            <section class="text-gray-800">
              <div class="vld-parent">
                <loading
                  :active="isLoading"
                  :is-full-page="true"
                  :color="'#2F639D'"
                  :opacity="0.7"
                ></loading>
                <!-- upto the 3rd profession -->
                <div class="w-full mb-8 border-b-8 p-4">
                  <div class="flex justify-center mb-4">
                    <h1>License 1</h1>
                  </div>

                  <div class="flex justify-center">
                    <div
                      class="
                        grid grid-rows-1
                        text-primary-600
                        font-bold
                        text-2xl
                      "
                    >
                      በኢትዮፕያ ፌደራላዊ ዴሞክራሲያዊ ሪፐብሊክ
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <div
                      class="
                        grid grid-rows-1
                        text-primary-600
                        font-bold
                        text-2xl
                      "
                    >
                      Federal Democratic Republic Ethiopia
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <div
                      class="
                        grid grid-rows-1
                        text-primary-600
                        font-bold
                        text-xl
                      "
                    >
                      የጤና ሚኒስቴር
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <div
                      class="
                        grid grid-rows-1
                        text-primary-600
                        font-bold
                        text-xl
                      "
                    >
                      Ministry of Health
                    </div>
                  </div>
                  <div class="flex justify-center mt-4">
                    <div class="grid grid-cols-2">
                      <div>የጤና ባለሙያዎች የሙያ ምዝገባና ፈቃድ የምስከር ወረቀት</div>
                      <div>
                        Health Professionals Registration and Certification
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-center mt-8">
                    <div class="grid grid-cols-2">
                      <div>
                        በኢትዮጵያ ፌዴራላዊ ዴሞክራሲያዊ ረፐብሊክ የጤና ሚንስቴር በአዋጅ ቁጥር
                        {{
                          modalData.data &&
                          modalData.data.renewalReviewer &&
                          modalData.data.renewalReviewer.reviewer &&
                          modalData.data.renewalReviewer.reviewer
                            .expertLevelId === 3
                            ? "1112/2011"
                            : modalData.data &&
                              modalData.data.renewalReviewer &&
                              modalData.data.renewalReviewer.reviewer
                                .regionId &&
                              modalData.data.renewalReviewer.reviewer.region
                                .code === "AA"
                            ? "64/2011"
                            : modalData.data &&
                              modalData.data.renewalReviewer &&
                              modalData.data.renewalReviewer.reviewer
                                .regionId &&
                              modalData.data.renewalReviewer.reviewer.region
                                .code === "ORO"
                            ? "661/2009"
                            : "-"
                        }}
                        አንቀጽ
                        {{
                          modalData.data &&
                          modalData.data.renewalReviewer &&
                          modalData.data.renewalReviewer.reviewer &&
                          modalData.data.renewalReviewer.reviewer
                            .expertLevelId === 3
                            ? "73"
                            : modalData.data &&
                              modalData.data.renewalReviewer &&
                              modalData.data.renewalReviewer.reviewer &&
                              modalData.data.renewalReviewer.reviewer.region &&
                              modalData.data.renewalReviewer.reviewer.region
                                .code === "AA"
                            ? "44/8"
                            : modalData.data &&
                              modalData.data.renewalReviewer &&
                              modalData.data.renewalReviewer.reviewer &&
                              modalData.data.renewalReviewer.reviewer.region &&
                              modalData.data.renewalReviewer.reviewer.region
                                .code === "ORO"
                            ? "3/3"
                            : "-"
                        }}
                        ስልጣን መሰረት
                        <span class="font-bold text-yellow-300 underline"
                          >{{
                            modalData &&
                            modalData.profile &&
                            modalData.profile.alternativeName
                              ? modalData.profile.alternativeName
                              : ""
                          }}
                          {{
                            modalData &&
                            modalData.profile &&
                            modalData.profile.alternativeFatherName
                              ? modalData.profile.alternativeFatherName
                              : ""
                          }}
                          {{
                            modalData &&
                            modalData.profile &&
                            modalData.profile.alternativeGrandFatherName
                              ? modalData.profile.alternativeGrandFatherName
                              : ""
                          }}</span
                        >
                        ተገቢውን መስፈርት አሟልተው ስለተገኙ ሚኒስቴር መስሪያ ቤቱ <br />
                        <div class="grid grid-rows-3 justify-center mt-8 mb-2">
                          <span
                            class="underline text-yellow-300 font-bold"
                            style="word-break: break-word"
                          >
                            {{
                              educations &&
                              educations[0] &&
                              educations[0].professionType
                                ? educations[0].professionType
                                    .amharicProfessionalType
                                : ""
                            }}</span
                          >
                          <span
                            class="underline text-yellow-300 font-bold"
                            style="word-break: break-word"
                          >
                            {{
                              educations &&
                              educations[1] &&
                              educations[1].professionType
                                ? educations[1].professionType
                                    .amharicProfessionalType
                                : ""
                            }}</span
                          >
                          <span
                            class="underline text-yellow-300 font-bold"
                            style="word-break: break-word"
                          >
                            {{
                              educations &&
                              educations[2] &&
                              educations[2].professionType
                                ? educations[2].professionType
                                    .amharicProfessionalType
                                : ""
                            }}</span
                          >
                        </div>
                        ሙያ መዝግቦ ይህን የሙያ ስራ ፈቃድ ሰጥቷል።
                      </div>
                      <div>
                        Under the Federal Democratic Republic of Ethiopia the
                        Minstry of Health by Virtue of proclamation No.
                        {{
                          modalData.data &&
                          modalData.data.renewalReviewer &&
                          modalData.data.renewalReviewer.reviewer &&
                          modalData.data.renewalReviewer.reviewer.expertLevel &&
                          modalData.data.renewalReviewer.reviewer.expertLevel
                            .code === "FED"
                            ? "1112/2019"
                            : modalData.data &&
                              modalData.data.renewalReviewer &&
                              modalData.data.renewalReviewer.reviewer &&
                              modalData.data.renewalReviewer.reviewer.region &&
                              modalData.data.renewalReviewer.reviewer.region
                                .code === "AA"
                            ? "64/2019"
                            : modalData.data &&
                              modalData.data.renewalReviewer &&
                              modalData.data.renewalReviewer.reviewer &&
                              modalData.data.renewalReviewer.reviewer.region &&
                              modalData.data.renewalReviewer.reviewer.region
                                .code === "ORO"
                            ? "661/2002"
                            : "-"
                        }}
                        Article
                        {{
                          modalData.data &&
                          modalData.data.renewalReviewer &&
                          modalData.data.renewalReviewer.reviewer &&
                          modalData.data.renewalReviewer.reviewer.expertLevel &&
                          modalData.data.renewalReviewer.reviewer.expertLevel
                            .code === "FED"
                            ? "73"
                            : modalData.data &&
                              modalData.data.renewalReviewer &&
                              modalData.data.renewalReviewer.reviewer &&
                              modalData.data.renewalReviewer.reviewer.region &&
                              modalData.data.renewalReviewer.reviewer.region
                                .code === "AA"
                            ? "44/8"
                            : modalData.data &&
                              modalData.data.renewalReviewer &&
                              modalData.data.renewalReviewer.reviewer &&
                              modalData.data.renewalReviewer.reviewer.region &&
                              modalData.data.renewalReviewer.reviewer.region
                                .code === "ORO"
                            ? "3/3"
                            : "-"
                        }}is given the authority to issue
                        <span class="font-bold text-yellow-300 underline"
                          >{{
                            modalData && modalData.profile
                              ? modalData.profile.name
                              : ""
                          }}
                          {{
                            modalData && modalData.profile
                              ? modalData.profile.fatherName
                              : ""
                          }}
                          {{
                            modalData && modalData.profile
                              ? modalData.profile.grandFatherName
                              : ""
                          }}</span
                        ><br />
                        <div class="grid grid-rows-3 justify-center mt-8 mb-2">
                          <span
                            class="underline text-yellow-300 font-bold"
                            style="word-break: break-word"
                          >
                            {{
                              educations &&
                              educations[0] &&
                              educations[0].professionType
                                ? educations[0].prefix
                                  ? +"( " +
                                    educations[0].prefix.name +
                                    " )" +
                                    educations[0].professionType.name
                                  : educations[0].professionType.name
                                : educations[0].otherProfessionType
                            }}</span
                          >
                          <span
                            class="underline text-yellow-300 font-bold"
                            style="word-break: break-word"
                          >
                            {{
                              educations &&
                              educations[1] &&
                              educations[1].professionType
                                ? educations[1].prefix
                                  ? +"( " +
                                    educations[1].prefix.name +
                                    " )" +
                                    educations[1].professionType.name
                                  : educations[1].professionType.name
                                : educations[1].otherProfessionType
                            }}</span
                          >
                          <span
                            class="underline text-yellow-300 font-bold"
                            style="word-break: break-word"
                          >
                            {{
                              educations &&
                              educations[2] &&
                              educations[2].professionType
                                ? educations[2].prefix
                                  ? +"( " +
                                    educations[2].prefix.name +
                                    " )" +
                                    educations[2].professionType.name
                                  : educations[2].professionType.name
                                : educations[2].otherProfessionType
                            }}</span
                          ><br />
                          <span
                            class="underline text-yellow-300 font-bold"
                            style="word-break: break-word"
                          >
                          </span>
                        </div>
                        Having duly satisfied the requirements of the Ministry
                        hereby registered and licensed as
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 mt-8">
                    <div class="flex justify-start">
                      ይህ የሙያ የስራ ፈቃድ የሚያገለግለው ከ
                      <span class="font-bold text-yellow-300">
                        {{
                          modalData.certifiedDate
                            ? toEthiopian(
                                moment(
                                  modalData.certifiedDate
                                )._d.toISOString(),
                                false
                              )
                            : ""
                        }}</span
                      >
                      -እስከ-
                      <span class="font-bold text-yellow-300">
                        {{
                          modalData.licenseExpirationDate !== null
                            ? toEthiopian(
                                moment(
                                  modalData.licenseExpirationDate
                                )._d.toISOString(),
                                false
                              )
                            : " አልተገለጸም"
                        }}</span
                      >
                    </div>
                    <div>
                      The license is valid from
                      <span class="font-bold text-yellow-300">
                        {{
                          modalData.certifiedDate
                            ? moment(modalData.certifiedDate).format(
                                "MMM DD, YYYY"
                              )
                            : ""
                        }}</span
                      >
                      -To-
                      <span class="font-bold text-yellow-300">
                        {{
                          modalData.licenseExpirationDate
                            ? moment(modalData.licenseExpirationDate).format(
                                "MMM DD, YYYY"
                              )
                            : " Not specified"
                        }}</span
                      >
                    </div>
                  </div>
                </div>
                <!--End of upto the 3rd profession part-->

                <!--from 3rd to 6th profession -->
                <div class="w-full">
                  <div class="flex justify-center mb-4">
                    <h1>License 2</h1>
                  </div>

                  <div class="flex justify-center">
                    <div
                      class="
                        grid grid-rows-1
                        text-primary-600
                        font-bold
                        text-2xl
                      "
                    >
                      በኢትዮፕያ ፌደራላዊ ዴሞክራሲያዊ ሪፐብሊክ
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <div
                      class="
                        grid grid-rows-1
                        text-primary-600
                        font-bold
                        text-2xl
                      "
                    >
                      Federal Democratic Republic Ethiopia
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <div
                      class="
                        grid grid-rows-1
                        text-primary-600
                        font-bold
                        text-xl
                      "
                    >
                      የጤና ሚኒስቴር
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <div
                      class="
                        grid grid-rows-1
                        text-primary-600
                        font-bold
                        text-xl
                      "
                    >
                      Ministry of Health
                    </div>
                  </div>
                  <div class="flex justify-center mt-4">
                    <div class="grid grid-cols-2">
                      <div>የጤና ባለሙያዎች የሙያ ምዝገባና ፈቃድ የምስከር ወረቀት</div>
                      <div>
                        Health Professionals Registration and Certification
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-center mt-8">
                    <div class="grid grid-cols-2">
                      <div>
                        በኢትዮጵያ ፌዴራላዊ ዴሞክራሲያዊ ረፐብሊክ የጤና ሚንስቴር በአዋጅ ቁጥር
                        {{
                          modalData.data &&
                          modalData.data.renewalReviewer &&
                          modalData.data.renewalReviewer.reviewer &&
                          modalData.data.renewalReviewer.reviewer
                            .expertLevelId === 3
                            ? "1112/2011"
                            : modalData.data &&
                              modalData.data.renewalReviewer &&
                              modalData.data.renewalReviewer.reviewer
                                .regionId &&
                              modalData.data.renewalReviewer.reviewer.region
                                .code === "AA"
                            ? "64/2011"
                            : modalData.data &&
                              modalData.data.renewalReviewer &&
                              modalData.data.renewalReviewer.reviewer
                                .regionId &&
                              modalData.data.renewalReviewer.reviewer.region
                                .code === "ORO"
                            ? "661/2009"
                            : "-"
                        }}
                        አንቀጽ
                        {{
                          modalData.data &&
                          modalData.data.renewalReviewer &&
                          modalData.data.renewalReviewer.reviewer &&
                          modalData.data.renewalReviewer.reviewer
                            .expertLevelId === 3
                            ? "73"
                            : modalData.data &&
                              modalData.data.renewalReviewer &&
                              modalData.data.renewalReviewer.reviewer &&
                              modalData.data.renewalReviewer.reviewer.region &&
                              modalData.data.renewalReviewer.reviewer.region
                                .code === "AA"
                            ? "44/8"
                            : modalData.data &&
                              modalData.data.renewalReviewer &&
                              modalData.data.renewalReviewer.reviewer &&
                              modalData.data.renewalReviewer.reviewer.region &&
                              modalData.data.renewalReviewer.reviewer.region
                                .code === "ORO"
                            ? "3/3"
                            : "-"
                        }}
                        ስልጣን መሰረት
                        <span class="font-bold text-yellow-300 underline"
                          >{{
                            modalData &&
                            modalData.profile &&
                            modalData.profile.alternativeName
                              ? modalData.profile.alternativeName
                              : ""
                          }}
                          {{
                            modalData &&
                            modalData.profile &&
                            modalData.profile.alternativeFatherName
                              ? modalData.profile.alternativeFatherName
                              : ""
                          }}
                          {{
                            modalData &&
                            modalData.profile &&
                            modalData.profile.alternativeGrandFatherName
                              ? modalData.profile.alternativeGrandFatherName
                              : ""
                          }}</span
                        >
                        ተገቢውን መስፈርት አሟልተው ስለተገኙ ሚኒስቴር መስሪያ ቤቱ <br />
                        <div class="grid grid-rows-3 justify-center mt-8 mb-2">
                          <span
                            class="underline text-yellow-300 font-bold"
                            style="word-break: break-word"
                          >
                            {{
                              educations &&
                              educations[3] &&
                              educations[3].professionType
                                ? educations[3].professionType
                                    .amharicProfessionalType
                                : ""
                            }}</span
                          >
                          <span
                            class="underline text-yellow-300 font-bold"
                            style="word-break: break-word"
                          >
                            {{
                              educations &&
                              educations[4] &&
                              educations[4].professionType
                                ? educations[4].professionType
                                    .amharicProfessionalType
                                : ""
                            }}</span
                          >
                          <span
                            class="underline text-yellow-300 font-bold"
                            style="word-break: break-word"
                          >
                            {{
                              educations &&
                              educations[5] &&
                              educations[5].professionType
                                ? educations[5].professionType
                                    .amharicProfessionalType
                                : ""
                            }}</span
                          >
                        </div>
                        ሙያ መዝግቦ ይህን የሙያ ስራ ፈቃድ ሰጥቷል።
                      </div>
                      <div>
                        Under the Federal Democratic Republic of Ethiopia the
                        Minstry of Health by Virtue of proclamation No.
                        {{
                          modalData.data &&
                          modalData.data.renewalReviewer &&
                          modalData.data.renewalReviewer.reviewer &&
                          modalData.data.renewalReviewer.reviewer.expertLevel &&
                          modalData.data.renewalReviewer.reviewer.expertLevel
                            .code === "FED"
                            ? "1112/2019"
                            : modalData.data &&
                              modalData.data.renewalReviewer &&
                              modalData.data.renewalReviewer.reviewer &&
                              modalData.data.renewalReviewer.reviewer.region &&
                              modalData.data.renewalReviewer.reviewer.region
                                .code === "AA"
                            ? "64/2019"
                            : modalData.data &&
                              modalData.data.renewalReviewer &&
                              modalData.data.renewalReviewer.reviewer &&
                              modalData.data.renewalReviewer.reviewer.region &&
                              modalData.data.renewalReviewer.reviewer.region
                                .code === "ORO"
                            ? "661/2002"
                            : "-"
                        }}
                        Article
                        {{
                          modalData.data &&
                          modalData.data.renewalReviewer &&
                          modalData.data.renewalReviewer.reviewer &&
                          modalData.data.renewalReviewer.reviewer.expertLevel &&
                          modalData.data.renewalReviewer.reviewer.expertLevel
                            .code === "FED"
                            ? "73"
                            : modalData.data &&
                              modalData.data.renewalReviewer &&
                              modalData.data.renewalReviewer.reviewer &&
                              modalData.data.renewalReviewer.reviewer.region &&
                              modalData.data.renewalReviewer.reviewer.region
                                .code === "AA"
                            ? "44/8"
                            : modalData.data &&
                              modalData.data.renewalReviewer &&
                              modalData.data.renewalReviewer.reviewer &&
                              modalData.data.renewalReviewer.reviewer.region &&
                              modalData.data.renewalReviewer.reviewer.region
                                .code === "ORO"
                            ? "3/3"
                            : "-"
                        }}is given the authority to issue
                        <span class="font-bold text-yellow-300 underline"
                          >{{
                            modalData &&
                            modalData.profile &&
                            modalData.profile.name
                              ? modalData.profile.name
                              : ""
                          }}
                          {{
                            modalData &&
                            modalData.profile &&
                            modalData.profile.fatherName
                              ? modalData.profile.fatherName
                              : ""
                          }}
                          {{
                            modalData &&
                            modalData.profile &&
                            modalData.profile.grandFatherName
                              ? modalData.profile.grandFatherName
                              : ""
                          }}</span
                        ><br />
                        <div class="grid grid-rows-3 justify-center mt-8 mb-2">
                          <span
                            class="underline text-yellow-300 font-bold"
                            style="word-break: break-word"
                          >
                            {{
                              educations &&
                              educations[3] &&
                              educations[3].professionType
                                ? educations[3].prefix
                                  ? +"( " +
                                    educations[3].prefix.name +
                                    " )" +
                                    educations[3].professionType.name
                                  : educations[3].professionType.name
                                : educations[3].otherProfessionType
                            }}</span
                          >
                          <span
                            class="underline text-yellow-300 font-bold"
                            style="word-break: break-word"
                          >
                            {{
                              educations &&
                              educations[4] &&
                              educations[4].professionType
                                ? educations[4].prefix
                                  ? +"( " +
                                    educations[4].prefix.name +
                                    " )" +
                                    educations[4].professionType.name
                                  : educations[4].professionType.name
                                : educations[4].otherProfessionType
                            }}</span
                          >
                          <span
                            class="underline text-yellow-300 font-bold"
                            style="word-break: break-word"
                          >
                            {{
                              educations &&
                              educations[5] &&
                              educations[5].professionType
                                ? educations[5].prefix
                                  ? +"( " +
                                    educations[5].prefix.name +
                                    " )" +
                                    educations[5].professionType.name
                                  : educations[5].professionType.name
                                : educations[5].otherProfessionType
                            }}</span
                          ><br />
                          <span
                            class="underline text-yellow-300 font-bold"
                            style="word-break: break-word"
                          >
                          </span>
                        </div>
                        Having duly satisfied the requirements of the Ministry
                        hereby registered and licensed as
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 mt-8">
                    <div class="flex justify-start">
                      ይህ የሙያ የስራ ፈቃድ የሚያገለግለው ከ
                      <span class="font-bold text-yellow-300">
                        {{
                          modalData.certifiedDate
                            ? toEthiopian(
                                moment(
                                  modalData.certifiedDate
                                )._d.toISOString(),
                                false
                              )
                            : ""
                        }}</span
                      >
                      -እስከ-
                      <span class="font-bold text-yellow-300">
                        {{
                          modalData.licenseExpirationDate !== null
                            ? toEthiopian(
                                moment(
                                  modalData.licenseExpirationDate
                                )._d.toISOString(),
                                false
                              )
                            : " አልተገለጸም"
                        }}</span
                      >
                    </div>
                    <div>
                      The license is valid from
                      <span class="font-bold text-yellow-300">
                        {{
                          modalData.certifiedDate
                            ? moment(modalData.certifiedDate).format(
                                "MMM DD, YYYY"
                              )
                            : ""
                        }}</span
                      >
                      -To-
                      <span class="font-bold text-yellow-300">
                        {{
                          modalData.licenseExpirationDate
                            ? moment(modalData.licenseExpirationDate).format(
                                "MMM DD, YYYY"
                              )
                            : " Not specified"
                        }}</span
                      >
                    </div>
                  </div>
                </div>
                <!--End of from 3rd to 6th profession part-->
              </div>
            </section>
          </div>
          <!-- End of professions that are greater than 3 part-->
        </div>
        <!-- end of applicant as ethiopian -->

        <!-- if applicant is foreigner -->
        <div
          v-if="
            modalData &&
              modalData.data &&
              modalData.data.applicantType &&
              modalData.printType != 'externship' &&
              modalData.printType != 'temporary' &&
              modalData.data.applicantType.code == 'FOR'
          "
          class="p-2 m-2 "
          contenteditable="true"
          id="foreignersPrintedDiv"
        >
          <div
            class="grid grid-cols-3 "
            id="applicantCopyHeader"
            contenteditable="false"
          >
            <h2 class="text-primary-600 font-bold text-xl">
              ጤና ሚኒስቴር-ኢትዮጵያ <br />
              <span>የዜጎች ጤና ለሀገር ብልፅግና</span>
            </h2>
            <div class="ml-12 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 39.082 39.096"
                class="w-20 h-20 "
              >
                <defs>
                  <linearGradient
                    id="a"
                    x1="-.569"
                    y1="-.524"
                    x2="1"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stop-color="#0d3073" />
                    <stop offset="1" stop-color="#0d3073" />
                  </linearGradient>
                </defs>
                <path
                  data-name="Intersection 26"
                  d="M-11300.909 40.548c-.412 0-.8 0-1.208-.028-.2-.028-.44-.028-.676-.06a4.53 4.53 0 01-.617-.057h-.06c-.06 0-.147-.031-.207-.031-.205-.028-.44-.088-.648-.117-.088-.028-.176-.028-.264-.06a20.761 20.761 0 01-2.327-.588c-.177-.06-.353-.119-.529-.176l-.707-.267c-.057-.028-.088-.028-.148-.057a19.553 19.553 0 01-11.039-11.719c-.058-.2-.146-.44-.205-.648a19.654 19.654 0 01-.824-4.592 4.1 4.1 0 01-.031-.619V21c0-.648.031-1.3.091-1.912.028-.236.057-.443.086-.679a20.78 20.78 0 01.679-3.12c.116-.384.233-.764.381-1.148.031-.088.091-.207.119-.3.088-.236.205-.44.293-.676a18.329 18.329 0 011.443-2.708c.236-.384.531-.767.8-1.148a21.036 21.036 0 011.824-2.12 19.439 19.439 0 0113.839-5.74 19.513 19.513 0 0113.837 5.74 19.642 19.642 0 012.236 2.68q.4.571.795 1.236a19.2 19.2 0 011.12 2.177 5.021 5.021 0 01.293.679c.147.44.295.853.443 1.3a10.421 10.421 0 01.352 1.293c.148.679.265 1.384.355 2.091.028.207.028.443.06.676a16.154 16.154 0 01.028 1.648c0 .415 0 .8-.028 1.179a19.334 19.334 0 01-.827 4.535 19.4 19.4 0 01-4.888 8.124 19.748 19.748 0 01-7.359 4.623 7.085 7.085 0 01-.705.236c-.238.057-.443.117-.65.176-.646.176-1.293.324-1.97.44-.235.031-.443.06-.679.088a2.114 2.114 0 01-.44.06.386.386 0 01-.177.028h-.031a5.352 5.352 0 01-.707.06 5.369 5.369 0 01-.677.028zm-7.508-8.156c.177.207.384.443.56.651a14.894 14.894 0 012.092 3.12c.265.088.528.148.881.236a33.85 33.85 0 00-.528-1.032c-.353-.588-.708-1.179-1.12-1.736a17.818 17.818 0 00-1.176-1.444c-.18-.207-.384-.412-.561-.588a16.664 16.664 0 00-4.211-3.063 7.207 7.207 0 00-.677-.324 16.411 16.411 0 00-2.268-.853c.089.264.236.5.353.764a16.472 16.472 0 002.68 3.8c.324.324.648.648 1 .972a16.8 16.8 0 01-1-3.592 16.2 16.2 0 013.975 3.09zm18.488-8.889a17.218 17.218 0 01.207 2.768 17.323 17.323 0 01-.119 2.205 18.07 18.07 0 01-1.44 5.243c.353-.264.705-.56 1.028-.855a15.582 15.582 0 004.095-5.712 16.34 16.34 0 00-3 1c.057-.617.088-1.236.088-1.881a19.765 19.765 0 00-.236-2.975 21 21 0 014.328-1 10.408 10.408 0 00.028-1.384 16.578 16.578 0 00-.176-2.444c-.028-.236-.088-.44-.119-.648-.47-.028-.91-.06-1.382-.06a16.172 16.172 0 00-4.18.531l-.619.176a16.962 16.962 0 00-3.947 1.736c-.174.119-.353.236-.529.352a19.222 19.222 0 00-2.088 1.62 22.406 22.406 0 00-2.8-3.208 20.706 20.706 0 012.709-2.06c.179-.119.354-.207.531-.324a21.392 21.392 0 013.8-1.8c.236-.06.443-.148.648-.207a20.5 20.5 0 016.331-1c-.116-.207-.235-.412-.353-.619-.088-.145-.176-.264-.267-.409-.205-.324-.412-.619-.617-.915a15.057 15.057 0 00-5.035-.853 15.262 15.262 0 00-3.5.412 20.527 20.527 0 00-3.8-2.268 18.664 18.664 0 016.036-1 17.914 17.914 0 012.824.207 10.657 10.657 0 00-1.147-.767 16.045 16.045 0 00-8.244-2.3 15.72 15.72 0 00-8.155 2.236c-.353.236-.736.472-1.089.736a15.87 15.87 0 012.061-.117 18.537 18.537 0 016.036 1c.295.088.56.207.855.324a19.019 19.019 0 013.855 2.151 5.1 5.1 0 01.648.469 19.717 19.717 0 012.531 2.415 21.465 21.465 0 00-3.8 1.824 15.172 15.172 0 00-2.8-2.532c-.177-.117-.353-.264-.561-.384a15.054 15.054 0 00-3.827-1.765c-.265-.06-.5-.148-.765-.207a15.507 15.507 0 00-3.711-.44 15.44 15.44 0 00-3.885.5 8.651 8.651 0 00-.589.824c-.207.3-.383.588-.56.884-.119.2-.235.412-.353.617a21.314 21.314 0 015.681 1.032 18.264 18.264 0 00-2.3 3.768 15.866 15.866 0 00-4.3-.56h-.588a5.717 5.717 0 00-.116.648 14 14 0 00-.208 2.5c0 .236.031.5.031.764.028.207.028.443.06.648a21.88 21.88 0 013.678.943c.207.088.412.148.619.236a21.316 21.316 0 014 2.06 6.649 6.649 0 01.617.412c.295.207.56.412.855.648.147.117.323.264.5.412.088-.207.176-.412.267-.619a22.91 22.91 0 011.824-3.356 16.6 16.6 0 012.8 3.592 14.34 14.34 0 00-1.268 2.916c-.028.06-.028.119-.057.176a.522.522 0 00-.06.207 1.131 1.131 0 00-.031.324 2.326 2.326 0 00.06.469 1.919 1.919 0 00.267.56 1.574 1.574 0 00.381.384 2.032 2.032 0 00.943.324h.088a1.793 1.793 0 001.029-.355 1.541 1.541 0 00.384-.381 1.486 1.486 0 00.267-.531 2.335 2.335 0 00.057-.469 1.5 1.5 0 00-.028-.355c-.028-.088-.06-.2-.088-.293v-.031a17.584 17.584 0 00-1.268-2.944c-.116-.2-.235-.412-.353-.617a16.972 16.972 0 00-2.8-3.5c-.147-.148-.324-.3-.472-.443a17.23 17.23 0 00-2.18-1.677 14.31 14.31 0 012.18-3.652 24.928 24.928 0 012.8 2.12c.177.148.324.3.472.443a20.68 20.68 0 012.8 3.208c.119.176.235.352.353.529a21.753 21.753 0 012.063 3.947c.146-.148.324-.267.5-.412a6.794 6.794 0 01.736-.56l.619-.443a15.675 15.675 0 00-.972-4.856 17.13 17.13 0 013.973-1.736 18.513 18.513 0 011.239 4.421zm-22.464-.111a16.8 16.8 0 011.148-3.8c.088-.207.176-.384.267-.588a17.659 17.659 0 012.3-3.711c.147-.176.264-.352.411-.529a19.183 19.183 0 012.5-2.415 14.4 14.4 0 013.885 1.679 15.61 15.61 0 00-2.768 2.472c-.148.148-.265.324-.412.5a16.308 16.308 0 00-2.208 3.652 5.1 5.1 0 00-.236.588 14.722 14.722 0 00-.94 4.123 21.536 21.536 0 00-3.947-1.97z"
                  transform="translate(11320.4 -1.452)"
                  fill="#0d3073"
                />
              </svg>
            </div>
            <h2 class="text-primary-600 font-bold text-xl">
              Ministry of Health- Ethiopia
              <span>
                Healthier Citizens for Prosperous Nation
              </span>
            </h2>
          </div>
          <div class="grid grid-cols-2">
            <div class="flex justify-start" contenteditable="false">
              <img :src="qrSrc" alt="" style="height: 150px;width: 150px;" />
            </div>
            <div class="flex justify-end">
              <div class="grid grid-cols-1">
                <h2 class="text-primary-600 font-bold text-xl">
                  ቀን
                  <span class="ml-4 ">{{
                    new Date().toISOString().slice(0, 10)
                  }}</span>
                </h2>
                <h2 class="text-primary-600 font-bold text-xl -mt-12">
                  ቁጥር _________________________
                </h2>
              </div>
            </div>
          </div>
          <h2 class="mt-20 ml-8" contenteditable="true">
            ለ፡____________________________________
          </h2>
          <p class=" mt-12 px-8  tracking-widest">
            ስለ ውጭ ሀገር የጤና ባለሙያዎች ምዝገባ ጉዳይ በቀን
            <span class="text-yellow-300">
              {{
                modalData && modalData.data && modalData.data.certifiedDate
                  ? modalData.data.certifiedDate.slice(0, 10)
                  : ""
              }}
            </span>
            በቁጥር
            <span class="text-yellow-300">
              {{
                modalData && modalData.data && modalData.data.renewalCode
                  ? modalData.data.renewalCode
                  : ""
              }}
            </span>
            የተጻፈውን ደብዳቤ ይመለከታል፡፡ በቀረበው ጥያቄ መሰረት የተጠቃሾቹ የትምህርት ማስረጃ ከተገመገመ በኋላ
            በስማቸው ትይዩ በተጠቀሰው ስያሜ ከ
            <span class="text-yellow-300">
              {{
                modalData && modalData.data && modalData.data.certifiedDate
                  ? modalData.data.certifiedDate.slice(0, 10)
                  : ""
              }} </span
            >.ዓ.ም ጀምሮ ለ
            <span class="text-yellow-300">
              {{
                modalData &&
                modalData.data &&
                modalData.data.licenseExpirationDate
                  ? Number(modalData.data.licenseExpirationDate.slice(0, 4)) -
                    Number(new Date().toISOString().slice(0, 4))
                  : ""
              }}
            </span>
            ዓመት የተመዘገቡ መሆኑንና ከ
            <span class="text-yellow-300">
              {{
                modalData &&
                modalData.data &&
                modalData.data.licenseExpirationDate
                  ? Number(modalData.data.licenseExpirationDate.slice(0, 4)) -
                    Number(new Date().toISOString().slice(0, 4))
                  : ""
              }}
            </span>
            ዓመት በኋላ በሀገር ውስጥ ካሉ ፈቃዳቸውን ማደስ እንደሚገባ እየገለጽን ይህን ፈቃድ ሰጥተናቸዋል፡፡
          </p>

          <p class="px-8 tracking-widest "></p>

          <div
            class="grid justify-items-center mt-8 mb-20"
            contenteditable="false"
          >
            <table class=" border text-center text-sm font-light ">
              <thead class="border-b font-medium bg-primary-200 ">
                <tr>
                  <th scope="col" class="border-r px-6 py-4 ">
                    #ተ.ቁ
                  </th>
                  <th
                    scope="col"
                    class="border-r px-6 py-4 dark:border-neutral-500"
                  >
                    የስም ዝርዝር
                  </th>
                  <th
                    scope="col"
                    class="border-r px-6 py-4 dark:border-neutral-500"
                  >
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
                  <td
                    contenteditable="true"
                    class="whitespace-nowrap border-r px-6 py-4 text-yellow-300"
                  >
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
                  <td
                    contenteditable="true"
                    class="whitespace-nowrap border-r px-6 py-4 text-yellow-300"
                  >
                    ({{
                      educations && educations.prefix
                        ? educations.prefix.name
                        : ""
                    }})
                    {{
                      educations &&
                      educations.isDropped != true &&
                      educations.professionType
                        ? educations.professionType.name
                        : ""
                    }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="text-left ml-4">
            <h5>ግልባጭ</h5>
            <h5>ለ፡ብቃትና ሰው ሀብት አስተዳደር ስራ አስፈጻሚ አዲስ አበባ</h5>
          </div>
          <h5 class="mt-20   text-right">//ከሰላምታ ጋር//</h5>
          <div
            class="text-primary-600 border-t-2 mt-4 mb-8"
            id="applicantCopyFooter"
            contenteditable="false"
          >
            <div class="grid grid-cols-4">
              <div class="grid grid-cols-4 col-span-1">
                <div class="col-span-1">
                  <i class="fa fa-phone fa-2x mt-4"></i>
                </div>
                <div class="col-span-3">
                  <h2 class="text-primary-600">+251-115-517011</h2>
                  <h2 class="text-primary-600">+251-115-518031</h2>
                  <h2 class="text-primary-600">+251-115-159657</h2>
                  <h2 class="text-primary-600">+251-115-524549</h2>
                  <h2 class="text-primary-600">+251-115-516378</h2>
                  <h2 class="text-primary-600">+251-115-513301</h2>
                </div>
              </div>
              <div class="grid grid-cols-2 col-span-2">
                <div class="flex justify-center">
                  <h2 class="text-primary-600">
                    Fax +251-115-519366
                  </h2>
                </div>
                <h2 class="text-primary-600">
                  <i class="fa fa-envelope"></i> 1234 <br />
                  Addis Ababa, Ethiopia
                </h2>
                <h2 class="text-primary-600 col-span-2">
                  እባክዎን መልስ ሲሰጡ የእኛን ቁጥር ይጥቀሱ
                </h2>
                <h2 class="text-primary-600 col-span-2">
                  In reply please refer to our ref No.
                </h2>
              </div>
              <div class="grid grid-cols-4 mt-2">
                <i class="fa fa-globe mt-1"></i>
                <div class="col-span-3">
                  moh@moh.gov.et
                </div>
                <i class="fa fa-envelope mt-1"></i>
                <div class="col-span-3">
                  www.moh.gov.et
                </div>
                <i class="fa-brands fa-facebook-f mt-1"></i>
                <div class="col-span-3 ">
                  Ministry of Health, Ethiopia
                </div>
                <i class="fa-brands fa-twitter mt-1"></i>
                <div class="col-span-3">
                  @FMoHealth
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end of applicant as foreigner -->

        <div
          class="
            modal-footer
            flex flex-shrink-0 flex-wrap
            items-center
            justify-end
            border-t border-grey-100
            rounded-b-md
          "
        >
          <button
            type="button"
            class="
              inline-block
              px-6
              text-white
              font-medium
              text-xs
              bg-primary-700
              leading-tight
              uppercase
              rounded
              shadow-lg
              hover:bg-white hover:text-primary-700
              transition
              duration-150
              ease-in-out
            "
            data-bs-toggle="modal"
            data-bs-target="#retrivalModal"
          >
            <i class="fa fa-check"></i>
            Set Retrival Date
          </button>

          <button
            type="button"
            class="
              inline-block
              px-6
              text-white
              font-medium
              text-xs
              bg-primary-700
              leading-tight
              uppercase
              rounded
              shadow-lg
              hover:bg-white hover:text-primary-700
              transition
              duration-150
              ease-in-out
            "
            data-bs-dismiss="modal"
          >
            <i class="fa fa-times-circle"></i>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

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
    id="retrivalModal"
    tabindex="-1"
    aria-labelledby="retrivalModalTitle"
    aria-modal="true"
    role="dialog"
  >
    <div
      class="
        modal-dialog modal-dialog-centered
        relative
        w-auto
        pointer-events-none
      "
    >
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
            justify-between
            p-4
            border-b border-grey-200
            rounded-t-md
          "
        ></div>
        <div class="modal-body relative p-4">
          <div class="vld-parent">
            <loading
              :active="isLoading"
              :is-full-page="true"
              :color="'#2F639D'"
              :opacity="0.7"
            ></loading>
            <div class="overflow-hidden shadow-sm">
              <label for="" class="text-primary-600 font-bold"
                >Retrival date for applicant</label
              >

              <input
                type="date"
                v-model="retrivalDate"
                :min="today"
                class="
                  appearance-none
                  block
                  xl:w-64
                  md:w-64
                  sm:w-64
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  hover:text-main-500 hover:border-main-500
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-main-400
                  focus:outline-none
                "
                autocomplete="off"
                placeholder=""
                required
              />
            </div>
          </div>
        </div>
        <div
          class="
            modal-footer
            flex flex-shrink-0 flex-wrap
            items-center
            justify-end
            p-2
            border-t border-grey-200
            rounded-b-md
          "
        >
          <button
            type="button"
            class="
              inline-block
              px-6
              text-white
              font-medium
              text-xs
              bg-primary-700
              leading-tight
              uppercase
              rounded
              shadow-lg
              hover:bg-white hover:text-primary-700
              transition
              duration-150
              ease-in-out
            "
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="
              inline-block
              px-6
              text-white
              font-medium
              text-xs
              bg-primary-700
              leading-tight
              uppercase
              rounded
              shadow-lg
              hover:bg-white hover:text-primary-700
              transition
              duration-150
              ease-in-out
            "
            @click="generateRetrival()"
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import jsPDF from "jspdf";
import backgroundImage from "../../../../../assets/Federal_Certificate.jpg";
import oromiaCertificateBackground from "../../../../../assets/Oromia_Certificate.jpg";
import direDawaCertificateBackground from "../../../../../assets/DireDawa_Certificate.jpg";
import afarCertificateBackground from "../../../../../assets/Afar_Certificate.jpg";
import addisAbabaCertificateBackground from "../../../../../assets/A_A_Certificate.jpg";
import AmharicFont from "../../../Configurations/amharicFont.js";
import { toEthiopian } from "../../../Configurations/dateConvertor";
import STATIC_CERTIFICATE_URL from "../../../../../sharedComponents/constants/message.js";
import { useToast } from "vue-toastification";
import moment from "moment";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import html2pdf from "html2pdf.js";
export default {
  computed: {
    moment: () => moment,
    AmharicFont: () => AmharicFont,
    toEthiopian: () => toEthiopian,
    STATIC_CERTIFICATE_URL: () => STATIC_CERTIFICATE_URL,
  },
  props: ["modalData"],
  components: { Loading },
  setup(props) {
    const store = useStore();
    const toast = useToast();
    const showGenerateModal = ref(true);
    let show = ref(false);
    let qrSrc = ref("");
    let certifiedUser = ref({});
    let certificateDetail = ref({});
    let isLoading = ref(false);
    let showLoading = ref(false);
    let showActionLoading = ref(false);
    const fullPage = ref(false);
    let isUserCertified = ref(true);
    let isUserFound = ref(true);
    let myRegion = ref(true);
    let imageSrc = ref("");
    let today = new Date().toISOString().split("T")[0];
    let retrivalDate = ref("");

    const adminRegionId = JSON.parse(localStorage.getItem("allAdminData"))
      .regionId;

    const expertLevelCode = JSON.parse(localStorage.getItem("allAdminData"))
      .expertLevel.code;

    let isLicenseGenerated = ref(false);

    let applicationStatus = ref("");

    let finalData = computed(() => props.modalData);
    let isReprint =
      finalData.value && finalData.value.data
        ? finalData.value.data.isReprint
        : ref(false);
    let educations = computed(() =>
      props.modalData && props.modalData.newEducations
        ? props.modalData.newEducations.concat(
            props.modalData && props.modalData.previousEducations
              ? props.modalData.previousEducations
              : []
          )
        : props.modalData.newEducations
    );

    const updateLicenseGenerated = () => {
      finalData.value.data
        ? (finalData.value.data.isLicenseGenerated = true)
        : null;
      finalData.value.data ? (finalData.value.data.isReprint = true) : null;
      let req = {
        action: null,
        data: { ...finalData.value.data },
      };

      editApplication(req);
    };

    const editApplication = (req) => {
      delete req.data.educations;
      store
        .dispatch("reviewer/editRenewal", req)
        .then((res) => {
          isLoading.value = false;
          if (res.statusText == "Created") {
            showGenerateModal.value = false;

            let smsMessage = req.data
              ? // eslint-disable-next-line prettier/prettier
                `Dear applicant your applied renewal of license with number ${
                  req.data.renewalCode
                } is printed and ready. Visit our office on ${retrivalDate.value.slice(
                  0,
                  10
                )} and please do not forget to bring all required legal documents.Thank you for using eHPL. visit https://hrl.moh.gov.et for more.`
              : "";
            let smsData = {
              recipients: [
                req.data && req.data.applicant
                  ? "251" + req.data.applicant.phoneNumber
                  : "",
              ],
              message: smsMessage ? smsMessage : "",
            };

            store
              .dispatch("sms/sendSms", smsData)
              .then(() => {
                toast.success("Done", {
                  timeout: 5000,
                  position: "bottom-center",
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  icon: true,
                });
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              })
              .catch(() => {
                toast.error("Sms is not sent", {
                  timeout: 5000,
                  position: "bottom-center",
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  icon: true,
                });
                setTimeout(() => {
                  window.location.reload();
                }, 3000);
              });
          } else {
            showGenerateModal.value = false;
            toast.error(res.data.message, {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const fetchQrCode = () => {
      const staticUrl = STATIC_CERTIFICATE_URL;
      const userId = props.modalData.profile.id;
      const applicationId = props.modalData.data.id;
      const applicationType = "Renewal";

      const qrParam = { url: null };

      qrParam.url =
        staticUrl + "/" + applicationType + "/" + userId + "/" + applicationId;
      store
        .dispatch("reviewer/getQrCode", qrParam)
        .then((res) => {
          imageSrc.value = res.data.data;
        })
        .finally(() => {
          downloadPdf();
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const generateRetrival = () => {
      if (retrivalDate.value != "") {
        finalData.value.data.retrivalDate = retrivalDate.value;

        generate();
      } else {
        toast.error("Please select retrival date", {
          timeout: 5000,
          position: "bottom-center",
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          icon: true,
        });
      }
    };
    const generateForeigner = async () => {
      var element = document.getElementById("foreignersPrintedDiv");
      var opt = {
        margin: 1,
        filename: "myfile.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: "p", unit: "mm", format: "a4" },
      };
      const staticUrl = STATIC_CERTIFICATE_URL;
      const userId = props.modalData.profile.id;
      const applicationId = props.modalData.data.id;
      const applicationType = "NewLicense";

      const qrParam = { url: null };

      qrParam.url =
        staticUrl + "/" + applicationType + "/" + userId + "/" + applicationId;
      store
        .dispatch("reviewer/getQrCode", qrParam)
        .then((res) => {
          qrSrc.value = res.data.data;
        })
        .finally(() => {
          html2pdf()
            .set(opt)
            .from(element)
            .save(
              finalData.value &&
                finalData.value.profile &&
                finalData.value.profile.name
                ? finalData.value.profile.name +
                    " " +
                    new Date().toISOString().slice(0, 10)
                : ""
            )
            .then(() => {
              document.getElementById("applicantCopyHeader").style.display =
                "none";
              document.getElementById("applicantCopyFooter").style.display =
                "none";
              html2pdf()
                .set(opt)
                .from(document.getElementById("foreignersPrintedDiv"))
                .save(
                  finalData.value &&
                    finalData.value.profile &&
                    finalData.value.profile.name
                    ? finalData.value.profile.name +
                        " " +
                        new Date().toISOString().slice(0, 10)
                    : ""
                );
            });

          updateLicenseGenerated();
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const generate = () => {
      if (
        finalData.value.data &&
        finalData.value.data.applicantType &&
        finalData.value.data.applicantType.code == "FOR"
      ) {
        generateForeigner();
        return;
      }
      isLoading.value = true;
      certifiedUser.value = props.modalData.profile;
      certificateDetail.value = props.modalData.data;
      certificateDetail.value.educations = props.modalData.newEducations.concat(
        props.modalData && props.modalData.previousEducations
          ? props.modalData.previousEducations
          : []
      );
      certificateDetail.value.educations = certificateDetail.value.educations
        ? certificateDetail.value.educations.filter(
            (edu) => edu.isDropped != true
          )
        : {};
      applicationStatus.value = props.modalData.data.applicationStatus.code;
      isLicenseGenerated.value = props.modalData.data.isLicenseGenerated;
      certificateDetail.value.licenseNumber =
        certificateDetail.value.renewalCode;
      if (props.modalData.data.certified != true) {
        isUserCertified.value = false;
      }
      if (expertLevelCode != certificateDetail.value.expertLevels.code) {
        myRegion.value = false;
      } else {
        if (
          expertLevelCode === "REG" &&
          adminRegionId != certificateDetail.value.woreda?.zone?.region?.id
        ) {
          myRegion.value = false;
        }
      }
      fetchQrCode();
    };

    const handleRegionsLayout = (
      doc,
      doc2,
      code,
      namePosition,
      professionPossition,
      professionListGap
    ) => {
      doc.setFontSize(15);
      doc2.setFontSize(15);
      doc.text(38, 58, `${certificateDetail.value.licenseNumber}`);
      doc2.text(38, 58, `${certificateDetail.value.licenseNumber}`);

      let paddingAmharic = 5;
      let paddingEnglish = 0;
      if (code == "DD") {
        paddingAmharic = 10;
        paddingEnglish = 10;
      }

      //English name part
      doc.text(
        175,
        namePosition - paddingEnglish,
        `${certifiedUser.value.name} ${certifiedUser.value.fatherName} ${
          certifiedUser.value.grandFatherName
            ? certifiedUser.value.grandFatherName
            : ""
        }`
      );
      doc2.text(
        175,
        namePosition - paddingEnglish,
        `${certifiedUser.value.name} ${certifiedUser.value.fatherName} ${
          certifiedUser.value.grandFatherName
            ? certifiedUser.value.grandFatherName
            : ""
        }`
      );

      let changeWidth = ref(false);
      let changeWidthTooSmall = ref(false);
      let xPosition = ref(147);
      if (certificateDetail.value.educations.length <= 3) {
        for (let i = 0; i < certificateDetail.value.educations.length; i++) {
          let professionPrefix = `${
            certificateDetail.value.educations[i].prefix
              ? certificateDetail.value.educations[i].prefix.name
              : ""
          }  ${
            certificateDetail.value.educations[i].professionType
              ? certificateDetail.value.educations[i].professionType.name
              : certificateDetail.value.educations[i].otherProfessionType
          }`;
          let getLength = doc.getTextWidth(professionPrefix);
          if (getLength > 125 && getLength <= 132) {
            if (!changeWidthTooSmall.value) {
              changeWidth.value = true;
            }
          }
          if (getLength > 132) {
            changeWidthTooSmall.value = true;
            changeWidth.value = false;
          }
        }
      } else {
        for (let i = 0; i < 3; i++) {
          let professionPrefix = `${
            certificateDetail.value.educations[i].prefix
              ? certificateDetail.value.educations[i].prefix.name
              : ""
          }  ${
            certificateDetail.value.educations[i].professionType
              ? certificateDetail.value.educations[i].professionType.name
              : certificateDetail.value.educations[i].otherProfessionType
          }`;
          let getLength = doc.getTextWidth(professionPrefix);
          if (getLength > 125 && getLength <= 132) {
            if (!changeWidthTooSmall.value) {
              changeWidth.value = true;
            }
          }
          if (getLength > 132) {
            changeWidthTooSmall.value = true;
            changeWidth.value = false;
          }
        }
      }

      if (changeWidth.value) {
        doc.setFontSize(10);
        doc2.setFontSize(10);
        xPosition.value = 170;
      } else if (changeWidthTooSmall.value) {
        doc.setFontSize(10);
        doc2.setFontSize(10);
        xPosition.value = 158;
      } else {
        doc.setFontSize(14);
        doc2.setFontSize(14);
        xPosition.value = 158;
      }

      if (certificateDetail.value.educations.length <= 3) {
        for (let i = 0; i < certificateDetail.value.educations.length; i++) {
          doc.text(
            xPosition.value,
            professionPossition + i * professionListGap,
            `${
              certificateDetail.value.educations.length > 1
                ? i + 1 + ". "
                : "1. "
            }${
              certificateDetail.value.educations[i].prefix
                ? certificateDetail.value.educations[i].prefix.name
                : ""
            }  ${
              certificateDetail.value.educations[i].professionType &&
              certificateDetail.value.educations[i].professionType.name
                ? certificateDetail.value.educations[i].professionType.name
                : certificateDetail.value.educations[i].otherProfessionType
            }`
          );
        }
      }
      if (certificateDetail.value.educations.length > 3) {
        for (let i = 0; i < 3; i++) {
          doc.text(
            xPosition.value,
            professionPossition + i * professionListGap,
            `${
              certificateDetail.value.educations.length > 1
                ? i + 1 + ". "
                : "1. "
            }${
              certificateDetail.value.educations[i].prefix
                ? certificateDetail.value.educations[i].prefix.name
                : ""
            }  ${
              certificateDetail.value.educations[i].professionType &&
              certificateDetail.value.educations[i].professionType.name
                ? certificateDetail.value.educations[i].professionType.name
                : certificateDetail.value.educations[i].otherProfessionType
            }`
          );
        }
        let newI = 0;
        for (let i = 3; i < 6; i++) {
          if (certificateDetail.value.educations[i]) {
            doc2.text(
              xPosition.value,
              professionPossition + newI * professionListGap,
              `${
                certificateDetail.value.educations.length > 1
                  ? newI + 1 + ". "
                  : ""
              }${
                certificateDetail.value.educations[i].prefix
                  ? certificateDetail.value.educations[i].prefix.name
                  : ""
              }  ${
                certificateDetail.value.educations[i].professionType &&
                certificateDetail.value.educations[i].professionType.name
                  ? certificateDetail.value.educations[i].professionType.name
                  : certificateDetail.value.educations[i].otherProfessionType
              }`
            );
          }
          newI += 1;
        }
      }

      doc.setFontSize(12);
      doc2.setFontSize(12);
      doc.text(
        197,
        164,
        `${
          certificateDetail.value.certifiedDate
            ? moment(certificateDetail.value.certifiedDate).format(
                "MMM DD, YYYY"
              ) + " - "
            : "Not Specified"
        }`
      );
      doc2.text(
        197,
        164,
        `${
          certificateDetail.value.certifiedDate
            ? moment(certificateDetail.value.certifiedDate).format(
                "MMM DD, YYYY"
              ) + " - "
            : "Not Specified"
        }`
      );
      doc.text(
        226,
        164,
        `${
          certificateDetail.value.licenseExpirationDate
            ? moment(certificateDetail.value.licenseExpirationDate).format(
                "MMM DD, YYYY"
              )
            : "Not Specified"
        }`
      );
      doc2.text(
        226,
        164,
        `${
          certificateDetail.value.licenseExpirationDate
            ? moment(certificateDetail.value.licenseExpirationDate).format(
                "MMM DD, YYYY"
              )
            : "Not Specified"
        }`
      );
      // License Number for amharic
      // doc.addFileToVFS("Amiri-Regular.ttf", AmiriRegular);
      doc.addFileToVFS("Tera-Regular-normal.ttf", AmharicFont);
      doc2.addFileToVFS("Tera-Regular-normal.ttf", AmharicFont);
      doc.addFont("Tera-Regular-normal.ttf", "Tera-Regular", "normal");
      doc2.addFont("Tera-Regular-normal.ttf", "Tera-Regular", "normal");
      doc.setFont("Tera-Regular"); // set font
      doc2.setFont("Tera-Regular");
      //Amharic name part
      doc.text(
        60,
        namePosition - paddingAmharic,
        `${
          certifiedUser.value.alternativeName
            ? certifiedUser.value.alternativeName
            : ""
        } ${
          certifiedUser.value.alternativeFatherName
            ? certifiedUser.value.alternativeFatherName
            : ""
        } ${
          certifiedUser.value.alternativeGrandFatherName
            ? certifiedUser.value.alternativeGrandFatherName
            : ""
        }`
      );
      doc2.text(
        60,
        namePosition - paddingAmharic,
        `${
          certifiedUser.value.alternativeName
            ? certifiedUser.value.alternativeName
            : ""
        } ${
          certifiedUser.value.alternativeFatherName
            ? certifiedUser.value.alternativeFatherName
            : ""
        } ${
          certifiedUser.value.alternativeGrandFatherName
            ? certifiedUser.value.alternativeGrandFatherName
            : ""
        }`
      );
      // doc.addFileToVFS("Amiri-Regular.ttf", AmiriRegular);

      doc.setFontSize(17);
      doc2.setFontSize(17);

      if (changeWidth.value) {
        doc.setFontSize(11);
        doc2.setFontSize(11);
        xPosition.value = 28;
      } else if (changeWidthTooSmall.value) {
        doc.setFontSize(11);
        doc2.setFontSize(11);
        xPosition.value = 22;
      } else {
        doc.setFontSize(14);
        doc2.setFontSize(14);
        xPosition.value = 40;
      }
      if (certificateDetail.value.educations.length <= 3) {
        for (let i = 0; i < certificateDetail.value.educations.length; i++) {
          doc.text(
            xPosition.value,
            professionPossition + i * professionListGap,
            `${
              certificateDetail.value.educations.length > 1
                ? i + 1 + ". "
                : "1. "
            }${
              certificateDetail.value.educations[i].prefix
                ? certificateDetail.value.educations[i].prefix.amharic_name
                : ""
            }  ${
              certificateDetail.value.educations[i].professionType
                ? certificateDetail.value.educations[i].professionType
                    .amharicProfessionalType
                : certificateDetail.value.educations[i].otherProfessionAmharic
            }`
          );
        }
      } else {
        for (let i = 0; i < 3; i++) {
          doc.text(
            xPosition.value,
            professionPossition + i * professionListGap,
            `${
              certificateDetail.value.educations.length > 1 ? i + 1 + ". " : ""
            }  ${
              certificateDetail.value.educations[i].prefix
                ? certificateDetail.value.educations[i].prefix.amharic_name
                : ""
            }  ${
              certificateDetail.value.educations[i].professionType &&
              certificateDetail.value.educations[i].professionType
                .amharicProfessionalType
                ? certificateDetail.value.educations[i].professionType
                    .amharicProfessionalType
                : certificateDetail.value.educations[i].otherProfessionAmharic
                ? certificateDetail.value.educations[i].otherProfessionAmharic
                : ""
            }`
          );
        }
        let newI = 0;
        for (let i = 3; i < 6; i++) {
          if (certificateDetail.value.educations[i]) {
            doc2.text(
              xPosition.value,
              professionPossition + newI * professionListGap,
              `${
                certificateDetail.value.educations.length > 1
                  ? newI + 1 + ". "
                  : ""
              }
              ${
                certificateDetail.value.educations[i].prefix
                  ? certificateDetail.value.educations[i].prefix.amharic_name
                  : ""
              }  ${
                certificateDetail.value.educations[i].professionType &&
                certificateDetail.value.educations[i].professionType
                  .amharicProfessionalType
                  ? certificateDetail.value.educations[i].professionType
                      .amharicProfessionalType
                  : certificateDetail.value.educations[i].otherProfessionAmharic
                  ? certificateDetail.value.educations[i].otherProfessionAmharic
                  : ""
              }`
            );
            newI++;
          }
        }
      }

      //End of Amharic part for certificate
      doc.setFontSize(12);
      doc2.setFontSize(12);
      // doc.text(80)
      let getAmharicLicensedDate = doc.getTextWidth(
        toEthiopian(
          moment(certificateDetail.value.certifiedDate)._d.toISOString(),
          false
        ) + " - "
      );
      let getAmharicLicensedDate2 = doc2.getTextWidth(
        toEthiopian(
          moment(certificateDetail.value.certifiedDate)._d.toISOString(),
          false
        ) + " - "
      );
      doc.text(
        75,
        164,
        `${
          certificateDetail.value.certifiedDate
            ? toEthiopian(
                moment(certificateDetail.value.certifiedDate)._d.toISOString(),
                false
              ) + " - "
            : ""
        }`
      );
      doc2.text(
        75,
        164,
        `${
          certificateDetail.value.certifiedDate
            ? toEthiopian(
                moment(certificateDetail.value.certifiedDate)._d.toISOString(),
                false
              ) + " - "
            : ""
        }`
      );
      doc.text(
        75 + getAmharicLicensedDate,
        164,
        `${
          certificateDetail.value.licenseExpirationDate
            ? toEthiopian(
                moment(
                  certificateDetail.value.licenseExpirationDate
                )._d.toISOString(),
                false
              )
            : " አልተገለጸም"
        }`
      );
      doc2.text(
        75 + getAmharicLicensedDate2,
        164,
        `${
          certificateDetail.value.licenseExpirationDate
            ? toEthiopian(
                moment(
                  certificateDetail.value.licenseExpirationDate
                )._d.toISOString(),
                false
              )
            : " አልተገለጸም"
        }`
      );
    };

    const downloadPdf = () => {
      const userImage = certifiedUser.value.profilePicture
        ? certifiedUser.value.profilePicture.filePath
        : null;
      const doc = new jsPDF({
        orientation: "landscape",
        filters: ["ASCIIHexEncode"],
      });
      const doc2 = new jsPDF({
        orientation: "landscape",
        filters: ["ASCIIHexEncode"],
      });
      let defaultCode = "";
      let defaultBackground = "";
      let defaultNamePos = 0;
      let defaultProfPos = 0;
      let defaultProfGap = 0;
      if (
        certificateDetail.value.educations &&
        certificateDetail.value.educations.length <= 3
      ) {
        if (
          certificateDetail.value.educations &&
          certificateDetail.value.educations.length <= 3
        ) {
          if (
            certificateDetail.value.renewalReviewer.reviewer.expertLevel
              .code === "FED"
          ) {
            defaultBackground = backgroundImage;
            defaultCode = "FED";
            defaultNamePos = 100;
            defaultProfPos = 125;
            defaultProfGap = 7;
          } else if (
            certificateDetail.value.renewalReviewer.reviewer.region.code ===
            "ORO"
          ) {
            defaultBackground = oromiaCertificateBackground;
            defaultCode = "ORO";
            defaultNamePos = 110;
            defaultProfPos = 133;
            defaultProfGap = 4;
          } else if (
            certificateDetail.value.renewalReviewer.reviewer.region.code ===
            "AA"
          ) {
            defaultBackground = addisAbabaCertificateBackground;
            defaultCode = "AA";
            defaultNamePos = 110;
            defaultProfPos = 133;
            defaultProfGap = 4;
          } else if (
            certificateDetail.value.renewalReviewer.reviewer.region.code ===
            "DD"
          ) {
            defaultBackground = direDawaCertificateBackground;
            defaultCode = "DD";
            defaultNamePos = 110;
            defaultProfPos = 120;
            defaultProfGap = 4;
          } else if (
            certificateDetail.value.renewalReviewer.reviewer.region.code ===
            "AFA"
          ) {
            defaultBackground = afarCertificateBackground;
            defaultCode = "AFA";
            defaultNamePos = 105;
            defaultProfPos = 130;
            defaultProfGap = 4;
          }

          doc.addImage(
            defaultBackground,
            "JPG",
            0,
            0,
            298,
            213,
            undefined,
            "FAST"
          );

          handleRegionsLayout(
            doc,
            doc2,
            defaultCode,
            defaultNamePos,
            defaultProfPos,
            defaultProfGap
          );

          doc.addImage(imageSrc.value, "JPG", 246, 14, 35, 35);
          if (userImage != null) {
            let path = {
              path: userImage,
            };
            store.dispatch("profile/converProfilePicture", path).then((res) => {
              doc.addImage(res.data.data, "JPG", 33, 20, 30, 30);
              doc.setFontSize(10);
              window.open(doc.output("bloburl"));
              updateLicenseGenerated();
            });
          } else {
            doc.setFontSize(10);
            window.open(doc.output("bloburl"));
            updateLicenseGenerated();
          }
        }
      }

      if (
        certificateDetail.value.educations &&
        certificateDetail.value.educations.length > 3
      ) {
        let multipleBackground = "";
        let multipleCode = "";
        let multipleNamePos = 0;
        let multipleProfPos = 0;
        let multipleProfGap = 0;

        if (
          certificateDetail.value.renewalReviewer.reviewer.expertLevel.code ===
          "FED"
        ) {
          multipleBackground = backgroundImage;
          multipleCode = "FED";
          multipleNamePos = 100;
          multipleProfPos = 125;
          multipleProfGap = 7;
        } else if (
          certificateDetail.value.renewalReviewer.reviewer.region.code === "ORO"
        ) {
          multipleBackground = oromiaCertificateBackground;
          multipleCode = "ORO";
          defaultNamePos = 110;
          defaultProfPos = 133;
          defaultProfGap = 4;
        } else if (
          certificateDetail.value.renewalReviewer.reviewer.region.code === "AA"
        ) {
          multipleBackground = addisAbabaCertificateBackground;
          multipleCode = "AA";
          defaultNamePos = 110;
          defaultProfPos = 133;
          defaultProfGap = 4;
        } else if (
          certificateDetail.value.renewalReviewer.reviewer.region.code === "DD"
        ) {
          multipleBackground = direDawaCertificateBackground;
          multipleCode = "DD";
          defaultNamePos = 110;
          defaultProfPos = 120;
          defaultProfGap = 4;
        } else if (
          certificateDetail.value.renewalReviewer.reviewer.region.code === "AFA"
        ) {
          multipleBackground = afarCertificateBackground;
          multipleCode = "AFA";
          defaultNamePos = 105;
          defaultProfPos = 130;
          defaultProfGap = 4;
        }

        doc.addImage(
          multipleBackground,
          "JPG",
          0,
          0,
          298,
          213,
          undefined,
          "FAST"
        );
        doc2.addImage(
          multipleBackground,
          "JPG",
          0,
          0,
          298,
          213,
          undefined,
          "FAST"
        );

        handleRegionsLayout(
          doc,
          doc2,
          multipleCode,
          multipleNamePos,
          multipleProfPos,
          multipleProfGap
        );

        doc.addImage(imageSrc.value, "JPG", 246, 14, 35, 35);
        doc2.addImage(imageSrc.value, "JPG", 246, 14, 35, 35);
        if (userImage !== null) {
          let path = {
            path: userImage,
          };
          store.dispatch("profile/converProfilePicture", path).then((res) => {
            doc.addImage(res.data.data, "JPG", 33, 20, 30, 30);
            doc2.addImage(res.data.data, "JPG", 33, 20, 30, 30);
            doc.setFontSize(10);
            doc2.setFontSize(10);

            window.open(doc.output("bloburl"), "w1");
            setTimeout(() => {
              window.open(doc2.output("bloburl"), "w2");
            }, 100);
            updateLicenseGenerated();
          });
        } else {
          doc.setFontSize(10);
          doc2.setFontSize(10);

          window.open(doc.output("bloburl"), "w1");
          setTimeout(() => {
            window.open(doc2.output("bloburl"), "w2");
          }, 100);
          updateLicenseGenerated();
        }
      }
    };

    return {
      show,
      downloadPdf,
      certifiedUser,
      showLoading,
      certificateDetail,
      isUserCertified,
      isUserFound,
      myRegion,
      generate,
      fullPage,
      educations,
      showGenerateModal,
      isLicenseGenerated,
      isLoading,
      showActionLoading,
      applicationStatus,
      isReprint,
      retrivalDate,
      generateRetrival,
      today,
      finalData,
      qrSrc,
    };
  },
};
</script>
<style scoped>
@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1525px;
  }
}
</style>
