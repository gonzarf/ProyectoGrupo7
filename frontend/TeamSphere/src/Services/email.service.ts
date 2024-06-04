import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:8081/email/send';

  constructor(private http: HttpClient) { }

  sendEmail(emailRequest: any): Observable<any> {
    return this.http.post(this.apiUrl, emailRequest, { responseType: 'text' });
  }
}