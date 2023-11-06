<template>
  <div class="modal-body relative p-4" contenteditable="true">
    <span
      v-if="
        modalData.data && modalData.data.educations
          ? modalData.data.educations.length <= 3
          : 0
      "
    >
      <div class="flex justify-center">
        <div class="grid grid-rows-1 text-primary-600 font-bold text-2xl">
          በኢትዮፕያ ፌደራላዊ ዴሞክራሲያዊ ሪፐብሊክ
        </div>
      </div>
      <div class="flex justify-center">
        <div class="grid grid-rows-1 text-primary-600 font-bold text-2xl">
          Federal Democratic Republic Ethiopia
        </div>
      </div>
      <div class="flex justify-center">
        <div class="grid grid-rows-1 text-primary-600 font-bold text-xl">የጤና ሚኒስቴር</div>
      </div>
      <div class="flex justify-center">
        <div class="grid grid-rows-1 text-primary-600 font-bold text-xl">
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
              modalData.data.renewalReviewer.reviewer.expertLevelId === 3
                ? "1112/2011"
                : modalData.data &&
                  modalData.data.renewalReviewer &&
                  modalData.data.renewalReviewer.reviewer.regionId &&
                  modalData.data.renewalReviewer.reviewer.region.code === "AA"
                ? "64/2011"
                : modalData.data &&
                  modalData.data.renewalReviewer &&
                  modalData.data.renewalReviewer.reviewer.regionId &&
                  modalData.data.renewalReviewer.reviewer.region.code === "ORO"
                ? "661/2009"
                : "-"
            }}
            አንቀጽ
            {{
              modalData.data &&
              modalData.data.renewalReviewer &&
              modalData.data.renewalReviewer.reviewer &&
              modalData.data.renewalReviewer.reviewer.expertLevelId === 3
                ? "73"
                : modalData.data &&
                  modalData.data.renewalReviewer &&
                  modalData.data.renewalReviewer.reviewer &&
                  modalData.data.renewalReviewer.reviewer.region &&
                  modalData.data.renewalReviewer.reviewer.region.code === "AA"
                ? "44/8"
                : modalData.data &&
                  modalData.data.renewalReviewer &&
                  modalData.data.renewalReviewer.reviewer &&
                  modalData.data.renewalReviewer.reviewer.region &&
                  modalData.data.renewalReviewer.reviewer.region.code === "ORO"
                ? "3/3"
                : "-"
            }}
            ስልጣን መሰረት
            <span class="font-bold underline"
              >{{
                modalData.data &&
                modalData.data.profile &&
                modalData.data.profile.alternativeName
                  ? modalData.data.profile.alternativeName
                  : ""
              }}
              {{
                modalData.data &&
                modalData.data.profile &&
                modalData.data.profile.alternativeFatherName
                  ? modalData.data.profile.alternativeFatherName
                  : ""
              }}
              {{
                modalData.data &&
                modalData.data.profile &&
                modalData.data.profile.alternativeGrandFatherName
                  ? modalData.data.profile.alternativeGrandFatherName
                  : ""
              }}</span
            >
            ተገቢውን መስፈርት አሟልተው ስለተገኙ ሚኒስቴር መስሪያ ቤቱ <br />
            <div class="flex justify-center mt-8 mb-2">
              <span
                v-for="department in modalData.data.educations"
                :key="department.id"
                class="underline font-bold"
                style="word-break: break-word"
              >
                {{ department.prefix ? department.prefix.amharic_name + " " : "" }}
                {{
                  department.professionType && department.professionType.name == "other"
                    ? department.otherProfessionAmharic
                    : department.professionType.amharicProfessionalType
                }}</span
              ><br />
            </div>
            ሙያ መዝግቦ ይህን የሙያ ስራ ፈቃድ ሰጥቷል።
          </div>
          <div>
            Under the Federal Democratic Republic of Ethiopia the Minstry of Health by
            Virtue of proclamation No.
            {{
              modalData.data &&
              modalData.data.renewalReviewer &&
              modalData.data.renewalReviewer.reviewer &&
              modalData.data.renewalReviewer.reviewer.expertLevel &&
              modalData.data.renewalReviewer.reviewer.expertLevel.code === "FED"
                ? "1112/2019"
                : modalData.data &&
                  modalData.data.renewalReviewer &&
                  modalData.data.renewalReviewer.reviewer &&
                  modalData.data.renewalReviewer.reviewer.region &&
                  modalData.data.renewalReviewer.reviewer.region.code === "AA"
                ? "64/2019"
                : modalData.data &&
                  modalData.data.renewalReviewer &&
                  modalData.data.renewalReviewer.reviewer &&
                  modalData.data.renewalReviewer.reviewer.region &&
                  modalData.data.renewalReviewer.reviewer.region.code === "ORO"
                ? "661/2002"
                : "-"
            }}
            Article
            {{
              modalData.data &&
              modalData.data.renewalReviewer &&
              modalData.data.renewalReviewer.reviewer &&
              modalData.data.renewalReviewer.reviewer.expertLevel &&
              modalData.data.renewalReviewer.reviewer.expertLevel.code === "FED"
                ? "73"
                : modalData.data &&
                  modalData.data.renewalReviewer &&
                  modalData.data.renewalReviewer.reviewer &&
                  modalData.data.renewalReviewer.reviewer.region &&
                  modalData.data.renewalReviewer.reviewer.region.code === "AA"
                ? "44/8"
                : modalData.data &&
                  modalData.data.renewalReviewer &&
                  modalData.data.renewalReviewer.reviewer &&
                  modalData.data.renewalReviewer.reviewer.region &&
                  modalData.data.renewalReviewer.reviewer.region.code === "ORO"
                ? "3/3"
                : "-"
            }}is given the authority to issue
            <span class="font-bold underline"
              >{{
                modalData.data && modalData.data.profile && modalData.data.profile.name
                  ? modalData.data.profile.name
                  : ""
              }}
              {{
                modalData.data &&
                modalData.data.profile &&
                modalData.data.profile.fatherName
                  ? modalData.data.profile.fatherName
                  : ""
              }}
              {{
                modalData.data &&
                modalData.data.profile &&
                modalData.data.profile.grandFatherName
                  ? modalData.data.profile.grandFatherName
                  : ""
              }}</span
            ><br />
            <div class="grid grid-rows-3 justify-center mt-8 mb-2">
              <span
                v-for="department in modalData.data.educations"
                :key="department.id"
                class="underline font-bold"
                style="word-break: break-word"
              >
                {{ department.prefix ? department.prefix.name : "" }}

                {{
                  department.professionType && department.professionType.name == "other"
                    ? department.otherProfessionType
                    : department.professionType.name
                }} </span
              ><br />
            </div>
            Having duly satisfied the requirements of the Ministry hereby registered and
            licensed as
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 mt-8">
        <div class="flex justify-start">
          ይህ የሙያ የስራ ፈቃድ የሚያገለግለው ከ
          <span class="font-bold">
            {{
              modalData.data.certifiedDate
                ? toEthiopian(
                    moment(modalData.data.certifiedDate)._d.toISOString(),
                    false
                  )
                : ""
            }}</span
          >
          -እስከ-
          <span class="font-bold">
            {{
              modalData.data.licenseExpirationDate !== null
                ? toEthiopian(
                    moment(modalData.data.licenseExpirationDate)._d.toISOString(),
                    false
                  )
                : " አልተገለጸም"
            }}</span
          >
        </div>
        <div>
          The license is valid from
          <span class="font-bold">
            {{
              modalData.data.certifiedDate
                ? moment(modalData.data.certifiedDate).format("MMM DD, YYYY")
                : ""
            }}</span
          >
          -To-
          <span class="font-bold">
            {{
              modalData.data.licenseExpirationDate
                ? moment(modalData.data.licenseExpirationDate).format("MMM DD, YYYY")
                : " Not specified"
            }}</span
          >
        </div>
      </div>
    </span>

    <!-- End of professions that are less than 3 part -->

    <!-- if professions are greater than 3 -->
    <div
      class="container px-6 mx-auto"
      v-if="
        modalData.data && modalData.data.educations
          ? modalData.data.educations.length > 4
          : 0
      "
    >
      <section class="text-gray-800">
        <!-- upto the 3rd profession -->
        <div class="w-full mb-8 border-b-8 p-4">
          <div class="flex justify-center mb-4">
            <h1>License 1</h1>
          </div>

          <div class="flex justify-center">
            <div class="grid grid-rows-1 text-primary-600 font-bold text-2xl">
              በኢትዮፕያ ፌደራላዊ ዴሞክራሲያዊ ሪፐብሊክ
            </div>
          </div>
          <div class="flex justify-center">
            <div class="grid grid-rows-1 text-primary-600 font-bold text-2xl">
              Federal Democratic Republic Ethiopia
            </div>
          </div>
          <div class="flex justify-center">
            <div class="grid grid-rows-1 text-primary-600 font-bold text-xl">
              የጤና ሚኒስቴር
            </div>
          </div>
          <div class="flex justify-center">
            <div class="grid grid-rows-1 text-primary-600 font-bold text-xl">
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
                  modalData.data.renewalReviewer.reviewer.expertLevelId === 3
                    ? "1112/2011"
                    : modalData.data &&
                      modalData.data.renewalReviewer &&
                      modalData.data.renewalReviewer.reviewer.regionId &&
                      modalData.data.renewalReviewer.reviewer.region.code === "AA"
                    ? "64/2011"
                    : modalData.data &&
                      modalData.data.renewalReviewer &&
                      modalData.data.renewalReviewer.reviewer.regionId &&
                      modalData.data.renewalReviewer.reviewer.region.code === "ORO"
                    ? "661/2009"
                    : "-"
                }}
                አንቀጽ
                {{
                  modalData.data &&
                  modalData.data.renewalReviewer &&
                  modalData.data.renewalReviewer.reviewer &&
                  modalData.data.renewalReviewer.reviewer.expertLevelId === 3
                    ? "73"
                    : modalData.data &&
                      modalData.data.renewalReviewer &&
                      modalData.data.renewalReviewer.reviewer &&
                      modalData.data.renewalReviewer.reviewer.region &&
                      modalData.data.renewalReviewer.reviewer.region.code === "AA"
                    ? "44/8"
                    : modalData.data &&
                      modalData.data.renewalReviewer &&
                      modalData.data.renewalReviewer.reviewer &&
                      modalData.data.renewalReviewer.reviewer.region &&
                      modalData.data.renewalReviewer.reviewer.region.code === "ORO"
                    ? "3/3"
                    : "-"
                }}
                ስልጣን መሰረት
                <span class="font-bold underline"
                  >{{
                    modalData.data &&
                    modalData.data.profile &&
                    modalData.data.profile.alternativeName
                      ? modalData.data.profile.alternativeName
                      : ""
                  }}
                  {{
                    modalData.data &&
                    modalData.data.profile &&
                    modalData.data.profile.alternativeFatherName
                      ? modalData.data.profile.alternativeFatherName
                      : ""
                  }}
                  {{
                    modalData.data &&
                    modalData.data.profile &&
                    modalData.data.profile.alternativeGrandFatherName
                      ? modalData.data.profile.alternativeGrandFatherName
                      : ""
                  }}</span
                >
                ተገቢውን መስፈርት አሟልተው ስለተገኙ ሚኒስቴር መስሪያ ቤቱ <br />
                <div class="grid grid-rows-3 justify-center mt-8 mb-2">
                  <span class="underline font-bold" style="word-break: break-word">
                    {{
                      modalData.data.educations[0].prefix
                        ? modalData.data.educations[0].prefix.amharic_name + " "
                        : ""
                    }}
                    {{
                      modalData.data.educations[0].professionType &&
                      modalData.data.educations[0].professionType.name == "other"
                        ? modalData.data.educations[0].otherProfessionAmharic
                        : modalData.data.educations[0].professionType
                            .amharicProfessionalType
                    }}</span
                  >
                  <span class="underline font-bold" style="word-break: break-word">
                    {{
                      modalData.data.educations[1].prefix
                        ? modalData.data.educations[1].prefix.amharic_name + " "
                        : ""
                    }}
                    {{
                      modalData.data.educations[1].professionType &&
                      modalData.data.educations[1].professionType.name == "other"
                        ? modalData.data.educations[1].otherProfessionAmharic
                        : modalData.data.educations[1].professionType
                            .amharicProfessionalType
                    }}</span
                  >
                  <span class="underline font-bold" style="word-break: break-word">
                    {{
                      modalData.data.educations[2].prefix
                        ? modalData.data.educations[2].prefix.amharic_name + " "
                        : ""
                    }}
                    {{
                      modalData.data.educations[2].professionType &&
                      modalData.data.educations[2].professionType.name == "other"
                        ? modalData.data.educations[2].otherProfessionAmharic
                        : modalData.data.educations[2].professionType
                            .amharicProfessionalType
                    }}</span
                  >
                </div>
                ሙያ መዝግቦ ይህን የሙያ ስራ ፈቃድ ሰጥቷል።
              </div>
              <div>
                Under the Federal Democratic Republic of Ethiopia the Minstry of Health by
                Virtue of proclamation No.
                {{
                  modalData.data &&
                  modalData.data.renewalReviewer &&
                  modalData.data.renewalReviewer.reviewer &&
                  modalData.data.renewalReviewer.reviewer.expertLevel &&
                  modalData.data.renewalReviewer.reviewer.expertLevel.code === "FED"
                    ? "1112/2019"
                    : modalData.data &&
                      modalData.data.renewalReviewer &&
                      modalData.data.renewalReviewer.reviewer &&
                      modalData.data.renewalReviewer.reviewer.region &&
                      modalData.data.renewalReviewer.reviewer.region.code === "AA"
                    ? "64/2019"
                    : modalData.data &&
                      modalData.data.renewalReviewer &&
                      modalData.data.renewalReviewer.reviewer &&
                      modalData.data.renewalReviewer.reviewer.region &&
                      modalData.data.renewalReviewer.reviewer.region.code === "ORO"
                    ? "661/2002"
                    : "-"
                }}
                Article
                {{
                  modalData.data &&
                  modalData.data.renewalReviewer &&
                  modalData.data.renewalReviewer.reviewer &&
                  modalData.data.renewalReviewer.reviewer.expertLevel &&
                  modalData.data.renewalReviewer.reviewer.expertLevel.code === "FED"
                    ? "73"
                    : modalData.data &&
                      modalData.data.renewalReviewer &&
                      modalData.data.renewalReviewer.reviewer &&
                      modalData.data.renewalReviewer.reviewer.region &&
                      modalData.data.renewalReviewer.reviewer.region.code === "AA"
                    ? "44/8"
                    : modalData.data &&
                      modalData.data.renewalReviewer &&
                      modalData.data.renewalReviewer.reviewer &&
                      modalData.data.renewalReviewer.reviewer.region &&
                      modalData.data.renewalReviewer.reviewer.region.code === "ORO"
                    ? "3/3"
                    : "-"
                }}is given the authority to issue
                <span class="font-bold underline"
                  >{{
                    modalData.data && modalData.data.profile
                      ? modalData.data.profile.name
                      : ""
                  }}
                  {{
                    modalData.data && modalData.data.profile
                      ? modalData.data.profile.fatherName
                      : ""
                  }}
                  {{
                    modalData.data && modalData.data.profile
                      ? modalData.data.profile.grandFatherName
                      : ""
                  }}</span
                ><br />
                <div class="grid grid-rows-3 justify-center mt-8 mb-2">
                  <span class="underline font-bold" style="word-break: break-word">
                    {{
                      modalData.data.educations[0].prefix
                        ? modalData.data.educations[0].prefix.amharic_name + " "
                        : ""
                    }}
                    {{
                      modalData.data.educations[0].professionType &&
                      modalData.data.educations[0].professionType.name == "other"
                        ? modalData.data.educations[0].otherProfessionType
                        : modalData.data.educations[0].professionType.name
                    }}</span
                  >
                  <span class="underline font-bold" style="word-break: break-word">
                    {{
                      modalData.data.educations[1].prefix
                        ? modalData.data.educations[1].prefix.amharic_name + " "
                        : ""
                    }}
                    {{
                      modalData.data.educations[1].professionType &&
                      modalData.data.educations[1].professionType.name == "other"
                        ? modalData.data.educations[1].otherProfessionType
                        : modalData.data.educations[1].professionType.name
                    }}</span
                  >
                  <span class="underline font-bold" style="word-break: break-word">
                    {{
                      modalData.data.educations[2].prefix
                        ? modalData.data.educations[2].prefix.amharic_name + " "
                        : ""
                    }}
                    {{
                      modalData.data.educations[2].professionType &&
                      modalData.data.educations[2].professionType.name == "other"
                        ? modalData.data.educations[2].otherProfessionType
                        : modalData.data.educations[2].professionType.name
                    }}</span
                  ><br />
                  <span class="underline font-bold" style="word-break: break-word">
                  </span>
                </div>
                Having duly satisfied the requirements of the Ministry hereby registered
                and licensed as
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 mt-8">
            <div class="flex justify-start">
              ይህ የሙያ የስራ ፈቃድ የሚያገለግለው ከ
              <span class="font-bold">
                {{
                  modalData.data.certifiedDate
                    ? toEthiopian(
                        moment(modalData.data.certifiedDate)._d.toISOString(),
                        false
                      )
                    : ""
                }}</span
              >
              -እስከ-
              <span class="font-bold">
                {{
                  modalData.data.licenseExpirationDate !== null
                    ? toEthiopian(
                        moment(modalData.data.licenseExpirationDate)._d.toISOString(),
                        false
                      )
                    : " አልተገለጸም"
                }}</span
              >
            </div>
            <div>
              The license is valid from
              <span class="font-bold">
                {{
                  modalData.data.certifiedDate
                    ? moment(modalData.data.certifiedDate).format("MMM DD, YYYY")
                    : ""
                }}</span
              >
              -To-
              <span class="font-bold">
                {{
                  modalData.data.licenseExpirationDate
                    ? moment(modalData.data.licenseExpirationDate).format("MMM DD, YYYY")
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
            <div class="grid grid-rows-1 text-primary-600 font-bold text-2xl">
              በኢትዮፕያ ፌደራላዊ ዴሞክራሲያዊ ሪፐብሊክ
            </div>
          </div>
          <div class="flex justify-center">
            <div class="grid grid-rows-1 text-primary-600 font-bold text-2xl">
              Federal Democratic Republic Ethiopia
            </div>
          </div>
          <div class="flex justify-center">
            <div class="grid grid-rows-1 text-primary-600 font-bold text-xl">
              የጤና ሚኒስቴር
            </div>
          </div>
          <div class="flex justify-center">
            <div class="grid grid-rows-1 text-primary-600 font-bold text-xl">
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
                  modalData.data.renewalReviewer.reviewer.expertLevelId === 3
                    ? "1112/2011"
                    : modalData.data &&
                      modalData.data.renewalReviewer &&
                      modalData.data.renewalReviewer.reviewer.regionId &&
                      modalData.data.renewalReviewer.reviewer.region.code === "AA"
                    ? "64/2011"
                    : modalData.data &&
                      modalData.data.renewalReviewer &&
                      modalData.data.renewalReviewer.reviewer.regionId &&
                      modalData.data.renewalReviewer.reviewer.region.code === "ORO"
                    ? "661/2009"
                    : "-"
                }}
                አንቀጽ
                {{
                  modalData.data &&
                  modalData.data.renewalReviewer &&
                  modalData.data.renewalReviewer.reviewer &&
                  modalData.data.renewalReviewer.reviewer.expertLevelId === 3
                    ? "73"
                    : modalData.data &&
                      modalData.data.renewalReviewer &&
                      modalData.data.renewalReviewer.reviewer &&
                      modalData.data.renewalReviewer.reviewer.region &&
                      modalData.data.renewalReviewer.reviewer.region.code === "AA"
                    ? "44/8"
                    : modalData.data &&
                      modalData.data.renewalReviewer &&
                      modalData.data.renewalReviewer.reviewer &&
                      modalData.data.renewalReviewer.reviewer.region &&
                      modalData.data.renewalReviewer.reviewer.region.code === "ORO"
                    ? "3/3"
                    : "-"
                }}
                ስልጣን መሰረት
                <span class="font-bold underline"
                  >{{
                    modalData.data &&
                    modalData.data.profile &&
                    modalData.data.profile.alternativeName
                      ? modalData.data.profile.alternativeName
                      : ""
                  }}
                  {{
                    modalData.data &&
                    modalData.data.profile &&
                    modalData.data.profile.alternativeFatherName
                      ? modalData.data.profile.alternativeFatherName
                      : ""
                  }}
                  {{
                    modalData.data &&
                    modalData.data.profile &&
                    modalData.data.profile.alternativeGrandFatherName
                      ? modalData.data.profile.alternativeGrandFatherName
                      : ""
                  }}</span
                >
                ተገቢውን መስፈርት አሟልተው ስለተገኙ ሚኒስቴር መስሪያ ቤቱ <br />
                <div class="grid grid-rows-3 justify-center mt-8 mb-2">
                  <span class="underline font-bold" style="word-break: break-word">
                    {{
                      modalData.data.educations[3].prefix
                        ? modalData.data.educations[3].prefix.amharic_name + " "
                        : ""
                    }}
                    {{
                      modalData.data.educations[3].professionType &&
                      modalData.data.educations[3].professionType.name == "other"
                        ? modalData.data.educations[3].otherProfessionAmharic
                        : modalData.data.educations[3].professionType
                            .amharicProfessionalType
                    }}</span
                  >
                  <span class="underline font-bold" style="word-break: break-word">
                    {{
                      modalData.data.educations[4].prefix
                        ? modalData.data.educations[4].prefix.amharic_name + " "
                        : ""
                    }}
                    {{
                      modalData.data.educations[4].professionType &&
                      modalData.data.educations[4].professionType.name == "other"
                        ? modalData.data.educations[4].otherProfessionAmharic
                        : modalData.data.educations[4].professionType
                            .amharicProfessionalType
                    }}</span
                  >
                  <span class="underline font-bold" style="word-break: break-word">
                    {{
                      modalData.data.educations[5].prefix
                        ? modalData.data.educations[5].prefix.amharic_name + " "
                        : ""
                    }}
                    {{
                      modalData.data.educations[5].professionType &&
                      modalData.data.educations[5].professionType.name == "other"
                        ? modalData.data.educations[5].otherProfessionAmharic
                        : modalData.data.educations[5].professionType
                            .amharicProfessionalType
                    }}</span
                  >
                </div>
                ሙያ መዝግቦ ይህን የሙያ ስራ ፈቃድ ሰጥቷል።
              </div>
              <div>
                Under the Federal Democratic Republic of Ethiopia the Minstry of Health by
                Virtue of proclamation No.
                {{
                  modalData.data &&
                  modalData.data.renewalReviewer &&
                  modalData.data.renewalReviewer.reviewer &&
                  modalData.data.renewalReviewer.reviewer.expertLevel &&
                  modalData.data.renewalReviewer.reviewer.expertLevel.code === "FED"
                    ? "1112/2019"
                    : modalData.data &&
                      modalData.data.renewalReviewer &&
                      modalData.data.renewalReviewer.reviewer &&
                      modalData.data.renewalReviewer.reviewer.region &&
                      modalData.data.renewalReviewer.reviewer.region.code === "AA"
                    ? "64/2019"
                    : modalData.data &&
                      modalData.data.renewalReviewer &&
                      modalData.data.renewalReviewer.reviewer &&
                      modalData.data.renewalReviewer.reviewer.region &&
                      modalData.data.renewalReviewer.reviewer.region.code === "ORO"
                    ? "661/2002"
                    : "-"
                }}
                Article
                {{
                  modalData.data &&
                  modalData.data.renewalReviewer &&
                  modalData.data.renewalReviewer.reviewer &&
                  modalData.data.renewalReviewer.reviewer.expertLevel &&
                  modalData.data.renewalReviewer.reviewer.expertLevel.code === "FED"
                    ? "73"
                    : modalData.data &&
                      modalData.data.renewalReviewer &&
                      modalData.data.renewalReviewer.reviewer &&
                      modalData.data.renewalReviewer.reviewer.region &&
                      modalData.data.renewalReviewer.reviewer.region.code === "AA"
                    ? "44/8"
                    : modalData.data &&
                      modalData.data.renewalReviewer &&
                      modalData.data.renewalReviewer.reviewer &&
                      modalData.data.renewalReviewer.reviewer.region &&
                      modalData.data.renewalReviewer.reviewer.region.code === "ORO"
                    ? "3/3"
                    : "-"
                }}is given the authority to issue
                <span class="font-bold underline"
                  >{{
                    modalData.data &&
                    modalData.data.profile &&
                    modalData.data.profile.name
                      ? modalData.data.profile.name
                      : ""
                  }}
                  {{
                    modalData.data &&
                    modalData.data.profile &&
                    modalData.data.profile.fatherName
                      ? modalData.data.profile.fatherName
                      : ""
                  }}
                  {{
                    modalData.data &&
                    modalData.data.profile &&
                    modalData.data.profile.grandFatherName
                      ? modalData.data.profile.grandFatherName
                      : ""
                  }}</span
                ><br />
                <div class="grid grid-rows-3 justify-center mt-8 mb-2">
                  <span class="underline font-bold" style="word-break: break-word">
                    {{
                      modalData.data.educations[3].prefix
                        ? modalData.data.educations[3].prefix.amharic_name + " "
                        : ""
                    }}
                    {{
                      modalData.data.educations[3].professionType &&
                      modalData.data.educations[3].professionType.name == "other"
                        ? modalData.data.educations[3].otherProfessionType
                        : modalData.data.educations[3].professionType.name
                    }}</span
                  >
                  <span class="underline font-bold" style="word-break: break-word">
                    {{
                      modalData.data.educations[4].prefix
                        ? modalData.data.educations[4].prefix.amharic_name + " "
                        : ""
                    }}
                    {{
                      modalData.data.educations[4].professionType &&
                      modalData.data.educations[4].professionType.name == "other"
                        ? modalData.data.educations[4].otherProfessionType
                        : modalData.data.educations[4].professionType.name
                    }}</span
                  >
                  <span class="underline font-bold" style="word-break: break-word">
                    {{
                      modalData.data.educations[5].prefix
                        ? modalData.data.educations[5].prefix.amharic_name + " "
                        : ""
                    }}
                    {{
                      modalData.data.educations[5].professionType &&
                      modalData.data.educations[5].professionType.name == "other"
                        ? modalData.data.educations[5].otherProfessionType
                        : modalData.data.educations[5].professionType.name
                    }}</span
                  ><br />
                  <span class="underline font-bold" style="word-break: break-word">
                  </span>
                </div>
                Having duly satisfied the requirements of the Ministry hereby registered
                and licensed as
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 mt-8">
            <div class="flex justify-start">
              ይህ የሙያ የስራ ፈቃድ የሚያገለግለው ከ
              <span class="font-bold">
                {{
                  modalData.data.certifiedDate
                    ? toEthiopian(
                        moment(modalData.data.certifiedDate)._d.toISOString(),
                        false
                      )
                    : ""
                }}</span
              >
              -እስከ-
              <span class="font-bold">
                {{
                  modalData.data.licenseExpirationDate !== null
                    ? toEthiopian(
                        moment(modalData.data.licenseExpirationDate)._d.toISOString(),
                        false
                      )
                    : " አልተገለጸም"
                }}</span
              >
            </div>
            <div>
              The license is valid from
              <span class="font-bold">
                {{
                  modalData.data.certifiedDate
                    ? moment(modalData.data.certifiedDate).format("MMM DD, YYYY")
                    : ""
                }}</span
              >
              -To-
              <span class="font-bold">
                {{
                  modalData.data.licenseExpirationDate
                    ? moment(modalData.data.licenseExpirationDate).format("MMM DD, YYYY")
                    : " Not specified"
                }}</span
              >
            </div>
          </div>
        </div>
        <!--End of from 3rd to 6th profession part-->
      </section>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import { toEthiopian } from "../../../../Configurations/dateConvertor";
export default {
  props: ["modalData"],
  computed: {
    moment: () => moment,
    toEthiopian: () => toEthiopian,
  },
  setup() {},
};
</script>
