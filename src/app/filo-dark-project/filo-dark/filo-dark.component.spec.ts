import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiloDarkComponent } from './filo-dark.component';

describe('FiloDarkComponent', () => {
  let component: FiloDarkComponent;
  let fixture: ComponentFixture<FiloDarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FiloDarkComponent]
    });
    fixture = TestBed.createComponent(FiloDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
