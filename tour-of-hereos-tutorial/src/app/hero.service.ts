import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs'; 
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes'; //URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService    
    ) { }

    /** GET heroes from the server */
    /**
     O operador RxJS tap()habilita essa capacidade observando os valores observáveis, fazendo algo com esses valores e passando-os adiante. A tap() chamada de retorno não acessa os valores em si. O tap() registra a operação.
     */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(tap(_ => this.log('Heróis pesquisados')), catchError(this.handleError<Hero[]>('getHeroes',[]))
    );
    /*this.messageService.add('HeroService: Herois pesquisados!');*/  
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(tap(_ => this.log(`Herói pesquisado ID=${id}`)), catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(tap(_ => this.log(`Atualizado Herói id=${hero.id}`)), catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(tap((newHero: Hero) => this.log(`Herói adicionado W/id=${newHero.id}`)), catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(tap(_ => this.log(`Herói deletado ID=${id}`)), catchError(this.handleError<Hero>('deleteHero'))
    );
   
  }
  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if(!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(tap(x => x.length ? this.log(`Encontrado Heróis compatíveis "${term}"`): this.log(`Heróis não enconrado "${term}"`)), catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  //parâmetro de tipo "T" para retornar o valor seguro como o tipo que o aplicativo espera
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);

    };
  }
      



}
