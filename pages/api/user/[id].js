import nc from "next-connect";
const { User } = require('../../../models')

const handler = nc()
    .put(async (req, res) => {

        const user = await User.findOne({ id: req.query.id })
        user.name = req.body.name;
        user.email = req.body.email;
        await user.save();
        res.send('user updated');
    })
    .delete(async (req, res) => {
        await User.destroy({
            where: {
                id: req.query.id
            }
        })
        res.send('user deleted')
    })

export default handler;