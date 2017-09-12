import swal from 'sweetalert2';
import * as SnackBar from 'node-snackbar';
import { Injectable } from '@angular/core';
import { SweetalertService } from '../sweetalert/sweetalert.service';

@Injectable()
export class ToastService {

  constructor(
    private _sweetalertService: SweetalertService
  ) { }

  showToast(errorInfo) {
    SnackBar.show({
      text: 'Login Error', actionText: '<div>see</div>', pos: 'top-right',
      onActionClick: () => {
        swal(
          'Can not Login?',
          errorInfo,
          'question'
        );
      }
    });
  }
}
