import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import ItemInterface from '../../@types/types';
import toPrice from '../../helpers/formater';

@Component({
  selector: 'app-item-card',
  imports: [CardModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  @Input()
  item!: ItemInterface;

  name!: string;
  description!: string;
  price!: string;
  creditCardPrice!: string;

  calculateTax(value: number, tax: number): number {
    return value * tax; 
  }

  ngOnInit(): void {
    let pixValue = this.calculateTax(this.item.price, 0.90);
    let creditvalue = this.calculateTax(this.item.price, 1.1);

    this.name = this.item.name;
    this.description = this.item.description;
    this.price = toPrice(pixValue);
    this.creditCardPrice = toPrice(creditvalue / 10);
  }
}
