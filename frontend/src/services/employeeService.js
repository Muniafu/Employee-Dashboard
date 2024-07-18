import axios from 'axios';

const API_URL = '/api/employees';

const getEmployeeData = async (id) => {
    try {
        const response = await axios.get(API_URL + id, {
            headers: {
                'Authorization': 'Bearer ${localStorage.getItem('token')}'
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || 'Error fetching employee data');
    }
};

const updateEmployeeData = async (id, employeeData) => {
    try {
        const response = await axios.put(API_URL + id, employeeData, {
            headers: {
                'Authorization': 'Bearer ${localStorage.getItem('token')}'
            }
    });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || 'Error updating employee data');
    }
};

const deleteEmployee = async (id) => {
    try {
        const response = await axios.delete(API_URL + id, {
            headers: {
                'Authorization': 'Bearer ${localStorage.getItem('token')}'
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || 'Error deleting employee');
    }
};

export default { getEmployeeData, updateEmployeeData, deleteEmployee };