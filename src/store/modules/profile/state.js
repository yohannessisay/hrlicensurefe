export default {
  state: {
    personalInfo: {
      name: "",
      grandFatherName: "",
      fatherName: "",
      nationality: "",
      placeOfBirth: "",
      dateOfBirth: "",
      gender: "",
      maritalStatusId: "",
      userTypeId: "",
      expertLevelId: "",
      healthOfficeId: ""
    },
    address: {
      woredaId: "",
      kebele: "",
      city: "",
      houseNumber: "",
      residence: ""
    },
    contact: {
      poBox: ""
    },
    addProfileLoading: false,
    addProfileSuccess: false,
    addProfileError: false
  }
};
