import { Component, OnInit, Input } from '@angular/core';

import { ACharacter } from '../characters.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  character: object;

  constructor() { }

  ngOnInit() {
  }

  @Input() capturedCharacter: any;

}
