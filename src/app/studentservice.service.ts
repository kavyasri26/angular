import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{ Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  constructor(private http:HttpClient) { }
  public getData(): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:3000/Student`);
  }
  public postData(value: any): Observable<any[]>{
    return this.http.post<any[]>(`http://localhost:3000/Student`,value)
  }
  public putData(value: any,StudentID: any): Observable<any[]>{
    return this.http.put<any[]>(`http://localhost:3000/Student/${StudentID}`,value)
  }
  public deleteData(StudentID: any): Observable<any[]>{
    return this.http.delete<any[]>(`http://localhost:3000/Student/${StudentID}`)
  }
}
