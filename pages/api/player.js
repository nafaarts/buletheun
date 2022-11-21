import Datastore from "nedb"

const db = new Datastore({
  filename: "./db/player.db",
  autoload: true,
})

db.loadDatabase()

export default function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.player != null) {
      db.insert({ name: req.body.player }, function (err, docs) {
        if (err) {
          res.status(500).json(err)
        } else {
          res.status(200).json({
            message: "user added successfully!",
          })
        }
      })
    } else {
      res.status(400).json({
        message: "Bad Request!",
      })
    }
  } else if (req.method === "DELETE") {
    if (!req.query.type) {
      res.status(400).json({
        message: "Bad Request!",
      })
    } else {
      if (req.query.type === "SINGLE") {
        if (!req.query.id) {
          res.status(400).json({
            message: "Bad Request!",
          })
        } else {
          db.remove(
            { _id: req.query.id },
            { multi: false },
            function (err, docs) {
              if (err) {
                res.status(500).json(err)
              } else {
                res.status(200).json({
                  message: "Player deleted successfully",
                })
              }
            },
          )
        }
      } else if (req.query.type === "RESET") {
        db.remove({}, { multi: true }, function (err, docs) {
          if (err) {
            res.status(500).json(err)
          } else {
            res.status(200).json({
              message: "Player successfully being reset!",
            })
          }
        })
      } else {
        res.status(400).json({
          message: "Bad Request!",
        })
      }
    }
  } else {
    db.find({ name: { $exists: true } }, function (err, docs) {
      if (err) {
        res.status(500).json(err)
      } else {
        res.status(200).json(docs)
      }
    })
  }
}
