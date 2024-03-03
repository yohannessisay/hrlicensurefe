import Compressor from "compressorjs";
export const FileUpload = (
  data,
  event,
  pro,
  documentsUploaded,
  fileUploadError,
  fileSize,
  imageData,
  documentToSave,
  formData,
  fileS
) => {
  if (/\.(pdf)$/i.test(event?.target?.files[0].name)) {
    let reader = new FileReader();
    documentsUploaded[
      data.documentType.code +
        "_" +
        data.educationalLevel.code.toUpperCase() +
        "_" +
        pro.professionType.code.toUpperCase()
    ] = "";

    documentsUploaded[
      data.documentType.code +
        "_" +
        data.educationalLevel.code.toUpperCase() +
        "_" +
        pro.professionType.code.toUpperCase()
    ] = event?.target?.files[0];

    delete fileUploadError[
      "file_upload_row_" +
        data.documentType.code.toUpperCase() +
        "_" +
        data.educationalLevel.code.toUpperCase() +
        "_" +
        pro.professionType.code.toUpperCase()
    ];

    let fileS =
      documentsUploaded[
        data.documentType.code +
          "_" +
          data.educationalLevel.code.toUpperCase() +
          "_" +
          pro.professionType.code.toUpperCase()
      ].size;

    formData.append(
      data.documentType.code +
        "_" +
        data.educationalLevel.code.toUpperCase() +
        "_" +
        pro.professionType.code.toUpperCase(),

      event?.target?.files[0]
    );

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
        imageData.push({
          imageId:
            "image_lightbox_" +
            data.documentType.code +
            "_" +
            pro.educationalLevel.code +
            "_" +
            pro.professionType.code,
          documenttype: data.documentType ? data.documentType.name : "",
          documentCode:
            data.documentType.code +
            "_" +
            data.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase(),
          educationalLevel: data.educationalLevel
            ? data.educationalLevel.name
            : "",
          fileName: event?.target?.files[0].name,
          image: reader.result,
        });
      },
      false
    );

    reader.readAsDataURL(
      documentsUploaded[
        data.documentType.code +
          "_" +
          data.educationalLevel.code.toUpperCase() +
          "_" +
          pro.professionType.code.toUpperCase()
      ]
    );
    let icon = document.getElementById(
      "educational_icon_" +
        data.documentType.code +
        "_" +
        pro.educationalLevel.code.toUpperCase() +
        "_" +
        pro.professionType.code.toUpperCase()
    );
    if (icon.classList.contains("disabled")) {
      icon.classList.toggle("disabled");
    }

    let output = document.getElementById(
      "image_lightbox_" +
        data.documentType.code +
        "_" +
        pro.educationalLevel.code.toUpperCase() +
        "_" +
        pro.professionType.code.toUpperCase()
    );
    let outputHref = document.getElementById(
      "image_href_" +
        data.documentType.code +
        "_" +
        pro.educationalLevel.code.toUpperCase() +
        "_" +
        pro.professionType.code.toUpperCase()
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
        let reader = new FileReader();
        event.target.files = dataTransfer.files;
        documentsUploaded[
          data.documentType.code +
            "_" +
            data.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase()
        ] = "";
        documentsUploaded[
          data.documentType.code +
            "_" +
            data.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase()
        ] = event?.target?.files[0];

        let fileS =
          documentsUploaded[
            data.documentType.code +
              "_" +
              data.educationalLevel.code.toUpperCase() +
              "_" +
              pro.professionType.code.toUpperCase()
          ].size;

        formData.append(
          data.documentType.code +
            "_" +
            data.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase(),

          event?.target?.files[0]
        );

        if (fileS > 0 && fileS < 1000) {
          fileSize += "B";
        } else if (fileS > 1000 && fileS < 1000000) {
          fileSize = fileS / 1000 + "kB";
        } else {
          fileSize = fileS / 1000000 + "MB";
        }

        delete fileUploadError[
          "file_upload_row_" +
            data.documentType.code +
            "_" +
            data.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase()
        ];
        reader.addEventListener(
          "load",
          function() {
            imageData.push({
              imageId:
                "image_lightbox_" +
                data.documentType.code +
                "_" +
                pro.educationalLevel.code +
                "_" +
                pro.professionType.code,
              documenttype: data.documentType ? data.documentType.name : "",
              documentCode:
                data.documentType.code +
                "_" +
                data.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase(),
              educationalLevel: data.educationalLevel
                ? data.educationalLevel.name
                : "",
              fileName: event?.target?.files[0].name,
              image: reader.result,
            }); 
          },
          false
        );

        reader.readAsDataURL(
          documentsUploaded[
            data.documentType.code +
              "_" +
              data.educationalLevel.code.toUpperCase() +
              "_" +
              pro.professionType.code.toUpperCase()
          ]
        );

        let icon = document.getElementById(
          "educational_icon_" +
            data.documentType.code +
            "_" +
            pro.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase()
        );
        if (icon.classList.contains("disabled")) {
          icon.classList.toggle("disabled");
        }

        let output = document.getElementById(
          "image_lightbox_" +
            data.documentType.code +
            "_" +
            pro.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase()
        );
        let outputHref = document.getElementById(
          "image_href_" +
            data.documentType.code +
            "_" +
            pro.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase()
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
