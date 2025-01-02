import axios from "axios";

const REST_API = "https://www.smwcentral.net/ajax.php";

export const sendRestRequest = async (params?: string) => {
  try {
    const response = await axios.get(REST_API, { params });
    return response.data;  // Only return the data part
  } catch (error) {
    console.error("Error in REST request:", error);
    throw error;  // Propagate the error if needed
  }
};
