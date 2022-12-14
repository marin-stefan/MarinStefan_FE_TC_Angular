import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CardModel } from '../../interfaces/card-model';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardTemplateComponent implements OnInit {

  public avatarId: number ;

  @Input() info: CardModel;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  };

}
