import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getDocumentTypes() { 
    return this.http.get(environment.apiUrl + '/qa/signup/documentTypes?apiKey=030106');
  }

  getGenders() { 
    return this.http.get(environment.apiUrl + '/qa/signup/genders?apiKey=030106');
  }
  
}
