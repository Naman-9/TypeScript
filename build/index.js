"use strict";
//  ------------  to "DEFINE Type Explicitily"
let nambo = 'name';
let nam = 'name';
// more than one type
let surname = 32;
//  ------------  For "FUNCTIONS"
// can define the "return" type of of functions
// inCase we don't know - "generics"
const func = (n, m) => {
    return 0;
};
const func1 = (n, m) => {
    return n + m;
};
// ------------  "ARRAY'S"
// if array is defined hover on it
const arr = [12, 24, 36, 48, '45'];
// option 1
const arr1 = [12, 24, 36, 48];
// option 2
// prefer this type
const arr2 = [];
// ------------ "TUPLES" (fixed size array)
const tup = [12, 24, 36];
// ------------ "OBJECTS"
// option 1
const obj = {
    height: 344,
    weight: 23,
};
const obj1 = {
    height: 190,
    weight: 23,
    gender: 'M',
};
// this will need height and weight even if we had nothing in NewObj
const testInt = {
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
// name does'nt matter
const func2 = (n, m, l) => {
    // as "l" is optional
    if (typeof l === 'undefined')
        return 'l was not provided';
    return n + m;
};
const func3 = (...m) => {
    return m;
};
func3(2, 3, 4, 5, 6, 7, 8);
const func4 = (...m) => {
    return m;
};
func4(2, 3, 4, 5, 6, 7, 8);
// Functions
function test(n) {
    return 45;
}
const getData = (product) => {
    // product.id = "eur";      -- cannot edit it as it is read only
    console.log(product);
};
const productOne = {
    name: 'RollsRoyce',
    stock: 3232,
    price: 99999,
    photo: '',
    id: 'productid1',
};
getData(productOne);
// ------------ "NEVER TYPE"
//  in case of error "Never is returned" [if using throw]
const errorHandler = () => {
    throw new Error();
};
const errorHandler1 = () => {
    return new Error();
};
// ------------"CLASSES" ------------
class Player {
    constructor(height, weight) {
        // class player with default value
        this.height = 34; // ---- to make a private var (accessible in Js)
        this.weight = 20;
        this.myHeight = () => {
            return this.height;
        };
        this.height = height;
        this.weight = weight;
    }
}
// OPTION 2
class Player2 {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.random() * 100);
    }
    get getMyHeight() {
        return this.height;
    } // getter function ["Now no need to call like getMyHeight() instead getMyHeight"]
    set setMyHeight(val) {
        // setter function this need no return type
        this.height = val;
    }
}
const player2 = new Player2(100, 150, 12);
console.log('id', player2.id);
//  ----------Inheritance
class Player3 extends Player2 {
    constructor(height, weight, power, special) {
        super(height, weight, power); // this is for parent "values" given here will go to Player2 constructor
        this.getMyPower = () => {
            // power accessible as it is protected
            this.power;
        };
        this.special = special;
        this.id = String(Math.random() * 100);
    }
}
const player3 = new Player3(100, 150, 12, false);
console.log('weight', player3.weight);
console.log('power', player3.getMyHeight);
console.log('id', player3.id);
class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        //  this private id is not possible bcoz interface don't have as it don't support
        this.id = String(Math.random() * 100);
        this.propertyAddition = true;
        this.getId = () => this.id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}
class Product2 {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        //  this private id is not possible bcoz interface don't have as it don't support
        this.id = String(Math.random() * 100);
        this.getId = () => this.id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}
//  -----------[DOM manipulation] ------------
// ------------ TYPE ASSERTION -------- (Bp mt sika)
const btn = document.getElementsByClassName("btn");
// option 2 -- good way
const btn1 = document.getElementsByClassName("btn");
// option 3  not null
const btn2 = document.getElementsByClassName("btn");
btn.onclick;
const img = document.getElementsByClassName("img");
img.src;
const form = document.getElementById("myform");
const myinput = document.querySelector("form > input");
const display = document.getElementById("display");
form.onsubmit = (e) => {
    e.preventDefault();
    console.log(typeof myinput.value);
    display.innerText = String(Number(myinput.value) + 20);
};
const myObj = {
    name: "Naman",
    email: "@gamil.com"
};
const getName = () => {
    return myObj["name"];
};
const getEmail = () => {
    return myObj.email;
};
console.log(myObj.name);
// to make one function
const getData3 = (key) => {
    return myObj[key];
};
const myObj2 = {
    name: "Naman",
    email: "@gamil.com"
};
// to make one function
const getData2 = (key) => {
    return myObj2[key];
};
// this thing creates a Problem 
// it won't give error
console.log(getData2("test")); // it should be error 
// 1- can be solved by check on getData if key available give o/p
// 2-  Person (1st object)
const getData4 = (key) => {
    return myObj[key];
};
// Readonly
/**
 * advantage: intelliense
 * -- to define a var "Type explictily"
 *      let a: string = 23;
 *      let nameee:string;
 *
 * --  [:any] -> can use this type but avoid if possible
 *
 */
