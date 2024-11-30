import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule],
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
