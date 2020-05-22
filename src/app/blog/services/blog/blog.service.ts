import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Article } from 'src/app/models/article.model';
import { LoaderService } from 'src/app/shared/services/loader-service/loader-service.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient, private loaderService: LoaderService) { }

  private articles: Article[] = [
    {
      author: 'Giacomo Biancoli',
      title: 'Il mio pube in fiamme!',
      text: 'Topping chocolate cheesecake chocolate topping icing danish. Pastry topping halvah candy canes jelly\.\
      Cake gummi bears brownie cheesecake dessert chocolate cake soufflé.Topping sweet icing cupcake chocolate lemon drops. \
      Wafer candy canes toffee lollipop chocolate cake macaroon tootsie roll liquorice.Apple pie pastry candy canes toffee.Toffee \
      brownie soufflé toffee ice cream tart.Liquorice pudding brownie.Jujubes macaroon dessert tiramisu biscuit wafer jelly beans powder \
      pastry.Gummi bears tootsie roll sweet carrot cake candy canes oat cake brownie\.\
      Chocolate cake dessert sweet roll.Caramels sweet roll pastry.Bear claw soufflé croissant cheesecake jujubes pie.',
      photo: 'https://i.imgur.com/ToCqDl4.jpg',
      date: new Date(),
      id: '1',
    },
    {
      author: 'Matteo Zauli',
      title: 'Come disimparare la R',
      text: 'Marshmallow chocolate bar halvah jujubes halvah pudding candy topping. Macaroon pastry icing bonbon chocolate bar \
      fruitcake croissant sweet. Cotton candy sesame snaps cupcake dragée tootsie roll toffee jelly beans caramels. \
      Sesame snaps sweet roll jelly-o brownie apple pie tootsie roll gummi bears. Caramels chupa chups lemon drops danish \
      croissant carrot cake ice cream sugar plum. Bonbon jelly-o tootsie roll carrot cake lemon drops. Ice cream carrot cake \
      lemon drops bonbon gummi bears carrot cake. Dessert bear claw croissant pastry sesame snaps muffin candy toffee toffee. \
      Sweet gummi bears cookie cookie jelly-o pastry powder cake candy. Jelly-o ice cream lemon drops biscuit macaroon gingerbread \
      cupcake chocolate bar sesame snaps. Cookie pudding pastry. Sweet roll dragée sweet roll chocolate soufflé tart wafer sweet roll. \
      Chocolate bar bear claw jujubes jelly tiramisu.',
      photo: 'https://i.imgur.com/Y3socWc.jpg',
      date: new Date(),
      id: '2',
    },
    {
      author: 'Maria Giulia Gambetti',
      title: 'Come usare le mani',
      text: 'Topping chocolate cheesecake chocolate topping icing danish. Pastry topping halvah candy canes jelly\.\
      Cake gummi bears brownie cheesecake dessert chocolate cake soufflé.Topping sweet icing cupcake chocolate lemon drops. \
      Wafer candy canes toffee lollipop chocolate cake macaroon tootsie roll liquorice.Apple pie pastry candy canes toffee. \
      Toffee brownie soufflé toffee ice cream tart.Liquorice pudding brownie.Jujubes macaroon dessert tiramisu biscuit wafer jelly beans \
      powder pastry.Gummi bears tootsie roll sweet carrot cake candy canes oat cake brownie\.\
      Chocolate cake dessert sweet roll.Caramels sweet roll pastry.Bear claw soufflé croissant cheesecake jujubes pie.',
      photo: 'https://i.imgur.com/PdyYBQv.jpg',
      date: new Date(),
      id: '3',
    },
    {
      author: 'Giacomo Biancoli',
      title: 'Mille modi per cucinare gli aspargi',
      text: 'Tootsie roll cotton candy sweet roll halvah chocolate cake wafer. Icing caramels dessert. \
      Chocolate cake wafer marzipan croissant cotton candy. Apple pie soufflé fruitcake fruitcake icing. \
      Jelly-o donut pie gummies sesame snaps. Cheesecake sweet roll liquorice chocolate cake candy. \
      Sesame snaps sweet halvah donut jelly soufflé jelly-o gummi bears. Sweet roll pie caramels jelly ice cream pie wafer.\
       Chocolate cake tart ice cream. Cake croissant chocolate cake dessert powder bonbon cheesecake. Dragée marzipan caramels.\
        Marshmallow croissant sugar plum cake cotton candy gummies. Tart ice cream biscuit lemon drops halvah donut brownie chocolate.',
      photo: 'https://i.imgur.com/Y3socWc.jpg',
      date: new Date(),
      id: '4',
    }
  ];

  getArticles(): Observable<Article[]> {
    return of(this.articles).pipe(delay(1500));
  }

  getArticle(articleId: string): Observable<Article> {
    return of(this.articles.find(article => article.id === articleId)).pipe(delay(1500));
  }

  postArticle(article: any): Observable<boolean> {
    this.loaderService.show();
    return of(true).pipe(delay(1500), tap(() => this.loaderService.hide()));
  }
}
