module.exports.Sort = function Sort(val) {
    let comparison = val.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase())); 
    if (comparison === 0) {
        return a.localeCompare(b);
    }
    
    return comparison;
}

module.exports.Distance = function Distance(arr1, arr2) {

    return Math.abs(arr1[0]-arr2[0]) + Math.abs(arr1[1]-arr2[1]);
}