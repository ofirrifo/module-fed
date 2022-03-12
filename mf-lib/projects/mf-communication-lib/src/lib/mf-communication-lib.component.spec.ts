import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfCommunicationLibComponent } from './mf-communication-lib.component';

describe('MfCommunicationLibComponent', () => {
  let component: MfCommunicationLibComponent;
  let fixture: ComponentFixture<MfCommunicationLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfCommunicationLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfCommunicationLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
