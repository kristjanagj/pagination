import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl =
    'https://api.themoviedb.org/3/search/movie?query=batman&api_key=acd9f928cbd7f0a07860670377c1fad4'; 
  private apiKey = 'acd9f928cbd7f0a07860670377c1fad4';

  constructor(private http: HttpClient) {}

  getData(page: number, size: number): Observable<any> {
    const params = { page: page.toString(), size: size.toString() };
    return this.http.get<any>(this.apiUrl, { params });
  }
  // getData(page: number, pageSize: number): Observable<any> {
  //   const params = new HttpParams()
  //     .set('page', page.toString())
  //     .set('pageSize', pageSize.toString());
  //   return this.http.get<any>('https://api.themoviedb.org/3/search/movie?query=batman&api_key=acd9f928cbd7f0a07860670377c1fad4', { params });
  // }
  
}
