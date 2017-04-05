class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
}
//noinspection TypeScriptUnresolvedVariable (JShare shared variable)
const greeter = new Greeter(jshare.text.text);

document.body.innerHTML = greeter.greet();