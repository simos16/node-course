const { Router } = require('express');

const router = Router();
const {
    userGet,
    userPost,
    userPut,
    userDelete,
    userPatch
} = require('../controllers/users');



//creare gli instradamenti

router.get('/', userGet);
router.post('/', userPost);
router.put('/:id', userPut);
router.delete('/', userDelete);
router.patch('/', userPatch);

module.exports = router;