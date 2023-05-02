var o = {foo : 'bar'};

// Object {value: "bar", writable: true, enumerable: true, configurable: true}
console.log(Object.getOwnPropertyDescriptor(o,'foo'));