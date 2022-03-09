import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from './api';
import { Observable } from 'rxjs';
import { Characters } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root',
})
export class BreakingBadService {
  constructor(private HTTP: HttpClient) {}

  getAllCharacters(): Observable<Characters[]> {
    return this.HTTP.get<any>(`${URL}/characters`);
  }

  getAllCharactersOne(id: number): Observable<Characters[]> {
    return this.HTTP.get<any>(`${URL}/characters/${id}`);
  }

  getAllEpisodes(): Observable<any[]> {
    return this.HTTP.get<any>(`${URL}/episodes`);
  }
}
