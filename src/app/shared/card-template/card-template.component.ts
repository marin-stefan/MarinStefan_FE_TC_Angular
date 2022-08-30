import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CardModel } from './model/cardModel';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardTemplateComponent implements OnInit {

  @Input() info: CardModel;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  };
}
