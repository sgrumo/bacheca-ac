import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'ac-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleListItemComponent implements OnInit {
  @Input() article: Article;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(['/blog', this.article.id]);
  }

}
