import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {
  selector: any;
  spinnerElement = `
    <div class="loader spinner">
      <svg class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
      </svg>
    </div>
    `;

  show(selector: string) {
    $(selector).css({
      //   this.selector.css({
      position: 'relative',
      display: 'block',
      'min-height': '100vh'
    }).append(this.spinnerElement);
    $(selector).find('.card').css('height','100vh');
    return this.hide.bind(this, selector);
  }

  hide(selector: any) {
    $(selector).find('.card').css('height','auto');
    $(selector).find('.spinner').remove();
  }
}