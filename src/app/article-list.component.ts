import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Article {
  title: string;
  summary: string;
}

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: []
})
export class ArticleListComponent implements OnInit {
  state: Article[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getApi();
  }

  async getApi() {
    try {
      const data = await this.http.get<Article[]>('https://api.spaceflightnewsapi.net/v4/articles/?format=json').toPromise();
      this.state = data.slice(0, 6);
    } catch (error) {
      console.error(error);
    }
  }
}
