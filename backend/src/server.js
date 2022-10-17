const { Neo4jGraphQL } = require("@neo4j/graphql");
const { ApolloServer, gql } = require("apollo-server");
const neo4j = require("neo4j-driver");

const typeDefs = gql`
    type Movie {
        Certificate: String
        Director: String
        Genre: String
        Gross: String
        IMDB_Rating: String
        Meta_score: String
        No_of_Votes: String
        Overview: String
        Poster_Link: String
        Released_Year: String
        Runtime: String
        Series_Title: String!
        Star1: String
        Star2: String
        Star3: String
        Star4: String
    }

    type User {
        name: String!
        queries: [SearchQuery!]
    }

    type SearchQuery {
        user: User!
        #Certificate: String
        #Director: String
        #Genre: String
        #Gross: String
        #IMDB_Rating: String
        #Meta_score: String
        #No_of_Votes: String
        #Overview: String
        #Poster_Link: String
        #Released_Year: String
        #Runtime: String
        Series_Title: String!
        #Star1: String
        #Star2: String
        #Star3: String
        #Star4: String
    }

`;

const driver = neo4j.driver(
    "bolt://localhost:7687",
    neo4j.auth.basic("serverUser", "Password123")
);

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

neoSchema.getSchema().then((schema) => {
    const server = new ApolloServer({
        schema, 
    });
  
    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
  })