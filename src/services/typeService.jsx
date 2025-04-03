import api from "../api/apiConfig";

export const createType = async (data) => {
    try {
        console.log("Gửi dữ liệu:", data);
        const response = await api.post("/admin/type", data);

        console.log("API phản hồi:", response.data);
        return response;
    } catch (error) {
        console.error("Lỗi API:", error.response?.data || error.message);
        throw error; 
    }
};

export const getTypes = async () => {
    try {
        const response = await api.get("/admin/type");
        console.log("Dữ liệu nhận được:", response.data);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error.response?.data || error.message);
        throw error;
    }
};

// Sửa loại từ theo ID
export const updateType = async (id, data) => {
    return await api.put(`/type/${id}`, data);
};

// Xóa loại từ theo ID
export const deleteType = async (id) => {
    return await api.delete(`admin/type/${id}`);
};