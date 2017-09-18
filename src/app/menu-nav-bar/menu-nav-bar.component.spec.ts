import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNAvBarComponent } from './menu-nav-bar.component';

describe('MenuNAvBarComponent', () => {
  let component: MenuNAvBarComponent;
  let fixture: ComponentFixture<MenuNAvBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNAvBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNAvBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
