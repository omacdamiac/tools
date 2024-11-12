import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeFeedbackComponent } from './analyze-feedback.component';

describe('AnalyzeFeedbackComponent', () => {
  let component: AnalyzeFeedbackComponent;
  let fixture: ComponentFixture<AnalyzeFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyzeFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyzeFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
