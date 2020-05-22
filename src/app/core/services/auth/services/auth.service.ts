import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { LoaderService } from 'src/app/shared/services/loader-service/loader-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private loaderService: LoaderService) { }

  public login(username: string, password: string): Observable<boolean> {
    this.loaderService.show();
    return of(true).pipe(delay(3000), tap(() => this.loaderService.hide()));
  }
}
