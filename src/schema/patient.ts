export default `

type Patient implements Node {
  identifier: [String]
  active: Boolean
  name: [String]
  telecom: [String]
  gender: String
  birthDate: String
  decreased: Boolean
  address: [String]
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
}
`
