import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalizerConversationComponent } from './analizer-conversation.component';

describe('AnalizerConversationComponent', () => {
  let component: AnalizerConversationComponent;
  let fixture: ComponentFixture<AnalizerConversationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalizerConversationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalizerConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
