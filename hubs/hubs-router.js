const express = require('express');

const router = express.Router();

server.get('/api/hubs', async (req, res) => {
    try {
      const hubs = await Hubs.find(req.query);
      res.status(200).json(hubs);
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the hubs',
      });
    }
  });
  
  server.get('/api/hubs/:id', async (req, res) => {
    try {
      const hub = await Hubs.findById(req.params.id);
  
      if (hub) {
        res.status(200).json(hub);
      } else {
        res.status(404).json({ message: 'Hub not found' });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the hub',
      });
    }
  });
  
  server.post('/api/hubs', async (req, res) => {
    try {
      const hub = await Hubs.add(req.body);
      res.status(201).json(hub);
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error adding the hub',
      });
    }
  });
  
  server.delete('/api/hubs/:id', async (req, res) => {
    try {
      const count = await Hubs.remove(req.params.id);
      if (count > 0) {
        res.status(200).json({ message: 'The hub has been nuked' });
      } else {
        res.status(404).json({ message: 'The hub could not be found' });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error removing the hub',
      });
    }
  });
  
  server.put('/api/hubs/:id', async (req, res) => {
    try {
      const hub = await Hubs.update(req.params.id, req.body);
      if (hub) {
        res.status(200).json(hub);
      } else {
        res.status(404).json({ message: 'The hub could not be found' });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error updating the hub',
      });
    }
  });

module.exports = router;