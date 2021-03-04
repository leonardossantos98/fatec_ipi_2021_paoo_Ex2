import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecaoCursoComponent } from './colecao-curso.component';

describe('ColecaoCursoComponent', () => {
  let component: ColecaoCursoComponent;
  let fixture: ComponentFixture<ColecaoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColecaoCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColecaoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
