import { User } from "../interfaces/user";
import { EventService } from "./eventService";

export abstract class UserService {
  private static users: User[] = [];

  /**
   * add an user
   * @param user
   */
  public static addUser(email: string, password: string, phone?: string) {
    // check if user already exists
    if (this.userExists(email)) {
      throw new Error("User exists already");
    }

    // validate phone number
    let re = new RegExp("^[0-9]{3}-[0-9]{3}-[0-9]{4}$");
    if (phone && !re.test(phone)) {
      throw new Error("User phone number is not in the correct format");
    }

    try {
      if (phone)
        this.users.push(<User>{
          email: email,
          password: password,
          phone: phone,
        });
      else this.users.push(<User>{ email: email, password: password });
      EventService.addEvent({
        type: "UserCreated",
        created: Date.now(),
        email: email,
      });
    } catch (e) {
      throw new Error(e.message);
    }
  }

  /**
   * get all users
   */
  public static getUsers() {
    EventService.addEvent({
      type: "RetrieveUsers",
      created: Date.now(),
    });
    return this.users;
  }

  /**
   * check if user exists using email as key
   * @param email
   */
  private static userExists(email: string) {
    const userExists = this.users.find((u) => {
      return u.email.toLowerCase() === email.toLowerCase();
    });
    return !!userExists;
  }
}
