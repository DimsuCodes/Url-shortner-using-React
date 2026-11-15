import Button from "./Button";


interface BoostProps {
    title: string;
}

export default function Boost({ title }: BoostProps) {
    return (
        <div>
            <h2>{title}</h2>
            <Button>Get Started</Button>

        </div>

    )
}