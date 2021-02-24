let totalPassed = 0;

const t1Str = 'JustJavaScript';
let rami = 88;
let natoya = 92;
let max = 68;
let lynn = 100;
t1 = [rami, natoya, max, lynn];
let t1Total = 0;
for (i = 0; i < t1.length; i++) {
    if (t1[i] >= 70) {
        totalPassed++;
    }
    t1Total = t1Total + t1[i];
};
let t1Avg = Math.floor(t1Total / t1.length);

const t2Str = 'We Are Ruby';
let sasha = 82;
let mohammed = 98;
let jennifer = 94;
let denise = 92;
t2 = [sasha, mohammed, jennifer, denise];
let t2Total = 0;
for (i = 0; i < t2.length; i++) {
    if (t2[i] >= 70) {
        totalPassed++;
    }
    t2Total = t2Total + t2[i];
};
let t2Avg = Math.floor(t2Total / t2.length);

let totalAvg = Math.floor((t1Avg + t2Avg) / 2);

console.log(`Team ` + t1Str + ` average score: ` + (t1Avg));
console.log(`Team ` + t2Str + ` average score: ` + (t2Avg));
console.log(`Both team's average score: ` + (totalAvg));
console.log(`Total number of explorers to pass: ` + (totalPassed));