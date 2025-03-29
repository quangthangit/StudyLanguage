import Banner from "../../components/home/Bannner";
import GreetingSection from "../../components/home/GreetingSection";
import Overview from "../../components/home/Overview";
import Upgrade from "../../components/home/Upgrade";
export default function HomePage() {
    return (
        <main className="flex flex-col items-center justify-center py-12 space-y-8">
            <GreetingSection/>
            <Banner/>
            <Overview/>
            <Upgrade/>
        </main>
    );
}
