import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoComponent } from './info.component';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { MapComponent } from '../cmpmap/map.component';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoComponent, MapComponent ],
      imports: [AgmCoreModule],
      providers:[MapsAPILoader],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    component.ngOnInit();
    expect(component).toBeDefined();
  });
});
