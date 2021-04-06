const express = require ('express')
const Annonce = require('../models/Annonce')

const router = express.Router()

//require annonce model
const annonce =require('../models/Annonce')
const controllers = require('../controllers/annonce.controllers')

/**
 * @desc : test route
 * @method : GET
 * @path : http://localhost:7000/api/annonces/test
 * @data : nothing
 * @acess : public
 */

router.get('/test', (req, res) => {
    res.status(200).send('Hello test')
})

/**
 * @desc : add annonce
 * @method : POST
 * @path : http://localhost:7000/api/annonces/
 * @data : req.body
 * @acess : public
 */
router.post('/', controllers.addAnnonce)

/**
 * @desc : get all annonces
 * @method : GET
 * @path : http://localhost:7000/api/annonces/test
 * @data : nothing
 * @acess : public
 */

 router.get('/', controllers.getAnnonce)

/**
 * @desc : delete annonce
 * @method : DELETE
 * @path : http://localhost:7000/api/annonces/
 * @data : req.params
 * @acess : public
 */
router.delete('/:_id', controllers.deleteAnnonce)

/**
 * @desc : edit annonce
 * @method : PUT
 * @path : http://localhost:7000/api/annonces/_id
 * @data : req.params
 * @acess : public
 */

 router.put('/:_id', controllers.updateAnnonce)

module.exports = router