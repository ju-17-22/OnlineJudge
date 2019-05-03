import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineideComponent } from './onlineide.component';

describe('OnlineideComponent', () => {
  let component: OnlineideComponent;
  let fixture: ComponentFixture<OnlineideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
