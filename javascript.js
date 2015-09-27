var main = {
    letterArr: null,
    parse: function (_input) {

        this.letterArr       = _input.toUpperCase().split('');
    },
    runMyCode: function () {
        var asciiLetter = null;
        var inputLetter = null;
        var j = 0;

        if ( this.letterArr.length < 1 || this.letterArr.length > 1000 ) {
            throw {
                name:    'rangeError',
                message: 'input is out of expected range'
            };
        }

        for (i = 65; i <= 90; i++) {
            asciiLetter = String.fromCharCode(i);
            if ( this.letterArr.indexOf(asciiLetter) === -1 ) {
                return 'not pangram';
            }
            j++;
        }

        return 'pangram';

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