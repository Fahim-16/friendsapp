import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrndService {

  constructor(private http:HttpClient) { }

  frndview=()=>{

    return this.http.get("https://dummyapifriends.herokuapp.com/view")
  }
}
