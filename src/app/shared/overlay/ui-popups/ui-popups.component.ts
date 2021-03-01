import { Component, OnInit, TemplateRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { PopupService } from '@shared/services/popup/popup.service';

@Component({
  selector: 'app-ui-popups',
  templateUrl: './ui-popups.component.html',
  styleUrls: ['./ui-popups.component.scss']
})
export class UiPopupsComponent implements OnInit {
  // tslint:disable-next-line: prefer-array-literal because it is a complex type.
  popups: Array<TemplateRef<HTMLElement>> = [];

  showCloseIcon = true;

  protected ngDestroy = new Subject();
  protected popupServiceActionsSubscription: Subscription;

  constructor(protected popupService: PopupService) {}

  ngOnInit(): void {
      if (!this.popupServiceActionsSubscription) {
          this.popupServiceActionsSubscription = this.popupService.actions$
              .pipe(
                  tap(action => {
                      if (action.action === 'open') {
                          this.popups = [...this.popups, action.content];
                      } else if (action.action === 'close' && this.popups.indexOf(action.content) !== -1) {
                          this.popups = this.popups.filter(value => value !== action.content);
                      }
                  }),
                  takeUntil(this.ngDestroy),
              )
              .subscribe();
      }
  }

  ngOnDestroy(): void {
      this.ngDestroy.next();
      this.ngDestroy.unsubscribe();
      if (this.popupServiceActionsSubscription) {
          this.popupServiceActionsSubscription.unsubscribe();
      }
  }

  close(content: TemplateRef<HTMLElement>) {
      if (this.popups.indexOf(content) !== -1) {
          this.popups = this.popups.filter(value => value !== content);
      }
  }
}
