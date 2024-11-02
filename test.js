import {test} from "brittle";
import {filterNil} from "./index.js";
import {from} from "rxjs";

test('filterNil should filter out null and undefined values', async (t) => {
    const values = [null, 1, undefined, 2, 3];
    const expectedValues = [1, 2, 3];
    const results = [];

    // Run the function and collect results
    await new Promise((resolve) => {
        from(values)
            .pipe(filterNil())
            .subscribe({
                next: (val) => results.push(val),
                complete: resolve,
            });
    });

    // Assertion
    t.alike(results, expectedValues, 'filters out null and undefined values correctly');
});