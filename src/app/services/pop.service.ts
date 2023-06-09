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
return this.http.get("https://myapi-b7ad2-default-rtdb.asia-southeast1.firebasedatabase.app/data.json");
}
getDetails(id:number):Observable<any>{
  return this.http.get("https://myapi-b7ad2-default-rtdb.asia-southeast1.firebasedatabase.app/data.json"+id);
}
postEmployees(obj:any):Observable<any>{

 this.httpOp= new HttpHeaders({
'Content-Type':'application.json',
 })
 return this.http.post("https://myapi-b7ad2-default-rtdb.asia-southeast1.firebasedatabase.app/data.json",obj,this.httpOp);
 }
  httpOptions(arg0: string, obj: any, httpOptions: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
