import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-aparcamiento',
  standalone: true,
  templateUrl: './aparcamiento.component.html',
  styleUrls: ['./aparcamiento.component.css'],
  imports:[NavbarComponent,SideBarComponent]
})
export class AparcamientoComponent implements AfterViewInit {

  title = "Aparcamiento";

  slots = Array.from({ length: 10 }, (_, i) => i);
  parklist: number[] = Array(10).fill(0);
  queueItems = 0;
  parkLock = false;
  w: number = 0;
  h: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.setupParkingManager();
  }

  setupParkingManager(): void {
    const parkingspace = this.el.nativeElement.querySelector('#parkingspace');
    this.w = parkingspace.offsetWidth;
    this.h = parkingspace.offsetHeight;

    // Create CSS animations
    const anim = this.renderer.createElement('style');
    const rule1 = `
      @-webkit-keyframes car-park {
        from { transform: rotate(270deg) }
        80% { transform: rotate(270deg) translate(0px,-${this.w}px) }
        90% { transform: rotate(270deg) translate(0px,-${this.w}px) rotate(90deg) }
        to { transform: rotate(270deg) translate(0px,-${this.w}px) rotate(90deg) translate(0px,-${this.h * 0.25}px)}
      }`;
    anim.appendChild(this.renderer.createText(rule1));
    const rule2 = `
      @-webkit-keyframes car-bottom {
        from { transform: rotate(270deg) }
        80% { transform: rotate(270deg) translate(0px,-${this.w}px) }
        90% { transform: rotate(270deg) translate(0px,-${this.w}px) rotate(90deg) }
        to { transform: rotate(270deg) translate(0px,-${this.w}px) rotate(90deg) translate(0px,${this.h * 0.3}px)}
      }`;
    anim.appendChild(this.renderer.createText(rule2));
    const rule3 = `
      @-webkit-keyframes car-exit-top {
        from { transform: rotate(270deg) translate(0px,-${this.w}px) rotate(90deg) translate(0px,-${this.h * 0.25}px) }
        80% { transform: rotate(270deg) translate(0px,-${this.w}px) rotate(90deg) translate(0px,-${this.h * 0.25}px) translate(0px,${this.h * 0.25}px)}
        90% { transform: rotate(270deg) translate(0px,-${this.w}px) rotate(90deg) translate(0px,-${this.h * 0.25}px) translate(0px,${this.h * 0.25}px) rotate(90deg)}
        to { transform: rotate(270deg) translate(0px,-${this.w}px) rotate(90deg) translate(0px,-${this.h * 0.25}px) translate(0px,${this.h * 0.25}px) rotate(90deg) translate(0px,-${this.w}px)}
      }`;
    anim.appendChild(this.renderer.createText(rule3));
    const rule4 = `
      @-webkit-keyframes car-exit-bottom {
        from { transform: rotate(270deg) translate(0px,-${this.w}px) rotate(90deg) translate(0px,${this.h * 0.3}px) }
        80% { transform: rotate(270deg) translate(0px,-${this.w}px) rotate(90deg) translate(0px,${this.h * 0.3}px) translate(0px,-${this.h * 0.3}px)}
        90% { transform: rotate(270deg) translate(0px,-${this.w}px) rotate(90deg) translate(0px,${this.h * 0.3}px) translate(0px,-${this.h * 0.3}px) rotate(90deg)}
        to { transform: rotate(270deg) translate(0px,-${this.w}px) rotate(90deg) translate(0px,${this.h * 0.3}px) translate(0px,-${this.h * 0.3}px) rotate(90deg) translate(0px,-${this.w}px)}
      }`;
    anim.appendChild(this.renderer.createText(rule4));
    this.renderer.appendChild(parkingspace, anim);
  }

  updateQueue(): void {
    for (let i = 1; i <= 5; i++) {
      const imgSrc = i <= this.queueItems ? '../assets/img/coche2.png' : '../assets/img/coche2.png';
      const queueItem = this.el.nativeElement.querySelector(`#queue${i}`);
      if (queueItem) {
        this.renderer.setAttribute(queueItem, 'src', imgSrc);
      }
    }
  }

  addToQueue(): void {
    const freeSlotFlag = this.parklist.some(slot => slot !== 1);
    if (freeSlotFlag) {
      alert('Free slots available');
    } else {
      this.queueItems += 1;
      if (this.queueItems > 5) {
        alert('Queue Limit Reached');
      } else {
        this.updateQueue();
      }
    }
  }

  queueCheck(slot: number): void {
    if (this.queueItems > 0) {
      this.queueItems -= 1;
      this.updateQueue();
      this.carEnter(slot);
    }
  }

  carExit(slot: number): void {
    if (!this.parkLock) {
      this.parklist[slot] = 0;
      this.parkLock = true;
      const slotElem = this.el.nativeElement.querySelector(`#slot${slot + 1}`);
      this.renderer.setStyle(slotElem, 'background', 'rgb(27,118,19)');
      const carElem = this.el.nativeElement.querySelector(`#car${slot}`);
      if (slot <= 4) {
        this.renderer.setStyle(carElem, 'animation', 'car-exit-top 2s both');
      } else {
        this.renderer.setStyle(carElem, 'animation', 'car-exit-bottom 2s both');
      }
      setTimeout(() => {
        this.renderer.removeChild(this.el.nativeElement.querySelector('#parkingspace'), carElem);
        this.parkLock = false;
        this.queueCheck(slot);
      }, 2000);
    }
  }

  generateNewCar(slot: number): void {
    const space = this.el.nativeElement.querySelector('#parkingspace');
    const img = this.renderer.createElement('img');
    this.renderer.setAttribute(img, 'src', '../assets/img/coche.png');
    this.renderer.addClass(img, 'new-car-origin');
    this.renderer.setStyle(img, 'width', `${(this.w * 0.8) * 0.1}px`);
    this.renderer.setAttribute(img, 'id', `car${slot}`);
    this.renderer.appendChild(space, img);
  }

  carEnter(slot: number): void {
    const carElem = this.el.nativeElement.querySelector(`#car${slot}`);
    if (!carElem && !this.parkLock) {
      this.parklist[slot] = 1;
      this.parkLock = true;
      this.generateNewCar(slot);
      const slotElem = this.el.nativeElement.querySelector(`#slot${slot + 1}`);
      this.renderer.setStyle(slotElem, 'background', 'rgb(146,18,18)');
      const car = this.el.nativeElement.querySelector(`#car${slot}`);
      const rightOffset = slot !== 4 && slot !== 9
        ? -this.w + (this.w * 0.1) + (((5 - (slot + 1) % 5) * ((this.w * 0.8) * 0.2)) + ((this.w * 0.8) * 0.05))
        : -this.w + (this.w * 0.1) + ((this.w * 0.8) * 0.05);
      this.renderer.setStyle(car, 'right', `${rightOffset}px`);
      const animation = slot <= 4 ? 'car-park 2s both' : 'car-bottom 2s both';
      this.renderer.setStyle(car, 'animation', animation);
      setTimeout(() => {
        this.parkLock = false;
      }, 2000);
    } else {
      this.carExit(slot);
    }
  }
}