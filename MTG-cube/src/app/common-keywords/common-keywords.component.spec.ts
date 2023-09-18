import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonKeywordsComponent } from './common-keywords.component';

describe('CommonKeywordsComponent', () => {
  let component: CommonKeywordsComponent;
  let fixture: ComponentFixture<CommonKeywordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonKeywordsComponent]
    });
    fixture = TestBed.createComponent(CommonKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
