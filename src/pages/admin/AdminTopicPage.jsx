import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getTopics, createTopic, deleteTopic } from "../../services/topicService";

export default function AdminTopicPage() {
    const [newTopic, setNewTopic] = useState({
        name: { english: "", korean: "", vietnamese: "" },
        description: { english: "", korean: "", vietnamese: "" },
        lessons: 0,
        words: 0,
        image: null,
    });

    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTopics = async () => {
            setLoading(true);
            try {
                const data = await getTopics();
                setTopics(data || []);
            } catch (error) {
                console.error("Lỗi khi lấy danh sách chủ đề:", error.response?.data || error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchTopics();
    }, []);

    const handleAddTopic = async () => {
        if (!newTopic.name.english || !newTopic.name.korean || !newTopic.name.vietnamese) {
            toast.warn("Vui lòng nhập đầy đủ thông tin tên chủ đề.");
            return;
        }
        setLoading(true);
        try {
            const response = await createTopic(newTopic);
            if (response?.status === 201) {
                setTopics((prevTopics) => [...prevTopics, response.data.topic]);
                setNewTopic({
                    name: { english: "", korean: "", vietnamese: "" },
                    description: { english: "", korean: "", vietnamese: "" },
                    lessons: 0,
                    words: 0,
                    image: null,
                });
                toast.success("Thêm chủ đề thành công!");
            } else {
                toast.warn("API không trả về trạng thái 201.");
            }
        } catch (error) {
            console.error("Lỗi khi thêm chủ đề:", error.response?.data || error.message);
            toast.error("Lỗi khi thêm chủ đề.");
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteTopic = async (id) => {
        setLoading(true);
        try {
            const response = await deleteTopic(id);
            if (response?.status === 200) {
                setTopics((prevTopics) => prevTopics.filter((topic) => topic._id !== id));
                toast.success("Xóa chủ đề thành công!");
            } else {
                toast.warn("API không trả về trạng thái 200.");
            }
        } catch (error) {
            console.error("Lỗi khi xóa chủ đề:", error.response?.data || error.message);
            toast.error("Lỗi khi xóa chủ đề.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-6">Quản lý Chủ Đề</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded shadow">
                    <h2 className="text-lg font-semibold mb-4">Thêm Chủ Đề</h2>
                    <form className="space-y-4">
                        {["english", "vietnamese", "korean"].map((lang) => (
                            <div key={lang}>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tên ({lang})</label>
                                <input
                                    type="text"
                                    value={newTopic.name[lang]}
                                    onChange={(e) => setNewTopic((prev) => ({
                                        ...prev,
                                        name: { ...prev.name, [lang]: e.target.value },
                                    }))}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                        ))}

                        {["english", "vietnamese", "korean"].map((lang) => (
                            <div key={lang}>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả ({lang})</label>
                                <input
                                    type="text"
                                    value={newTopic.description[lang]}
                                    onChange={(e) => setNewTopic((prev) => ({
                                        ...prev,
                                        description: { ...prev.description, [lang]: e.target.value },
                                    }))}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                        ))}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Số bài học</label>
                            <input
                                type="number"
                                value={newTopic.lessons}
                                onChange={(e) => setNewTopic((prev) => ({ ...prev, lessons: Number(e.target.value) }))}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Số từ vựng</label>
                            <input
                                type="number"
                                value={newTopic.words}
                                onChange={(e) => setNewTopic((prev) => ({ ...prev, words: Number(e.target.value) }))}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <button type="button" onClick={handleAddTopic} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700" disabled={loading}>
                            {loading ? "Đang thêm..." : "Thêm"}
                        </button>
                    </form>
                </div>

                <div className="bg-white p-6 rounded shadow">
                    <h2 className="text-lg font-semibold mb-4">Danh sách Chủ Đề</h2>
                    <ul className="divide-y divide-gray-200">
                        {topics.length > 0 ? (
                            topics.map((topic) => (
                                <li key={topic._id} className="flex justify-between items-center p-4">
                                    <span>{topic.name.vietnamese || "N/A"}</span>
                                    <button onClick={() => handleDeleteTopic(topic._id)} className="text-red-500 hover:text-red-700">Xóa</button>
                                </li>
                            ))
                        ) : (
                            <p className="text-gray-500 text-sm">Không có chủ đề nào.</p>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
