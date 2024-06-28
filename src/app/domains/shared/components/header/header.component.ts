import { CommonModule } from '@angular/common';
import { Component,signal } from '@angular/core';
import { RouterLinkWithHref,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLinkWithHref,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  image = 'https://cdn-icons-png.flaticon.com/128/8473/8473707.png';
  imagetaller =signal('https://cdn-icons-png.flaticon.com/128/81/81836.png');
  toogleSidemenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }
}
