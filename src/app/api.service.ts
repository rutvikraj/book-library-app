import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookResponse } from './book-response.model';
import { HttpRequestOptions } from './http-request-options.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'https://openlibrary.org';

  constructor(private http: HttpClient) { }

  get<T>(url: string, config?: HttpRequestOptions): Observable<T> {
    const apiPath = `${this.baseUrl}${url}`;
    return this.http.get<T>(apiPath, config);
  }

  getBooks(subjectName:string): Observable<BookResponse> {
    const limit = 10;
    return this.get(`/subjects/${subjectName.toLowerCase().split(' ').join('_')}.json?limit=${limit}`);
  }

  searchBooks(query: string, page: number, limit: number) {
    const startIndex = (page - 1) * limit;
    const url = `${this.baseUrl}/search.json?title=${query}&author=${query}&limit=${limit}&offset=${startIndex}`;

    return this.http.get(url);
  }
}
