const { gql } = require('apollo-server');
// const { GraphQLScalarType } = require('graphql');

// const currencyScalar = new GraphQLScalarType({
//   name: String
// })

module.exports = gql`
  type Country {
    alpha3Code: String
    name: String
    nativeName: String
    capital: String
    population: Int
    region: String
    subregion: String
    topLevelDomain: [String]
    latlng: [Float]
    borders: [String]
    flag: String
  }

  type Currency {
    name: String
  }
  type Language {
    name: String
  }

  type Query {
    countries(countryChar: String, region: String): [Country]
    country(countryName: String): [Country]
    borders(bordersName: String): [Country]
    getCurrency(countryName: String): [Currency]
    getLanguage(countryName: String): [Language]
  }
`;
