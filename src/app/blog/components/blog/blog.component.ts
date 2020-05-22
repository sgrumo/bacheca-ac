import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'ac-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  articles$: Observable<Article[]> = this.route.data.pipe(map((data: { articles: Article[] }) => data.articles));

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
