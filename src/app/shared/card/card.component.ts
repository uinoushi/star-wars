import { Component, ContentChild, ElementRef, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @ContentChild('image') injectedImage: TemplateRef<ElementRef>;
  @ContentChild('title') injectedTitle: TemplateRef<ElementRef>;
  @ContentChild('body') injectedBody: TemplateRef<ElementRef>;
}
