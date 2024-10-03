import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSliderComponent } from './tag-slider.component';

describe('TagSliderComponent', () => {
  let component: TagSliderComponent;
  let fixture: ComponentFixture<TagSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
