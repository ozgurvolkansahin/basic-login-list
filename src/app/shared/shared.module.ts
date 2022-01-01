import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email/email.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { ImgCaptionComponent } from './img-caption/img-caption.component';



@NgModule({
  declarations: [EmailComponent,
    ValidationMessageComponent,
    UserPreviewComponent,
    ImgCaptionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [EmailComponent,
  UserPreviewComponent,
ImgCaptionComponent,],
})
export class SharedModule {
}
