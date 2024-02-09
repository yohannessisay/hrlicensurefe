export async function checkDocuments(
  errorDocuments,
  isBackButtonClicked,
  commonDocuments,
  fileUploadError,
  educationalDocs,
  documentsUploaded,
  documents
) {
  let temp = "";
  let CMtemp = "";
  let NSTemp = "";
  var tempVal;
  errorDocuments = [];
  // if back button is clicked
  if (isBackButtonClicked && isBackButtonClicked == true) {
    // check common documents

    commonDocuments
      .filter((cd) => cd.isRequired)
      .forEach((element) => {
        CMtemp = element.fileName;

        if (!CMtemp || CMtemp == "") {
          fileUploadError[
            "file_upload_row_" + element.documentType.code
          ] = true;
          errorDocuments.push({
            isCommon: true,
            name: element.documentType.name,
            code: element.documentType.code,
          });
        } else {
          delete fileUploadError[
            "file_upload_row_" + element.documentType.code
          ];
        }
      });

    // check normal docs with no parents
    educationalDocs.forEach((ed) => {
      ed.docs
        .filter((docs) => docs.isRequired)
        .forEach((single) => {
          let tempEdVal = documentsUploaded.filter(
            (el) =>
              el.documentCode ==
              single.documentType.code.toUpperCase() +
                "_" +
                ed.educationalLevel.code.toUpperCase() +
                "_" +
                ed.professionType.code.toUpperCase()
          );

          if (tempEdVal) {
            delete fileUploadError[
              "file_upload_row_" +
                single.documentType.code.toUpperCase() +
                "_" +
                ed.educationalLevel.code.toUpperCase() +
                "_" +
                ed.professionType.code.toUpperCase()
            ];
          } else {
            fileUploadError[
              "file_upload_row_" +
                single.documentType.code.toUpperCase() +
                "_" +
                ed.educationalLevel.code.toUpperCase() +
                "_" +
                ed.professionType.code.toUpperCase()
            ] = true;
            errorDocuments.push({
              name: single.documentType.name,
              code:
                single.documentType.code.toUpperCase() +
                "_" +
                ed.educationalLevel.code.toUpperCase() +
                "_" +
                ed.professionType.code.toUpperCase(),
            });
          }
        });

      //// check documetns with parents
      for (var pd in ed.parentDoc) {
        tempVal = documents.filter(
          (nld) => nld.parentDocument == pd && nld.isRequired
        );

        if (
          tempVal &&
          tempVal.length > 0 &&
          tempVal[0] &&
          tempVal[0].isRequired == true
        ) {
          // eslint-disable-next-line no-prototype-builtins
          NSTemp = documentsUploaded.filter(
            (el) =>
              el.documentCode ==
              tempVal[0].documentType.code +
                "_" +
                ed.educationalLevel.code.toUpperCase() +
                "_" +
                ed.professionType.code.toUpperCase()
          );

          if (NSTemp && NSTemp != "" && NSTemp[0]) {
            delete fileUploadError[
              "file_upload_row_" +
                documents.filter(
                  (nld) => nld.parentDocument == pd && nld.isRequired
                )[0].documentType.code +
                "_" +
                ed.educationalLevel.code.toUpperCase() +
                "_" +
                ed.professionType.code.toUpperCase()
            ];
          } else {
            fileUploadError[
              "file_upload_row_" +
                documents.filter(
                  (nld) => nld.parentDocument == pd && nld.isRequired
                )[0].documentType.code +
                "_" +
                ed.educationalLevel.code.toUpperCase() +
                "_" +
                ed.professionType.code.toUpperCase()
            ] = true;
            errorDocuments.push({
              name: documents.filter(
                (nld) => nld.parentDocument == pd && nld.isRequired
              )[0].documentType.name,
              code:
                documents.filter(
                  (nld) => nld.parentDocument == pd && nld.isRequired
                )[0].documentType.code +
                "_" +
                ed.educationalLevel.code.toUpperCase() +
                "_" +
                ed.professionType.code.toUpperCase(),
            });
          }
        }
      }
    });
  } else {
    commonDocuments
      .filter((cd) => cd.isRequired)
      .forEach((element) => {
        // eslint-disable-next-line no-prototype-builtins
        CMtemp = documentsUploaded.hasOwnProperty(element.documentType.code);

        if (!CMtemp) {
          fileUploadError[
            "file_upload_row_" + element.documentType.code
          ] = true;

          errorDocuments.push({
            isCommon: true,
            name: element.documentType.name,
            code: element.documentType.code,
          });
        } else {
          delete fileUploadError[
            "file_upload_row_" + element.documentType.code
          ];
        }
      }); 
    educationalDocs.forEach((ed) => {
      // check normal docs with no parents

      ed.docs
        .filter((docs) => docs.isRequired)
        .forEach((single) => {
          // eslint-disable-next-line no-prototype-builtins
          temp = documentsUploaded.hasOwnProperty(
            single.documentType.code +
              "_" +
              ed.educationalLevel.code.toUpperCase() +
              "_" +
              ed.professionType.code.toUpperCase()
          );
          if (!temp) {
            fileUploadError[
              "file_upload_row_" +
                single.documentType.code +
                "_" +
                ed.educationalLevel.code.toUpperCase() +
                "_" +
                ed.professionType.code.toUpperCase()
            ] = true;
            errorDocuments.push({
              name: single.documentType.name,
              code:
                single.documentType.code +
                "_" +
                ed.educationalLevel.code.toUpperCase() +
                "_" +
                ed.professionType.code.toUpperCase(),
            });
          } else {
            delete fileUploadError[
              "file_upload_row_" +
                single.documentType.code +
                "_" +
                ed.educationalLevel.code.toUpperCase() +
                "_" +
                ed.professionType.code.toUpperCase()
            ];
          }
        });

      //// check documetns with parents
      for (var pd in ed.parentDoc) {
        tempVal = documents.filter(
          (nld) => nld.parentDocument == pd && nld.isRequired
        );

        if (
          tempVal &&
          tempVal.length > 0 &&
          tempVal[0] &&
          tempVal[0].isRequired == true
        ) {
          // eslint-disable-next-line no-prototype-builtins
          NSTemp = documentsUploaded.hasOwnProperty(
            tempVal[0].documentType.code +
              "_" +
              ed.educationalLevel.code.toUpperCase() +
              "_" +
              ed.professionType.code.toUpperCase()
          );
          if (NSTemp == "") {
            fileUploadError[
              "file_upload_row_" +
                documents.filter(
                  (nld) => nld.parentDocument == pd && nld.isRequired
                )[0].documentType.code +
                "_" +
                ed.educationalLevel.code.toUpperCase() +
                "_" +
                ed.professionType.code.toUpperCase()
            ] = true;
            errorDocuments.push({
              name: documents.filter(
                (nld) => nld.parentDocument == pd && nld.isRequired
              )[0].documentType.name,
              code:
                documents.filter(
                  (nld) => nld.parentDocument == pd && nld.isRequired
                )[0].documentType.code +
                "_" +
                ed.educationalLevel.code.toUpperCase() +
                "_" +
                ed.professionType.code.toUpperCase(),
            });
          }
        }
      }
    });
  }

  return { fileUploadError: fileUploadError, errorDocuments: errorDocuments };
}
