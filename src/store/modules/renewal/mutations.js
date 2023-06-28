import {
    SET_UPLOAD_PROGRESS,
    SET_BUTTONS,
    SET_GENERAL_INFO,
    SET_TEMP_DOCS,
  } from "./mutation-types";
  
  export default {
    [SET_UPLOAD_PROGRESS](state, uploadProgress) {
      state.uploadProgress = uploadProgress;
    },
  
    [SET_BUTTONS](state, buttons) {
      state.buttons = buttons;
    },
    [SET_TEMP_DOCS](state, docs) {
      state.tempDocs = docs;
    },
    [SET_GENERAL_INFO](state, generalInfo) {
      state.generalInfo = generalInfo;
    },
  };
  