import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kanye-West Quote';

  kanyeQuote: string;
  favoriteList: string[] = [];
  personalQuote: string;
  personalQuoteList: string[] = [];

  constructor(
    private httpService: ApiService
  ) {
    this.kanyeQuote = 'shut the f*ck up';
    this.personalQuote = '';
  }

  getKanyeQuote() {
    this.httpService.getQuotesFromKanye().subscribe((res: any) => {
      // console.log('for lols', res)
      this.kanyeQuote = res.quote
    })
  }

  addFavorite() {
    if (this.favoriteList.indexOf(this.kanyeQuote) > -1) {
      alert("f*ck you, you can't duplicate my quotes !!!")
    } else {
      this.favoriteList.push(this.kanyeQuote)
    }
  }

  submitQuote() {
    if (this.personalQuoteList.indexOf(this.personalQuote) > -1) {
      alert("f*ck you, you can't duplicate my quotes !!!")
    } else {
      this.personalQuoteList.push(this.personalQuote)
    }
  }
}
