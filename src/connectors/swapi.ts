import * as request from 'request'
//import DataLoader from 'dataloader'
const DataLoader = require('dataloader')

export default class SWAPIConnector {
//$.ajax({ url: 'foo/bar', headers: { 'x-some-other-header': 'some value' } });
 // private headers = { 'Content-Type': 'application/json' };
 // public url_all = {};
 //http://nprogram.azurewebsites.net/Patient/1?_format=json


  public loader
  private rootURL: string
  constructor(rootURL: string) {
    this.rootURL = rootURL
    this.loader = new DataLoader((urls) => {
      const promises = urls.map((url) => {
        return this.fetch(url)
      })
      return Promise.all(promises)
    }, {batch: false})
  }

  public fetch(resource: string) {
    console.log(resource)
    let url = resource.indexOf(this.rootURL) === 0 ? resource : this.rootURL + resource
    url = url + '?_format=json';
    //const url_all = { 'method': 'GET', 'url': url + '?_format=json',  headers: { 'Content-Type': 'application/json' } }
    return new Promise<any>((resolve, reject) => {
      console.log(`fetch: ${url}`)
      request.get(url, (err, resp, body) => {
        console.log(`fetch: ${url} completed`)
        console.log("resp:",resp)
        console.log("body:",body)
        err ? reject(err) : resolve(JSON.parse(body))
      })
    })
  }

  public fetchPage(resource: string, offset?: number, limit?: number) {
    let results = []
    let index = 0
    const size = limit || 0
    console.log(resource)

    function pagination(pageURL: string) {
      return new Promise<any>((resolve, reject) => {
        this.fetch(pageURL).then((data) => {
          // fast forward until offset is reached
          console.log(data)
          if (offset && results.length === 0) {
            if (index + data.results.length > offset) {
              results = data.results.slice(offset - index)
            }
            if (data.next) {
              index = index + data.results.length
              pagination.call(this, data.next).then(resolve)
            } else {
              resolve(results)
            }
          } else {
            if (size > 0 && size - results.length - data.results.length < 0) {
              results = results.concat(data.results.slice(0, size - results.length))
            } else {
              results = results.concat(data.results)
            }
            if (data.next && (size === 0 || size - results.length > 0)) {
              pagination.call(this, data.next).then(resolve)
            } else {
              resolve(results)
            }
          }
        })
      })
    }

    return pagination.call(this, resource)
  }
}
