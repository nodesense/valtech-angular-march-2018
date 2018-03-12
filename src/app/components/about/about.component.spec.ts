import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

fdescribe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
     
    fixture.detectChanges();
  });

  it('should create',  async () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();
    element = fixture.nativeElement;

    expect(element.querySelectorAll('li').length).toBe(2);
  
    expect(element.querySelectorAll('li')[0].textContent)
          .toContain("Krish");

  });


  it('should create', async () => {
    expect(component).toBeTruthy();

    component.addMember();
    fixture.detectChanges();

    expect(element.querySelectorAll('li').length).toBe(3);
  
    expect(element.querySelectorAll('li')[2].textContent)
          .toContain("Member");
          
  });

});
