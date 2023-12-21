import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'nx-repro-remotes-test-entry',
  template: `<nx-repro-nx-welcome></nx-repro-nx-welcome>`,
})
export class RemoteEntryComponent {}
