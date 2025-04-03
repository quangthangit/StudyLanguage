import { useEffect, useState } from "react";
import { getTypes } from "../../services/typeService";
import { createSubType, deleteSubType, getSubTypes } from "../../services/subtypeService";

export default function AdminSubTypePage() {
    const [newSubtype, setNewSubtype] = useState({
        typeId: "",
        name: { english: "", korean: "", vietnamese: "" },
        description: { english: "", korean: "", vietnamese: "" },
        lessons: 0,
        words: 0,
        image: null,
    });

    const [types, setTypes] = useState([]);
    const [subtypes, setSubtypes] = useState([]);
    const [loading, setLoading] = useState(false);

    // Debug: In ra khi subtypes thay đổi
    useEffect(() => {
        console.log("Danh sách subtypes cập nhật:", subtypes);
    }, [subtypes]);

    // Lấy danh sách loại từ và phân loại từ
    useEffect(() => {
        const fetchTypes = async () => {
            setLoading(true);
            try {
                const data = await getTypes();
                setTypes(data || []);
            } catch (error) {
                console.error("Lỗi khi lấy danh sách loại từ:", error.response?.data || error.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchSubtypes = async () => {
            try {
                const data = await getSubTypes();
                setSubtypes(data || []);
            } catch (error) {
                console.error("Lỗi khi lấy danh sách phân loại:", error.response?.data || error.message);
            }
        };

        fetchTypes();
        fetchSubtypes();
    }, []);

    // Thêm Subtype
    const handleAddSubtype = async () => {
        // Kiểm tra xem đã nhập đủ thông tin cho name hay chưa
        if (!newSubtype.typeId || !newSubtype.name.english || !newSubtype.name.korean || !newSubtype.name.vietnamese) {
            console.warn("Vui lòng nhập đầy đủ thông tin trước khi thêm phân loại.");
            return;
        }
        setLoading(true);
        try {
            // Gửi API với đối tượng newSubtype
            const response = await createSubType(newSubtype);
            if (response?.status === 201) {
                console.log("Thêm thành công:", response.data);
                // Nếu API trả về object mới, ví dụ response.data có cấu trúc: { _id, name, ... }
                setSubtypes((prevSubtypes) => [...prevSubtypes, response.data.subtype]);
                // Reset form
                setNewSubtype({
                    typeId: "",
                    name: { english: "", korean: "", vietnamese: "" },
                    description: { english: "", korean: "", vietnamese: "" },
                    lessons: 0,
                    words: 0,
                    image: null,
                });
            } else {
                console.warn("API không trả về trạng thái 201, phản hồi:", response);
            }
        } catch (error) {
            console.error("Lỗi khi thêm phân loại:", error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteSubType = async (id) => {
        setLoading(true);
        try {
            const response = await deleteSubType(id);
            if (response?.status === 200) {
                setSubtypes((prevSubTypes) => prevSubTypes.filter((subtype) => subtype._id !== id));
                toast.success("Xóa thành công!");
            } else {
                console.warn("API không trả về trạng thái 200, phản hồi:", response);
            }
        } catch (error) {
            console.error("Lỗi khi xóa:", error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-6">Quản lý Phân loại từ</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Form nhập phân loại */}
                <div className="bg-white p-6 rounded shadow">
                    <h2 className="text-lg font-semibold mb-4">Thêm Phân loại</h2>
                    <form className="space-y-4">
                        {/* Chọn loại từ */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Chọn Loại từ</label>
                            <select
                                value={newSubtype.typeId}
                                onChange={(e) => setNewSubtype({ ...newSubtype, typeId: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Chọn loại từ</option>
                                {types.map((type) => (
                                    <option key={type._id} value={type._id}>
                                        {type.name?.vietnamese}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Nhập tên */}
                        {["english", "vietnamese", "korean"].map((lang) => (
                            <div key={lang}>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Tên ({lang})
                                </label>
                                <input
                                    type="text"
                                    placeholder={lang}
                                    value={newSubtype.name[lang]}
                                    onChange={(e) =>
                                        setNewSubtype({
                                            ...newSubtype,
                                            name: { ...newSubtype.name, [lang]: e.target.value },
                                        })
                                    }
                                    className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        ))}

                        {/* Nhập mô tả */}
                        {["english", "vietnamese", "korean"].map((lang) => (
                            <div key={lang}>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Mô tả ({lang})
                                </label>
                                <input
                                    type="text"
                                    placeholder={lang}
                                    value={newSubtype.description[lang]}
                                    onChange={(e) =>
                                        setNewSubtype({
                                            ...newSubtype,
                                            description: { ...newSubtype.description, [lang]: e.target.value },
                                        })
                                    }
                                    className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        ))}

                        {/* Nhập số bài học */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Số bài học</label>
                            <input
                                type="number"
                                value={newSubtype.lessons}
                                onChange={(e) => setNewSubtype({ ...newSubtype, lessons: Number(e.target.value) })}
                                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Nhập số từ vựng */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Số từ vựng</label>
                            <input
                                type="number"
                                value={newSubtype.words}
                                onChange={(e) => setNewSubtype({ ...newSubtype, words: Number(e.target.value) })}
                                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Chọn ảnh */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Chọn ảnh</label>
                            <input
                                type="file"
                                onChange={(e) => setNewSubtype({ ...newSubtype, image: e.target.files[0] })}
                                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Nút Thêm */}
                        <button
                            type="button"
                            onClick={handleAddSubtype}
                            className={`w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 ${loading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            disabled={loading}
                        >
                            {loading ? "Đang thêm..." : "Thêm"}
                        </button>
                    </form>
                </div>

                {/* Danh sách phân loại */}
                <div className="bg-white p-6 rounded shadow">
                    <h2 className="text-lg font-semibold mb-4">Danh sách Phân loại</h2>
                    <ul className="divide-y divide-gray-200">
                        {subtypes.length > 0 ? (
                            subtypes.map((subtype) => (
                                <li
                                    key={subtype._id}
                                    className="flex flex-col gap-2 p-4 hover:bg-gray-50 transition duration-200 rounded"
                                >
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">
                                            <span className="font-semibold">Tên (Tiếng Việt):</span> {subtype.name?.vietnamese || "N/A"}
                                        </p>
                                        <p className="text-sm font-medium text-gray-800">
                                            <span className="font-semibold">Tên (Tiếng Anh):</span> {subtype.name?.english || "N/A"}
                                        </p>
                                        <p className="text-sm font-medium text-gray-800">
                                            <span className="font-semibold">Tên (Tiếng Hàn):</span> {subtype.name?.korean || "N/A"}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            <span className="font-semibold">Mô tả (Tiếng Việt):</span> {subtype.description?.vietnamese || "Không có mô tả"}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <span className="font-semibold">Mô tả (Tiếng Anh):</span> {subtype.description?.english || "Không có mô tả"}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            <span className="font-semibold">Mô tả (Tiếng Hàn):</span> {subtype.description?.korean || "Không có mô tả"}
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 text-sm">
                                            {subtype.lessons} bài học - {subtype.words} từ
                                        </span>
                                        <button
                                            className="text-red-500 hover:text-red-700 text-sm font-medium"
                                            onClick={() => handleDeleteSubType(subtype._id)}
                                        >
                                            Xóa
                                        </button>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <p className="text-gray-500 text-sm">Không có phân loại nào.</p>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
