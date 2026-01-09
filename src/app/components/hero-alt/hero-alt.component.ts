import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-alt',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './hero-alt.component.html',
  styleUrl: './hero-alt.component.scss'
})
export class HeroAltComponent {

  navigateAi(){
    window.open('https://www.ai-india.ai/home', '_blank');
  }
}
