import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.scss']
})
export class NewPaymentComponent implements OnInit {
  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
