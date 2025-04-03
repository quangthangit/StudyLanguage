import { useEffect, useState } from "react";
import { createDetailSubType, getDetailSubTypes, deleteDetailSubType } from "../../services/detailsubtypeService";
import { ToastContainer, toast } from "react-toastify";
import { getSubTypes } from "../../services/subtypeService";

export default function AdminDetailSubTypePage() {
    const [newDetailsubtype, setNewDetailsubtype] = useState({
        name: { english: "", korean: "", vietnamese: "" },
        subTypeId: "",
    });
    const [detailsubtype, setDetailsubtype] = useState([]);
    const [loading, setLoading] = useState(false);
    const [subtypes, setSubtypes] = useState([]);
    const handleAddType = async () => {
        // Sửa điều kiện kiểm tra theo cấu trúc newType.name
        if (newDetailsubtype.name.english && newDetailsubtype.name.korean && newDetailsubtype.name.vietnamese) {
            setLoading(true);
            try {
                const response = await createDetailSubType(newDetailsubtype);
                if (response?.status === 201) {
                    console.log(response.data)
                    setDetailsubtype((prev) => [...prev, response.data.detailsubtype]);
                    setNewDetailsubtype( { 
                        subTypeId : "",
                        name: { english: "", korean: "", vietnamese: "" } 
                    });
                    toast.success("Thêm thành công!");
                } else {
                    toast.error("API không trả về trạng thái 201");
                    console.warn("Phản hồi:", response);
                }
            } catch (error) {
                toast.error(
                    "Lỗi khi thêm loại từ: " +
                    (error.response?.data?.message || error.message)
                );
            } finally {
                setLoading(false);
            }
        } else {
            toast.error("Vui lòng nhập đầy đủ thông tin.");
        }
    };

    useEffect(() => {
        const fetchDetailSubTypes = async () => {
            setLoading(true);
            try {
                const data = await getDetailSubTypes();
                console.log(data)
                setDetailsubtype(data || []);
            } catch (error) {
                console.error(
                    "Lỗi khi lấy danh sách loại từ:",
                    error.response?.data || error.message
                );
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
        fetchSubtypes()
        fetchDetailSubTypes();
    }, []);

    const handleDeleteType = async (id) => {
        setLoading(true);
        try {
            const response = await deleteDetailSubType(id);
            if (response?.status === 200) {
                setDetailsubtype((prev) => prev.filter((detailsubtype) => detailsubtype._id !== id));
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
            <ToastContainer />
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Quản lý Loại từ</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Form nhập loại từ */}
                <div className="bg-white p-6 rounded shadow">
                    <h2 className="text-lg font-semibold mb-4">Nhập Loại từ</h2>
                    <form className="space-y-4">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Chọn Loại từ</label>
                            <select
                                value={newDetailsubtype.subTypeId}
                                onChange={(e) => setNewDetailsubtype({ ...newDetailsubtype, subTypeId: e.target.value })}
                                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Chọn loại từ</option>
                                {subtypes.map((subtypes) => (
                                    <option key={subtypes._id} value={subtypes._id}>
                                        {subtypes.name?.vietnamese}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {Object.keys(newDetailsubtype.name).map((lang) => (
                            <div key={lang}>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                                </label>
                                <input
                                    type="text"
                                    placeholder={lang}
                                    value={newDetailsubtype.name[lang]}
                                    onChange={(e) =>
                                        setNewDetailsubtype({
                                            ...newDetailsubtype,
                                            name: { ...newDetailsubtype.name, [lang]: e.target.value }
                                        })
                                    }
                                    className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddType}
                            className={`w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 ${loading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            disabled={loading}
                        >
                            {loading ? "Đang thêm..." : "Thêm"}
                        </button>
                    </form>
                </div>

                {/* Danh sách loại từ */}
                <div className="bg-white p-6 rounded shadow">
                    <h2 className="text-lg font-semibold mb-4">Danh sách loại từ</h2>
                    {loading ? (
                        <p className="text-gray-500 text-sm">Đang tải...</p>
                    ) : (
                        <ul className="divide-y divide-gray-200">
                            {detailsubtype.length > 0 ? (
                                detailsubtype.map((data) => (
                                    <li
                                        key={data._id}
                                        className="flex justify-between items-center p-4 hover:bg-gray-50 transition duration-200"
                                    >
                                        <div>
                                            <p className="text-sm font-medium text-gray-800">
                                                {data.name?.english || "N/A"}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {data.name?.korean || "N/A"} - {data.name?.vietnamese || "N/A"}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => handleDeleteType(data._id)}
                                            className="text-red-500 hover:text-red-700 font-medium"
                                        >
                                            Xóa
                                        </button>
                                    </li>
                                ))
                            ) : (
                                <p className="text-gray-500 text-sm">Không có loại từ nào.</p>
                            )}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
