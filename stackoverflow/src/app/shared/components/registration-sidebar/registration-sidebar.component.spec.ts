import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSidebarComponent } from './registration-sidebar.component';

describe('RegistrationSidebarComponent', () => {
  let component: RegistrationSidebarComponent;
  let fixture: ComponentFixture<RegistrationSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
