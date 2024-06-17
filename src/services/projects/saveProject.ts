import { type FormProjectFields, type Project } from "@/types";

const saveProject = async (
  projectData: FormProjectFields
): Promise<Project> => {
  try {
    const res: Response = await fetch(`${process.env.BACKEND_URL_PROJECTS}`, {
      method: "POST",
      body: JSON.stringify(projectData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("");

    const data: Project = await res.json();
    return data;
  } catch (e) {
    throw e;
  }
};

export default saveProject;
