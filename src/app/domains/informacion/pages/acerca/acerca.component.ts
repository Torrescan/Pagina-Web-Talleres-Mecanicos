import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-acerca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.css'
})
export class AcercaComponent {
img = 'https://us.123rf.com/450wm/newcox/newcox1902/newcox190200515/117815612-icono-de-ingeniero.jpg?ver=6';
}
