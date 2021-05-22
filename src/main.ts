type ID = string;
type PopularTag = string | string[];

interface UserInterface {
    name: string,
    surname: string
}

let username: string = "alex";
let pageName: string | number = "1";
let errorMessage: string | null = null;
let user: UserInterface | null = null;
let someProp: any;