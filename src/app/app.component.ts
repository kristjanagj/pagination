import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginatedListComponent } from "./pagination-list/pagination-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaginatedListComponent],
  template: '<app-pagination-list></app-pagination-list>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-pagination';
}
