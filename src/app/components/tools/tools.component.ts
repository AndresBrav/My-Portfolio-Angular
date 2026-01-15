import { Component } from '@angular/core';
import { CardToolsComponent } from '../card-tools/card-tools.component';

@Component({
  selector: 'app-tools',
  imports: [CardToolsComponent],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css'
})
export class ToolsComponent {
  languages = [
    { title: 'C#', img: '/images/C logo.png' },
    { title: 'Javascript', img: '/images/javascript logo.png' },
    { title: 'Java', img: '/images/java logo.svg' },
    { title: 'Python', img: '/images/python logo.png' },
    { title: 'Typescript', img: '/images/typescript logo.png' }
  ];


}
