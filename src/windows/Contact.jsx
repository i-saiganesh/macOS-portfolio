import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { socials } from "#constants";
import { WindowControls } from "#components";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h2>Contact Me</h2>
            </div>

            <div className="p-5 space-y-5">
                <img
                    src="/images/ganesh.jpg"
                    alt="Ganesh"
                    className="w-20 rounded-full"
                />

                <h3>Let's Talk</h3>
                <p>Wanna build something together?I'm in.</p>
                <p>saiganeshsanagarams@gmail.com</p>

                <ul>
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                                <img src={icon} alt={text} className="size-5" />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
