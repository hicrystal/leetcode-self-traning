function addTwo(l1, l2) {
    let newArr = [];
    let count = false;
    let last;
    let len = Math.max(l1.length, l2.length);
    for (let i = 0; i < len; i++) {
        if (count) {
            newArr[i] = 1;
        }
        if(i<len-1){
            if (l1[i] + l2[i] < 10) {
                newArr[i] = l1[i] + l2[i];
                count = false;
            } else {
                newArr[i] = l1[i] + l2[i] - 10;
                count = true;
            }
        }
        newArr[len-1]=l1[i] + l2[i];
        if(newArr[len-1]>10){
            last = newArr.pop();
            let lasttwo = String.prototype.split.call(last,'');
            newArr.push(...lasttwo);
        }
    }



    newArr.reverse();
    //l1,l2 add by digit and when >10 , add 1 to next
    //when last i ,we dont use that rule
    //reverse output
    //考虑为空的时候
    return newArr;
}

console.log(addTwo([2, 7, 1], [1, 4, 9]));
