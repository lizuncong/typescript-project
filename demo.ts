enum Status {
    OFFLINE,
    ONLINE = 5,
    DELETED,
}
// 查看控制台，可以发现Status输出的是一个对象
console.log(Status);
console.log(Status[0]);
console.log(Status[5]);
console.log(Status[6]);
console.log(Status.OFFLINE);
console.log(Status.ONLINE);
console.log(Status.DELETED);

function getResult(status){
    if(status === Status.OFFLINE){
        return 'offline';
    } else if (status === Status.ONLINE){
        return 'online';
    } else if (status === Status.DELETED){
        return 'deleted';
    }

    return 'error';
}

console.log('getResult..', getResult(Status.ONLINE));
