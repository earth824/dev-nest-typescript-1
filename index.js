"use strict";
console.log('Hello TypeScript');
function isButton(el) {
    return 'type' in el;
}
let a = { type: 'aaa', className: 'aaa' };
if (isButton(a)) {
}
example({ type: 'button' });
function Button({ href, ...props }) {
    if (isButton()) {
        return { ...props } >
        ;
    }
    return { ...props };
}
href;
"google.com" /  >
;
