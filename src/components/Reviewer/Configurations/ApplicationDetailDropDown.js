export let dropdown = {
  newLicense: false,
  newLicenseAssigned: false,
  newLicenseUnfinished: false,
  newLicenseUnconfirmed: false,
  newLicenseOnReview: false,
  newLicenseReEvaluate: false,
  newLicenseDeclined: false,
  newLicenseUnderSuperVision: false,
  newLicenseConfirmed: false,
  
  
  renewal: false,
  renewalAssigned: false,
  renewalUnfinished: false,
  renewalUnconfirmed: false,
  renewalOnReview: false,
  renewalReEvaluate: false,
  renewalDeclined: false,
  renewalUnderSuperViesion: false,
  renewalConfirmed: false,

  verification: false,
  verificationAssigned: false,
  verificationUnfinished: false,
  verificationApproved: false,
  verificationDeclined: false,

  goodStanding: false,
  goodStandingAssigned: false,
  goodStandingUnfinished: false,
  goodStandingApproved: false,
  goodStandingDeclined: false,
  
};

export const applicationTypeDD = (applicationDetail, dropdown) => {
  if (applicationDetail == "Renewal") {
    dropdown.renewal = !dropdown.renewal;
    dropdown.renewalAssigned = false;
    dropdown.renewalUnfinished = false;
    dropdown.renewalUnconfirmed = false;
    dropdown.renewalOnReview = false;
    dropdown.renewalReEvaluate = false;
    dropdown.renewalDeclined = false;
    dropdown.renewalUnderSuperViesion = false;
    dropdown.renewalConfirmed = false;

    dropdown.newLicense = false;
    dropdown.verification = false;
    dropdown.goodStanding = false;
    
  }
  if (applicationDetail == "NewLicense") {
    dropdown.newLicense = !dropdown.newLicense;
    dropdown.newLicenseAssigned = false;
    dropdown.newLicenseUnfinished = false;
    dropdown.newLicenseUnconfirmed = false;
    dropdown.newLicenseOnReview = false;
    dropdown.newLicenseReEvaluate = false;
    dropdown.newLicenseDeclined = false;
    dropdown.newLicenseUnderSuperVision = false;
    dropdown.newLicenseConfirmed = false;

    dropdown.goodStanding = false;
    dropdown.renewal = false;
    dropdown.verification = false;
  }
  if (applicationDetail == "GoodStanding") {
    dropdown.goodStanding = !dropdown.goodStanding;
    dropdown.goodStandingAssigned = false;
    dropdown.goodStandingUnfinished = false;
    dropdown.goodStandingApproved = false;
    dropdown.goodStandingDeclined = false;

    dropdown.newLicense = false;
    dropdown.renewal = false;
    dropdown.verification = false;

  }
  if (applicationDetail == "Verification") {
    dropdown.verification = !dropdown.verification;
    dropdown.verificationAssigned = false;
    dropdown.verificationUnfinished = false;
    dropdown.verificationApproved = false;
    dropdown.verificationDeclined = false;

    dropdown.goodStanding = false;
    dropdown.newLicense = false;
    dropdown.renewal = false;
  }
  if (applicationDetail == "RenewalAssigned") {
    dropdown.renewalAssigned = !dropdown.renewalAssigned;
    dropdown.renewalUnfinished = false;
    dropdown.renewalUnconfirmed = false;
    dropdown.renewalOnReview = false;
    dropdown.renewalReEvaluate = false;
    dropdown.renewalDeclined = false;
    dropdown.renewalUnderSuperViesion = false;
    dropdown.renewalConfirmed = false;
    dropdown.renewalReturned = false;
  }
  if (applicationDetail == "RenewalUnfinished") {
    dropdown.renewalUnfinished = !dropdown.renewalUnfinished;
    dropdown.renewalAssigned = false;
    dropdown.renewalUnconfirmed = false;
    dropdown.renewalOnReview = false;
    dropdown.renewalReEvaluate = false;
    dropdown.renewalDeclined = false;
    dropdown.renewalUnderSuperViesion = false;
    dropdown.renewalConfirmed = false;
    dropdown.renewalReturned = false;
  }
  if (applicationDetail == "RenewalUnconfirmed") {
    dropdown.renewalUnconfirmed = !dropdown.renewalUnconfirmed;
    dropdown.renewalAssigned = false;
    dropdown.renewalUnfinished = false;
    dropdown.renewalOnReview = false;
    dropdown.renewalReEvaluate = false;
    dropdown.renewalDeclined = false;
    dropdown.renewalUnderSuperViesion = false;
    dropdown.renewalConfirmed = false;
    dropdown.renewalReturned = false;
  }
  if (applicationDetail == "RenewalOnReview") {
    dropdown.renewalOnReview = !dropdown.renewalOnReview;
    dropdown.renewalUnfinished = false;
    dropdown.renewalAssigned = false;
    dropdown.renewalUnconfirmed = false;
    dropdown.renewalReEvaluate = false;
    dropdown.renewalDeclined = false;
    dropdown.renewalUnderSuperViesion = false;
    dropdown.renewalConfirmed = false;
    dropdown.renewalReturned = false;
  }
  if (applicationDetail == "RenewalReEvaluate") {
    dropdown.renewalReEvaluate = !dropdown.renewalReEvaluate;
    dropdown.renewalUnconfirmed = false;
    dropdown.renewalAssigned = false;
    dropdown.renewalUnfinished = false;
    dropdown.renewalOnReview = false;
    dropdown.renewalDeclined = false;
    dropdown.renewalUnderSuperViesion = false;
    dropdown.renewalConfirmed = false;
    dropdown.renewalReturned = false;
  }
  if (applicationDetail == "RenewalDeclined") {
    dropdown.renewalDeclined = !dropdown.renewalDeclined;
    dropdown.renewalOnReview = false;
    dropdown.renewalUnfinished = false;
    dropdown.renewalAssigned = false;
    dropdown.renewalUnconfirmed = false;
    dropdown.renewalReEvaluate = false;
    dropdown.renewalUnderSuperViesion = false;
    dropdown.renewalConfirmed = false;
    dropdown.renewalReturned = false;
  }
  if (applicationDetail == "RenewalUnderSuperVision") {
    dropdown.renewalUnderSuperViesion = !dropdown.renewalUnderSuperViesion;
    dropdown.renewalReEvaluate = false;
    dropdown.renewalUnconfirmed = false;
    dropdown.renewalAssigned = false;
    dropdown.renewalUnfinished = false;
    dropdown.renewalOnReview = false;
    dropdown.renewalDeclined = false;
    dropdown.renewalConfirmed = false;
    dropdown.renewalReturned = false;
  }
  if (applicationDetail == "RenewalConfirmed") {
    dropdown.renewalConfirmed = !dropdown.renewalConfirmed;
    dropdown.renewalDeclined = false;
    dropdown.renewalOnReview = false;
    dropdown.renewalUnfinished = false;
    dropdown.renewalAssigned = false;
    dropdown.renewalUnconfirmed = false;
    dropdown.renewalReEvaluate = false;
    dropdown.renewalUnderSuperViesion = false;
    dropdown.renewalReturned = false;
  }
  if (applicationDetail == "RenewalReturned") {
    dropdown.renewalReturned = !dropdown.renewalReturned;
    dropdown.renewalDeclined = false;
    dropdown.renewalOnReview = false;
    dropdown.renewalUnfinished = false;
    dropdown.renewalAssigned = false;
    dropdown.renewalUnconfirmed = false;
    dropdown.renewalReEvaluate = false;
    dropdown.renewalUnderSuperViesion = false;
    dropdown.renewalConfirmed = false;
  }

  if (applicationDetail == "NewLicenseAssigned") {
    dropdown.newLicenseAssigned = !dropdown.newLicenseAssigned;
    dropdown.newLicenseUnfinished = false;
    dropdown.newLicenseUnconfirmed = false;
    dropdown.newLicenseOnReview = false;
    dropdown.newLicenseReEvaluate = false;
    dropdown.newLicenseDeclined = false;
    dropdown.newLicenseUnderSuperVision = false;
    dropdown.newLicenseConfirmed = false;
    dropdown.newLicenseReturned = false;
  }
  if (applicationDetail == "NewLicenseUnfinished") {
    dropdown.newLicenseUnfinished = !dropdown.newLicenseUnfinished;
    dropdown.newLicenseAssigned = false;
    dropdown.newLicenseUnconfirmed = false;
    dropdown.newLicenseOnReview = false;
    dropdown.newLicenseReEvaluate = false;
    dropdown.newLicenseDeclined = false;
    dropdown.newLicenseUnderSuperVision = false;
    dropdown.newLicenseConfirmed = false;
    dropdown.newLicenseReturned = false;
  }
  if (applicationDetail == "NewLicenseUnconfirmed") {
    dropdown.newLicenseUnconfirmed = !dropdown.newLicenseUnconfirmed;
    dropdown.newLicenseAssigned = false;
    dropdown.newLicenseUnfinished = false;
    dropdown.newLicenseOnReview = false;
    dropdown.newLicenseReEvaluate = false;
    dropdown.newLicenseDeclined = false;
    dropdown.newLicenseUnderSuperVision = false;
    dropdown.newLicenseConfirmed = false;
    dropdown.newLicenseReturned = false;
  }
  if (applicationDetail == "NewLicenseOnReview") {
    dropdown.newLicenseOnReview = !dropdown.newLicenseOnReview;
    dropdown.newLicenseUnfinished = false;
    dropdown.newLicenseAssigned = false;
    dropdown.newLicenseUnconfirmed = false;
    dropdown.newLicenseReEvaluate = false;
    dropdown.newLicenseDeclined = false;
    dropdown.newLicenseUnderSuperVision = false;
    dropdown.newLicenseConfirmed = false;
    dropdown.newLicenseReturned = false;
  }
  if (applicationDetail == "NewLicenseReEvaluate") {
    dropdown.newLicenseReEvaluate = !dropdown.newLicenseReEvaluate;
    dropdown.newLicenseUnconfirmed = false;
    dropdown.newLicenseAssigned = false;
    dropdown.newLicenseUnfinished = false;
    dropdown.newLicenseOnReview = false;
    dropdown.newLicenseDeclined = false;
    dropdown.newLicenseUnderSuperVision = false;
    dropdown.newLicenseConfirmed = false;
    dropdown.newLicenseReturned = false;
  }
  if (applicationDetail == "NewLicenseDeclined") {
    dropdown.newLicenseDeclined = !dropdown.newLicenseDeclined;
    dropdown.newLicenseOnReview = false;
    dropdown.newLicenseUnfinished = false;
    dropdown.newLicenseAssigned = false;
    dropdown.newLicenseUnconfirmed = false;
    dropdown.newLicenseReEvaluate = false;
    dropdown.newLicenseUnderSuperVision = false;
    dropdown.newLicenseConfirmed = false;
    dropdown.newLicenseReturned = false;
  }
  if (applicationDetail == "NewLicenseUnderSuperVision") {
    dropdown.newLicenseUnderSuperVision = !dropdown.newLicenseUnderSuperVision;
    dropdown.newLicenseReEvaluate = false;
    dropdown.newLicenseUnconfirmed = false;
    dropdown.newLicenseAssigned = false;
    dropdown.newLicenseUnfinished = false;
    dropdown.newLicenseOnReview = false;
    dropdown.newLicenseDeclined = false;
    dropdown.newLicenseConfirmed = false;
    dropdown.newLicenseReturned = false;
  }
  if (applicationDetail == "NewLicenseConfirmed") {
    dropdown.newLicenseConfirmed = !dropdown.newLicenseConfirmed;
    dropdown.newLicenseDeclined = false;
    dropdown.newLicenseOnReview = false;
    dropdown.newLicenseUnfinished = false;
    dropdown.newLicenseAssigned = false;
    dropdown.newLicenseUnconfirmed = false;
    dropdown.newLicenseReEvaluate = false;
    dropdown.newLicenseUnderSuperVision = false;
    dropdown.newLicenseReturned = false;
  }

  if (applicationDetail == "NewLicenseReturned") {
    dropdown.newLicenseReturned = !dropdown.newLicenseReturned;
    dropdown.newLicenseConfirmed = false;
    dropdown.newLicenseDeclined = false;
    dropdown.newLicenseOnReview = false;
    dropdown.newLicenseUnfinished = false;
    dropdown.newLicenseAssigned = false;
    dropdown.newLicenseUnconfirmed = false;
    dropdown.newLicenseReEvaluate = false;
    dropdown.newLicenseUnderSuperVision = false;
  }

  if (applicationDetail == "VerificationAssigned") {
    dropdown.verificationAssigned = !dropdown.verificationAssigned;
    dropdown.verificationUnfinished = false;
    dropdown.verificationApproved = false;
    dropdown.verificationDeclined = false;
  }
  if (applicationDetail == "VerificationUnfinished") {
    dropdown.verificationUnfinished = !dropdown.verificationUnfinished;
    dropdown.verificationAssigned = false;
    dropdown.verificationApproved = false;
    dropdown.verificationDeclined = false;
  }
  if (applicationDetail == "VerificationApproved") {
    dropdown.verificationApproved = !dropdown.verificationApproved;
    dropdown.verificationUnfinished = false;
    dropdown.verificationAssigned = false;
    dropdown.verificationDeclined = false;
  }
  if (applicationDetail == "VerificationDeclined") {
    dropdown.verificationDeclined = !dropdown.verificationDeclined;
    dropdown.verificationApproved = false;
    dropdown.verificationUnfinished = false;
    dropdown.verificationAssigned = false;
  }

  if (applicationDetail == "GoodStandingAssigned") {
    dropdown.goodStandingAssigned = !dropdown.goodStandingAssigned;
    dropdown.goodStandingUnfinished = false;
    dropdown.goodStandingApproved = false;
    dropdown.goodStandingDeclined = false;
  }
  if (applicationDetail == "GoodStandingUnfinished") {
    dropdown.goodStandingUnfinished = !dropdown.goodStandingUnfinished;
    dropdown.goodStandingAssigned = false;
    dropdown.goodStandingApproved = false;
    dropdown.goodStandingDeclined = false;
  }
  if (applicationDetail == "GoodStandingApproved") {
    dropdown.goodStandingApproved = !dropdown.goodStandingApproved;
    dropdown.goodStandingUnfinished = false;
    dropdown.goodStandingAssigned = false;
    dropdown.goodStandingDeclined = false;
  }
  if (applicationDetail == "GoodStandingDeclined") {
    dropdown.goodStandingDeclined = !dropdown.goodStandingDeclined;
    dropdown.goodStandingApproved = false;
    dropdown.goodStandingUnfinished = false;
    dropdown.goodStandingAssigned = false;
  }
};
