import swal from 'sweetalert2';
import { Injectable } from '@angular/core';

@Injectable()
export class SweetalertService {

  constructor() { }

  notWorkingYet() {
    swal(
      'Sorry',
      'Aplication not working yet',
      'info'
    );
  }

  follow() {
    swal(
      'Sorry',
      'Aplication not working yet',
      'info'
    );
  }

  error() {
    swal(
      'Sorry',
      'Aplication not working yet',
      'info'
    );
  }
}
