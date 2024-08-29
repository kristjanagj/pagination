import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination-list.component.html',
  styleUrl: './pagination-list.component.css'
})

export class PaginatedListComponent implements OnInit {
  data: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  pageSize: number = 10; // Items per page

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getData(this.currentPage, this.pageSize).subscribe(response => {
      this.data = response.items; // Adjust based on your API response structure
      this.totalPages = response.totalPages; // Adjust based on your API response structure
    });
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.loadData();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadData();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadData();
    }
  }
}

