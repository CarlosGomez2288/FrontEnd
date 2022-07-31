import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercaDeComponent } from './cerca-de.component';

describe('CercaDeComponent', () => {
  let component: CercaDeComponent;
  let fixture: ComponentFixture<CercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CercaDeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
