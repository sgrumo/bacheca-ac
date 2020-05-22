import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../../services/loader-service/loader-service.service';

@Component({
  selector: 'ac-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  isLoading: Observable<boolean> = this.loaderService.isLoading$;
  constructor(private loaderService: LoaderService) {
  }

}
