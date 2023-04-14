import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalrChatClientComponent } from './signalr-chat-client.component';

describe('SignalrChatClientComponent', () => {
  let component: SignalrChatClientComponent;
  let fixture: ComponentFixture<SignalrChatClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalrChatClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalrChatClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
