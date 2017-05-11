const gqlTools = require('graphql-tools')

import typeDefs from './schema/index'
import resolvers from './resolvers/index'
import SWAPIConnector from './connectors/swapi'
import FilmModel from './models/film'
import PeopleModel from './models/people'
import VehicleModel from './models/vehicle'
import PlanetModel from './models/planet'
import StarshipModel from './models/starship'
import SpeciesModel from './models/species'
import PatientModel from './models/patients'

import { startExpress } from './express'
//$ curl "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Patient/Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB"
//$ curl https://sb-fhir-dstu2.smarthealthit.org/api/smartdstu2/open/Patient/SMART-1551992 \
//https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/'
//https://sb-fhir-dstu2.smarthealthit.org/api/smartdstu2/open/
//http://nprogram.azurewebsites.net/Patient/1?_format=json
const BASE_URL = 'http://nprogram.azurewebsites.net'


const apiHost = process.env.API_HOST ? `${process.env.API_HOST}/api` : BASE_URL
//const apiHost = process.env.API_HOST ? `${process.env.API_HOST}/api` : 'http://swapi.co/api'


const schema = gqlTools.makeExecutableSchema({ typeDefs, resolvers })

function graphqlOptions() {
  const swapiConnector = new SWAPIConnector(apiHost)

  return {
      pretty: true,
      schema,
      context: {
          film: new FilmModel(swapiConnector),
          vehicle: new VehicleModel(swapiConnector),
          people: new PeopleModel(swapiConnector),
          planet: new PlanetModel(swapiConnector),
          starship: new StarshipModel(swapiConnector),
          species: new SpeciesModel(swapiConnector),
          patient: new PatientModel(swapiConnector),

      },
  }
}

startExpress(graphqlOptions)
