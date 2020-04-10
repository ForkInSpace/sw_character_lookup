import { Component, OnInit, EventEmitter, Output, Pipe, PipeTransform } from '@angular/core';

import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css'],
  providers: [CharactersService]
})
export class SideComponent implements OnInit {
  searchWord: string;
  query: string;
  public characters = [];

  constructor(private _characterService: CharactersService){}

  ngOnInit() {
    this._characterService.getMockCharacters()
      .subscribe(data => this.characters = data);
    // this.characters = this._characterService.getCharacters;
  }

  filterList() {
    let word = this.searchWord;
    this.characters = this.characters.filter((c) => {
      console.log(c.name.includes(word));
      return c.name.includes(word);
    });
  }

  @Output() emitCharacter: EventEmitter<any> = new EventEmitter();

  sendData(data){
    this.emitCharacter.emit(data);
  }

}
