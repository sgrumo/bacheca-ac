import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogRoutingModule } from './blog.routing.module';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleListItemComponent } from './components/article-list-item/article-list-item.component';
import { ArticleComponent } from './components/article/article.component';
import { BlogComponent } from './components/blog/blog.component';



@NgModule({
  declarations: [BlogComponent, ArticleComponent, ArticleFormComponent, ArticleListItemComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BlogModule { }
