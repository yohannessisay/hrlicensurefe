import { baseUrl } from "../../../composables/baseURL";
let applicantUrls = {
  newLicense: `${baseUrl}/newLicenses/status/`,
  renewal: `${baseUrl}/renewals/status/`,
  goodstanding: `${baseUrl}/goodstandings/status/`,
};
export default applicantUrls;
