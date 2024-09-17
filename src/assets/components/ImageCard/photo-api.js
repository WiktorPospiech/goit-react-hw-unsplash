import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const UNSPLASH_ACCESS_KEY = "nObyfC4fvzMaR45fNKHFwtN4VVCsDaLFYA_q2plVgvw";

export const fetchPhoto = async (name, pageNumber) => {
  const resp = await axios.get("/search/photos", {
    params: {
      query: name,
      page: pageNumber,
      per_page: 12,
      client_id: UNSPLASH_ACCESS_KEY,
    },
  });

  const results = resp.data.results;

  return results.map((img) => ({
    id: img.id,
    src: img.urls.regular,
    alt: img.alt_description,
  }));
};
