// 타입 종류

/// 문자
let str: string;
let red: string = "Red";
let green: string = 'Green';
let myColor: string = `My color is ${red}`;
let yourColor: string = 'Your color is' + green;

/// 숫자
let num: number;
let integer: number = 6;
let float: number = 3.14;
let inifinity: number = Infinity;
let nan: number = NaN;

/// 불린
let isBoolean: boolean;
let isDone: boolean = false;

/// Null / Undefined
let nul: null;
let und: undefined;

/// 배열
const fruits: string[] = ['Apple', 'Banana', 'Cherry'];
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const union: (string|number)[] = ['Apple', 1, 2, 'Banana', 3];

/// 객체
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

/// 함수
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

/// Any
let helloWorld: any = 'Hello world';
helloWorld = 123;
helloWorld = false;
helloWorld = null;
helloWorld = {};
helloWorld = [];
helloWorld = function () {};

/// Unknown
const x: any = 123;
const u: unknown = 123;

const any: any = u;
const boo: boolean = x;
const number: number = x;
const array: string[] = x;
const object: { x: string, y: number } = x;
 
/// Tuple
const tuple: [string, number, boolean] = ['a', 1, false];
const users: [number, string, boolean][]
    = [[1, 'Neo', true], [2, 'Evan', false], [3, 'Lewis', true]];

/// Void
function hi(msg: string): void {
    console.log(`Hi ${msg}`);
}
const yoHi: void = hi('Seonwook');

/// Never - 거의 쓸 일 없음
const nev: number[] = [];
nev.push(3);

/// Union
let unions: string | number;
unions = 'Hello type!';
unions = 123;

/// Intersection
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
// 타입 추론(Inference)
// '추론' - 어떠한 판단을 근거로 삼아 다른 판단을 이끌어 냄.

// 1) 초기화된 변수
// 2) 기본 값이 설정된 매개 변수
// 3) 반환 값이 있는 함수

/// 초기화된 변수 `num`
let infNum = 12;

/// 기본 값이 지정된 매개 변수 `b`+ 반환 값이 확실한 함수 `add``
function InfAdd(a: number, b = 2) {
    return a + b;
};


/* --------------- 절취선 --------------- */
// 타입 단언(Assertion)
// '단언' - 주저하지 아니하고 딱 잘라 말함.

// 단언 키워드 - as
// Non-null 단언 선언자 - !

/// 1)
const el = document.querySelector('title');
if (el) {
    el.textContent = 'Hello world?!';
}

/// 2)
function getNumber(x: number | null | undefined) {
    if (x) {
        return Number(x.toFixed(2));
    }
}
getNumber(3.1415926535);
getNumber(null);

/// 3)
function getValue(x: string | number, isNumber: boolean) {
    if (isNumber) {
        return Number((x as number).toFixed(2));
    }
    return (x as string).toUpperCase();
}
getValue('hello world', false); // HELLO WORLD
getValue(3.1415926535, true); // 3.14

/// 할당 단언(Assertion)
let AstNum!: number;
console.log(AstNum);
AstNum = 123;