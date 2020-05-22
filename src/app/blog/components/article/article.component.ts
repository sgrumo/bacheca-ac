import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'ac-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article$: Observable<Article> = this.route.data.pipe(map((data: { article: Article }) => data.article));

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
