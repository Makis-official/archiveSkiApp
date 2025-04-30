import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeThreeComponent } from './code-three.component';

describe('CodeThreeComponent', () => {
  let component: CodeThreeComponent;
  let fixture: ComponentFixture<CodeThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeThreeComponent]
    });
    fixture = TestBed.createComponent(CodeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
