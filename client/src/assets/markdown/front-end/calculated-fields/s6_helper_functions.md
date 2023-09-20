```typescript
const USDollar = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD'
});

// convert number to US dollar format
export function currencyToNumber(x: string): number {
 return Number(x.replace(/[^0-9.-]+/g,""));
}

// convert US dollar to number format with the option of rounding the the nearest dollar
export function numberToCurrency(x: number, decimal=false): string {
	let v = x;
	if (!decimal) {
			v = Math.round(x);
			let s = USDollar.format(v);
			return s.slice(0, s.indexOf('.'));
	}
	return USDollar.format(v);
}

// convert number to US number format (with , separator)
export function numberToUS(x: number): string {
	return new Intl.NumberFormat().format(x);
}
```