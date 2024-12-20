import { Component } from '@angular/core';
import { ISponsors } from '../../models/sponsors';
import { sponsors } from '../../dto/sponsors.json';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.scss'
})
export class SponsorsComponent {

  sponsors: ISponsors[] = sponsors;

}
