import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { PlaylistsComponent } from "../playlists/playlists.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, PlaylistsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
