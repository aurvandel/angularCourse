import { viewClassName } from '@angular/compiler';
import { 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, 
  ContentChild, 
  DoCheck, 
  ElementRef, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChanges, 
  ViewChild, 
  ViewEncapsulation 
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // default encapsulation
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked,
AfterViewInit,
AfterViewChecked ,
OnDestroy
{
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  constructor() { 
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onchanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngoninit called');
    console.log(this.header.nativeElement.textContent);
    console.log(this.paragraph.nativeElement.textContent);

  }

  ngDoCheck(): void {
    console.log('docheck called');
  }

  ngAfterContentInit(): void {
    console.log('aftercontentinit called');
  }

  ngAfterContentChecked(): void {
    console.log('aftercontentchecked called');
    
  }

  ngAfterViewChecked(): void {
    console.log('afterviewchecked called');
      
  }

  ngAfterViewInit(): void {
    console.log('afterviewinit called');
    console.log(this.header.nativeElement.textContent);
    console.log(this.paragraph.nativeElement.textContent);

  }

  ngOnDestroy(): void {
      console.log('ondestroy called');
  }
}
