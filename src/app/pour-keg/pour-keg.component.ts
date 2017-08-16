import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Keg } from './../keg.model';

@Component({
  selector: 'pour-keg',
  templateUrl: './pour-keg.component.html',
  styleUrls: ['./pour-keg.component.css']
})
export class PourKegComponent implements OnInit {
  @Input() childSelectedKeg: Keg[];
  // @Output() quantity = new EventEmitter();

  // pourKeg(clickedKeg){
  //   var quantity = (clickedKeg.quantity - 1);
  //   this.quantity.emit();
  // }

  constructor() { }

  ngOnInit() {
  }

}
