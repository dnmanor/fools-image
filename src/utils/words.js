var axios = require("axios").default;

export const getAntonyms = async (word) => {
  try {
    const response = await axios.get(
      `https://wordsapiv1.p.rapidapi.com/words/${word}/antonyms`,
      {
        headers: {
          "x-rapidapi-key":
            process.env.REACT_APP_RAPID_API_KEY,
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        },
      }
    );

    const data = await response.data;

    if (!data) {
      throw new Error("Error fining antonyms");
    }

    const antonyms = data.antonyms;

    if (antonyms[0] === undefined) {
      throw new Error("No antonyms exist for this word");
    }

    console.log(antonyms);

    return antonyms;
  } catch (error) {
    console.log("Error finding antonyms");
    return error;
  }
};


