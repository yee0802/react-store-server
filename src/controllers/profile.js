import { updateProfileByUserIdDb } from "../domains/profile.js";
import throwNewError from "../error/index.js";

export const updateProfileByUserId = async (req, res) => {
  try {
    const foundUser = req.user;

    const dataToUpdate = req.body;

    if (!dataToUpdate) {
      throwNewError("Missing request body", 400);
    }

    const updatedProfile = await updateProfileByUserIdDb(
      foundUser.id,
      dataToUpdate
    );

    return res.status(200).send({ profile: updatedProfile });
  } catch (e) {
    console.log("Error updating profile:", e.message);
    return res.status(e.status ?? 500).send({ error: e.message });
  }
};
