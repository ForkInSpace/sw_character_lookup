import { Component, OnInit } from '@angular/core';

import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css'],
  providers: [CharactersService]
})
export class SideComponent implements OnInit {

  public characters = [];

  constructor(private _characterService: CharactersService){}

  opened = true;

  fontFam = 'Star Jedi';
  rippleColor = 'yellow';
  cols = 2;

  ngOnInit() {
    this._characterService.getMockCharacters()
      .subscribe(data => this.characters = data);
    // this.characters = this._characterService.getCharacters;
    console.log(this.characters);
  }

}
