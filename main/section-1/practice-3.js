'use strict';

module.exports=function collectSameElements(collectionA, collectionB) {
    let sameElements=[];
    for(let i=0;i<collectionA.length;i++){
        if(collectionB.value.indexOf(collectionA[i])!=-1){
            sameElements.push(collectionA[i]);
        }
    }
    return sameElements;
}