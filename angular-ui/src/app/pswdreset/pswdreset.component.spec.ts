import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PswdresetComponent } from './pswdreset.component';

describe('PswdresetComponent', () => {
  let component: PswdresetComponent;
  let fixture: ComponentFixture<PswdresetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PswdresetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PswdresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
