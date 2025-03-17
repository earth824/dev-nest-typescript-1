"use strict";
console.log('Hello TypeScript');
// Type Annotation
// let nickname: string;
// let price: number;
// let isAdmin: boolean;
// let a: any;
// let n: null;
// let u: undefined;
// let b: bigint = 90n;
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER + 1000);
// let s: symbol = Symbol('id');
// let z: symbol = Symbol('id');
// console.log(s === z);
// const obj = {
//   [s]: 'fist',
//   id: 'sec'
// };
// Type Inference
// let num = 20;
// Type Unknown vs Any
// let a: unknown = 9;
// let b: any = 10;
// if (typeof a === 'string' || typeof a === 'number') {
//   console.log(a);
// }
// try {
//   // throw 'String';
//   throw new Error('intentional throw error');
// } catch (err) {
//   if (err instanceof Error) {
//     console.log(err.message); // class Error
//   } else if (typeof err === 'string') {
//     console.log(err.toUpperCase());
//   }
// }
// Union Type
// let a: string | number;
// let b: string | number | boolean;
// let c: string | null;
// function test(input: string | number) {
//   if (typeof input === 'string') {
//   }
// }
// Type Alias
// let a: string | number;
// type Alphanumeric = string | number;
// let b: Alphanumeric;
// Literal Type
// const num = 90
// type Status = 'loading' | 'success' | 'error';
// let s: Status;
// let theme: 'dark' | 'light';
// enum HttpStatus {
//   Ok = 200,
//   BadRequest = 400
// }
// let st: HttpStatus;
// st = HttpStatus.BadRequest;
// enum Status {
//   Pending = 'Pending',
//   Shipping = 'Shipping'
// }
// const newOrder = {
//   status: Status.Shipping
// };
// enum Status {
//   Pending = 100, // 1
//   Shipping // 2
// }
// const newOrder = {
//     statusId: Status.Shipping
//   };
// console.log(Status.Pending);
let a;
// console.log(a);
