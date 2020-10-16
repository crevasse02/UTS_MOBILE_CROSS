import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailAdminPage } from './detail-admin.page';

describe('DetailAdminPage', () => {
  let component: DetailAdminPage;
  let fixture: ComponentFixture<DetailAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
