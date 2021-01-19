const http = require('http');
const url = require('url');
const querystring = require('querystring');
const game = require('./game');

let playerWon = 0;

let playerLastAction = null;
let sameCount = 0;

http
    .createServer((res, req) => {
        const { pathname, query } = url.parse(req.url);

        if (pathname === '/favicon.ico') {
            // 如果请求url是浏览器icon，比如 http://localhost:3000/favicon.ico的情况
            // 就返回一个200就好了
            response.writeHead(200);
            response.end();
            return;
        }

        if (pathname === '/game') {
            const { action: playerAction } = querystring.parse(query);

            // 如果统计的玩家胜利次数超过3
            // 或者玩家出现过作弊的情况（sameCount=9代表玩家有过作弊行为）
            if (playerWon >= 3 || sameCount === 9) {
                response.writeHead(500);
                response.end('我再也不和你玩了！');
                return;
            }

            if (playerLastAction && playerAction === playerLastAction) {
                sameCount++;
            } else {
                sameCount = 0;
            }
            // 记录上一次
            playerLastAction = playerAction;
            
            // 执行游戏逻辑
            const gameResult = game(playerAction);

            // 先返回头部
            res.writeHead(200);

            if (gameResult == 0) {
                response.end('平局！');

            } else if (gameResult == 1) {
                response.end('你赢了！');
                // 玩家胜利次数统计+1
                playerWon++;

            } else {
                response.end('你输了！');
            }

            // 如果访问的是根路径，则把游戏页面读出来返回出去
            if (parsedUrl.pathname == '/') {
                fs.createReadStream(__dirname + '../index.html').pipe(response);
            }
        }
    })