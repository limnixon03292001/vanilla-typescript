// basic variable and datatype declaration
let hello: String = "world";

//functions

const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
}

console.log(getFullName("haha", "hehe"));


//Objects / Interfaces
interface UserInterface {
    name: string;
    age?: number;
    getMessage(): string
}

const user: UserInterface = {
    name: "Monster",
    age: 4,
    getMessage() {
        return "Hello" + name;
    },
}

const user2: UserInterface = {
    name: "Jack",
    getMessage() {
        return "Hello" + name;
    },
}

console.log(user.getMessage());

//Union & Type alias
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface UserInterface {
    id: ID,
    name: string,
    surname: string
};

const PopularTags: PopularTag[] = ["dragon", "coffee"]; 

const dragonsTag: MaybePopularTag = "dragon";

let username: string = "alex";

let pageName: string | number = "1";

let errorMsg: string | null = null;

let user: UserInterface | null = null;

//void, any, never and unknown TYPE

//if we dont return something in function it wil be read as void
// void is just undefined or null
const doSomething = (): void => {
    console.log("doSomething");
}

// any turns off typescript checking
let foo: any = "foo";


const doSomething2 = (): never => {
    throw 'never'
    console.log("doSomething");
}

let vAny: any = 10;
let vUnknown: unknown = 10; 

let s1: string = vAny;
let s2: string = vUnknown as string;

//type assertion
let pageNum: string = "1";
let numericPageNum: number = (pageNum as unknown ) as number;


// working with DOM

const someElement = document.querySelector(".foo") as HTMLInputElement;

console.log("s", someElement.value);

someElement.addEventListener("blur", (event) => {
    const target = event.target as HTMLInputElement;
    console.log("Event", target.value);
})

//working with class

interface UserInterface1 {
    getFullName(): String;
}

class User implements UserInterface1 {
    //public by default
    firstName: string;  
    protected lastName: string;
    readonly unchangeableName: string;
    static readonly maxAge = 50; //static properties

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    changeUnchangeableName(): void {
        this.unchangeableName = "foo";
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

//inheritance
class Admin extends User {
    private editor: string;

    setEditor(editor: string): void {
        this.editor = editor;
    }
    getEditor(): string{
        return this.editor;
    }
}

const user1 = new User("Monster", "lessons");
console.log(user1.getFullName);

const admin = new Admin("foo", "bar");
console.log(admin.setEditor("Nixon"));

//generics

const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16);
    return {
        ...obj,
        id,
    };
};

interface UserInterface2<T, V> {
    name: string;
    data: T;
    meta: V;
}

const user2: UserInterface2<{ meta: string }, string> = {
    name: "Jack",
    data: {
        meta: "foo",
    },
    meta: "bar",
}

const user3: UserInterface2<string[], string> = {
    name: "John",
    data: ["foo", "bar", "baz"],
    meta: "Doe",
}

const result = addId<UserInterface2>(user2);
console.log("result", result);


// Enums

const statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2,
}

console.log(statuses.inProgress);

enum StatusEnum {
    NotStarted = "notStarted",
    InProgress = "inProgress",
    Done = "Progress",
}

interface Task {
    id: string;
    status: StatusEnum;
}

let notStartedStatus: StatusEnum = StatusEnum.NotStarted;

notStartedStatus = StatusEnum.Done;

console.log("Status", notStartedStatus)