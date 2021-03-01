import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from '@shared/services/services.module';
import { FacadeService } from './facade.service';
import { FacadeUiService } from './services/facade-ui.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesModule
  ]
})
export class FacadeModule {
  /**
     * Only the root AppModule should import the FacadeModule.
     * The constructor prevents the re-import of the facade.
     * https://angular.io/guide/singleton-services#prevent-reimport-of-the-coremodule
     */
    constructor(
      @Optional()
      @SkipSelf()
      parentModule: FacadeModule,
  ) {
      if (parentModule) {
          throw new Error('FacadeModule is already loaded. Import it in the AppModule only!');
      }
  }

  /**
   * Using the forRoot() method causes the FacadeService to be a singleton.
   */
  static forRoot(): ModuleWithProviders<FacadeModule> {
      return {
          ngModule: FacadeModule,
          providers: [
              FacadeService,
              FacadeUiService,
          ],
      };
  }
}
