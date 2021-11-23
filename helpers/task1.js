module.exports.Sort = function Sort(val) {
    let comparison = val.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase())); 
    if (comparison === 0) {
        return a.localeCompare(b);
    }
    
    return comparison;
}
