import { Component } from '@angular/core';

@Component({
  selector: 'app-workshops',
  standalone: true,
  imports: [],
  templateUrl: './workshops.component.html',
  styleUrl: './workshops.component.scss'
})
export class WorkshopsComponent {

  selectedWorkshop: string | null = null;

  showDetails(workshop: string): void {
    this.selectedWorkshop = this.selectedWorkshop === workshop ? null : workshop;
  }

}
