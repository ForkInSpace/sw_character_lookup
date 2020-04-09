import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../environments/environment';
import { ACharacter } from './characters.interface';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private URL: string = environment.apiUrl;
  private localUrl: string = environment.localUrl;

  public entireList = [];

  constructor(private http: HttpClient) {}

  getMockCharacters(): Observable<ACharacter[]> {
    return this.http.get<ACharacter[]>(this.localUrl);
  }

  // getAllCharacters = async (pageNo = 8) => {
  //   let actualUrl = this.URL + `?page=${pageNo}`;
  //   let apiResults = await fetch(actualUrl)
  //   .then(resp => {
  //       return resp.json();
  //   })
  //
  //   return apiResults.results;
  // }
  //
  // getEntireList = async (pageNo = 8) => {
  //   var results = await this.getAllCharacters(pageNo);
  //   console.log("Retreiving data from API for page : " + pageNo);
  //   if (results && results.length>0) {
  //     return results.concat(await this.getEntireList(pageNo+1));
  //   } else {
  //     return results;
  //   }
  // };
  //
  //
  // getCharacters = (async () => {
  //     return this.entireList = await this.getEntireList();
  // })();
  //
  // mappedNames = () => {
  //   return this.entireList.map(item => item.name);
  // }
}
