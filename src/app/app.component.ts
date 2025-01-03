import { Component } from '@angular/core';
import { PaginatedListComponent } from "./pagination-list/pagination-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PaginatedListComponent],
  template: `
    <h1>{{ title }}</h1>
    <app-pagination-list></app-pagination-list>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'API Pagination';
}

