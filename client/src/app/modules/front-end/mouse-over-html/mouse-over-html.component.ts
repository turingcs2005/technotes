import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef, ConnectionPositionPair} from '@angular/cdk/overlay';
import { CdkTooltipComponent } from './child-components/cdk-tooltip/cdk-tooltip.component';

@Component({
  selector: 'app-mouse-over-html',
  templateUrl: './mouse-over-html.component.html',
  styleUrls: ['./mouse-over-html.component.scss']
})
export class MouseOverHtmlComponent implements OnInit {

  @ViewChild('cdk') cdk: ElementRef<HTMLSpanElement>;
  cdkTooltipPortal: ComponentPortal<CdkTooltipComponent>;
  cdkTooltipOverlayRef: OverlayRef = this.overlay.create(null);

  constructor(
    private overlay: Overlay
  ) { }

  ngOnInit(): void {
  }

  // We use functions to display tooltips. A user may never use some of the tool tips so we will not render a tooltip unless it is needed (mouse-over event occurs).
  displayCDK_Tooltip() {
    const positionStrategy = this.overlay.position().flexibleConnectedTo(this.cdk).withPositions([
      new ConnectionPositionPair(
        { originX: 'start', originY: 'bottom' },
        { overlayX: 'start', overlayY: 'top' },
      ),
      new ConnectionPositionPair(
        { originX: 'start', originY: 'top' },
        { overlayX: 'start', overlayY: 'bottom' },
      ),
    ]);
    // .withPush(false);  - CDK can force push the overlay on screen if neither of the preferred positions fits.

    this.cdkTooltipPortal = new ComponentPortal(CdkTooltipComponent);
    this.cdkTooltipOverlayRef = this.overlay.create({
      height: '400px',
      width: '600px',
      positionStrategy,
      hasBackdrop: false,  // to avoid both background and overlay layer to be active at the same time, which will trigger mouseenter an mouseout events repeatedly
    });
    this.cdkTooltipOverlayRef.attach(this.cdkTooltipPortal);
  }

}
