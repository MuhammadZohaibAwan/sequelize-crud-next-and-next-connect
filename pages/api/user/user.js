import nc from "next-connect";
const { User } = require('../../../models')

const handler = nc()
    // .use(someMiddleware())
    .get(async (req, res) => {
        const userList = await User.findAll({ attibutes: ['name', 'email', 'message'] })
        res.send(userList)
    })
    .post(async (req, res) => {
        const { name, email } = req.body
        const list = await User.create({
            name,
            email
        })
        res.send(list).json("sucess")
    })

export default handler;