function arrayToStr(N,arr) {
    let bag = "";
    for (let i=0;i<=arr.length-1;i++){
        if (arr[i]>=0){
        bag=bag+arr[i];
        }else{
            bag+=0
        }
    }
    console.log(bag)
}
