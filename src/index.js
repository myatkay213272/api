const express = require('express');
const app = express();

const port = process.env.PORT || 4000

const {ApolloServer, gql } = require('apollo-server-express')

const typeDefs = gql`
    type Note{
        id: ID
        content: String!
        author: String!
    },
    type Query{
        notes: [Note!]!,
        note(author: String!): Note!,
    },
    type Mutation{
        newNote(author: String!, content: String!): Note!
    }
`

const resolvers = {
    Query:{
        
    },
    Mutation:{

    }
}

const server = new ApolloServer({typeDefs, resolvers})

async function apolloServerStart(){
    await server.start();
    await server.applyMiddleware({app, path: "/api"})
}

apolloServerStart()


app.listen({port}, ()=>{
    console.log(`Graphql playground: https://localhost:${port}/api`)
    console.log(`Graphql Server: https://localhost:${port}${server.graphqlPath}`)
})

