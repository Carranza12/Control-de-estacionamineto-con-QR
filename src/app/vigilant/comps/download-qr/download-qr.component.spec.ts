import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadQRComponent } from './download-qr.component';

describe('DownloadQRComponent', () => {
  let component: DownloadQRComponent;
  let fixture: ComponentFixture<DownloadQRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadQRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
