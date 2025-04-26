import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeOneComponent } from './code-one.component';

describe('CodeOneComponent', () => {
  let component: CodeOneComponent;
  let fixture: ComponentFixture<CodeOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeOneComponent]
    });
    fixture = TestBed.createComponent(CodeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
