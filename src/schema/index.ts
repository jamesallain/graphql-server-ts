import film from './film'
import people from './people'
import planet from './planet'
import root from './root'
import species from './species'
import starship from './starship'
import vehicle from './vehicle'

import patient from './patient'


import address from './datatypes/address'
import codeableConcept from './datatypes/codeableConcept'
import contactPoint from './datatypes/contactPoint'
import coding from './datatypes/coding'
import identifer from './datatypes/identifier'
import period from './datatypes/period'
import reference from './datatypes/reference'




const schema = `
  schema {
    query: RootQuery
  }
`

export default [
  address,
  codeableConcept,
  contactPoint,
  coding,
  identifer,
  period,
  reference,
  patient,
  film,
  people,
  planet,
  root,
  species,
  starship,
  vehicle,
  schema,
]
