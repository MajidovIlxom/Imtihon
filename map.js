function mapStr(string, callback) {
    return Array.from(string).map(callback).join('');
}

let string = "Hello, World!";
let ls = mapStr(string, char => char.charCodeAt());
console.log(ls); 