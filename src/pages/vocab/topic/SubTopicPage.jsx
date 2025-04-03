import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback, useMemo } from "react";
import Loading from "../../Loading";
import NotFound from "../../NotFound";
import TopicIntro from "../../../components/vocab/topic/TopicIntro";
import Breadcrumb from "../../../components/vocab/Breadcrumb";
import SubTopicComponent from "../../../components/vocab/topic/SubTopicComponent";
import { getSubtopicsByTopic } from "../../../services/subtopicService";

export default function SubTopicPage() {
    const { id } = useParams();
    const [subtopics, setSubtopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchVocab = useCallback(async () => {
        try {
            const data = await getSubtopicsByTopic(id);
            setSubtopics(data || []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchVocab();
    }, [fetchVocab]);

    const breadcrumbLinks = useMemo(() => [
        { label: "Trang Chủ", to: "/" },
        { label: "Từ Vựng", to: "/vocab" },
        { label: "Từ Vựng Theo Chủ Đề", to: "/vocab/topic" },
        { label: "Động vật" }
    ], []);

    if (loading) return <Loading />;
    if (error) return <NotFound />;
    // if (!subtopics.length) return <Empty />;

    return (
        <main className="flex flex-col items-center justify-center py-12 space-y-8">
            <TopicIntro 
                title="Động vật" 
                subtitle="Tìm hiểu về các loài động vật khác nhau và đặc điểm của chúng. Khám phá động vật có vú, loài gặm nhấm, con non, âm thanh, lớp phủ và hơn thế nữa trong danh mục này." 
            />
            <Breadcrumb links={breadcrumbLinks} />
            <div className="w-full max-w-screen-xl mx-auto p-3">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subtopics.map((subtopic, index) => (
                        <SubTopicComponent key={subtopic._id} index={index + 1} subtopic={subtopic} />
                    ))}
                </section>
            </div>
        </main>
    );
}
