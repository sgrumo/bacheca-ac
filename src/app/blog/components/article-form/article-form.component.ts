import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BlogService } from '../../services/blog/blog.service';

@Component({
  selector: 'ac-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent {

  formGroup: FormGroup;
  private postArticleSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private blogService: BlogService, private router: Router) {
    this.formGroup = this.formBuilder.group({ text: '', file: '' });
  }

  onSubmit(value: any) {
    this.postArticleSubscription = this.blogService.postArticle(value).pipe(tap(() => this.router.navigate(['/blog'])
    )).subscribe();
  }


}
