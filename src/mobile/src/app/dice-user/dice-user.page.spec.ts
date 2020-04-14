import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiceUser } from './dice-user.page';

describe('DiceUser', () => {
  let component: DiceUser;
  let fixture: ComponentFixture<DiceUser>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceUser ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiceUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});