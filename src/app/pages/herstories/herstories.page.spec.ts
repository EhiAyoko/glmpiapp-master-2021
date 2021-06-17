import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HERstoriesPage } from './herstories.page';

describe('HERstoriesPage', () => {
  let component: HERstoriesPage;
  let fixture: ComponentFixture<HERstoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HERstoriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HERstoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
