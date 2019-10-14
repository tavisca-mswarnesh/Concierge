import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverChatBubbleComponent } from './receiver-chat-bubble.component';

describe('ReceiverChatBubbleComponent', () => {
  let component: ReceiverChatBubbleComponent;
  let fixture: ComponentFixture<ReceiverChatBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiverChatBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiverChatBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
