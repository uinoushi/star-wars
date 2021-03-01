import { Injectable, TemplateRef } from '@angular/core';
import { PopupService } from '@shared/services/popup/popup.service';

@Injectable()
export class FacadeUiService {
  /**
   * Currently only depends on the GlobalEventService for communicating with
   * other global components.
   */
  constructor(
    private popupService: PopupService,
  ) {}

  /**
   * Opens fullscreen popup with injected content to display
   */
  openPopupOverlay(content: TemplateRef<HTMLElement>): void {
      return this.popupService.open(content);
  }

  /**
   * Closes popup with injected content
   */
  closePopupOverlay(content: TemplateRef<HTMLElement>): void {
      return this.popupService.close(content);
  }
}
