# FilterNil

A utility function for filtering out `null` and `undefined` values from RxJS streams or arrays.

## Installation

Install via npm:

```bash
npm install filternil
```

## Usage

`filterNil` is a function that removes `null` and `undefined` values from a data stream or array using RxJS operators.

### Example

```javascript
import { of } from 'rxjs';
import { filterNil } from 'filternil';

of(null, 1, undefined, 2, 3)
    .pipe(filterNil())
    .subscribe(console.log); // Outputs: 1, 2, 3
```

## API

### `filterNil`

A function that filters out `null` and `undefined` values. This function can be used in any RxJS pipeline to clean up data streams.

- **Returns**: `Function` - A function that filters out `null` and `undefined` values.

## Testing

To run tests using Brittle:

```bash
npm test
```

## License

This project is licensed under the MIT License.
```

This `README.md` includes installation instructions, a usage example, a description of the API, and testing instructions.