import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'  })
};
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
   
  doGET(){
    let url="http://localhost:3000/users";
    return this.http.get(url);
  }
  doGETS(name){
    let uname=name
    let url="http://localhost:3000/users"+uname;
    return this.http.get(url);
  }
  doPOST(user){
      let body=JSON.stringify(user);
    let url="http://localhost:3000/users";
    return this.http.post(url,body,httpOptions);
  }
  doUPDATE(body){
    let id=body._id;
    let name=body.name;
    let email=body.email;
    let body1=JSON.stringify(body);
    let url="http://localhost:3000/users";
  return this.http.put(url,body1,httpOptions);
}
  doDELETE(name){
    let uname=name;
  let url="http://localhost:3000/users"+uname;
 return this.http.delete(url,httpOptions);
}
  }
