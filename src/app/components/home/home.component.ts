import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { SpeakersComponent } from "../speakers/speakers.component";
import { AgendaComponent } from "../agenda/agenda.component";
import { VenueComponent } from "../venue/venue.component";
import { PricingComponent } from "../pricing/pricing.component";
import { SocialComponent } from "../social/social.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SpeakersComponent, AgendaComponent, VenueComponent, PricingComponent, SocialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
