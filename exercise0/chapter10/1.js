var myLib = {
	math: {
		real: {
			add: function (a, b){ return a+b; },
			sub: function (a, b){ return a-b; },
			mul: function (a, b){ return a*b; }
		},
		complex: {
			Num: function (real, img){/*code goes here*/},
			add: function (a, b){ /*code goes here*/},
			sub: function (a, b){ /*code goes here*/},
			mul: function (a, b){ /*code goes here*/}
        },
        matrix: {
            add: function (a, b){ /*matrix addition*/},
            sub: function (a, b){ /*matrix subtraction*/},
            mul: function (a, b){ /*matrix multiplication*/},
            eye: function (size){ /*identity matrix*/},
            dot: function (m, a){ /*dot product*/},
            times:function(a, b){ /*element-wise multiplication*/}
        }
	}
};

// Using the with statement

let answer;
let ans;

with (myLib.math.real) {
    answer = sub(add(20,22), mul(2,5));
}

with (myLib.math) {
    ans = matrix.times(
        matrix.eye(4),
        complex.sub(
            new complex.Num(real.add(5,2), -3),
            new complex.Num(3, 4)
        )
    );
}
console.log(answer);

// Using references

const real = myLib.math.real;
const complex = myLib.math.complex;
const matrix = myLib.math.matrix;

let answer2 = real.sub(real.add(20, 22), real.mul(2, 5));
console.log(answer2);

let ans2 = matrix.times(
    matrix.eye(4),
    complex.sub(
        new complex.Num(real.add(5,2), -3),
        new complex.Num(3, 4)
    )
);
