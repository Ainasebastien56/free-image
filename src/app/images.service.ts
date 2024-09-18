import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private apiUrl = 'https://pixabay.com/api';
  private apiKey = '45947396-edf0fac54e6e31874db567c4c';

  constructor(private httpClient : HttpClient) { }


  getImages(order='latest', page= 12):Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/?key=${this.apiKey}&order=${order}&per_page=${page}`)
  }

  getSearchImages(searchQuery:string, color='transparent', category:string, orientation:string):Observable<any>{
    return this.httpClient.get<any>(`${this.apiUrl}/?key=${this.apiKey}&q=${encodeURIComponent(searchQuery)}&colors=${color}&category=${category}&orientation=${orientation}&image_type=photo`)
  }


}
