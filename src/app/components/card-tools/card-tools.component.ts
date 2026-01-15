import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-tools',
  imports: [],
  templateUrl: './card-tools.component.html',
  styleUrl: './card-tools.component.css'
})
export class CardToolsComponent {
  @Input() title!: string;
  @Input() img!: string;
}
