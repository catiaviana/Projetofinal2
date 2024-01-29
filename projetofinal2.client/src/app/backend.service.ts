import { Injectable, Inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { type Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private readonly apiUrl = 'http://localhost:7206' // Substitua pela URL real do seu servidor backend

  constructor (@Inject(HttpClient) private readonly http: HttpClient) {}

  getData (): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/endpoint`)
  }
}
