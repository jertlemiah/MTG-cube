import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadsComponent } from './breads.component';

describe('BreadsComponent', () => {
  let component: BreadsComponent;
  let fixture: ComponentFixture<BreadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
