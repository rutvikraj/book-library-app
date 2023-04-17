import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';
import { Book } from '../book-response.model';

@Component({
  selector: 'app-trending-subjects',
  templateUrl: './trending-subjects.component.html',
  styleUrls: ['./trending-subjects.component.css']
})
export class TrendingSubjectsComponent implements OnInit {
  subjectName: string = '';
  allBooks: Book[] = [];
  isLoading = true;
  constructor(private route: ActivatedRoute, private apiService: ApiService
  ) { }

  getAllBooks() {
    this.apiService.getBooks(this.subjectName).subscribe((data: any) => {
      this.allBooks = data?.works;
      this.isLoading = false;
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.subjectName = params.get('name') || '';
      this.isLoading = true;
      this.getAllBooks();
    });

  }
}
