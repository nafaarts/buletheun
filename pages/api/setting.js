import Datastore from "nedb"

const db = new Datastore({
  filename: "./db/setting.db",
  autoload: true,
})

db.loadDatabase()

const setup = () => {
  db.insert(
    {
      location: "SR Badminton 3",
      address: "Cot Masjid, Lueng Bata",
      map_link: "https://n.nafaarts.com",
      total_hour: 2,
      price: 100000,
    },
    function (err, numReplaced) {
      res.status(200).json({
        message: "Setting added!",
      })
    },
  )
}

export default function handler(req, res) {
  if (req.method === "PUT") {
    if (req.query.id) {
      db.update(
        { _id: req.query.id },
        { $set: req.body },
        function (err, numReplaced) {
          res.status(200).json({
            message: "Setting updated!",
          })
        },
      )
    } else {
      res.status(400).json({
        message: "bad Request",
      })
    }
  } else {
    db.find({}, function (err, docs) {
      if (docs.length === 0) {
        db.insert(
          {
            location: "SR Badminton",
            address: "Cot Masjid, Lueng Bata",
            map_link: "https://n.nafaarts.com",
            total_hour: 2,
            price: 100000,
          },
          function (err, numReplaced) {
            db.find({}, function (err, docs) {
              res.status(200).json(docs[0])
            })
          },
        )
      } else {
        res.status(200).json(docs[0])
      }
    })
  }
}
