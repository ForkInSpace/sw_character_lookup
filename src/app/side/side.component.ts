import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css'],
  providers: [CharactersService]
})
export class SideComponent implements OnInit {
  query: string;
  public characters = [];

  constructor(private _characterService: CharactersService){}

  ngOnInit() {
    this._characterService.getMockCharacters()
      .subscribe(data => {
        // return this.characters = data;
        this.characters = data.map((item, index) => {
          return {
                id: index,
                name: item.name,
                height: item.height,
                mass: item.mass,
                hair_color: item.hair_color,
                skin_color: item.skin_color,
                eye_color: item.eye_color,
                birth_year: item.birth_year,
                gender: item.gender,
                created: item.created,
                edited: item.edited
              };
        });
        return this.characters;
      });
    // this.characters = this._characterService.getCharacters;

    this.characters = this.characters.map((item, index) => {
      return item.id = index;
    });
  }

  @Output() emitCharacter: EventEmitter<any> = new EventEmitter();

  sendData(data){
    this.emitCharacter.emit(data);
  }

}
