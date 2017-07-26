'use strict';

module.exports=function collectSameElements(collectionA, collectionB) {
    let ret=[];
    for (let i = 0; collectionA.length > i; i++) {
    if (collectionB.value.indexOf(collectionA[i].key) === -1) {
    } else {
        ret.push(collectionA[i].key);
    }
}
    return ret;
}