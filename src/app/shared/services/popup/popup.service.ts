import { Injectable, OnDestroy, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

export interface Action {
  action: 'open' | 'close';
  content: TemplateRef<HTMLElement>;
}

@Injectable({
  providedIn: 'root'
})
export class PopupService implements OnDestroy {
  actions$ = new Subject<Action>();

  ngOnDestroy(): void {
      this.actions$.unsubscribe();
  }

  open(content: TemplateRef<HTMLElement>) {
      this.actions$.next({
          content,
          action: 'open',
      });
  }

  close(content: TemplateRef<HTMLElement>) {
      this.actions$.next({
          content,
          action: 'close',
      });
  }
}
