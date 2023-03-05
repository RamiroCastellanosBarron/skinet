import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from 'src/app/shared/models/order';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order: Order = {} as Order;


  constructor(private orderService: OrderService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadOrder();
  }

  loadOrder() {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) return;
    this.orderService.getOrder(+id).subscribe({
      next: order => this.order = order
    })
  }

}
