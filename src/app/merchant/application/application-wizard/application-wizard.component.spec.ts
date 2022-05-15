import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationWizardComponent } from './application-wizard.component';

describe('ApplicationWizardComponent', () => {
  let component: ApplicationWizardComponent;
  let fixture: ComponentFixture<ApplicationWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
