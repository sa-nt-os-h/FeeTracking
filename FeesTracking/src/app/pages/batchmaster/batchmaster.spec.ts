import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Batchmaster } from './batchmaster';

describe('Batchmaster', () => {
  let component: Batchmaster;
  let fixture: ComponentFixture<Batchmaster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Batchmaster]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Batchmaster);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
