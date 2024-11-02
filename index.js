import {filter, pipe} from 'rxjs';


/**
 * Creates a function that filters out `null` and `undefined` values from a stream or array.
 *
 * @returns {Function} A function that filters out `null` and `undefined` values from the provided input.
 *
 * @example
 * import { of } from 'rxjs';
 * import { filterNil } from './path/to/filterNil';
 *
 * of(null, 1, undefined, 2, 3)
 *     .pipe(filterNil())
 *     .subscribe(console.log); // Outputs: 1, 2, 3
 */
const filterNil = () =>
    pipe(
        filter(value => value !== null && value !== undefined)
    );

export { filterNil };