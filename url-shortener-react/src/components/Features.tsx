import FeatureCard from "./FeatureCard"

interface Feature {
    id: number;
    icon: string;
    title: string;
    text: string;
}
const features: Feature[] = [
    {
        id: 1,
        icon: "/images/icon-brand-recognition.svg",
        title: "Brand Recognition",
        text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    }, {
        id: 2,
        icon: "/images/icon-detailed-records.svg",
        title: "Detailed Records",
        text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    }, {
        id: 3,
        icon: "/images/icon-brand-recognition (2).svg",
        title: "Fully Customizable",
        text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
    }



];

export default function Features() {
    return (
        <section id="features">
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our
                advanced statistics dashboard.</p>
            {features.map((feature) => (
                <FeatureCard key={feature.id} icon={feature.icon} title={feature.title} text={feature.text} />
            ))}
        </section>
    );
}