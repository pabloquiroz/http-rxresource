import { HttpClient } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop'
import { inject, Injectable } from '@angular/core';
import { MagicCardResponse } from '../models/magic-card.interface';

@Injectable({
  providedIn: 'root'
})
export class MagicApiService {
  private readonly apiUrl = 'https://api.magicthegathering.io/v1/';
  private readonly cardsUrl = `${this.apiUrl}cards/`;
  httpClient = inject(HttpClient);



  cards = rxResource({
    loader: () => this.httpClient.get<MagicCardResponse>(this.cardsUrl),
  });
}
