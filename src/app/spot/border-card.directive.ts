import { Directive, ElementRef, HostListener, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[spotBorderCard]'
})
export class BorderCardDirective {

  private initialcolor:string = '#CCDBDC';
  private defaultHeight: number = 300;

  constructor(private renderer:Renderer2, private el:ElementRef) { 
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialcolor);
  }
  @Input('spotBorderCard') borderColor:string;

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialcolor);
  }

  private setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
    
  }
  private setBorder(color: string){
  let border =`solid 4px ${color}`;
  this.renderer.setStyle(this.el.nativeElement, "border",border);
   
  }
}
