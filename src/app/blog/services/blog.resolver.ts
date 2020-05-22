import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Article } from 'src/app/models/article.model';
import { LoaderService } from 'src/app/shared/services/loader-service/loader-service.service';
import { BlogService } from './blog/blog.service';

@Injectable({
  providedIn: 'root'
})
export class BlogResolver implements Resolve<Article[]> {
  constructor(private blogService: BlogService, private loaderService: LoaderService) { }

  resolve(): Observable<Article[]> {
    this.loaderService.show();
    return this.blogService.getArticles().pipe(tap(() => this.loaderService.hide()));
  }
}
