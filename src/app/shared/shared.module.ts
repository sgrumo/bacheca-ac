import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, LoaderComponent],
  exports: [FooterComponent, HeaderComponent, LoaderComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
