interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user: Person = { firstName: "John", lastName: "Doe" };

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
element.innerHTML = greeter(user);

let inputElement: HTMLInputElement = <HTMLInputElement> document.getElementById("input");

let selectorElement: HTMLSelectElement = <HTMLSelectElement> document.getElementById("selector");


let buttonElement: HTMLButtonElement = <HTMLButtonElement> document.getElementById("button");
buttonElement.addEventListener("click", textChanger);

function textChanger(): void {

    let selector: string = selectorElement.value;
    let inputString: string = inputElement.value;

    let paragraphElement: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("output");

    if(selector == "uppercase") {
        let result = inputString.toUpperCase();
        paragraphElement.innerHTML = "text is now uppercase: " + result;
    } else if (selector == "lowercase") {
        let result = inputString.toLowerCase();
        paragraphElement.innerHTML = "text is now lowercase: " + result;
    }

}
