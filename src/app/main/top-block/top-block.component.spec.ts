import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBlockComponent } from './top-block.component';

describe('TopBlockComponent', () => {
  let component: TopBlockComponent;
  let fixture: ComponentFixture<TopBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopBlockComponent]
    });
    fixture = TestBed.createComponent(TopBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
