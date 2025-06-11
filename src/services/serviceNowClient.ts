import axios from "axios";

const serviceNowClient = axios.create({
  baseURL: "https://dev189888.service-now.com/api/now",
  auth: {
    username: "aes.creator",
    password: "/9k/OYkEtUk4",
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getIncidentsSN = async (id?: string) => {
  if (id) {
    return await serviceNowClient.get(
      `/table/x_1085571_testin_0_issues`,
      {
        params: {
          sysparm_query: `id_issue=${id}`,
          sysparm_limit: 1,
        },
      },
    );
  }
  return await serviceNowClient.get(`/table/x_1085571_testin_0_issues`);
};

export const createIssue = async (payload: any) => {
  try {
    const response = await serviceNowClient.post(
      "/table/x_1085571_testin_0_issues",
      payload,
    );
    return response.data;
  } catch (error) {
    console.error("❌ Error al crear el issue:", error);
    throw error;
  }
};

export default serviceNowClient;
