
// function UniqueName(names) {
//     let uniqueName = [];
//     for(i=0; i<names.length; i++) { // Time complexity - O(n)
//         let element = names[i];
//         if(!uniqueName.includes(element)){
//             uniqueName.push(element); // Time complexity - O(n)
//         }
//     }
//     return uniqueName; // Space complexity - O(n)

// }
// const names = ['mikat','shihab','riaz','shihab','fariya','riaz','fariya']
// console.log(UniqueName(names));

//timeComplexity- O(n^2)
//spaceComplexity - O(n)

//Optimization 
function UniqueName(names) {
    let uniqueName = new Set();     // Space complexity - O(n)
    for (let i = 0; i < names.length; i++) { // Time complexity - O(n)
        uniqueName.add(names[i]);           //  Time complexity - O(1) average per add operation
    }

    return uniqueName;                      // Space complexity - O(n)
}

const names = ['mikat', 'shihab', 'riaz', 'shihab', 'fariya', 'riaz', 'fariya'];
console.log(UniqueName(names)); // Expected output: Set { 'mikat', 'shihab', 'riaz', 'fariya' }

//timeComplexity- O(n)
//spaceComplexity - O(n)
