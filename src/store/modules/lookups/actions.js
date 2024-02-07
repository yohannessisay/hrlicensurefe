import ApiService from "../../../services/api.service";
import { SET_EDUCATION_LEVEL, SET_ALL_DOCUMENT_SPECS } from "./mutation-types";
import { baseUrl } from "../../../composables/baseURL";

export default {
  setEducationalLevel({ commit }, educationalLevel) {
    commit(SET_EDUCATION_LEVEL, educationalLevel);
  },
  /***************************Get api calls*********************************/
  async getProfessionalPrefix() {
    try {
      const resp = await ApiService.get(
        baseUrl + "/lookups/professionalPrefixes"
      );
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getLicenseExpirationDates() {
    try {
      const resp = await ApiService.get(
        baseUrl + "/lookups/licenseExpirationDates"
      );
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getLicenseExpirationDateByRegionId(context, regionId) {
    try {
      const resp = await ApiService.get(
        baseUrl + "/lookups/licenseExpirationDates/byRegionId/" + regionId
      );
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getProfessionalType(context,apiParameter) {
    try {
      let url = `${baseUrl + "/lookups/professionalTypes"}?`;
      let parameters = apiParameter[0].params ? apiParameter[0].params : [];
    
      if (parameters) {
        parameters.forEach((param) => {
          url += param ? `${param.key}=${param.value}&` : "";
        });
      }
      url = url.substring(0, url.length - 1);
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getDocumentType() {
    try {
      const resp = await ApiService.get(baseUrl + "/documentTypes");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getGovernment() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/OccupationTypes");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getNativeLanguage() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/NativeLanguages");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getEducationLevel() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/educationalLevels");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getAllDocumentSpecs({ commit }) {
    try {
      const resp = await ApiService.get(baseUrl + "/documentSpecs");
      commit(SET_ALL_DOCUMENT_SPECS, resp.data.data);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getDocSpecWithFilter(context, apiParameter) {
    try {
      let url = `${baseUrl}/lookups/documentSpecs/filter?`;

      if (apiParameter) {
        apiParameter.forEach((param) => {
          url += param ? `${param.key}=${param.value}&` : "";
        });
      }
      url = url.substring(0, url.length - 1);
      const resp = await ApiService.get(url);

      return resp;
    } catch (error) {
      return error;
    }
  },
  async getDepartments() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/departments");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getApplicantType() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/applicantTypes");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getRegions() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/regions");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getWoredas() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/woredas");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getZones() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/zones");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getApplicationStatuses() {
    try {
      const resp = await ApiService.get(baseUrl + "/applicationStatuses");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getApplicantTitles() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/applicantTitles");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getApplicantPositions() {
    try {
      const resp = await ApiService.get(
        baseUrl + "/lookups/applicantPositions"
      );
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  /***************************Add api calls*********************************/
  async addRegion(id, data) {
    try {
      const resp = await ApiService.post(baseUrl + "/lookups/addRegion", data);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async addWoreda(id, data) {
    try {
      const resp = await ApiService.post(baseUrl + "/lookups/addWoreda", data);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async addZone(id, data) {
    try {
      const resp = await ApiService.post(baseUrl + "/lookups/addZone", data);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async addLicenseExpirationDate(id, data) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/lookups/addLicenseExpirationDate",
        data
      );
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async addDepartment(id, data) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/lookups/addDepartment",
        data
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async addEducationLevel(id, data) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/lookups/addEducationLevel",
        data
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async addProfessionalPrefix(id, data) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/lookups/addprofessionalPrefix",
        data
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async addProfessionalType(id, data) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/lookups/addProfessionalType",
        data
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async addDocumentType(id, data) {
    try {
      const resp = await ApiService.post(baseUrl + "/documentTypes/add", data);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async addDocumentSpec(id, data) {
    try {
      const resp = await ApiService.post(baseUrl + "/documentSpecs/add", data);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async addApplicantTitle(id, data) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/lookups/lookups/addApplicantTitle",
        data
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async addApplicantPosition(id, data) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/lookups/addApplicantPosition",
        data
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  /***************************Update api calls*********************************/
  async updateDepartment(id, data) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/lookups/department/" + data.id,
        data
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async updateLicenseExpirationDate(id, data) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/lookups/licenseExpirationDate/" + data.id,
        data
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async updateZone(context, data) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/lookups/zone/" + data.id,
        data
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async updateWoreda(context, data) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/lookups/woreda/" + data.id,
        data
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async updateRegion(context, data) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/lookups/region/" + data.id,
        data
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async updateEducationLevel(context, data) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/lookups/educationalLevel/" + data.id,
        data
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async updateProfessionalType(context, data) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/lookups/professionalType/" + data.id,
        data
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async updateDocumentSpec(context, data) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/documentSpecs/" + data.id,
        data
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async updateDocumentType(id, data) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/documentTypes/" + data.id,
        data
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async updateProfessionalPrefix(context, data) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/lookups/professionalPrefix/" + data.id,
        data
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async updateApplicantTitle(context, data) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/lookups/applicantTitle/" + data.id,
        data
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async updateApplicantPosition(context, data) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/lookups/applicantPosition/" + data.id,
        data
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
};
