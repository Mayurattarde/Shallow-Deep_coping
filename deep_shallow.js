// Shallow copy is a bit-wise copy of an object
// A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields

var myInfo = {
    name: 'Mayur',
    age: 21,
    workAs: 'Student'
};
console.log(myInfo)

// Lets just create duplicate of myInfo
var myInfoDuplicate = myInfo; // Shallow coping

//NOw if we change a value
myInfoDuplicate.name = 'Mayur to Vicky'; //This line will also change name from myInfo,since we hv a shallow copy
console.log(myInfo)
    // As name is changing, we'r losing data

/*Deep coping...
But, creating a brand new variable by using the properties from 
the  myInfo variable, you can create a deep copy */
var myInfoDuplicate = {
    name: myInfo.name,
    age: myInfo.age,
    workAs: myInfo.workAs // Deep copy
};
console.log(myInfoDuplicate)
    // Now if we change myInfoDuplicate.name, it will only affect myInfoDuplicate and not the original one.
myInfoDuplicate.name = "CHanged name"
console.log(myInfoDuplicate) // Here only we get name as "Changed name"
console.log(myInfo)