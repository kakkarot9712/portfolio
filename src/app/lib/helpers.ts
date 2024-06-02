import Language from "@/app/models/languages";
import connect from "./db";
import Tools from "@/app/models/tools";

const getLanguages = async () => {
  try {
    await connect();
    const data = await Language.find().exec();
    return { data };
  } catch (e: any) {
    return { error: e };
  }
};

const getTools = async () => {
  try {
    await connect();
    const data = await Tools.find().exec();
    return { data };
  } catch (e) {
    return { error: e };
  }
};

export { getLanguages, getTools };
