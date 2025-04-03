export default function TopicIntro({ title, subtitle }) {
    return (
        <div className="w-full max-w-screen-xl mx-auto p-3">
            <section className="w-full max-w-screen-xl text-gray-800">
                <h2 className="text-3xl font-bold mb-6 flex items-start gap-3">
                    {title}
                </h2>
                <p className="text-lg lg:w-200 text-gray-700 line-clamp-2">
                    {subtitle}
                </p>
            </section>
        </div>
    )
}