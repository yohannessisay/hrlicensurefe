import { useStore } from "vuex";

export const fetchCommonFilesMixin = {
  setup() {
    const store = useStore();

    const GetCommonDocs = async (
      url,
      applicantTypeId,
      isLicenseDesignation,
      commonDocuments,
      existingDocs,
      isBackButtonClicked,
      alreadyUploaded
    ) => {
      let result = await store
        .dispatch(url.toString(), [1, applicantTypeId])
        .then((res) => {
          return res.data.data;
        });

      if (isLicenseDesignation == true) {
        result = result.filter((el) => el.documentType.code == "PSP");
      }
      commonDocuments = result;

      if (
        existingDocs &&
        existingDocs.length > 0 &&
        result &&
        result.length > 0
      ) {
        isBackButtonClicked = true;
        alreadyUploaded = true;
        existingDocs.forEach((existing) => {
          result.forEach((Cd) => {
            if (
              existing.imageId ==
              "common_image_lightbox_" + Cd.documentType.code.toUpperCase()
            ) {
              Cd.existingFile = existing.image;
              Cd.fileName = existing.fileName;
            }
          });
        });
      } else {
        commonDocuments = result;
      }
      return {
        commonDocuments,
        isBackButtonClicked,
        alreadyUploaded,
      };
    };
    const GetDocs = async (
      url,
      applicantTypeId,
      educationLevels,
      newLicenseDocuments,
      generalInfo,
      tryAgain,
      educationalDocs,
      isLicenseDesignation,
      existingDocs,
      isBackButtonClicked,
      documentsUploaded
    ) => {
      let callTryAgain = false;

      await educationLevels.forEach((element) => {
        store
          .dispatch(url, [
            1,
            applicantTypeId,
            element.educationalLevel.id,
            null,
          ])
          .then(async (res) => {
            let result = res.data ? await res.data.data : [];
            let resp = [];
            newLicenseDocuments = result;
            if (isLicenseDesignation == true) {
              resp = result.filter(
                (ed) =>
                  ed.documentType.code == "SUPINST" ||
                  ed.documentType.code == "SENSUP"
              );
            } else {
              resp = result.filter(
                (ed) =>
                  ed.documentType.code !== "SUPINST" &&
                  ed.documentType.code !== "SENSUP"
              );
            }
            resp.forEach((ed, index) => {
              if (
                generalInfo &&
                generalInfo.nativeLanguageSelected &&
                generalInfo.nativeLanguageSelected.code != "NENGS" &&
                ed.documentType.code == "ELPC"
              ) {
                resp.splice(index, 1);
              }
            });

            educationalDocs.push({
              educationalLevel: element.educationalLevel,
              professionType: element.professionalType,
              docs: resp.filter(
                (element) =>
                  element.parentDocument == null || element.parentDocument == ""
              ),
              parentDoc: groupByKey(resp, "parentDocument"),
            });

            if (
              existingDocs &&
              existingDocs.length > 0 &&
              resp &&
              resp.length > 0
            ) {
              isBackButtonClicked = true;
              documentsUploaded = existingDocs;

              educationalDocs.forEach((ed) => {
                ed.docs
                  .filter((docs) => docs.isRequired)
                  .forEach((Cd) => {
                    documentsUploaded.forEach((element) => {
                      if (
                        element.documentCode ===
                        Cd.documentType.code.toUpperCase() +
                          "_" +
                          ed.educationalLevel.code.toUpperCase() +
                          "_" +
                          ed.professionType.code.toUpperCase()
                      ) {
                        Cd.existingFile = element.image;
                        Cd.fileName = element.fileName;
                      }
                    });
                  });
                for (const property in ed.parentDoc) {
                  ed.parentDoc[property].forEach((Cd) => {
                    documentsUploaded.forEach((element) => {
                      if (
                        element.documentCode ===
                        Cd.documentType.code.toUpperCase() +
                          "_" +
                          ed.educationalLevel.code.toUpperCase() +
                          "_" +
                          ed.professionType.code.toUpperCase()
                      ) {
                        Cd.existingFile = element.image;
                        Cd.fileName = element.fileName;
                      }
                    });
                  });
                }
              });
            }
            
            if (tryAgain && tryAgain.id != null && tryAgain.step == 3) {
              callTryAgain = true;
            }
            
          });
         
      });

      return {
        newLicenseDocuments,
        isBackButtonClicked,
        documentsUploaded,
        educationalDocs,
        callTryAgain,
      };
    };
    const groupByKey = (array, key) => {
      return array.reduce((hash, obj) => {
        if (obj[key] === undefined || obj[key] == null || obj[key] == "")
          return hash;
        return Object.assign(hash, {
          [obj[key]]: (hash[obj[key]] || []).concat(obj),
        });
      }, {});
    };
    return { GetCommonDocs, GetDocs };
  },
};
