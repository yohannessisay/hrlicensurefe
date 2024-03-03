import Compressor from "compressorjs";
export const CommonFileUpload = (
  data,
  event,
  documentsUploaded, 
  fileUploadError,
  fileSize, 
  imageData,
  documentToSave, 
  formData,
  fileS
) => { 
  if (/\.(pdf)$/i.test(event?.target?.files[0].name)) {
    documentsUploaded[data.documentType.code] = "";
    documentsUploaded[data.documentType.code] = event?.target?.files[0];
    let reader = new FileReader();

    fileS = documentsUploaded[data.documentType.code].size;
 

    delete fileUploadError["file_upload_row_" + data.documentType.code];

    if (fileS > 0 && fileS < 1000) {
      fileSize += "B";
    } else if (fileS > 1000 && fileS < 1000000) {
      fileSize = fileS / 1000 + "kB";
    } else {
      fileSize = fileS / 1000000 + "MB";
    }

    reader.addEventListener(
      "load",
      function() { 
        imageData = imageData.filter(
          (el) => el.documenttype != data.documentType.name
        );
        imageData.push({
          imageId: "common_image_lightbox_" + data.documentType.code,
          documenttype: data.documentType ? data.documentType.name : "",
          documentCode: data.documentType ? data.documentType.code : "",
          educationalLevel: data.educationalLevel
            ? data.educationalLevel.name
            : "",
          fileName: event?.target?.files[0].name,
          image: reader.result,
        });

        documentToSave[data.documentType.code] = reader.result;
      },
      false
    );
 
    formData.append(data.documentType.code, event?.target?.files[0]);
    reader.readAsDataURL(documentsUploaded[data.documentType.code]);
    let icon = document.getElementById(
      "common_icon_" + data.documentType.id + data.id
    );

    if (icon.classList.contains("disabled")) {
      icon.classList.toggle("disabled");
    }

    let output = document.getElementById(
      "common_image_lightbox_" + data.documentType.id + data.id
    );

    let outputHref = document.getElementById(
      "common_image_" + data.documentType.id + data.id
    );

    outputHref.href = URL.createObjectURL(event.target.files[0]);
    if (output && output.src) {
      output.src = URL.createObjectURL(event.target.files[0]);
    }

    output
      ? (output.onload = function() {
          URL.revokeObjectURL(output.src);
        })
      : "";
  } else {
    new Compressor(event?.target?.files[0], {
      quality: 0.5,
      success(result) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(new File([result], result.name));
        event.target.files = dataTransfer.files;
        documentsUploaded[data.documentType.code] = "";
        documentsUploaded[data.documentType.code] =
          event?.target?.files[0];
        let reader = new FileReader();

        let fileS = documentsUploaded[data.documentType.code].size;

        delete fileUploadError[
          "file_upload_row_" + data.documentType.code
        ];

        if (fileS > 0 && fileS < 1000) {
          fileSize += "B";
        } else if (fileS > 1000 && fileS < 1000000) {
          fileSize = fileS / 1000 + "kB";
        } else {
          fileSize = fileS / 1000000 + "MB";
        }
        let commonImageLighBox = document.getElementById(
          "common_image_light_box_" + data.documentType.id + data.id
        );
        reader.addEventListener(
          "load",
          function() { 
            imageData = imageData.filter(
              (el) => el.documenttype != data.documentType.name
            );
            imageData.push({
              imageId: "common_image_lightbox_" + data.documentType.code,
              documenttype: data.documentType ? data.documentType.name : "",
              documentCode: data.documentType ? data.documentType.code : "",
              educationalLevel: data.educationalLevel
                ? data.educationalLevel.name
                : "",
              fileName: event?.target?.files[0].name,
              image: reader.result,
            });

            documentToSave[data.documentType.code] = reader.result;

            if (commonImageLighBox) {
              commonImageLighBox.src = reader.result;
            }
          },
          false
        ); 
        formData.append(data.documentType.code, event?.target?.files[0]);
        reader.readAsDataURL(documentsUploaded[data.documentType.code]);

        let icon = document.getElementById(
          "common_icon_" + data.documentType.id + data.id
        );

        if (icon.classList.contains("disabled")) {
          icon.classList.toggle("disabled");
        }

        let output = document.getElementById(
          "common_image_lightbox_" + data.documentType.id + data.id
        );

        let outputHref = document.getElementById(
          "common_image_href_" + data.documentType.id + data.id
        );
        outputHref.href = URL.createObjectURL(event.target.files[0]);
        if (output && output.src) {
          output.src = URL.createObjectURL(event.target.files[0]);
          output.onload = function() {
            URL.revokeObjectURL(output.src);
          };
        }
      },
      error(err) {
        console.log(err.message);
      },
    });
  }
  return {
    data,
    event,
    documentsUploaded, 
    fileUploadError,
    fileSize, 
    imageData,
    documentToSave, 
    formData,
    fileS,
  };
};
