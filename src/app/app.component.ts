import { Component } from '@angular/core';
import { PaginatedListComponent } from "./pagination-list/pagination-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PaginatedListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'API Pagination';
}

