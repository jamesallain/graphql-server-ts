import BaseModel from './base'

export default class Patient extends BaseModel {
//$ curl https://sb-fhir-dstu2.smarthealthit.org/api/smartdstu2/open/Patient/SMART-1551992 \

  public getPatients(offset?: number, limit?: number) {
    return this.connector.fetchPage('/Patient/SMART-1551992', offset, limit)
  }
//Patient/Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB
  // public getPatients(offset?: number, limit?: number) {
  //   return this.connector.fetchPage('/patients/', offset, limit)
  // }

  public getPatient(id: string) {
    const url = `/Patient/${id}`
    return this.connector.fetch(url)
  }

  // public getPatient(id: string, patientID: number) {
  //   const url = id || `/patients/${patientID}/`
  //   return this.connector.fetch(url)
  // }
}
