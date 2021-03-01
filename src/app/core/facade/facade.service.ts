import { Injectable } from '@angular/core';
import { FacadeUiService } from './services/facade-ui.service';

@Injectable()
export class FacadeService {
  /**
   * Injecting FacadeUiService to have a "namespace" structure
   *
   * @param ui UI Service
   */
  constructor(
    readonly ui: FacadeUiService,
  ) {}
}
