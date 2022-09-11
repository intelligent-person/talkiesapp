import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../../graphql/schema/schema';
import { createContext } from '../../../graphql/context/context';
import Cors from 'micro-cors'

const cors = Cors()

const apolloServer = new ApolloServer({
  schema,
  context: ({req, res}) => createContext(req, res),
  cache: 'bounded'
})

const startServer = apolloServer.start()

export default cors(async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com",
    "https://talkiesapp.vercel.app/",
    "http://localhost:3000/",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Authorization, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD"
  );
  
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  
  await startServer
  
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false,
  },
}