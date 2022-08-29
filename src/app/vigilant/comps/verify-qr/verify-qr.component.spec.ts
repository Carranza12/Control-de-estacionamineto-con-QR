import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyQRComponent } from './verify-qr.component';

describe('VerifyQRComponent', () => {
  let component: VerifyQRComponent;
  let fixture: ComponentFixture<VerifyQRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyQRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
