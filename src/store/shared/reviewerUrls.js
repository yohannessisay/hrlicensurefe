import { baseUrl } from "../../composables/baseURL";
let reviewerUrls = {
  newLicense: `${baseUrl}/newLicenses/status/`,
  renewal: `${baseUrl}/renewals/status/`,
  goodstanding: `${baseUrl}/goodstandings/status/`,
  lostLicense: `${baseUrl}/lostLicense/status/`
};
export default reviewerUrls;
