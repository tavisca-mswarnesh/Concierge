import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderChatBubbleComponent } from './sender-chat-bubble.component';

describe('SenderChatBubbleComponent', () => {
  let component: SenderChatBubbleComponent;
  let fixture: ComponentFixture<SenderChatBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenderChatBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenderChatBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
