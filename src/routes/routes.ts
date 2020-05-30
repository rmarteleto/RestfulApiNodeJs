import { addNewUser, getUsers } from "../controllers/userController";
import {
  addNewEvent,
  getAllEvents,
  getAllEventsForUser,
  getAllEventsForLast24Hours,
} from "../controllers/eventController";

const routes = (app) => {
  app
    .route("/users")
    .get((req, res, next) => {
      next();
    }, getUsers)
    // POST endpoint
    .post(addNewUser);

  app
    .route("/events")
    .get((req, res, next) => {
      next();
    }, getAllEvents)
    // POST endpoint
    .post(addNewEvent);

  app.route("/events/lastdayevents").get((req, res, next) => {
    next();
  }, getAllEventsForLast24Hours);

  app.route("/events/:email").get((req, res, next) => {
    next();
  }, getAllEventsForUser);
};

export default routes;
