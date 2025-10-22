import { Component } from '@angular/core';
import { GifsSideMenuOptions } from '../side-menu-options/gifs-side-menu-options';
import { GifsSideMenuHeader } from '../side-menu-header/gifs-side-menu-header';


@Component({
  selector: 'app-side-menu',
  imports: [GifsSideMenuHeader, GifsSideMenuOptions],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css'
})
export class SideMenu {

}
