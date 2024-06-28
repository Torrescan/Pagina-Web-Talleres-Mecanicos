import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,RouterLinkWithHref],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  img = 'https://us.123rf.com/450wm/newcox/newcox1902/newcox190200515/117815612-icono-de-ingeniero.jpg?ver=6';
  hideSideMenu = signal(false);
  toogleSidemenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }
}

