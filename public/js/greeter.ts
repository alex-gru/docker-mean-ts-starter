class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
}
//noinspection TypeScriptUnresolvedVariable (var in index)
const greeter = new Greeter(text);

document.body.innerHTML = greeter.greet();