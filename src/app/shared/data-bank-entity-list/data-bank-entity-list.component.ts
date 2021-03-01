import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-data-bank-entity-list',
  templateUrl: './data-bank-entity-list.component.html',
  styleUrls: ['./data-bank-entity-list.component.scss']
})
export class DataBankEntityListComponent {
  @Input() label: string;
  @Input() items: any[];
  @Output() navigate = new EventEmitter<string>();
  @Output() add = new EventEmitter<string>();

  faEllipsisH = faEllipsisH;
}
