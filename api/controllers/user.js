import { db } from "../db.js"


export const getUsers = (req, res) => {
    const q = req.query
         "SELECT * FROM users"

    db.query(q, [req.query], (err, data) => {
        if (err) return res.status(500).send(err)

        return res.status(200).json(data)
    })
}

export const getUser = (req, res) => {
    const q =
        "SELECT id, username, email, img FROM users"

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data[0])
    })
}