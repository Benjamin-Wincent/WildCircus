import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getArtists() {
    return this.http.get(`${this.url}/artistes`)
  }
​
  deleteArtist(id) {
    return this.http.delete(`${this.url}/artistes/${id}`)
  }
​
  createArtist(artist) {
    const art = artist
    delete art.id
    return this.http.post(
      `${this.url}/artistes`,
      art
    )
  }
​
  updateArtist(artist) {
    return this.http.put(
      `${this.url}/artistes/${artist.id}`,
      artist
    ) 
  }
}