
## Below is a list of high-level instructions on how to create rich HTML mouse-over tips. Please check out this component for code details.
1. In your feature module, import Portal module and Overlay module from Angular Material CDK.
```typescript
	import { PortalModule } from '@angular/cdk/portal';
	import { OverlayModule } from '@angular/cdk/overlay';
```

2. Create a child component and import it into a host component. The child component will be rendered as mouse-over tip.

3. Create an anchor in your host template. For example:
```html
	<span class="link" (mouseenter)="displayCDK_Tooltip()" (mouseout)="cdkTooltipOverlayRef.detach()" #cdk>Angular Material CDK</span>
```
Whenever mouse cursor enters the anchor, your html tooltip will be rendered and displayed as a top layer.

4. Use ViewChild to access the template anchor in your component.
```typescript
  @ViewChild('cdk') cdk: ElementRef<HTMLSpanElement>;
```

5. Create a function that renders the tooltip. In the function, define an overlay positioning strategy. For example:
```typescript
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
```
6. In the same function, create a new portal with the child component; then create an overlay reference and attach the portal to your overlay reference.
```typescript
	this.cdkTooltipPortal = new ComponentPortal(CdkTooltipComponent);
	this.cdkTooltipOverlayRef = this.overlay.create({
		height: '400px',
		width: '600px',
		positionStrategy,
		hasBackdrop: false,  // to avoid both background and overlay layer to be active at the same time, which will trigger mouseenter an mouseout events repeatedly
	});
	this.cdkTooltipOverlayRef.attach(this.cdkTooltipPortal);
```