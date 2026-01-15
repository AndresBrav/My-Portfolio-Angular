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

  frontend = [
    { title: 'Angular', img: '/images/angular logo svg.png' },
    { title: 'React', img: '/images/React.png' },
    { title: 'Next js', img: '/images/next js logo.svg' },
    { title: 'HTML', img: '/images/htmllogo.webp' },
    { title: 'CSS', img: '/images/csslogo.png' }
  ];

  backend = [
    { title: '.NET', img: '/images/NET.png' },
    { title: 'Laravel', img: '/images/laravel.png' },
    { title: 'Node js', img: '/images/node logo.svg' },
    { title: 'Express js', img: '/images/express logo.png' },
  ];

  databases = [
    { title: 'MySQL', img: '/images/mysql logo.png' },
    { title: 'PostgreSQL', img: '/images/postgreslogo.png' },
  ];

  tools = [
    { title: 'Ubuntu', img: '/images/ubuntu logo.png' },
    { title: 'Docker', img: '/images/docker logo.png' },
    { title: 'Git', img: '/images/git logo.png' },
    { title: 'Github', img: '/images/github logo.png' },
    { title: 'Postman', img: '/images/postman logo.png' },
    { title: 'DBngin', img: '/images/dbngin.png' },
    { title: 'Xampp', img: '/images/xampp logo.svg' },
    { title: 'Xampp', img: '/images/figma logo.png' },
  ]
}
