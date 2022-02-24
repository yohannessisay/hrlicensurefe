import {
    SET_LICENSE,
    SET_PASSPORT,
    SET_HEALTH_EXAM_CERT,
    SET_LANGUAGE,
    SET_PROFESSIONAL_DOCUMENT,
    SET_HERQA,
    SET_SUPPORT_LETTER,
    SET_COC,
    SET_COC2,
    SET_COC3,
    SET_EDUCATIONAL_DOCUMENT,
    SET_WORK_EXPERIENCE,
    SET_WORK_EXPERIENCE2,
    SET_SERVICE_FEE,
    SET_RENEWED_LICENSE,
    SET_PROFESSIONAL_LICENSE,
    SET_PROFESSIONAL_LICENSE2,
    SET_BUTTONS,
    SET_APPLICATION_ID,
    SET_DOCUMENT_SPEC,
    SET_DRAFT,
    SET_REMARK,
    SET_DECLINED_FIELDS,
    SET_ACCEPTED_FIELDS,
    SET_PAYROLL,
    SET_DEGREE,
    SET_TRANSCRIPT,
    SET_TRANSCRIPT2,
    SET_DIPLOMA,
    SET_PRO_CERTIFICATE,
    SET_PRO_DIPLOMA,
    SET_PRO_TRANSCRIPT,
    SET_EDU_EIGHTH,
    SET_EDU_TENTH,
    SET_EDU_TWELVETH,
    SET_EDU_TRANSCRIPT1,
    SET_EDU_TRANSCRIPT2,
    SET_MASTERS,
    SET_MASTERS_TRANSCRIPT,
    SET_MASTERS_TRANSCRIPT2,
    SET_PHD,
    SET_PHD_TRANSCRIPT,
    SET_PHD_TRANSCRIPT2,
    SET_RENEWED_LICENSE_OF_HEALTH_FACILITY,
    SET_SUPPORT_LETTER_FROM_SPONSOR,
} from "./mutation-types";

export default {
    [SET_LICENSE](state, license) {
        state.license = license;
    },
    [SET_PASSPORT](state, passport) {
        state.passport = passport;
    },
    [SET_HEALTH_EXAM_CERT](state, healthExamCert) {
        state.healthExamCert = healthExamCert;
    },
    [SET_SERVICE_FEE](state, serviceFee) {
        state.serviceFee = serviceFee;
    },
    [SET_LANGUAGE](state, englishLanguage) {
        state.englishLanguage = englishLanguage;
    },
    [SET_PROFESSIONAL_DOCUMENT](state, professionalDocuments) {
        state.professionalDocuments = professionalDocuments;
    },
    [SET_HERQA](state, herqa) {
        state.herqa = herqa;
    },
    [SET_SUPPORT_LETTER](state, supportLetter) {
        state.supportLetter = supportLetter;
    },
    [SET_COC](state, coc) {
        state.coc = coc;
    },
    [SET_COC2](state, coc2) {
        state.coc2 = coc2;
    },
    [SET_COC3](state, coc3) {
        state.coc3 = coc3;
    },
    [SET_EDUCATIONAL_DOCUMENT](state, educationalDocuments) {
        state.educationalDocuments = educationalDocuments;
    },
    [SET_WORK_EXPERIENCE](state, workExperience) {
        state.workExperience = workExperience;
    },
    [SET_WORK_EXPERIENCE2](state, workExperience2) {
        state.workExperience2 = workExperience2;
    },
    [SET_PAYROLL](state, payroll) {
        state.payroll = payroll;
    },
    [SET_RENEWED_LICENSE](state, license) {
        state.renewedLicense = license;
    },
    [SET_PROFESSIONAL_LICENSE](state, license) {
        state.professionalLicense = license;
    },
    [SET_PROFESSIONAL_LICENSE2](state, license2) {
        state.professionalLicense2 = license2;
    },
    [SET_PRO_CERTIFICATE](state, proCertificate) {
        state.proCertificate = proCertificate;
    },
    [SET_PRO_DIPLOMA](state, proDiploma) {
        state.proDiploma = proDiploma;
    },
    [SET_PRO_TRANSCRIPT](state, proTranscript) {
        state.proTranscript = proTranscript;
    },
    [SET_EDU_EIGHTH](state, eduEighthGrade) {
        state.eduEighthGrade = eduEighthGrade;
    },
    [SET_EDU_TENTH](state, eduTenthGrade) {
        state.eduTenthGrade = eduTenthGrade;
    },
    [SET_EDU_TWELVETH](state, eduTwelvethGrade) {
        state.eduTwelvethGrade = eduTwelvethGrade;
    },
    [SET_EDU_TRANSCRIPT1](state, eduTranscript1) {
        state.eduTranscript1 = eduTranscript1;
    },
    [SET_EDU_TRANSCRIPT2](state, eduTranscript2) {
        state.eduTranscript2 = eduTranscript2;
    },
    [SET_MASTERS](state, masters) {
        state.masters = masters;
    },
    [SET_MASTERS_TRANSCRIPT](state, mastersTranscript) {
        state.mastersTranscript = mastersTranscript;
    },
    [SET_MASTERS_TRANSCRIPT2](state, mastersTranscript2) {
        state.mastersTranscript2 = mastersTranscript2;
    },
    [SET_PHD](state, phd) {
        state.phd = phd;
    },
    [SET_PHD_TRANSCRIPT](state, phdTranscript) {
        state.phdTranscript = phdTranscript;
    },
    [SET_PHD_TRANSCRIPT2](state, phdTranscript2) {
        state.phdTranscript2 = phdTranscript2;
    },
    [SET_BUTTONS](state, buttons) {
        state.buttons = buttons;
    },
    [SET_APPLICATION_ID](state, id) {
        state.applicationId = id;
    },
    [SET_DOCUMENT_SPEC](state, documentSpec) {
        state.documentSpec = documentSpec;
    },
    [SET_DEGREE](state, degree) {
        state.degree = degree;
    },
    [SET_TRANSCRIPT](state, transcript) {
        state.transcript = transcript;
    },
    [SET_TRANSCRIPT2](state, transcript2) {
        state.transcript2 = transcript2;
    },
    [SET_DIPLOMA](state, diploma) {
        state.diploma = diploma;
    },
    [SET_RENEWED_LICENSE_OF_HEALTH_FACILITY](
        state,
        renewedLicenseOfHealthFacility
    ) {
        state.renewedLicenseOfHealthFacility = renewedLicenseOfHealthFacility;
    },
    [SET_SUPPORT_LETTER_FROM_SPONSOR](state, supportLetterFromSponsor) {
        state.supportLetterFromSponsor = supportLetterFromSponsor;
    },
    [SET_DRAFT](state, draft) {
        state.draft = draft;
    },
    [SET_REMARK](state, remark) {
        state.remark = remark;
    },
    [SET_DECLINED_FIELDS](state, field) {
        state.declinedFields = field;
    },
    [SET_ACCEPTED_FIELDS](state, field) {
        state.acceptedFields = field;
    },
};