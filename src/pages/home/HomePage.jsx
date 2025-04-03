import Banner from "../../components/home/Bannner";
import ExamTips from "../../components/home/ExamTips";
import GrammarGuide from "../../components/home/GrammarGuide";
import GreetingSection from "../../components/home/GreetingSection";
import Overview from "../../components/home/Overview";
import StatsSection from "../../components/home/StatsSection";
import SuccessStories from "../../components/home/SuccessStories";
import Upgrade from "../../components/home/Upgrade";
export default function HomePage() {
    const stats = [
        { value: "10,000+", label: "Vocabulary Words" },
        { value: "500+", label: "Grammar Lessons" },
        { value: "98%", label: "Success Rate" },
    ];
    const tips = {
        listening: [
            "Practice with different English accents (British, American, Australian)",
            "Learn to identify key words and main ideas quickly",
            "Practice note-taking while listening",
        ],
        writing: [
            "Plan your essay structure before writing",
            "Use a variety of sentence structures and vocabulary",
            "Always leave time to review and correct mistakes",
        ],
    };
    const guides = [
        {
            icon: "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z",
            title: "Tenses",
            description: "Master all 12 English tenses with clear explanations and examples.",
            link: "#",
        },
        {
            icon: "M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z",
            title: "Parts of Speech",
            description: "Understand nouns, verbs, adjectives, and other essential components.",
            link: "#",
        },
        {
            icon: "",
            title: "Sentence Structure",
            description: "Learn to construct proper sentences with correct word order.",
            link: "#",
        },
        {
            icon: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
            title: "Common Mistakes",
            description: "Avoid frequent errors that English learners make.",
            link: "#",
        },
    ];
    const stories = [
        {
            name: "Thao Nguyen",
            score: "IELTS 8.0",
            feedback:
                "English Mastery helped me improve my writing score from 6.5 to 7.5 in just 2 months. The feedback on my practice essays was incredibly detailed and helpful.",
            stars: 5,
        },
        {
            name: "Minh Tran",
            score: "TOEFL 110",
            feedback:
                "The vocabulary builder is amazing! I learned 500+ academic words that actually appeared on my TOEFL test. The spaced repetition system really works.",
            stars: 5,
        },
        {
            name: "Linh Pham",
            score: "CAE Grade A",
            feedback:
                "I struggled with grammar for years until I found English Mastery. The interactive exercises and clear explanations finally made everything click for me.",
            stars: 5,
        },
    ];
    return (
        <main className="flex flex-col items-center justify-center py-12 space-y-8">
            <GreetingSection />
            <StatsSection stats={stats} />
            <Overview />
            <GrammarGuide guides={guides} />
            <ExamTips tips={tips} />
            <SuccessStories stories={stories} />
        </main>
    );
}
