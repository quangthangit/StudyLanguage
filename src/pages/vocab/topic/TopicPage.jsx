import { useEffect, useState, useCallback, useMemo } from "react";
import { getTopics } from "../../../services/topicService";
import TopicIntro from "../../../components/vocab/topic/TopicIntro";
import Breadcrumb from "../../../components/vocab/Breadcrumb";
import TopicComponent from "../../../components/vocab/topic/TopicComponent copy";
import NotFound from "../../NotFound";
import Loading from "../../Loading";

export default function TopicPage() {
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchVocab = useCallback(async () => {
        try {
            const data = await getTopics();
            setTopics(data || []);
        } catch (err) {
            setError(err.message);
        } finally { 
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchVocab();
    }, [fetchVocab]);

    const breadcrumbLinks = useMemo(() => [
        { label: "Trang Chủ", to: "/" },
        { label: "Từ Vựng", to: "/vocab" },
        { label: "Từ Vựng Theo Chủ Đề" }
    ], []);

    const filteredTopics = useMemo(() => {
        return topics?.filter(topic =>
            topic?.name?.english?.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [topics, searchTerm]);

    if (loading) return <Loading />;
    if (error) return <NotFound />;

    return (
        <main className="flex flex-col items-center justify-center py-12 space-y-8">
            <TopicIntro 
                title="Từ vựng theo chủ đề" 
                subtitle="Tại đây bạn sẽ tìm thấy các danh sách từ rộng rãi được phân loại theo chủ đề. Mỗi chủ đề bao gồm các tiểu mục sẽ giúp bạn mở rộng kiến thức từ vựng của mình." 
            />
            <Breadcrumb links={breadcrumbLinks} />
            <div className="w-full max-w-screen-xl mx-auto px-3">
                <div className="relative w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Tìm kiếm..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="absolute left-3 top-2.5 w-5 h-5 text-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </div>
            </div>
            <div className="w-full max-w-screen-xl mx-auto px-3">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTopics.length > 0 ? (
                        filteredTopics.map((topic) => (
                            <TopicComponent key={topic._id} topic={topic} />
                        ))
                    ) : (
                        <p className="text-gray-500 text-lg text-center w-full">Không tìm thấy chủ đề phù hợp.</p>
                    )}
                </section>
            </div>
        </main>
    );
}