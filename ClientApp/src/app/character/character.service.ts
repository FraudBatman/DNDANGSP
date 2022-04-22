import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject, Observable, tap, BehaviorSubject } from "rxjs";
import { ICharacter } from "../../models/character";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = "DNDData/example"

  public character$ = new BehaviorSubject<ICharacter>({} as any);
  public charLoaded = false;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  public getCharacter(url = this.baseUrl + this.apiUrl): void {
    if (!this.charLoaded) {
      this.http.get<ICharacter>(url).subscribe(char => {
        this.character$.next(char);
        this.charLoaded = true;
        // console.log('Character', JSON.stringify(char))
      })
    }
  }

  public getObservable(): Observable<ICharacter> {
    return this.http.get<ICharacter>(this.apiUrl).pipe(
      tap(data => console.log('Character', JSON.stringify(data)),
      )
    );
  }
}
