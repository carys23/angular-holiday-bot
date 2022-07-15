import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoildaysComponent } from './hoildays.component';

describe('HoildaysComponent', () => {
  let component: HoildaysComponent;
  let fixture: ComponentFixture<HoildaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoildaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoildaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
