import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeCreateComponent } from './receipe-create.component';

describe('ReceipeCreateComponent', () => {
  let component: ReceipeCreateComponent;
  let fixture: ComponentFixture<ReceipeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
