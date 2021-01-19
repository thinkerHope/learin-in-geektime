const start = require('./cpu_usage');

router.get('/start', function(req, res, next) {
    start();
    const data = {
      code: 200,
      message: "success"
    }
    res.send(data)
});