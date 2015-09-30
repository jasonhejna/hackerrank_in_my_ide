var main = {
    n: null,
    parse: function (_input) {

        this.n       = parseFloat(_input);
        
    },
    runMyCode: function () {
        var stairCase = ''
        for (var i = 1; i < (this.n+1); i++) {
            
            var stair = ''
            for (var j = 0; j < (this.n-i); j++) {
                
                stair += ' '
            }
            for (var k = 0; k < i; k++) {
                
                stair += '#'
            }
            stairCase += stair + '\n'
        }

        return stairCase;

    }
}


//The following code is mostly from the hackrank example
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {

    _input += input;
});

process.stdin.on("end", function () {

    main.parse(_input);
    var myOutput = main.runMyCode();
    process.stdout.write(myOutput);
});