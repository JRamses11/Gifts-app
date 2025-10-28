import { Component } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';

@Component({
  selector: 'app-trending-pages',
  imports: [GifList],
  templateUrl: './trending-pages.html',
  styleUrl: './trending-pages.css'
})
export default class TrendingPages {

}
