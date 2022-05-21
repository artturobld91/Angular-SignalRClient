import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalRClientComponent } from './signal-rclient.component';

describe('SignalRClientComponent', () => {
  let component: SignalRClientComponent;
  let fixture: ComponentFixture<SignalRClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalRClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalRClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
