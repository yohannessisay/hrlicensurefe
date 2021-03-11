export default {
  state: {
    personalInfo: {
      firstName: "",
      fatherName: "",
      grandFatherName: "",
      gender: "",
      nationality: "",
      pob: "",
      dob: "",
      maritalStatus: ""
    },
    address: {
      region: "",
      address_kebele: "",
      city: "",
      zone: "",
      kebele: ""
    },
    contact: {
      poBox: "",
      houseNo: ""
    },
    addProfileLoading: false,
    addProfileSuccess: false,
    addProfileError: false
  }
};
