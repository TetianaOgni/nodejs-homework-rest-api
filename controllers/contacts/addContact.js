const {Contact}= require('../../models/Contact')
const {ctrlWrapper }= require('../../helpers')
const addContact = async (req, res, next) => {
    const {_id: owner} = req.user

    console.log(req.body)
    console.log(req.file)
//     const result = await Contact.create({...req.body, owner})
//     res.status(201).json(result)
}

module.exports = {
    addContact: ctrlWrapper(addContact),
}