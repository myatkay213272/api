const express = require('express');
const app = express();

require('dotenv').config()

const db = require('./db')
const DB_HOST = process.env.DB_HOST

db.connect(DB_HOST)


const models = require('./models')

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
        notes: async () => {
            return await models.Note.find();
        }
    },
    Mutation:{
        newNote: async(parent, args)=>{
            return await models.Note.create({
                content: args.content,
                author: args.author
            })
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})

async function apolloServerStart(){
    await server.start();
    await server.applyMiddleware({app, path: "/api"})
}

apolloServerStart()


app.listen({port}, ()=>{
    console.log(`Graphql playground: http://localhost:${port}/api`)
    console.log(`Graphql Server: http://localhost:${port}${server.graphqlPath}`)
})

