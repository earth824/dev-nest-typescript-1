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

// let a: number;
// console.log(a);

// Array
// const arr = [3, 8];
// arr.push('aaaaaa');
// const arr = ['jan', 4, 9];
// const arr: string[] = ['a'];
// const emp = []
// const arr: Array<string> = [1, 4];

// type Alp = string | number;
// const a: Alp[] = [20, 'ggg'];
// type Address = {
//   district: string;
// };

// type User = {
//   email: string | number;
//   password: string;
//   dob?: Date;
//   addresses: Address[];
// };
// const users: User[] = [
//   {
//     dob: new Date(),
//     email: 1234,
//     password: '123456',
//     addresses: [
//       {
//         district: ''
//       }
//     ]
//   }
// ];

// Tuple (fixed length array, specific type at eact index)
// const t: [string, number] = ['john', 5];

// Never
// let a: never;
// type Status = 'pending' | 'success' | 'canceled';
// function test(b: Status) {
//   if (b === 'pending') {
//   } else if (b === 'success') {
//   } else {
//     let c: never = b;
//   }
// }

// function createError(msg: string, statusCode): never {
//   const err = new Error(msg);
//   err.statusCode = statusCode;
//   throw err;
// }

// function test(a: unknown) {
//   (a as number).toFixed(2);
// }
// test('hhh');

// const main = document.getElementById('main') as HTMLElement;
// const main = <HTMLInputElement>document.getElementById('main');
// const main = document.getElementById('main')!;
// type User = { name: string; role: 'admin' | 'user' };
// const result = (await axios.get('http://localhost:8000/users')) as unknown;
// zod

// function test(a: number): string {
//   return 'hello';
// }

// test(5);

// const obj = {
//   name: 'jophn',
//   age: 90
// };

// Plain object, Object instantiate from class
// const d = new Date();
// const o = new Object({ name: 'jim' });

// const a: object = { name: 'jack' };
// const b: object = new Date();
// const c: object = [9, 8];
// const d: object = new Set<number>([7, 9, 9, 7]);
// const e: object = new Map();

// OOP class and objext: reusable, mainatainable, scalable, flexible
// ES2015 class ==> Constructor
// function User(name, age) {
//   this.name = name
//   this.user = user
// }

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getName() {
//     return this.name;
//   }
// }

// const u = new User('john', 58); // User { name: 'john', age: 58 }
// type Address = {
//   road: string;
//   subdistrict: string;
// };

// interface IManufacturer {
//   name: string;
//   contract: string;
//   address: Address;
// }

// type Product = {
//   readonly id: number;
//   name: string;
//   price: number;
//   isActive: boolean;
//   // manufacturer: IManufacturer;
//   discount?: number;
// };

// interface IProduct {
//   name: string;
//   price: number;
//   isActive: boolean;
// }

// const obj: Product = { name: 'ken', price: 79, isActive: true, id: 1, discount: 0.1 };
// const product: IProduct = { name: 'max', price: 55, isActive: false };
// obj.id = 20;
// console.log(obj);
// Object.defineProperty(obj, 'name', { writable: false });
// obj.name = 'aaaa';

// type AnyKeyObj = {
//   // id: string;
//   [key: string]: string;
// };

// const obj: AnyKeyObj = { price: '30', john: 'j@mail.com', id: 'aaaa' };
// const th: AnyKeyObj = {
//   welcome: 'ยินดีต้อนรับ',
//   login: 'เข้าสู่ระบบ'
// }

// const en: AnyKeyObj = {
//   welcome: 'welcome'
// }

// type User = {
//   username: string;
//   email: string;
// };

// type AdminFeature = {
//   permissions: ('read' | 'write')[];
// };

// type Admin = User & AdminFeature;
// const admin: Admin = { email: 'aaa', username: 'jj', permissions: ['read'] };

// type Teacher = { academicDegree: string } & Address;
// type Student = { grade: number } & Address;
// type Address = {};

// type CreateProduct = { name: string; price: number; isActive: boolean };
// type UpdateProduct = { id: number; name: string } & Partial<CreateProduct>;
// const p: UpdateProduct = {};

// type KeyNum = {
//   [key: number]: any;
// };

// const numkey: KeyNum = { [0]: 'llll' };
// console.log(numkey[0]);

// interface User {
//   username: string;
//   email: string;
// }

// interface AdminFeature {
//   permissions: ('read' | 'write')[];
// }

// // interface Admin extends User, AdminFeature {}
// interface Admin extends User {
//   permissions: ('read' | 'write')[];
// }

// Declaration Merging
// interface User {
//   name: string;
// }
// interface User {
//   email: string;
// }

// interface Request {
//   body: any;
// }

// interface Request {
//   user: { name: string };
// }

// const u: User = { name: 'aaa', email: 'aaaaa' };

// type User = {
//   name: string;
// }
// type User =  {
//   email: string;
// }

// type AlphaNum = string | number;
// type ProductCardProps = {};
// interface ProductCardProps {}

// function ProductCard(props: ProductCardProps) {}

// type User = {
//   name: string;
//   email: string;
// };

// interface User {
//   name: string;
//   email: string;
// }

// function log(u: User) {
//   console.log(u);
// }

// log({ name: 'john', email: 'j@mail.com', age: 30 });
// const user = { name: 'john', email: 'j@mail.com', age: 30, dob: '2025-08-9' };
// log(user);

// function log(a: string): string {
//   return a;
// }

// const logExpress = function (a: string): string {
//   return a;
// };

// const logArrow = (a: string): string => a;

// function logConsole(a: string) {
//   console.log(a);
// }

// const nums: number[] = [2, 5, 3];
// nums.map(el => {});

// function sayHi(name?: string) {
//   console.log(`Hi ${name}`);
// }

// function sayHi(name: string = 'anonymous') {
//   console.log(`Hi ${name}`);
// }

// sayHi();

// function sum(...nums: number[]): number {
//   return nums.reduce((acc, el) => acc + el, 0);
// }

// type ComponentProps = {
//   name: string;
//   id: number;
// };
// function Component({ name, id }: ComponentProps) {}

// let fn: (a: number, b: number) => string;
// fn = (num1, num2) => {
//   return (num1 + num2).toString();
// };

// type Fn = (a: number, b: number) => string;
// let fn1: Fn = (z, y) => {
//   return 'Hi' + z + y;
// };

// function read(cb: (a: string) => void) {
//   cb('hi');
// }

// type Product = {
//   name: string;
//   price: number;
//   getDetail: () => void;
// };

// type Product = {
//   name: string;
//   price: number;
//   getDetail(a: string): boolean;
// };

// const p: Product = {
//   name: 'cocacola',
//   price: 40,
//   // getDetail: function() {}
//   getDetail(abcd) {}
// };

// function getUser(id: number) {}
// function getUser(email: number, isActive: boolean) {}

// function combine(a: number, b: number): number;
// function combine(a: string, b: string): string;

// function combine(input1: number | string, input2: number | string) {
//   if (typeof input1 === 'number' && typeof input2 === 'number') {
//     return input1 + input2;
//   } else if (typeof input1 === 'string' && typeof input2 === 'string') {
//     return input1 + input2;
//   }
// }

// combine('a', 'b');
// combine(1, 3);

// async function fetchUser(): Promise<{ id: number; name: string }> {
//   return { id: 1, name: 'jo' };
// }

// let a: string | number | boolean;
// type User = {
//   name: string;
// };
// type Admin = User & { isAdmin: boolean }; // { name: string; isAdmin: boolean }

// function showDashBoard(u: User | Admin) {
//   if ('isAdmin' in u) {
//     u.isAdmin
//   } else {
//     u
//   }

// }

// function convert(a: number | string) {
//   if (typeof a === 'number') {
//     console.log(a.toFixed(2));
//   } else {
//     console.log(a.toUpperCase());
//   }
// }
// convert(67);

// type User = {
//   name: string;
// };
// function showDashBoard(u: User | null) {
//   if (u) {
//     console.log(`hello ${u.name}`);
//   } else {
//     console.log('hello guest');
//   }
// }

// async function fetchUser(id: number): Promise<User | null> {}
// function show(status: 'loading' | 'success' | 'error') {
//   if (status === 'loading') {
//     console.log('Load ....');
//   } else if (status === 'success') {
//     console.log('Data successfully fetch');
//   } else {
//     console.log('Something wrong');
//   }
// }

// function test(a: number | string, b: boolean | string) {
//   if (a == b) {
//     a.toLowerCase();
//     b.toUpperCase();
//   } else {
//   }
// }
// test(0, false);

// const d = new Date(); // d called instance, Date called Class
// console.log(d instanceof Date);
// console.log(d instanceof Object);

// type Circle = {
//   type: 'circle';
//   radius: number;
// };

// type Square = {
//   type: 'square';
//   sideLength: number;
// };

// type Triangle = {
//   type: 'triangle';
//   base: number;
//   height: number;
// };

// type Rectangle = {
//   type: 'rectangle';
//   base: number;
//   height: number;
// };

// function calcArea(shape: Circle | Square | Triangle | Rectangle) {
//   if (shape.type === 'circle') {
//     return Math.PI * shape.radius ** 2;
//   }
//   if (shape.type === 'square') {
//     return shape.sideLength ** 2;
//   }
// }

// type SuccessResponse<T> = {
//   success: true;
//   data?: T;
//   message: string;
// };

// type ErrorResponse = {
//   success: false;
//   message: string;
// };

// type ApiResponse = SuccessResponse<string> | ErrorResponse;

// function showApiResult(result: ApiResponse) {
//   if (result.success) {
//     console.log(result.data);
//   } else {
//     result.message;
//   }
// }

// type Button = {
//   type: string;
//   className: string;
// };
// type Anchor = {
//   href: number;
// };

// function isButton(el: Button | Anchor): el is Button {
//   return 'type' in (el as Button | Anchor);
// }

// let a = {type: 'aaa', className: 'aaa'}
// if (isButton(a)) {
// a
// }

// example({ type: 'button' });

// function Button({href, ...props}) {
//  if (isButton()) {
//   return <button {...props}>
//  }
//  return <a {...props}

// }
// <Button href="google.com" />
