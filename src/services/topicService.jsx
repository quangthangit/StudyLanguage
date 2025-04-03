import api from "../api/apiConfig";

export const createTopic = async (data) => {
    try {
        console.log("Gửi dữ liệu:", data);
        const response = await api.post("/admin/topic", data);
        return response;
    } catch (error) {
        // Handle the error more gracefully
        console.error("Lỗi API:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || error.message || "Đã xảy ra lỗi khi thêm loại từ");
    }
};

export const getTopics = async () => {
    try {
        const response = await api.get("/admin/topic");
        console.log("Dữ liệu nhận được:", response.data);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error.response?.data || error.message);
        throw error;
    }
};

export const deleteTopic = async (id) => {
    return await api.delete(`admin/topic/${id}`);
};