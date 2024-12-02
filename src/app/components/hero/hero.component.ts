import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StatsComponent } from '../../stats/stats.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule, StatsComponent, AboutComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  count: WritableSignal<number> = signal(10);
  isEven: Signal<boolean> = computed(() => {
    return this.count() % 2 === 0;
  });

  constructor() {
    effect(() => {
      console.log('Count is even', this.isEven());
    })
  }

}
