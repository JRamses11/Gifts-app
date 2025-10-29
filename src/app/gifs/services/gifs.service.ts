import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
    private http =inject(HttpClient);

    constructor() {
        this.loadTrendingGifs();
     }


    loadTrendingGifs(){
    // Implementation for loading trending GIFs
    this.http.get<GiphyResponse>(`${ environment.giphyUrl}/gifs/trending`,{
        params: {
            api_key: environment.apiKeyGifs,
            limit: '25',
        }
    });
  }
}