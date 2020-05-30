import { UserService } from "../services/userService";

/**
 * add a new user
 * @param req
 * @param res
 */
export const addNewUser = (req, res) => {
  try {
    const { email, password, phone } = req.body;

    UserService.addUser(email, password, phone);
    res.json({ message: "success" });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

/**
 * get all users
 * @param req
 * @param res
 */
export const getUsers = (req, res) => {
  try {
    res.json(UserService.getUsers());
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
