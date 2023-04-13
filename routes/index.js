var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Calendar' });
});

// GET veggies list
router.get("/veggies", function(req, res, next) {
  db("SELECT * FROM veggies;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});


// GET Month veggies list
router.get("/veggies/:month", function(req, res, next) {
  let month = req.params.month;
  db(`SELECT month_veggies.*, veggies.* FROM month_veggies 
  LEFT JOIN veggies ON month_veggies.veggies_fk = veggies.id
  Where month_veggies.month_fk = ${month}`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
    
});

// GET calendar list
router.get("/calendar", function(req, res, next) {
  db("SELECT * FROM calendar;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET veggies by id
router.get("/veggies/:id", function(req, res, next) {
  let VeggiesId = req.params.id;
  db(`SELECT * FROM veggies where id=${VeggiesId};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET calendar by id
router.get("/calendar/:id", function(req, res, next) {
  let calendarId = req.params.id;
  db(`SELECT * FROM calendar where id=${calendarId};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});



router.post("/veggies", async (req, res, next) => {
  // The request's body is available in req.body
  let { veggie_name, veggie_type } = req.body;
  // If the query is successfull you should send back the full list of veggies
  let sql = `
      INSERT INTO veggies (veggie_name, veggie_type)
      VALUES ('${veggie_name}', '${veggie_type}')
  `;
  try {
    //do the INSERT
    await db(sql);
    //SELECT all GreenGrab to return
    let result = await db("SELECT * FROM veggies");
    let greengrab = result.data;
    res.status(201).send(greengrab);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.post("/calendar", async (req, res, next) => {
  // The request's body is available in req.body
  let { id, month_Name, month_vege, month_fruit} = req.body;
  // If the query is successfull you should send back the full list of veggies
  let sql = `
      INSERT INTO calendar (id, month_Name, month_vege, month_fruit)
      VALUES (${id},'${month_Name}', '${month_vege}','${month_fruit}')
  `;
  try {
    //do the INSERT
    await db(sql);
    //SELECT all GreenGrab to return
    let result = await db("SELECT * FROM veggies");
    let greengrab = result.data;
    res.status(201).send(greengrab);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.put("veggies/:id", async (req, res, next) => {
  let VeggiesId = req.params.id;
  // URL params are available in req.params
  // If the query is successfull you should send back the full list of veggies
  try {
    let result = await db(`SELECT * FROM veggies WHERE id = ${VeggiesId}`);
    if (result.data.length === 0) {
      //did not find the veggies
      res.status(404).send({ error: "GreenGrab veggies not found" });
    } else {
      // found it
      let { veggie_name, veggie_type } = req.body;
      let sql = `
          UPDATE veggies set text = '${veggie_name}', complete = ${veggie_type} WHERE id = ${VeggiesId}
      `;
      
      //doing the UPDATE
      await db(sql);
      //SELECT all veggies to return
      result = await db("SELECT * FROM veggies");
      let veggies = result.data;
      res.send(veggies);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
  // Add your code here
  //
});

router.put("/calendar/:id", async (req, res, next) => {
  let CalendarId = req.params.id;
  // URL params are available in req.params
  // If the query is successfull you should send back the full list of veggies
  try {
    let result = await db(`SELECT * FROM calendar WHERE id = ${CalendarId}`);
    if (result.data.length === 0) {
      //did not find the veggies
      res.status(404).send({ error: "GreenGrab calendar not found" });
    } else {
      // found it
      let { month_vege, month_fruit }= req.body;
      let sql = `
          UPDATE veggies set month_vege = '${month_vege}', month_fruit = '${month_fruit}' WHERE id = ${CalendarId}
      `;
      
      //doing the UPDATE
      await db(sql);
      //SELECT all veggies to return
      result = await db("SELECT * FROM calendar");
      let veggies = result.data;
      res.send(veggies);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
  // Add your code here
  //
});

router.delete("/veggies/:id", async (req, res, next) => {
  let VeggiesId = req.params.id;
  // URL params are available in req.params
  // If the query is successfull you should send back the full list of veggies
  try {
    let result = await db(`SELECT * FROM veggies WHERE id = ${VeggiesId}`);
    if (result.data.length === 0) {
      //did not find the veggies
      res.status(404).send({ error: "GreenGrab veggies not found" });
    } else {
      // found it
      let sql = `
          DELETE from veggies WHERE id = ${VeggiesId}}
      `;
      //doing the UPDATE
      await db(sql);
      //SELECT all veggies to return
      result = await db("SELECT * FROM veggies");
      let veggies = result.data;
      res.send(veggies);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
  // Add your code here
  //
});

module.exports = router;
