import { Injectable, Inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { type Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private readonly apiUrl = 'https://localhost:7206/'

  constructor (@Inject(HttpClient) private readonly http: HttpClient) {}

  login (username: string, password: string): Observable<any> {
    const body = { username, password }
    return this.http.post(`${this.apiUrl}/login`, body)
  }
}
