export async function AddMultipleDepartment(
  generalInfo,
  showOtherProfession,
  multipleDepartmentMaxError,
  multipleDepartmentError,
  checkForAddedError
) { 
  if (
    generalInfo.departmentSelected &&
    generalInfo.educationalLevelSelected &&
    generalInfo.institutionSelected &&
    generalInfo.professionalTypeSelected
  ) {
    if (
      generalInfo.applicantTypeSelected.code != "FOR" &&
      showOtherProfession &&
      showOtherProfession == true &&
      (generalInfo.otherProfessionalType == undefined ||
        generalInfo.otherProfessionalTypeAmharic == undefined)
    ) {
      return {
        type: "error",
        message: "Please fill other profession name in amharic and english",
      };
    }
    if (generalInfo.multipleDepartment.length > 3) {
      multipleDepartmentMaxError = true;
    } else {
      multipleDepartmentMaxError = false;
      multipleDepartmentError = false;

      if (
        generalInfo.multipleDepartment.length > 0 &&
        generalInfo.multipleDepartment.length <= 3
      ) {
        if (
          checkForAdded(
            generalInfo.departmentSelected ? generalInfo.departmentSelected : ""
          ) == false
        ) {
          checkForAddedError = false;
          generalInfo.multipleDepartment.push({
            department: generalInfo.departmentSelected,
            educationalLevel: generalInfo.educationalLevelSelected,
            institution: generalInfo.institutionSelected,
            professionalType: generalInfo.professionalTypeSelected,

            otherEducationalInstitution: generalInfo.otherEducationalInstitution
              ? convertOtherProf(generalInfo.otherEducationalInstitution)
              : "",
            otherProfessionAmharic: generalInfo.otherProfessionalTypeAmharic
              ? convertOtherProfAmh(generalInfo.otherProfessionalTypeAmharic)
              : "",
            otherProfessionalType: generalInfo.otherProfessionalType
              ? convertOtherProf(generalInfo.otherProfessionalType)
              : "",
          });

          generalInfo.education.push({
            departmentId: generalInfo.departmentSelected.id,
            educationalLevelId: generalInfo.educationalLevelSelected.id,
            institutionId: generalInfo.institutionSelected.id,
            professionTypeId: generalInfo.professionalTypeSelected.id,
            otherInstitution: generalInfo.otherEducationalInstitution
              ? convertOtherProf(generalInfo.otherEducationalInstitution)
              : "",
            otherProfessionAmharic: generalInfo.otherProfessionalTypeAmharic
              ? convertOtherProfAmh(generalInfo.otherProfessionalTypeAmharic)
              : "",
            otherProfessionType: generalInfo.otherProfessionalType
              ? convertOtherProf(generalInfo.otherProfessionalType)
              : "",
          });
        }
      } else {
        checkForAddedError = false;
        generalInfo.multipleDepartment.push({
          department: generalInfo.departmentSelected,
          educationalLevel: generalInfo.educationalLevelSelected,
          institution: generalInfo.institutionSelected,
          professionalType: generalInfo.professionalTypeSelected,

          otherEducationalInstitution: generalInfo.otherEducationalInstitution
            ? convertOtherProf(generalInfo.otherEducationalInstitution)
            : "",
          otherProfessionalTypeAmharic: generalInfo.otherProfessionalTypeAmharic
            ? convertOtherProfAmh(generalInfo.otherProfessionalTypeAmharic)
            : "",
          otherProfessionalType: generalInfo.otherProfessionalType
            ? convertOtherProf(generalInfo.otherProfessionalType)
            : "",
        });
        generalInfo.education.push({
          departmentId: generalInfo.departmentSelected.id,
          educationalLevelId: generalInfo.educationalLevelSelected.id,
          institutionId: generalInfo.institutionSelected.id,
          professionTypeId: generalInfo.professionalTypeSelected.id,
          otherInstitution: generalInfo.otherEducationalInstitution
            ? convertOtherProf(generalInfo.otherEducationalInstitution)
            : "",
          otherProfessionAmharic: generalInfo.otherProfessionalTypeAmharic
            ? convertOtherProfAmh(generalInfo.otherProfessionalTypeAmharic)
            : "",
          otherProfessionType: generalInfo.otherProfessionalType
            ? convertOtherProf(generalInfo.otherProfessionalType)
            : "",
        });
      }
      generalInfo.departmentSelected = "";
      generalInfo.educationalLevelSelected = "";
      generalInfo.institutionSelected = "";
      generalInfo.professionalTypeSelected = "";
      generalInfo.otherProfessionalType = "";
      generalInfo.otherProfessionalTypeAmharic = "";
      generalInfo.otherEducationalInstitution = "";
    }
  } else {
    multipleDepartmentError = true;
  }
  const checkForAdded = (data) => {
    let tempStatus = false;
    if (generalInfo.multipleDepartment) {
      generalInfo.multipleDepartment.forEach((element) => {
        if (element.department.code == data.code) {
          checkForAddedError = true;
          tempStatus = true;
        }
      });
      return tempStatus;
    }
  };
  let result = {
    generalInfo: generalInfo,
    showOtherProfession: showOtherProfession,
    multipleDepartmentMaxError: multipleDepartmentMaxError,
    multipleDepartmentError: multipleDepartmentError,
    checkForAddedError: checkForAddedError,
  };
  return result;
}
const convertOtherProf = (inputString) => {
  let trimmedString = inputString.replace(/\s+/g, " ").trim();
  let formattedString = trimmedString.replace(/\b\w/g, function(match) {
    return match.toUpperCase();
  });

  return formattedString;
};
const convertOtherProfAmh = (inputString) => {
  let trimmedString = inputString.replace(/\s+/g, " ").trim();

  return trimmedString;
};