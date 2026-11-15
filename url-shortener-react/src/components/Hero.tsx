import Button from "./Button";

export default function Hero() {
    return (

        <section className="hero">
            <div className="heroText">
                <h2>More than just shorter links</h2>
                <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>

                <Button>Get Started</Button>
            </div>
            <img className="heroImage" src="/images/illustration-working.svg" alt="Person working at a desk with a laptop" />
        </section>
    )
}





