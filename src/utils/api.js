import { createApi } from "unsplash-js";
const APP_ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

const unsplash = createApi({
  accessKey: APP_ACCESS_KEY,
});

export const searchImages = async (query) => {
  try {
    const result = await unsplash.search.getPhotos({
      query: "cat",
      page: 1,
      perPage: 10,
    });
    const feed = result.response;
    const { total, results } = feed;

    if (result.errors) {
      // handle error here
      console.log("error occurred: ", result.errors[0]);
    }

    return results

  } catch (error) {
    return error;
  }
};
