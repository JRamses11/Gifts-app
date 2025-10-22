import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from '../../components/side-menu/side-menu';

@Component({
  selector: 'app-dashboard-pages',
  standalone: true,
  imports: [RouterOutlet, SideMenu],
  templateUrl: './dashboard-pages.html',
  styleUrls: ['./dashboard-pages.css']
})
export default class DashboardPages {

}
