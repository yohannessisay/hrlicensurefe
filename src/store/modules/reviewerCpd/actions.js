import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";

export default {
  async getCpdCertified(context, detail) {
    try {
      let url = baseUrl + "/event/cpdCertifiedTrainees?";

      let parameters = detail[0].params ? detail[0].params : [];

      if (parameters) {
        parameters.forEach((param) => {
          url += param ? `${param.key}=${param.value}&` : "";
        });
      }
      url = url.substring(0, url.length - 1);

      const resp = await ApiService.get(url);

      return resp.data ? resp.data.data : [];
    } catch (error) {
      console.log(error);
    }
  },
};
