import VocabBanner from "../../components/vocab/VocabBanner";
import VocabCategorized from "../../components/vocab/VocabCategorized";
import VocabCommunity from "../../components/vocab/VocabCommunity";
import VocabLearningCard from "../../components/vocab/VocabLearningCard";
import VocabLevels from "../../components/vocab/VocabLevel";
import VocabSection from "../../components/vocab/VocabSection";

export default function VocabPage() {
    return (
        <main className="flex flex-col items-center justify-center py-12 space-y-8">
            <VocabSection title={"Học từ vựng tiếng Hàn"} subtitle={"Hãy bắt đầu hành trình học từ vựng tiếng Hàn được phân loại trên TeaKorea"} />
            <VocabLearningCard/>
            <VocabLevels/>
            <VocabCommunity topics={topics}/>
            <VocabBanner/>
            <VocabCategorized/>
        </main>
    )
}

export const topics = [
    {
        title: "English Vocabulary",
        creator: "Lili",
        creatorImage: "https://randomuser.me/api/portraits/women/1.jpg",
        image: "15.png",
        stats: { words: 101, date: "28 Oct", users: 69 },
    },
    {
        title: "English Vocabulary",
        creator: "Lili",
        creatorImage: "https://randomuser.me/api/portraits/women/1.jpg",
        image: "18.png",
        stats: { words: 101, date: "28 Oct", users: 69 },
    },
    {
        title: "English Vocabulary",
        creator: "Lili",
        creatorImage: "https://randomuser.me/api/portraits/women/1.jpg",
        image: "2.png",
        stats: { words: 101, date: "28 Oct", users: 69 },
    },
    {
        title: "English Vocabulary",
        creator: "Lili",
        creatorImage: "https://randomuser.me/api/portraits/women/1.jpg",
        image: "15.png",
        stats: { words: 101, date: "28 Oct", users: 69 },
    },
    {
        title: "Oxford Word Skills",
        creator: "Neenz",
        creatorImage: "https://randomuser.me/api/portraits/men/1.jpg",
        image: "2.png",
        stats: { words: 101, date: "28 Oct", users: 54 },
    },
    {
        title: "b2",
        creator: "Alihan",
        creatorImage: "https://randomuser.me/api/portraits/men/2.jpg",
        image: "18.png",
        stats: { words: 1, date: "21 Oct", users: 24 },
    },
    {
        title: "Mango English",
        creator: "Anchen",
        creatorImage: "https://randomuser.me/api/portraits/women/2.jpg",
        image: "2.png",
        stats: { words: 9, date: "12 May", users: 24 },
    },
];