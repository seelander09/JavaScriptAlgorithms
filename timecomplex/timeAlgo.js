function mystery(arr){
    var temp = 0;
    for(var i=1; i<arr.length; i++){
        if(arr[i] < arr[temp]){
            temp = i;
        }
    }
    var result = arr[temp];
    for(temp; temp<arr.length-1; temp++){
        arr[temp] = arr[temp+1];
    }
    arr.pop();
    return result;
}