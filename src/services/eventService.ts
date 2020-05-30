import moment from "moment";
import { Event } from "../interfaces/event";

export abstract class EventService {
  private static events: Event[] = [];

  /**
   * add an event
   * @param event
   */
  public static addEvent(event: Event) {
    this.events.push(event);
  }

  /**
   * return all events for the previous 24 hours
   * (assuming that "Last Day" means last 24 hours, and not the previous full day)
   */
  public static getAllEventsForLast24Hours() {
    return this.events.filter((ev) => {
      // 24 hours ago
      let dateFrom = moment().subtract(24, "h").format("x");
      const start = Number.parseInt(dateFrom);
      return ev.created >= start;
    });
  }

  /**
   * return all events
   */
  public static getAllEvents() {
    return this.events;
  }

  /**
   * get all events by user email
   * @param email
   */
  public static getAllEventsForUser(email: string) {
    return this.events.filter((e) => {
      if (!e.email) return false;
      return e.email.toLowerCase() === email.toLowerCase();
    });
  }
}
