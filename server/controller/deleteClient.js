import { CreateClient } from "../model/createClient.js";

export const deleteClient = async (req, res) => {
  try {
    await CreateClient.findByIdAndDelete(req.params.id);
    res.send({ response: "Successfully deleted", message: true });
  } catch (e) {
    console.log(e);
  }
};
