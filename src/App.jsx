import React from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

// Verify these imports match your folder structure
import { Navbar, Welcome, Dock, Home } from "#components";
import {
    Resume,
    Safari, // This works now because of step 2
    Terminal,
    Text,
    ImageWindow,
    Contact,
    Finder,
    Photos,
} from "#windows";

import useWindowStore from "#store/window"; // This connects the "brain"

gsap.registerPlugin(Draggable);

const App = () => {
    // Get the window state
    const { windows } = useWindowStore();

    return (
        <main className="relative h-screen w-screen overflow-hidden">
            <Navbar />

            {/* Desktop Icons behind windows */}
            <Home />

            <Welcome />

            {/* --- WINDOWS RENDER LOGIC --- */}
            {/* These only show up when you click the dock icon */}

            {windows.safari?.isOpen && <Safari />}

            {windows.terminal?.isOpen && <Terminal />}
            {windows.resume?.isOpen && <Resume />}
            {windows.finder?.isOpen && <Finder />}
            {windows.contact?.isOpen && <Contact />}
            {windows.photos?.isOpen && <Photos />}
            {windows.txtfile?.isOpen && <Text />}
            {windows.imgfile?.isOpen && <ImageWindow />}

            <Dock />
        </main>
    );
};

export default App;