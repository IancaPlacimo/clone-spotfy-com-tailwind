import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playlists',
  imports: [],
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.scss'
})
export class PlaylistsComponent {
  @Input() nome: string = '';
  @Input() desc: string = '';
  @Input() img: string = '';

}
