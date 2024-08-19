const covid_data = [

  // no   district +ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine
  [  1,  'Ernakulam',    34000,2000,23000,20000,2000],
  [  2,  'Idukki',    14000,3000,25000,30000,1000],
  [  3,  'Thrissur',       24000,4000,33000,24000,2500],
  [  4,  'Pathanamthitta', 20000,2000,45000,22000,1500],
  [  5,  'Kozhikode',44000,5000,12000,21000,500],
  [  6,  'Palakkad',12000,1000,20000,23000,3400],
  [  7,  'Kottayam',27000,1500,27000,14000,1000],
  [  8,  'Kollam',14000,2500,25000,18000,2700]
];



covid_data.forEach((a) => console.log(a[1]));

const hv = covid_data.reduce((a, b) => a[2] > b[2] ? a : b);
console.log(hv);

const hvVcc = covid_data.reduce((a, b) => a[7] > b[7] ? a : b );

const lv = covid_data.reduce((a, b) => a[2] <  b[2] ? a : b);
console.log(lv);

//4. sort data with +ve case in descending order -

const desOrder = covid_data.sort((a, b) => b[2] - a[2]);

console.log(desOrder);

//5. is district with +ve cases > 15000 -

const filterVe = covid_data.filter((a [2] => 15000));

console.log(filterVe);


