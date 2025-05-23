import axios from 'axios';
import {getUser} from "../utils/UserSession";

const API_URL = 'https://catdistribution-backend-eqfuhfbffzcuandb.polandcentral-01.azurewebsites.net/operationLogs';

export const fetchOperationLogsBackend = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching operation logs:", error);
    }
};

export const addOperationLogBackend = async (operationData) => {
    try {
        const response = await axios.post(`${API_URL}/${getUser().id}`, operationData);
        return response.data;
    }
    catch (error) {
        console.error("Error adding operation log:", error);
    }
}