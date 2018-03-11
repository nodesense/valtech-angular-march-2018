import { Directive,

         OnInit, 
         OnDestroy, 
         
         Input,
         Output, 
         EventEmitter,

         HostListener,
         Renderer,
          
         ElementRef

} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'appHighlight' , // help to get directive instance with #
})
export class HighlightDirective implements OnInit, OnDestroy {
  
  @Input()
  color: string;

  @Input()
  theme: string;
  
  // <p appHighlight ==> p is a hostElement
  constructor(private hostElement: ElementRef,
              private renderer: Renderer) { 
    console.log('highlight directive created');
  }


  ngOnInit() {
    console.log("Directive init");

    // default if color is not passed by host
    this.color = this.color || 'lightgreen';

    console.log("Color ", this.color);
  }

  ngOnDestroy() {
    console.log("directive destroy");
  }

  @HostListener("click")
  onClick() {
    console.log("directive click event");
  }

  @HostListener('mouseenter')
  onEnter() {
    this.renderer
        .setElementStyle(this.hostElement.nativeElement,
                        "background",
                      this.color);
  }


  @HostListener('mouseleave')
  onLeave() {
    this.renderer
        .setElementStyle(this.hostElement.nativeElement,
                        "background",
                        '');
  }

  setColor(color: string) {
    this.color = color;
    console.log("Directive method");
  }

}
