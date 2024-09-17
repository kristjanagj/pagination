import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl =
    'https://api.themoviedb.org/3/search/movie?query=batman&api_key=acd9f928cbd7f0a07860670377c1fad4'; // Replace with your API endpoint
  private apiKey = 'acd9f928cbd7f0a07860670377c1fad4';

  constructor(private http: HttpClient) {}

  getData(page: number, size: number): Observable<any> {
    const params = { page: page.toString(), size: size.toString() };
    return this.http.get<any>(this.apiUrl, { params });
  }
}
