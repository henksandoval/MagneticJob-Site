import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appId]',
  standalone: true,
})
export class AppIdDirective {
  elementRef: ElementRef = inject(ElementRef);
  appId = input.required<string>();

  constructor() {
    effect(() => {
      this.elementRef.nativeElement.setAttribute('id', this.appId());
      this.elementRef.nativeElement.setAttribute('data-testid', this.appId());
    });
  }
}
