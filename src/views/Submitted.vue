<template>
  <div
    style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
    class="ml-8 mt-8 mr-8 mb-12"
  >
    <div class="flex justify-center"><Title message="Summary" /></div>
    <div class="flex justify-start">
      <Title message="Personal Info" />
    </div>
    <div class="flex flex-row">
      <div>
        <label class="ml-8"> Full Name</label>
        <h5 class="ml-8">
          {{ this.profileInfo["fatherName"] }}

          {{ this.profileInfo["grandFatherName"] }}
        </h5>
      </div>
      <div>
        <label class="ml-8"> Gender</label>
        <h5 class="ml-8">{{ this.profileInfo["gender"] }}</h5>
      </div>
      <div>
        <label class="ml-8"> Nationality</label>
        <h5 class="ml-8">{{ this.profileInfo["nationality"] }}</h5>
      </div>
      <div>
        <label class="ml-8"> Place of Birth</label>
        <h5 class="ml-8">{{ this.profileInfo["placeOfBirth"] }}</h5>
      </div>
      <div>
        <label class="ml-8"> Date of Birth</label>
        <h5 class="ml-8">{{ this.profileInfo["dateOfBirth"] }}</h5>
      </div>
      <div>
        <label class="ml-8"> Marital Status</label>
        <h5 class="ml-8">{{ this.profileInfo["maritalStatus"]["name"] }}</h5>
      </div>
    </div>

    <div class="flex justify-start">
      <Title message="Address" />
    </div>
    <div class="flex flex-row">
      <div>
        <label class="ml-8"> Region</label>
        <h5 class="ml-8">
          {{ this.profileInfo["woreda"]["zone"]["region"]["name"] }}
        </h5>
      </div>
      <div>
        <label class="ml-8"> Zone</label>
        <h5 class="ml-8">{{ this.profileInfo["woreda"]["zone"]["name"] }}</h5>
      </div>
      <div>
        <label class="ml-8"> Wereda</label>
        <h5 class="ml-8">
          {{ this.profileInfo["woreda"]["name"] }}
        </h5>
      </div>
      <div>
        <label class="ml-8"> Kebele</label>
        <h5 class="ml-8">{{ this.profileInfo["kebele"] }}</h5>
      </div>
      <div>
        <label class="ml-8"> House Number</label>
        <h5 class="ml-8">{{ this.profileInfo["houseNumber"] }}</h5>
      </div>
      <div>
        <label class="ml-8"> Residence</label>
        <h5 class="ml-8">{{ this.profileInfo["residence"] }}</h5>
      </div>
    </div>
    <div class="flex justify-start">
      <Title message="Contact" />
    </div>
    <div class="flex flex-row">
      <div>
        <label class="ml-8"> Mobile Number</label>
        <h5 class="ml-8">{{ this.profileInfo["user"]["phoneNumber"] }}</h5>
      </div>

      <div>
        <label class="ml-8"> Email</label>
        <h5 class="ml-8">{{ this.profileInfo["user"]["emailAddress"] }}</h5>
      </div>
      <div>
        <label class="ml-8"> Applicant Type</label>
        <h5 class="ml-8">{{ this.profileInfo["userType"]["name"] }}</h5>
      </div>
    </div>
    <div class="flex justify-start">
      <Title message="Institution" />
    </div>
    <div class="flex flex-row">
      <div>
        <label class="ml-8"> Institution Name</label>
        <h5 class="ml-8">
          {{ this.licenseInfo["education"]["institution"]["name"] }}
        </h5>
      </div>
      <div>
        <label class="ml-8"> Department</label>
        <h5 class="ml-8">
          {{ this.licenseInfo["education"]["department"]["name"] }}
        </h5>
      </div>
      <div>
        <label class="ml-8"> Institution Type</label>
        <h5 class="ml-8">
          {{
            this.licenseInfo["education"]["institution"]["institutionType"][
              "name"
            ]
          }}
        </h5>
      </div>
    </div>
    <div class="flex justify-start">
      <div>
        <Title class="" message="Photo" />
      </div>
      <div>
        <picture>
          <img v-bind:src="this.photo.filePath" />
        </picture>
      </div>

      <Title class="ml-12" message="ID/Passport" />
      <picture>
        <img v-bind:src="this.passport.filePath" />
      </picture>
      <Title class="ml-12" message="Health Examination Certificate" />
      <picture>
        <img v-bind:src="this.healthExamCert.filePath" />
      </picture>
      <Title class="ml-12" message="Service Fee" />
      <picture>
        <img v-bind:src="this.serviceFee.filePath" />
      </picture>
    </div>
  </div>
</template>

<script>
import Title from "@/sharedComponents/Title";
import axios from "axios";
export default {
  props: ["activeState"],
  components: {
    Title,
  },
  created() {
    this.userId = localStorage.getItem("userId");
    // this.fetchProfile();
    // this.fetchSubmitted();
  },
  data: () => ({
    // profileInfo: {},
    // licenseInfo: {},
    // photo: {},
    // passport: {},
    // healthExamCert: {},
    // serviceFee: {}
    profileInfo: {
      id: 2,
      name: "Test1",
      fatherName: "Test1",
      grandFatherName: "Test",
      gender: "Male",
      dateOfBirth: null,
      placeOfBirth: null,
      nationality: "Ethiopian",
      userTypeId: 5,
      expertLevelId: 3,
      healthOfficeId: null,
      maritalStatusId: 1,
      woredaId: 1,
      kebele: null,
      houseNumber: null,
      residence: "Test",
      city: null,
      poBox: null,
      userId: 1,
      createdAt: "2021-03-01T20:59:06.979Z",
      updatedAt: "2021-03-01T21:07:19.745Z",
      userType: {
        id: 5,
        name: "Applicant",
        code: "APP",
        createdAt: "2021-02-25T16:23:50.228Z",
        updatedAt: "2021-02-25T16:23:50.228Z",
      },
      expertLevel: {
        id: 3,
        name: "Federal",
        code: "FED",
        createdAt: "2021-02-25T16:23:50.256Z",
        updatedAt: "2021-02-25T16:23:50.256Z",
      },
      healthOffice: null,
      maritalStatus: {
        id: 1,
        name: "Single",
        code: "SIN",
        createdAt: "2021-02-25T18:05:47.774Z",
        updatedAt: "2021-02-25T18:05:47.775Z",
      },
      woreda: {
        id: 1,
        name: "Hargelle",
        code: "HAR",
        zoneId: 1,
        createdAt: "2021-02-25T16:23:50.228Z",
        updatedAt: "2021-02-25T16:23:50.228Z",
        zone: {
          id: 1,
          name: "Afder",
          code: "AFD",
          regionId: 2,
          createdAt: "2021-02-25T16:23:50.228Z",
          updatedAt: "2021-02-25T16:23:50.228Z",
          region: {
            id: 2,
            name: "Somali",
            code: "SOM",
            createdAt: "2021-02-25T16:23:50.228Z",
            updatedAt: "2021-02-25T16:23:50.228Z",
          },
        },
      },
      user: {
        id: 1,
        emailAddress: "test1@gmail.com",
        phoneNumber: "0911111112",
        createdAt: "2021-03-01T19:02:03.093Z",
        updatedAt: "2021-03-01T19:55:56.910Z",
      },
    },
    licenseInfo: {
      id: 1,
      applicantId: 1,
      applicantTypeId: 1,
      educationId: 2,
      createdAt: "2021-03-09T18:45:22.416Z",
      updatedAt: "2021-03-09T19:55:30.429Z",
      applicant: {
        id: 1,
        emailAddress: "test1@gmail.com",
        phoneNumber: "0911111112",
        createdAt: "2021-03-01T19:02:03.093Z",
        updatedAt: "2021-03-01T19:55:56.910Z",
      },
      applicantType: {
        id: 1,
        name: "Local",
        code: "LOC",
        createdAt: "2021-03-04T18:15:43.061Z",
        updatedAt: "2021-03-04T18:15:43.061Z",
      },
      education: {
        id: 2,
        departmentId: 2,
        institutionId: 1,
        createdAt: "2021-03-09T18:45:22.345Z",
        updatedAt: "2021-03-09T21:57:48.656Z",
        institution: {
          id: 1,
          name: "Institution 1",
          code: "INST1",
          institutionTypeId: 1,
          isLocal: true,
          createdAt: "2021-03-09T17:28:15.182Z",
          updatedAt: "2021-03-09T17:28:15.182Z",
          institutionType: {
            id: 1,
            name: "Public",
            code: "PUB",
            createdAt: "2021-03-04T23:16:28.132Z",
            updatedAt: "2021-03-04T23:16:28.132Z",
          },
        },
        department: {
          id: 2,
          name: "Department 2",
          code: "DEP2",
          createdAt: "2021-03-09T14:24:58.300Z",
          updatedAt: "2021-03-09T14:24:58.300Z",
        },
      },
    },
    photo: {
      id: 209,
      applicationCategoryCode: "NA",
      fieldName: "photo",
      originalFileName: "Document 44-1 - edited.png",
      filePath: "public\\uploads\\NA\\1616495780641.png",
      fileType: "image/png",
      fileName: "1616495780641.png",
      createdAt: "2021-03-23T10:36:20.698Z",
      updatedAt: "2021-03-23T10:36:20.698Z",
    },
    passport: {
      id: 210,
      applicationCategoryCode: "NA",
      fieldName: "passport",
      originalFileName: "Document 44-2 - edited.png",
      filePath: "public\\uploads\\NA\\1616495780662.png",
      fileType: "image/png",
      fileName: "1616495780662.png",
      createdAt: "2021-03-23T10:36:20.698Z",
      updatedAt: "2021-03-23T10:36:20.698Z",
    },
    healthExamCert: {
      id: 211,
      applicationCategoryCode: "NA",
      fieldName: "healthExamCert",
      originalFileName: "photo_2021-03-12_09-33-07.png",
      filePath: "public\\uploads\\NA\\1616495780682.png",
      fileType: "image/png",
      fileName: "1616495780682.png",
      createdAt: "2021-03-23T10:36:20.698Z",
      updatedAt: "2021-03-23T10:36:20.698Z",
    },
    serviceFee: {
      id: 212,
      applicationCategoryCode: "NA",
      fieldName: "serviceFee",
      originalFileName: "Document 44-2 - edited.png",
      filePath: "public\\uploads\\NA\\1616495780684.png",
      fileType: "image/png",
      fileName: "1616495780684.png",
      createdAt: "2021-03-23T10:36:20.698Z",
      updatedAt: "2021-03-23T10:36:20.698Z",
    },
  }),
  methods: {
    async fetchSubmitted() {
      try {
        const url =
          `http://ca9dee52bc55.ngrok.io/api/newLicenses/` + this.userId;
        const response = await axios.get(url);
        const results = response.data;
        console.log(results.data.education.institution.institutionType.name);
        this.licenseInfo = results.data;
      } catch (err) {
        if (err.response) {
          console.log("Server Error:", err);
        } else if (err.request) {
          console.log("Network Error:", err);
        } else {
          console.log("Client Error:", err);
        }
      }
    },
    async fetchProfile() {
      try {
        const url = `http://ca9dee52bc55.ngrok.io/api/profiles/` + this.userId;
        const response = await axios.get(url);
        const results = response.data;
        console.log(results);
        this.licenseInfo = results.data[0];
      } catch (err) {
        if (err.response) {
          console.log("Server Error:", err);
        } else if (err.request) {
          console.log("Network Error:", err);
        } else {
          console.log("Client Error:", err);
        }
      }
    },
  },
};
</script>
<style></style>
