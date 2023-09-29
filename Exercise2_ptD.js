const ages = [25, 31, 42, 77];

const new_ages = ages.map(
    (num) => {
        if(num < 70) {
            return num * 2;
        }
        else {
            return num;
        }
    }
);

console.log(new_ages);