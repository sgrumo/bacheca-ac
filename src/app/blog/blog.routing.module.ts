import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleComponent } from './components/article/article.component';
import { BlogComponent } from './components/blog/blog.component';
import { ArticleResolver } from './services/article.resolver';
import { BlogResolver } from './services/blog.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    resolve: { articles: BlogResolver },
    component: BlogComponent
  },
  {
    path: 'new-article',
    pathMatch: 'full',
    component: ArticleFormComponent
  },
  {
    path: ':id',
    resolve: { article: ArticleResolver },
    component: ArticleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
