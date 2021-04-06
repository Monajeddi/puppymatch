const addAnnonce = async (req, res) => {
    try {
        const {nom, race, age, sexe, vaccins, description, localisation} = req.body
        if (!nom || !race || !age || !sexe || !vaccins || !localisation) {
            res.status(400).send({ msg: 'Veuillez remplir tous les champs requis !'  })
            return;
        }
        const newAnnonce = new Annonce({
        nom, 
        race, 
        age, 
        sexe, 
        vaccins, 
        description, 
        localisation
    })
       await newAnnonce.save()
       res.status(200).send({msg: 'Annonce ajoutée avec succès', newAnnonce })
    } catch (error) {
        res.status(400).send({msg: 'Ajout impossible', error })
    }
    
}

const getAnnonce = async (req, res) => {
    try {
       const listAnnonces =  await Annonce.find()
       res.status(200).send({msg : 'Liste des annonces', listAnnonces})
    } catch (error) {
       res.status(400).send({msg : 'Liste inaccessible', error})
        
    }
}

const deleteAnnonce = async(req, res) => {
    try {
        const { _id } = req.params
        const annonceToDelete = await Annonce.findOneAndDelete({ _id })
        if (!annonceToDelete){
            res.status(400).send({msg: 'Annonce déjà supprimée !' })
            return;
        }
        res.status(200).send({msg: 'Annonce Supprimée !', annonceToDelete })
    } catch (error) {
        res.status(400).send({msg: 'Suppression impossible !' })
    }
}

const updateAnnonce = async (req, res) => {
    try {
        const { _id } = req.params
        const result = await Annonce.updateOne({_id}, {$set :{...req.body}})
        if (!result.nModified){
            res.status(400).send({ msg: 'Déjà mis à jour'})
            return;
        }
        res.status(200).send({msg: 'Annonce mise à jour'})
    } catch (error) {
       res.status(400).send({msg: 'Mise à jour échouée !', error })
    }
}


module.exports = controllers = { addAnnonce, getAnnonce, deleteAnnonce, updateAnnonce}