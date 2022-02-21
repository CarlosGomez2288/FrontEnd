import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtSocialComponent } from './butt-social.component';

describe('ButtSocialComponent', () => {
  let component: ButtSocialComponent;
  let fixture: ComponentFixture<ButtSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
