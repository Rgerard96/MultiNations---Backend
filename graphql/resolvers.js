const axios = require('axios');

module.exports = {
  Query: {
    async countries(_, { countryChar, region }) {
      if (!countryChar && region === 'All') {
        try {
          const res = await axios.get('https://restcountries.eu/rest/v2/all');
          return res.data;
        } catch (error) {
          throw new Error(error);
        }
      } else if (region && !countryChar && region !== 'All') {
        try {
          const res = await axios.get(
            `https://restcountries.eu/rest/v2/region/${region}`
          );
          return res.data;
        } catch (error) {
          throw new Error(error);
        }
      } else {
        try {
          const res = await axios.get(
            `https://restcountries.eu/rest/v2/name/${countryChar}`
          );
          return res.data;
        } catch (error) {
          throw new Error(error);
        }
      }
    },
    async country(_, { countryName }) {
      try {
        const res = await axios.get(
          `https://restcountries.eu/rest/v2/name/${countryName}`
        );
        return res.data;
      } catch (error) {
        throw new Error(error);
      }
    },
    async borders(_, { bordersName }) {
      try {
        const res = await axios.get(
          `https://restcountries.eu/rest/v2/alpha?codes=${bordersName}`
        );
        return res.data;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getCurrency(_, { countryName }) {
      try {
        const res = await axios.get(
          `https://restcountries.eu/rest/v2/name/${countryName}?fields=currencies`
        );
        return res.data[0].currencies;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getLanguage(_, { countryName }) {
      try {
        const res = await axios.get(
          `https://restcountries.eu/rest/v2/name/${countryName}?fields=languages`
        );
        return res.data[0].languages;
      } catch (error) {
        throw new Error(error);
      }
    }
  }
};
