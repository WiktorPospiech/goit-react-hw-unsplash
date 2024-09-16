import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/photos";
const UNSPLASH_ACCESS_KEY = "nObyfC4fvzMaR45fNKHFwtN4VVCsDaLFYA_q2plVgvw";

export const fetchPhoto = async (name) => {
  const resp = await axios.get(`/name=${name}`, {
    params: { client_id: UNSPLASH_ACCESS_KEY },
  });

  return resp.data.results;
};
