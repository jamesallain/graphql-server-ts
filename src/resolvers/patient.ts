const id = (patient) => patient.url
//const patientID = (patient) => patient.id
// const openingCrawl = (patient) => patient.opening_crawl
// const releaseDate = (patient) => patient.release_date
// const species = (patient, _, context) => context.species.getConnections(patient.species)
// const starships = (patient, _, context) => context.starship.getConnections(patient.starships)
// const vehicles = (patient, _, context) => context.vehicle.getConnections(patient.vehicles)
// const characters = (patient, _, context) => context.people.getConnections(patient.characters)
// const planets = (patient, _, context) => context.planet.getConnections(patient.planets)

export default {
  Patient: {
    id,
   // patientID,
    // openingCrawl,
    // releaseDate,
    // species,
    // starships,
    // vehicles,
    // characters,
    // planets,
  },
}
