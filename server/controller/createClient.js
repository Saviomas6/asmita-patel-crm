import { CreateClient } from "../model/createClient.js";
import { authenticateToken } from "../authentication/authentication.js";
import { ClientSignUp } from "../model/login.js";

export const createClient = async (req, res) => {
  const { name, phoneNo, address, company, status, notes } = req.body;

  authenticateToken(req, res, async () => {
    try {
      const user = await ClientSignUp.findOne(
        { email: res.req.user.email },
        { __v: 0, password: 0, confirmPassword: 0 }
      );
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      if (user) {
        const data = {
          name,
          phoneNo,
          address,
          company,
          status,
          notes,
        };
        const result = new CreateClient(data);
        result
          .save()
          .then(() => res.status(201).send({ user: result, message: true }))
          .catch((e) => res.status(400).send(e));
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Something went wrong" });
    }
  });
};
