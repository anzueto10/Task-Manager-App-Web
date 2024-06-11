import { Project } from "@/types";

const getProjectsApi = async () => {
  const user_id = 1;
  try {
    const res: Response = await fetch(
      `${process.env.BACKEND_URL_PROJECTS}${user_id}`
    );
    const data: Array<Project> = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export default getProjectsApi;
