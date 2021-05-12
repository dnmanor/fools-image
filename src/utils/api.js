import { createApi } from "unsplash-js";
const APP_ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

const unsplash = createApi({
  accessKey: APP_ACCESS_KEY,
});

export const searchImages = (query) => {
    unsplash.search.getPhotos({
      query: "cat",
      page: 1,
      perPage: 10,
    })
    .then((result) => {
      if (result.errors) {
        // handle error here
        console.log("error occurred: ", result.errors[0]);
      } else {
        const feed = result.response;

        // extract total and results array from response
        const { total, results } = feed;

        // handle success here
        console.log(`received ${results.length} photos out of ${total}`);
        console.log("first photo: ", results[0]);
      }
    });
};
