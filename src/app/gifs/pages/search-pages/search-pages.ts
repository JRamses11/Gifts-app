import { Component , inject, signal} from '@angular/core';
import {GifList} from '../../components/gif-list/gif-list';
import { GifsService } from '../../services/gifs.service';
import type { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-pages',
  imports: [GifList],
  templateUrl: './search-pages.html',
  styleUrl: './search-pages.css'
})
export default class SearchPages {

    gifservice= inject(GifsService);
    gifs= signal<Gif[]>([]);


    onSearch(query: string){
        this.gifservice.searchGifs(query).subscribe((res) => {
            this.gifs.set(res);
        });
    }
}
