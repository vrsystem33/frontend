import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetRecoveryComponent } from './password-reset-recovery.component';

describe('PasswordResetRecoveryComponent', () => {
  let component: PasswordResetRecoveryComponent;
  let fixture: ComponentFixture<PasswordResetRecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordResetRecoveryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordResetRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
