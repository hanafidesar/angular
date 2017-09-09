import swal from 'sweetalert2';
import * as SnackBar from 'node-snackbar';
import { Injectable } from '@angular/core';

@Injectable()
export class ToastService {

  constructor() { }
  
  showToast(error) {
    SnackBar.show({
      text: 'Login Error', actionText: '<div>see</div>', pos: 'top-right',
      onActionClick: () => {
        swal(
          'Can not Login?',
          'I think the problem is on your connection, make sure the connection is running as it should',
          'question'
        )
      }
    });
  }
}
