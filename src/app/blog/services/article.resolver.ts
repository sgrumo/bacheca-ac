import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Article } from 'src/app/models/article.model';
import { LoaderService } from 'src/app/shared/services/loader-service/loader-service.service';
import { BlogService } from './blog/blog.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleResolver implements Resolve<Article> {
  constructor(private blogService: BlogService, private loaderService: LoaderService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Article> {
    const articleId = route.paramMap.get('id');
    this.loaderService.show();
    return this.blogService.getArticle(articleId).pipe(tap(() => this.loaderService.hide()));
  }
}
