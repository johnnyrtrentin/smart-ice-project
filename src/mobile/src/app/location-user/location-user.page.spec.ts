import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocationUser } from './location-user.page';

describe('LocationUser', () => {
  let component: LocationUser;
  let fixture: ComponentFixture<LocationUser>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationUser ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});