import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/shared/models/order';

@Component({
  selector: 'app-checkout-success',
  templateUrl: './checkout-success.component.html',
  styleUrls: ['./checkout-success.component.scss']
})
export class CheckoutSuccessComponent {
  orderId: number;

  constructor(public router: Router) {
    const navigation = this.router.getCurrentNavigation();
    console.log(navigation);
    const id = +navigation?.extras?.state?.['id'];
    this.orderId = id;
  }

}
