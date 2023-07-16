const sumAll = function(first, last) {
    if (!Number.isInteger(first) || !Number.isInteger(last)) return 'ERROR';
    if (last < 0 || first < 0) return 'ERROR';
    if (first > last){
        const temp = first;
        first = last;
        last = temp;
    }
    let init = 0;
    for (i = first; i <= last; i++){
        init += i;
    }
    return init;
};

// Do not edit below this line
module.exports = sumAll;
