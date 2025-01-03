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
  pageSize: number = 1; // Items per page
  totalPages: number = 10;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  // loadData() {
  //   this.dataService.getData(this.currentPage, this.pageSize).subscribe(response => {
  //     this.data = response.results; // Adjust based on your API response structure
  //     this.totalPages = response.totalPages; // Adjust based on your API response structure
  //   });
  // }

  loadData() {
    this.dataService.getData(this.currentPage, this.pageSize).subscribe(
      response => {
        console.log('API Response:', response);
        this.data = response.results; // Adjust based on your API structure
        if (response.totalItems !== undefined) {
          this.totalPages = Math.ceil(response.totalItems / this.pageSize);
        } else {
          console.error('totalItems or totalPages is missing in the API response');
        }
      },
      error => {
        console.error('Error loading data:', error);
      }
    );
  }
  
  goToPage(page: number) {
    this.currentPage = page;
    this.loadData();
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadData();
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadData();
    } 
  } 
}

