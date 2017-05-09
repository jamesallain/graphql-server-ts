import BaseModel from './base'

export default class Patient extends BaseModel {

  public getPatients(offset?: number, limit?: number) {
    return this.connector.fetchPage('/patients/', offset, limit)
  }

  public getPatient(id: string, patientID: number) {
    const url = id || `/patients/${patientID}/`
    return this.connector.fetch(url)
  }

  // public getPatient(id: string, patientID: number) {
  //   const url = id || `/patients/${patientID}/`
  //   return this.connector.fetch(url)
  // }
}
