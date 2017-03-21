# filter function

## code - ecmascript

```
    const input = [ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ];
    const onlyOdd = x => x & 1 === 1;
    const filtered = filter(input, onlyOdd);
    // [ 1, 1, 1, 1, 1 ]
```
