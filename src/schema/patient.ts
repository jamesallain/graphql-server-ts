export default `

type Patient implements Node {
  identifier: [Identifier]
  active: Boolean
  name: [String]
  telecom: [ContactPoint]
  gender: String
  birthDate: String
  decreased: Boolean
  address: [Address]
  maritalStatus: [String]
  multipleBirht: Int
  photo: String
  contact: [String]
  animal: [String]
  communication: [String]
  generalPractioner: [String]
  managingOrganization: [String]
  link: [String]
  id: ID!
  hi: String
}
`

//  id: ID!
