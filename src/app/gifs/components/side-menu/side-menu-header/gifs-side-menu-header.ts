import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-gifs-side-menu-header',
  imports: [],
  templateUrl: './gifs-side-menu-header.html',
  styleUrls: ['./gifs-side-menu-header.css']
})
export class GifsSideMenuHeader {
  envs= environment;
}
