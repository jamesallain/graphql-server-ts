export default `

type Species implements Node {
  name: String
  classification: String
  designation: String
  averageHeight: Float
  averageLifespan: Int
  eyeColors: [String]
  hairColors: [String]
  skinColors: [String]
  language: String
  homeworld: Planet
  people: [Person]
  films: [Film]
  created: String
  edited: String
  id: ID!
}
`
