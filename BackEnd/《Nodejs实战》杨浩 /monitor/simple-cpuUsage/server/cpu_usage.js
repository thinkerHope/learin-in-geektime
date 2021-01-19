// 一个小demo
// nodejs监听cpu使用率、内存使用率，并通过socket.io与vue项目交互
const os = require('os');
const io = require('socket.io').listen(1111);
const osUtils = require('os-utils');
let interval = -1;
let currCpu = 0;

io.sockets.on('connection', socket => {
    socket = socket;
    socket.emit('connected', '连接成功');
    console.log('<====连接成功====>');

    socket.on('disconnect', () => {
        console.log('disconnect');
    })

    socket.on('endConnection', data => {
        console.log('<====endConnection====>');
        console.log(data);
        socket.emit('unConnection', '服务端已停止');
        clearInterval(interval);
        interval = -1;
    })
})

function updateCpu() {
    setTimeout(() => {
        osUtils.cpuUsage(value => {
            currCpu = value;
            updateCpu();
        });
    }, 0);
}   

module.exports = function start() {
    updateCpu();
    if (interval < 0) {
        interval = setInterval(() => {
            let freeMem = os.freemem()/1024/1024/1024;
            let totalMem = os.totalmem()/1024/1024/1024;
            const data = {
                cpuUsage: (currCpu * 100.0).toFixed(2) + '%',
                freeMem: freeMem.toFixed(2) + 'G',
                totalMem: totalMem.toFixed(2) + 'G',
                usedMem: (totalMem + freeMem).toFixed(2) + 'G',
                memUsage: ((totalMem - freeMem) / totalMem * 100.0).toFixed(2) + '%',
            };
            io.sockets.emit('sysUpdate', data);
            console.log(data);
        }, 1000);
    }
}