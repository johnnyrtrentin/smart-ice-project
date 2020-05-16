import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocationUserComponent } from './location-user.component';

describe('LocationUser', () => {
  let component: LocationUserComponent;
  let fixture: ComponentFixture<LocationUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationUserComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});