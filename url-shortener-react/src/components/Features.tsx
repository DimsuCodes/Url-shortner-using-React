import FeatureCard from "./FeatureCard"

interface Feature {
    id: number;
    icon: string;
    title: string;
    text: string;
}
const features: Feature[] = [

]
const Features = [
    {
        id: 1,
        icon: "/images/icon-brand-recognition.svg",
        title: "Brand Recognition",
        text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    }, {
        id: 2,
        icon: "/images/icons/icon-detailed-records.svg",
        title: "Detailed Records",
        text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    }, {
        id: 3,
        icon: "/images/icons/icon-brand-recognition (2).svg",
        title:"Fully Customizable",
        text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
    }



];

export default function Features() {
    return (
        <section id="features">
            <h2>{title}</h2>
            <p>{text}</p>
            {features.map((feature) => (
                <FeatureCard key={ } icon={ } title={ } text={ } />
            ))}
        </section>
    );
}