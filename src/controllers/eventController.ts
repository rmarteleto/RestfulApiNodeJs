import { EventService } from "../services/eventService";
import { Event } from "../interfaces/event";

/**
 * add a new event
 * @param req
 * @param res
 */
export const addNewEvent = (req, res) => {
  try {
    const { type } = req.body;

    EventService.addEvent(<Event>{ type: type, created: Date.now() });
    res.json({ message: "success" });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

/**
 * return all events
 * @param req
 * @param res
 */
export const getAllEvents = (req, res) => {
  try {
    res.json(EventService.getAllEvents());
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

/**
 * get all events for an user
 * @param req
 * @param res
 */
export const getAllEventsForUser = (req, res) => {
  try {
    res.json(EventService.getAllEventsForUser(req.params.email));
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

/**
 * return all events for the last 24 hours
 * @param req
 * @param res
 */
export const getAllEventsForLast24Hours = (req, res) => {
  try {
    res.json(EventService.getAllEventsForLast24Hours());
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
