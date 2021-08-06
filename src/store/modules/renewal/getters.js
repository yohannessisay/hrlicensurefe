import state from "../admin/state";

export default {
  getLicense: (state) => state.license,
  getRenewalHealthExamCert: (state) => state.healthExamCert,
  getRenewalServiceFee: (state) => state.serviceFee,
  getRenewalCpd: (state) => state.cpd,
  getRenewalWorkExperience: (state) => state.workExperience,
  getRenewalLicense: (state) => state.letterFromHiringInstitution,
  getProfessionalDocuments: (state) => state.professionalDocuments,
  getPreviousLicense: (state) => state.previosLicense,
  getPayroll: (state) => state.payroll,
  getButtons: (state) => state.buttons,
  getApplicationId: (state) => state.applicationId,
  getDocumentSpec: (state) => state.documentSpec,
  getDraft: (state) => state.draft,
  getRemark: (state) => state.remark,
  getDeclinedFields: (state) => state.declinedFields,
  getAcceptedFields: (state) => state.acceptedFields,
};
