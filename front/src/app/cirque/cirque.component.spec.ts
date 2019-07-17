import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirqueComponent } from './cirque.component';

describe('CirqueComponent', () => {
  let component: CirqueComponent;
  let fixture: ComponentFixture<CirqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
