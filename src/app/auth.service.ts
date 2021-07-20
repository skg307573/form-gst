import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

getUsers():Observable<any>{
 return this.http.get(environment.url)
}
postUser(data):Observable<any>{
  return this.http.post("", data);
 }
}
