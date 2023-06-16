import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}  from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PopService {


  httpOp : any;

  constructor(private http:HttpClient) { }

getEmployees():Observable<any> {
return this.http.get("http://nhsappchna6210.cscidp.net/rdb/api/employee");
}
getDetails(id:number):Observable<any>{
  return this.http.get("http://nhsappchna6210.cscidp.net/rdb/api/employee"+id);
}
postEmployees(obj:any):Observable<any>{

 this.httpOp= new HttpHeaders({
'Content-Type':'application.json',
 })
 return this.http.post("http://nhsappchna6210.cscidp.net/rdb/api/employee",obj,this.httpOp);
 }
  httpOptions(arg0: string, obj: any, httpOptions: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
getdesigination(domaincode:string){
  return this.http.get("http://nhsappchna6210.cscidp.net/rdb/api/ValueSet?DomainCode="+domaincode)
}

}
