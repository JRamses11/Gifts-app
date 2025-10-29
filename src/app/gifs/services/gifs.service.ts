import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import type { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
    private http =inject(HttpClient);

    trendingGifs= signal<Gif[]>([]);
    trendingGifsLoading= signal(true);

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
    }).subscribe((res) => {
        const gifs= GifMapper.mapGiphyItemToGifArray(res.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
        console.log(gifs);
    });
  }

    searchGifs(query: string){
    return this.http.get<GiphyResponse>(`${ environment.giphyUrl}/gifs/search`,{
        params: {
            api_key: environment.apiKeyGifs,
            q: query,
            limit: '25',
        }
    }).pipe(
        map(({data}) => data),
        map((items) => GifMapper.mapGiphyItemToGifArray(items)
    ));
    // TODO HISTORIAL
    // }).subscribe((res) => {
    //     const gifs= GifMapper.mapGiphyItemToGifArray(res.data);
    //     console.log({search: gifs});
    // });
  }
}