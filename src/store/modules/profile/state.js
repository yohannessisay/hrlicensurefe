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
      maritalStatus: "",
      userTypeId: "",
      expertLevelId: "",
      healthOfficeId: ""
    },
    address: {
      houseNumber: "",
      woredaId: "",
      woreda: "",
      kebele: "",
      city: "",
      residence: "",
      zone: "",
      poBox: ""
    },
    contact: {
      mobileNumber: "",
      email: "",
      telephoneNumber: "",
      poBox: ""
    },
    addProfileLoading: false,
    addProfileSuccess: false,
    addProfileError: false
  }
};
