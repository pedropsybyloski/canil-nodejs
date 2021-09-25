const { Router } = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.send('Página Home');
});

module.exports = router;