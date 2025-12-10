import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import { gallery, photosLinks } from "#constants";
import useWindowStore from "#store/window.js";

const Photos = () => {
    const { openWindow } = useWindowStore();

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />
                <h2>Photos</h2>
            </div>

            <div className="flex w-full">
                {/* Sidebar */}
                <div className="sidebar">
                    <ul>
                        {photosLinks.map(({ id, icon, title }) => (
                            <li key={id}>
                                <img src={icon} alt={title} />
                                <p>{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Gallery thumbnails */}
                <div className="gallery">
                    <ul>
                        {gallery.map(({ id, img }) => (
                            <li
                                key={id}
                                onClick={() =>
                                    openWindow("imgfile", {
                                        id,
                                        name: "Gallery image",
                                        icon: "/images/image.png",
                                        kind: "file",
                                        fileType: "img",
                                        imageUrl: img,
                                    })
                                }
                            >
                                <img src={img} alt={`Gallery image ${id}`} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
