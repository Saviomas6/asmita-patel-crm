import { CreateClient } from "../model/createClient.js";

export const updateClient = async (req, res) => {
  try {
    const update = req.body;
    await CreateClient.findByIdAndUpdate(req.body._id, update);
    res.send({ user: update, message: true });
  } catch (e) {
    console.log(e);
  }
};
