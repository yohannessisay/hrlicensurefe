export default {
  getLicense: (state) => state.license,
  getRenewalPhoto: (state) => state.photo,
  getRenewalHealthExamCert: (state) => state.healthExamCert,
  getRenewalServiceFee: (state) => state.serviceFee,
  getRenewalCpd: (state) => state.cpd,
  getRenewalWorkExperience: (state) => state.workExperience,
  getRenewalLicense: (state) => state.letterFromHiringInstitution,
  getPreviousLicense: (state) => state.previosLicense,
  getButtons: (state) => state.buttons,
  getApplicationId: (state) => state.applicationId,
  getDocumentSpec: (state) => state.documentSpec,
  getDraft: (state) => state.draft,
};
