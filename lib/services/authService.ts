import axios from "axios";
import { Customer, UserLogin } from "../../types/userTypes";

const HOST = "http://localhost:8080";

export async function registerCustomer(customer: Customer) {
  try {
    const response = await axios.post(`${HOST}/api/v1/customer`, customer);
    return response;
  } catch (error: any) {
    console.error(error);
    return error.response;
  }
}

export async function loginUser(credentials: UserLogin) {
  try {
    const response = await axios.post(`${HOST}/api/v1/auth`, credentials);
    return response;
  } catch (error: any) {
    console.error(error);
    return error.response;
  }
}
