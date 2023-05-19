import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer" style={{backgroundImage:"url(/img/footer.png)"}}>
            <div className="redes">
                <a href="https://www.linkedin.com/in/joseph-antigua-ba961518b/">
                    <img src="/img/linkedin.png" alt="LinkedIn Profile" />
                </a>
                <a href="https://github.com/joantigua">
                    <img src="/img/github.png" alt="Github Profile" />
                </a>
                <a href="https://exercism.org/profiles/joantigua">
                    <img src="/img/exercism.png" alt="Exercism Profile" />
                </a>
            </div>
            <img src="/img/logo.png" alt="org"/>
            <strong>Desarrollado por Joseph Antigua</strong>
        </footer>
    )
}

export default Footer