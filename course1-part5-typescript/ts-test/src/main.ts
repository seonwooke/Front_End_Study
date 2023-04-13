import _ from 'lodash';
import { getFullName, SUser } from './user';

/// 타입 종류

// 문자
let str: string;
let red: string = "Red";
let green: string = 'Green';
let myColor: string = `My color is ${red}`;
let yourColor: string = 'Your color is' + green;

// 숫자
let num: number;
let integer: number = 6;
let float: number = 3.14;
let inifinity: number = Infinity;
let nan: number = NaN;

// 불린
let isBoolean: boolean;
let isDone: boolean = false;

// Null / Undefined
let nul: null;
let und: undefined;

// 배열
const fruits: string[] = ['Apple', 'Banana', 'Cherry'];
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const union: (string|number)[] = ['Apple', 1, 2, 'Banana', 3];

// 객체
const obj: object = {};
const arr: object = [];
const func: object = function () {};

interface User {
    name: string
    age: number
    isValid: boolean
}
const userA: User = {
    name: 'Seonwook Kim',
    age: 27,
    isValid: true
}
const userB: User = {
    name: 'Neo',
    age: 22,
    isValid: false
}

// 함수
const add: (x: number, y: number) => number = function (x, y) {
    return x + y ;
}
const add_two = function (x: number, y: number): number {
    return x + y ;
}
const a: number = add(1, 2);

const hello: () => void = function () {
    console.log('Hello World!');
}
const hello_two = function (): void {
    console.log('Hello World!');
}
const h: void = hello();

// Any
let helloWorld: any = 'Hello world';
helloWorld = 123;
helloWorld = false;
helloWorld = null;
helloWorld = {};
helloWorld = [];
helloWorld = function () {};

// Unknown
const x: any = 123;
const u: unknown = 123;

const any: any = u;
const boo: boolean = x;
const number: number = x;
const array: string[] = x;
const object: { x: string, y: number } = x;
 
// Tuple
const tuple: [string, number, boolean] = ['a', 1, false];
const users: [number, string, boolean][]
    = [[1, 'Neo', true], [2, 'Evan', false], [3, 'Lewis', true]];

// Void
function hi(msg: string): void {
    console.log(`Hi ${msg}`);
}
const yoHi: void = hi('Seonwook');

// Never - 거의 쓸 일 없음
const nev: number[] = [];
nev.push(3);

// Union
let unions: string | number;
unions = 'Hello type!';
unions = 123;

// Intersection
interface User {
    name: string,
    age: number
};

interface Validation {
    isValid: boolean
};

const heropy: User & Validation = {
    name: 'Neo',
    age: 85,
    isValid: true
};


/* --------------- 절취선 --------------- */
/// 타입 추론(Inference)
/// '추론' - 어떠한 판단을 근거로 삼아 다른 판단을 이끌어 냄.

/// 1) 초기화된 변수
/// 2) 기본 값이 설정된 매개 변수
/// 3) 반환 값이 있는 함수

// 초기화된 변수 `num`
let infNum = 12;

// 기본 값이 지정된 매개 변수 `b`+ 반환 값이 확실한 함수 `add``
function InfAdd(a: number, b = 2) {
    return a + b;
};


/* --------------- 절취선 --------------- */
/// 타입 단언(Assertion)
/// '단언' - 주저하지 아니하고 딱 잘라 말함.

/// 단언 키워드 - as
/// Non-null 단언 선언자 - !

// 1)
const el = document.querySelector('title');
if (el) {
    el.textContent = 'Hello world?!';
}

// 2)
function getNumber(x: number | null | undefined) {
    if (x) {
        return Number(x.toFixed(2));
    }
}
getNumber(3.1415926535);
getNumber(null);

// 3)
function getValue(x: string | number, isNumber: boolean) {
    if (isNumber) {
        return Number((x as number).toFixed(2));
    }
    return (x as string).toUpperCase();
}
getValue('hello world', false); // HELLO WORLD
getValue(3.1415926535, true); // 3.14

// 할당 단언(Assertion)
let AstNum!: number;
console.log(AstNum);
AstNum = 123;

// 타입 가드(Guards)
function logText(el: Element) {
    console.log(el.textContent);
}
const h1El = document.querySelector('h1');
if (h1El instanceof HTMLHeadingElement) {
    logText(h1El);
}

function GurAdd(val: string | number) {
    let res = 'Result = >';
    if (typeof val === 'number') {
        res += val.toFixed(2);
    }
    if (typeof val == 'string') {
        res += val.toUpperCase();
    }
    console.log(res)
}
GurAdd(3.141592);
GurAdd('hell world');


/* --------------- 절취선 --------------- */
/// 인터페이스(Interface)

// 선택적 속성 - ?
// 읽기전용 속성 = readonly : 값을 할당할 수 없음
interface InterUser {
    name: string;
    readonly age: number;
    isValid?: boolean;
}
const interHeropy: InterUser = {
    name: 'Heropy',
    age: 85,
    isValid: true
}
interHeropy.isValid = false;
const interNeo: InterUser = {
    name: 'Neo',
    age: 102,
}

// 함수 타입 - 호출 시그니처(Call Signature)
interface GetName {
    (param: string): string;
}
interface CsUser {
    name: string;
    age: number;
    getName: GetName;
}
const csHeropy: CsUser = {
    name: 'Heropy',
    age: 85,
    getName(message: string) {
        console.log(message);
        return this.name;
    }
}
csHeropy.getName('Hello!');

// 인덱스 가능 타입 - 인덱스 시그니처(Index Signature)
// 배열
interface IdxFruits {
    [item: number]: string;
}
const idxFruits: IdxFruits = ['Apple', 'Banana', 'Cherry'];
console.log(idxFruits[1]);

// 객체
interface IdxUser {
    [key: string] : unknown;
    name: string;
    age: number;
}
const idxHeropy: IdxUser = {
    name: 'Heropy',
    age: 85
}
idxHeropy['isValid'] = true;
idxHeropy['emails'] = ['thesecon@gmail.com', 'text@gmail.com'];
console.log(idxHeropy);

interface Payload {
    [key: string]: unknown;
}
function logValues(payload: Payload) {
    for (const key in payload) {
        console.log(payload[key]);
    }
}
logValues(idxHeropy);

// 확장(상속)
interface UserA {
    name: string;
    age: number;
}
interface UserB extends UserA {
    isValid: boolean;
}

const extHeropy: UserA = {
    name: 'Heropy',
    age: 85
}
const extNeo: UserB = {
    name: 'Neo',
    age: 102,
    isValid: true
}

interface FullName {
    firstName: string;
    lastName: string;
}
interface FullName {
    middleName: string;
    lastName: string;
}

const fullName: FullName = {
    firstName: 'Tomas',
    middleName: 'Sean',
    lastName: 'Connery'
}


/* --------------- 절취선 --------------- */
/// 타입 별칭(Alias)
type TypeA = string;
type TypeB = string | number | boolean;
type TypeUser = {
    name: string;
    age: number;
    isValid: boolean;
} | [string, number, boolean];

const typeUserA: User = {
    name: 'Neo',
    age: 85,
    isValid: true
}
const typeUserB: TypeUser = ['Evan', 36, false];

function someFunc(param: TypeB): TypeA {
    switch (typeof param) {
        case 'string':
            return param.toUpperCase();
        case 'number':
            return param.toFixed(2);
        default:
            return 'Boolean';
    }
}


/* --------------- 절취선 --------------- */
/// 함수 - 명시적 this
interface Cat {
    name: string;
    age: number;
}
const cat: Cat = {
    name: 'Lucy',
    age: 3
}

function thisHello(this: Cat, message: string) {
    console.log(`Hello ${this.name}, ${message}`);
}
thisHello.call(cat, 'You are pretty awesome!');


/// 함수 - 오버로딩(Overloading)
// 1)
function add1(a: string,  b: string) {
    return a + b;
}
function add2(a: number, b: number) {
    return a + b;
}
add1('hello', 'world');
add2(1, 2);

// 2)
function olAdd(a: string, b: string): string;
function olAdd(a: number, b: number): number;
function olAdd(a: any, b: any) {
    return a + b;
}
olAdd('hello', 'world');
olAdd(1, 2);


/* --------------- 절취선 --------------- */
/// 클래스

/// 접근 제어자(Access Modifiers)
/// public - 어디서나 자유롭게 접근 가능, 클래스 바디에서 생략 가능
/// protected - 나와 파생된 후손 클래스 내에서 접근 가능
/// private - 내 클레스에서만 접근 가능
class ClassUserA {
    constructor(
        public first: string,
        public last: string,
        public age: number
    ) {
         
    }
    
    getAge() {
        return `${this.first} ${this.last} is ${this.age}`;
    }
}

class ClassUserB extends ClassUserA {
    getAge() {
        return `${this.first} ${this.last} is ${this.age}`;
    }
}

class ClassUserC extends ClassUserB {
    getAge() {
        return `${this.first} ${this.last} is ${this.age}`;
    }
}

const classNeo = new ClassUserA('Neo', 'Anderson', 102);
console.log(classNeo.first);
console.log(classNeo.last);
console.log(classNeo.age);


/* --------------- 절취선 --------------- */
const LodStr = 'the brown fox jumbs over the lazy';
console.log(_.camelCase(LodStr));
console.log(_.snakeCase(LodStr));
console.log(_.kebabCase(LodStr));

const typeHeropy = {
    firstName: 'Heropy',
    lastName: 'Park',
    age: 85,
    isValid: true
}
const typeFullName = getFullName(typeHeropy);
console.log(typeFullName);
console.log(typeHeropy.isValid);