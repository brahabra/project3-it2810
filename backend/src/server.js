const { Neo4jGraphQL } = require("@neo4j/graphql");
const { ApolloServer, gql } = require("apollo-server");
const neo4j = require("neo4j-driver");
require("dotenv").config();

//Sourcecode gotten from ""
//Types for use in schema generation for Neo4J database, is fetched by neoSchema further down
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
    type Query {
        findMovieByTitle(searchString: String, offset: Int, limit: Int): [Movie] @cypher(
            statement: """
            CALL db.index.fulltext.queryNodes(
                'titles', $searchString+'~') 
            YIELD node RETURN node SKIP $offset LIMIT $limit
            """
        )

        findMovieByTitleWithGenreFilter(searchString: String, filterString: String, offset: Int, limit: Int): [Movie] @cypher(
            statement: """
            CALL db.index.fulltext.queryNodes(
                'titles', $searchString+'~') 
            YIELD node 
            MATCH (node)
            WHERE node.Genre Contains $filterString
            RETURN node 
            SKIP $offset 
            LIMIT $limit
            """
        )
    }
`;

//Driver for fetching data from Neo4j database, with generic user with read priviliges
const driver = neo4j.driver(
    process.env.NEO4J_URI,
    neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
  );

//Generates schema for Neo4J
const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

//Starts server
neoSchema.getSchema().then((schema) => {
    const server = new ApolloServer({
        schema, 
    });
  
    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
  })