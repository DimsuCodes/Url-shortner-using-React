interface FeatureCardProps {
    icon: string;
    title: string;
    text: string;


}

export default function FeatureCard({icon, title, text}: FeatureCardProps){
    return(
        <div>
            <img src={icon} />
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}