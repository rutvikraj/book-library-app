import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books: any[] = [];
  searchTerm: string = '';
  count = 10;
  p = 1;
  currentPage: number = 1;
  totalPages: number = 1;
  totalBooksFound: any;

  trendingSubjects: Array<any> = [
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Harry Potter' },
    { name: 'Crypto' },
  ];
  
  constructor(private apiService: ApiService) { }

  search() {
    this.apiService.searchBooks(this.searchTerm,this.currentPage,10).subscribe((data: any) => {
      this.books = data.docs;
      this.totalBooksFound = data.numFound;
      this.totalPages = Math.ceil(data.numFound / 10);
    });
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.search();
    }
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.search();
    }
  }

}
