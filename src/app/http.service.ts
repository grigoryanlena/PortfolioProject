import {Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  public getData(urlPart: string): Observable<any> {
    return this.http.get<any>(`${urlPart}`);
  }
  public getDataByID(path: string, id: string): Observable<any> {
    return this.http.get<any>(`${path}/${id}`);
  }
}
