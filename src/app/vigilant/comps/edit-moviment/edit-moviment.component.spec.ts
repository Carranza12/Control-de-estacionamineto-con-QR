import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMovimentComponent } from './edit-moviment.component';

describe('EditMovimentComponent', () => {
  let component: EditMovimentComponent;
  let fixture: ComponentFixture<EditMovimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMovimentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMovimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
