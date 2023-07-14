const funk = (a) => {
    return (b) => {
        return b? funk(a+b) : a;
    }
}
console.log(funk("a")("b")("s")("q")("w")("e")("r")("t")("y")());
