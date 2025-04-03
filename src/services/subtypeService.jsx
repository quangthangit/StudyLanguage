import api from "../api/apiConfig";

export const createSubType = async (data) => {
    try {
        console.log("Gửi dữ liệu:", data);
        const response = await api.post("/admin/sub-type", data);
        return response;
    } catch (error) {
        // Handle the error more gracefully
        console.error("Lỗi API:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || error.message || "Đã xảy ra lỗi khi thêm loại từ");
    }
};

export const getSubTypes = async () => {
    try {
        const response = await api.get("/admin/sub-type");
        console.log("Dữ liệu nhận được:", response.data);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error.response?.data || error.message);
        throw error;
    }
};

export const deleteSubType = async (id) => {
    return await api.delete(`admin/sub-type/${id}`);
};