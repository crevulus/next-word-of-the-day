export const resolvers = {
  Query: {
    getWordData: async (_, args) => {
      const wordsData = await fetch(
        `https://wordsapiv1.p.rapidapi.com/words/${args.word}/`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "a2c92537d6mshed3836357d1a824p120053jsn7c815bcc2e2d",
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
          },
        }
      )
        .then((response) => {
          return response;
        })
        .catch((err) => {
          console.error(err);
        });
      return await wordsData.json();
    },
  },
};
