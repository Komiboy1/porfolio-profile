export default function HeroSection(){
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I am Ebube Okonmah</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ratione quae placeat veniam, ea nostrum reprehenderit vero cumque a perspiciatis amet rerum culpa id dignissimos deleniti iste dolorum? Adipisci, recusandae?
                        <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus natus nihil sint necessitatibus voluptas, impedit accusamus deserunt sit repudiandae, harum cumque nam veritatis id recusandae! Adipisci dicta veniam iste repudiandae.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img"><img src="./img/ebube_1.jpg" alt="Hero Section" /></div>
        </section>
    )
}