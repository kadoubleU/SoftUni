function concatenateNames(name1, name2, delimiter) {
    let concatenateResult = `${name1}${delimiter}${name2}`;

    console.log(concatenateResult);
}

concatenateNames('John',
'Smith'
,
'->');
console.log("-------------");
concatenateNames('Jan',
'White'
,
'<->');
console.log("-------------");
concatenateNames('Linda'
,
'Terry'
,
'=>'
);