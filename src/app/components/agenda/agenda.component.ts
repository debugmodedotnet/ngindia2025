import { Component } from '@angular/core';
import { IAgenda } from '../../models/agenda';
import { agenda } from '../../dto/agenda.json';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [NgClass],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent {

  agendas: IAgenda[] = agenda;


}
