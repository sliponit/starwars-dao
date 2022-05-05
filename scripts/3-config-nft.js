import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x9e83a99CccDb721fb6f58b17E7953d5FaF5d936E");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Star Wars Galaxy",
        description: "This NFT will give you access to StarsWarsDAO!",
        image: readFileSync("scripts/assets/andromeda-galaxy.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
