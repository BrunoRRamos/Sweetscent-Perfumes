import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ItemCardComponent } from "./components/item-card/item-card.component";
import ItemInterface from './@types/types';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, ItemCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  testItem: ItemInterface = {name: 'Versace Eros', description: 'Perfume Versace Eros Masculino Eau de Parfum 100 ml', price: 700}
}
