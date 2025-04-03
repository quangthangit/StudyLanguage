import api from "../api/apiConfig";

export const createSubTopic = async (data) => {
    try {
        console.log("Gửi dữ liệu:", data);
        const response = await api.post("/admin/sub-topic", data);
        return response;
    } catch (error) {
        // Handle the error more gracefully
        console.error("Lỗi API:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || error.message || "Đã xảy ra lỗi khi thêm loại từ");
    }
};

export const getSubTopics = async () => {
    try {
        const response = await api.get("/admin/sub-topic");
        console.log("Dữ liệu nhận được:", response.data);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error.response?.data || error.message);
        throw error;
    }
};

export const deleteSubTopic = async (id) => {
    return await api.delete(`admin/sub-topic/${id}`);
};

export const getSubtopicsByTopic = async (topicId) => {
    if (!topicId) {
        console.error("Lỗi: idTopic không hợp lệ");
        return;
    }
    try {
        const response = await api.get(`/admin/sub-topic/by-topic/${topicId}`);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi lấy sub topic:", error?.response?.data || error);
        throw error;
    }   
};
