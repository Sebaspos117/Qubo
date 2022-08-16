const list = ["A", 1, 4, 5, "C", "B", 6, 8, "G", "D", 7, 3, "F", 2];
const list1 = [];
const list2 = [];
for (let i = 0; i <list.length; i++){
    if(typeof list[i] =='string') {
        list1.push(list[i])}
    else{
    list2.push(list[i])}
}
list1.sort()
list2.sort()
console.log(list1, list2);
