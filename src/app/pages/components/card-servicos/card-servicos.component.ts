import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-servicos',
  templateUrl: './card-servicos.component.html',
  styleUrls: ['./card-servicos.component.scss']
})
export class CardServicosComponent {

  @Input() servicos: any[] = [];

}
