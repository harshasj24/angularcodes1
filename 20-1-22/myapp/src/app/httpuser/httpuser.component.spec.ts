import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpuserComponent } from './httpuser.component';

describe('HttpuserComponent', () => {
  let component: HttpuserComponent;
  let fixture: ComponentFixture<HttpuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
