// --------------------------------------------------------------
//  ------------  to "DEFINE Type Explicitily"
let nambo = <string>'name';
let nam: string = 'name';
// more than one type
let surname: string | number = 32;

// --------------------------------------------------------------
//  ------------  For "FUNCTIONS"
// can define the "return" type of of functions
// inCase we don't know - "generics"

const func = (n: number, m: string): number => {
  return 0;
};

// --------------------------------------------------------------
//  ------------  "TYPE Alias"
// for a var can define custom datatype
type UserName = (n: number, m: number) => number;

const func1: UserName = (n, m) => {
  return n + m;
};

// --------------------------------------------------------------
// ------------  "ARRAY'S"
// if array is defined hover on it
const arr = [12, 24, 36, 48, '45'];

// option 1
const arr1: (string | number)[] = [12, 24, 36, 48];

// option 2
// prefer this type
const arr2: Array<string | number> = [];

// --------------------------------------------------------------
// ------------ "TUPLES" (fixed size array)
const tup: [number, number, number] = [12, 24, 36];

// --------------------------------------------------------------
// ------------ "OBJECTS"

// option 1
const obj: {
  height: number;
  weight: number;
} = {
  height: 344,
  weight: 23,
};

// option 2
type Obj = {
  height: number;
  weight: number;
  gender?: string;      // gender is now optional "?"
};

const obj1: Obj = {
  height: 190,
  weight: 23,
  gender: 'M',
};

// --------------------------------------------------------------
// ------------ "INTERFACE" ------------
// it's like class
// use it when needed to work with "Class" / "Object"

interface Obj2 {
  height: number;
  weight: number;
  gender?: string;
}

// inherited Obj property
interface NewObj extends Obj {
  scholar: true;
  func: UserName;
}

// this will need height and weight even if we had nothing in NewObj
const testInt: NewObj = {
  height: 190,
  weight: 50,
  scholar: true,
  func: (n, m) => {
    console.log(n * m);
    return n * m;
  },
};

// testInt?.func(20, 20);     -- this wil give undefined "?" remove it
testInt.func(20, 20);


// --------------------------------------------------------------
// ------------ "FUNCTIONS"

type UserName2 = (a: number, m: number, l?: number) => number | string;
// name does'nt matter
const func2: UserName2 = (n, m, l) => {
  // as "l" is optional
  if (typeof l === 'undefined') return 'l was not provided';
  return n + m;
};


// --------------------------------------------------------------
// ------------Rest Operator (...m:Number[])
type UserName3 = (a: number, m: number, l?: number) => number | string;

const func3 = (...m: number[]) => {
  return m;
};
func3(2, 3, 4, 5, 6, 7, 8);

// OR
type UserName4 = (...m: number[]) => number[]; 
const func4: UserName4 = (...m) => {
  return m;
};
func4(2, 3, 4, 5, 6, 7, 8);

// Functions
function test(n: number): number {
  return 45;
}

// --------------------------------------------------------------
// ------------"Functions with Object"
// will get "product" as Object

interface ProductType {
  name: string;
  stock: number;
  price: number;
  photo: string;
  readonly id: string; // ---- "READONLY property"
}

type GetDataType = (product: ProductType) => void;

const getData: GetDataType = (product) => {
  // product.id = "eur";      -- cannot edit it as it is read only
  console.log(product);
};

const productOne: ProductType = {
  name: 'RollsRoyce',
  stock: 3232,
  price: 99999,
  photo: '',
  id: 'productid1',
};

getData(productOne);


// --------------------------------------------------------------
// ------------ "NEVER TYPE"
//  in case of error "Never is returned" [if using throw]
const errorHandler = (): never => {
  throw new Error();
};

const errorHandler1 = () => {
  return new Error();
};

// ------------"CLASSES" ------------
class Player {
  // class player with default value
  private height = 34; // ---- to make a private var (accessible in Js)
  public weight = 20;

  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }

  myHeight = () => {
    return this.height;
  };
}

// OPTION 2
class Player2 {
  // class player with default value
  public readonly id: string;
  constructor(private height: number, public weight: number, protected power: number) {
    this.id = String(Math.random() * 100);
  }

  get getMyHeight(): number {
    return this.height;
  } // getter function ["Now no need to call like getMyHeight() instead getMyHeight"]

  set setMyHeight(val: number) {
    // setter function this need no return type
    this.height = val;
  }
}

const player2 = new Player2(100, 150, 12);
console.log('id', player2.id);


// --------------------------------------------------------------
//  ----------Inheritance
class Player3 extends Player2 {
  special: boolean;
  readonly id: string;
  constructor(height: number, weight: number, power: number, special: boolean) {
    super(height, weight, power); // this is for parent "values" given here will go to Player2 constructor
    this.special = special;
    this.id = String(Math.random() * 100);
  }

  getMyPower = () => {
    // power accessible as it is protected
    this.power;
  };
}

const player3 = new Player3(100, 150, 12, false);
console.log('weight', player3.weight);
console.log('power', player3.getMyHeight);
console.log('id', player3.id);

// ---- Make Class through interface -----  [implements]

interface ProductType2 {
  name: string;
  price: number;
  stock: number;
  // id: string;
  getId: () => string;
  offer?: boolean;
}

class Product implements ProductType2 {
  //  this private id is not possible bcoz interface don't have as it don't support
  private id: string = String(Math.random() * 100);
  private propertyAddition: boolean = true;
  constructor(public name: string, public price: number, public stock: number) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
  getId= () => this.id;
  
}


// --------------------------------------------------------------
// Good Way to do above 

interface ProductType3 {
    name: string;
    price: number;
    stock: number;
    offer?: boolean;
  }

interface GiveId { 
    getId: () => string;
}
  
  class Product2 implements ProductType3, GiveId {
    //  this private id is not possible bcoz interface don't have as it don't support
    private id: string = String(Math.random() * 100);
    constructor(public name: string, public price: number, public stock: number) {
      this.name = name;
      this.price = price;
      this.stock = stock;
    }
    getId= () => this.id;
    
  }


// --------------------------------------------------------------
//  -----------[DOM manipulation] ------------
// ------------ TYPE ASSERTION -------- (Bp mt sika)

const btn = <HTMLElement> document.getElementsByClassName("btn");

// option 2 -- good way
const btn1 =  document.getElementsByClassName("btn") as HTMLElement;


// option 3  not null
const btn2 =  document.getElementsByClassName("btn")!;

btn.onclick;

const img =  document.getElementsByClassName("img") as HTMLImageElement;
img.src;


const form = document.getElementById("myform") as HTMLFormElement;
const myinput = document.querySelector("form > input") as HTMLInputElement;

const display = document.getElementById("display") as HTMLElement;

form.onsubmit = (e: SubmitEvent) => {
    e.preventDefault();
    console.log(typeof myinput.value)
    display.innerText = String(Number(myinput.value) + 20);
}

interface Person {
    name: string,
    email: string,
}
const myObj:Person = {
    name: "Naman",
    email: "@gamil.com"
}
const getName = ():string => {
    return myObj["name"];
}
const getEmail = ():string => {
    return myObj.email;
}
console.log(myObj.name);

// to make one function
// dynamic keys
const getData3 = (key: string): string => {
    return myObj[key];
}

//  cannot do this way 
// 2 options to do this 
// 1- dynamic Key  ----------------------------------------------
interface Person2 {
    [key: string] : string;
}
const myObj2:Person2 = {
    name: "Naman",
    email: "@gamil.com"
}


// to make one function
const getData2 = (key: string): string => {
    return myObj2[key];
}

// this thing creates a Problem 
// it won't give error

console.log(getData2("test"));      // it should be error 

// 1- can be solved by check on getData if key available give o/p
// 2-  Person (1st object)
const getData4 = (key: keyof Person): string => {
    return myObj[key];
}


// --------------------------------------------------------------
// ---------"UTILITY TYPES"---------
// EASE OF ACCESS
// ---1-Partial <Type> -- make "type" optional.
type User= {
    name: string,
    eamil: string
}

type User1 = Partial<User>;         // --

// ------------------------------------------------
// ---2-Required <Type>  -- make "type" required
type User2= {
    name?: string,
    amil?: string
}

type User3 = Required<User>;

// ------------------------------------------------
// ---3-Readonly
type User4 = Readonly<User>;

// ------------------------------------------------
// ---4- Record<keys, Type> [when all keys are of same type]
type User5 = {
  name: string;
  email: string;
  gender:string;
}

type User6 = Record<"name"| "email"|"gender","string">


// EXAMPLE
interface UserInfo {
  age: number;
}

type UserName5 = "john"| "david" | "elon";

const users: Record<UserName5,UserInfo> = {
  john: {age: 34},
  david: {age: 34},
  elon: {age: 34},

}
// USE WHEN NEED TO MATCH TO DATA
 
// ------------------------------------------------
// ---5- PICK<TYPE, KEYS>
//  pick which one needed
interface OrderInfo{
  readonly id: string;
  user: string;
  city: string;
  state: string;
  country: string;
  status: string
} 

type ShippingInfo = Pick<OrderInfo, "city"| "state"| "country">

// ------------------------------------------------
// ---6- OMIT<TYPE, KEYS>
//  leave which one are not needed
interface OrderInfo2{
  readonly id: string;
  user: string;
  city: string;
  state: string;
  country: string;
  status: string
} 

type ShippingInfo2 = Omit<OrderInfo2, "user"| "id">

// -------------------------------------------------
// ---7- EXCLUDE<TYPE, EXCLUDE UNION>
type MyUnion = string | number | boolean;
type Random = Exclude<MyUnion, number>;
// From "MyUnion" remove/subtract "number"
// 

// -------------------------------------------------
// ---8- EXTRACT<TYPE, UNONION>
type MyUnion2 = string | number | boolean;
type Random2 = Extract<MyUnion, number>;
// From "MyUnion" take only "number"

// ------------------------------------------------
// ---9- NonNullable <Type>
type MyUnion3 = string| number| boolean | null | undefined;
type Random3 = NonNullable<MyUnion3> 
// this will REMOVE "undefined" and "null"
type Random4 = Exclude<MyUnion3, undefined | null>


// ------------------------------------------------
// ---10- Parameters<Type>
const myfunc2 = (a:number, b:string) => {
  console.log(a + b);
}

type Random5 = Parameters<typeof myfunc2>
// This will give us the "parameters" of any function 

// ------------------------------------------------
// ---11- ConstructorParameters<Type>
class SampleClass {
  constructor(public a: string, public t: string) { 
  }
}

type Random6 = ConstructorParameters<typeof SampleClass>


// ------------------------------------------------
// ---12- ReturnType<Type>
// To know the type of any function
const myfunc3 = (a:number, b:string):string => {
  console.log(a + b);
  return a+b;
}
type funcType = ReturnType<typeof myfunc3>
class SampleClass2 {
  constructor(public a: string, public t: string) { 
  }
}

type Random7 = ConstructorParameters<typeof SampleClass2>

// ------------------------------------------------
// ---13- Instance<Type>
// to extract the instance type of a constructor function or class type.
class Person3{
  constructor(
    public name: string,
    public age: number,
  )
}

type Person3Instance = InstanceType<typeof Person3>;

// ------------------------------------------------
// ------GENERICS 
// 

// --problem--
const func5 = (n: number): number => {
  return n;
}

const ans = func5(20);

// ===> this will work inCase we know the type but problem arise when we don't know the type
//  any: will work ==> but then, there will be no benifit of typeScript
// -- This is where "GENERICS" comes into the game.

const func6 = <CustomGeneric>(n: CustomGeneric): CustomGeneric => {
  return n; 
}

const test1 = func6(20);
const test2 = func6("20");
const test3 = func6(true);

// ====> "CustomGeneric" -> is like a placeholder whatever we will send it will be replaced with that
// like:: test1 -> number : number, test2 -> string : string

type Person4 = {
  name: string,
  age: number
}

const func7 = <T>(n: T): T => {
  return n; 
}

const person1: Person4 = {
  name:"NAMAN",
  age: 21
}

const ans2 = func7<String>(person1);
// this will give errror as we have declared the function as "string" so 
// we need to pass a string not the type"string"

const ans3 = func7<Person4>(person1);

ans3. // this way can exccess person

const arr3: number[] = [];
 

const func8 = <T, U>(n: T, m: U): object => {
  return {n,m}; 
}

// this will tell return 
const func9 = <T, U>(n: T, m: U): {n: T, m: U} => {
  return {n,m}; 
}

// to extend 
type Person5 = {
  name: string,
  age: number,
  email: string
}

const user: Person4 ={
  name:"Naman",
  age: 21,
}
const user2: Person5 = {
  name:"Naman",
  age: 21,
  email: "@gmail.com",
}

const func10 = <T, U extends T>(n: T, m: U): {n: T, m: U} => {
  return {n,m}; 
}
 
const test4 = func10<Person4, Person5>(user, user2);

// -----------
// -- Use of Generics
type PeopleData = {
  name:  string,
  age: number
}

const users2: PeopleData[] = [
  {
    name:"Naman",
    age: 21,
  },
  {
    name:"user1",
    age: 23,
  },
  {
    name:"user2",
    age: 21,
  }
];

const filterByPeoples = < T, U extends keyof T> (
  // U extends keyof T ==> object ka key
  arr: T[],
  property: U,
  value: T[U]
): T[] => {
  return arr.filter((item) => item[property] === value);
}

// ---->
const filterByPeopleName = filterByPeoples(users2, "name", "Naman");
const filterByPeopleAge = filterByPeoples(users2, "age", 21);
 


/**
 * advantage: intelliense
 * -- to define a var "Type explictily"
 *      let a: string = 23;
 *      let nameee:string;
 *
 * --  [:any] -> can use this type but avoid if possible
 *
 */
