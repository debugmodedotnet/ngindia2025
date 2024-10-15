import { ISpeakers } from '../../models/speakers';
import { speakers } from './../../dto/speakers.json';
import { Component } from '@angular/core';

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.scss'
})
export class SpeakersComponent {

  speakers: ISpeakers[] = speakers;
}
