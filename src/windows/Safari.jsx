import React from "react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import useWindowStore from "#store/window.js";

// --- Data: Using .jpg extensions ---
const Certifications = [
    {
        id: "developer",
        label: "Developer Certification",
        image: "/images/developer.jpg",
    },
    {
        id: "datascience",
        label: "Data Science Certification",
        image: "/images/datascience.jpg",
    },
    {
        id: "generative-ai",
        label: "Generative AI Certification",
        image: "/images/generative ai.jpg",
    },
    {
        id: "nptel-java",
        label: "NPTEL Java Certification",
        image: "/images/nptel java.jpg",
    },
    {
        id: "devops",
        label: "DevOps Certification",
        image: "/images/devops.jpg",
    },
    {
        id: "infosys-angular",
        label: "Infosys Angular Certification",
        image: "/images/infosys angular.jpg",
    },
];

const Safari = () => {
    const { openWindow } = useWindowStore();

    const handleOpenCert = (cert) => {
        openWindow("imgfile", {
            imageUrl: cert.image,
            name: cert.label
        });
    };

    return (
        <div className="flex h-full w-full bg-white text-black font-sans">
            {/* Sidebar */}
            <div className="hidden w-48 flex-col bg-gray-100/90 p-4 pt-5 md:flex border-r border-gray-200 backdrop-blur-md">
                <div className="mb-6 flex gap-2">
                    <WindowControls target="safari" />
                </div>
                <div className="mb-6">
                    <h3 className="mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Favorites</h3>
                    <ul className="space-y-1 text-sm font-medium text-gray-700">
                        {/* Work folder removed */}
                        <li className="flex items-center gap-2 px-2 py-1.5 rounded bg-blue-200/50 text-blue-600">
                            <span className="text-blue-500">🎓</span> Certifications
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full overflow-hidden bg-white">
                <div className="flex items-center px-4 py-3 border-b border-gray-200 h-[60px]">
                    <div className="md:hidden mr-4">
                        <WindowControls target="safari" />
                    </div>
                    <span className="text-lg font-bold text-gray-800">Certifications</span>
                    <span className="ml-auto text-xs text-gray-400">{Certifications.length} items</span>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {Certifications.map((cert) => (
                            <div
                                key={cert.id}
                                onClick={() => handleOpenCert(cert)}
                                className="group flex flex-col items-center gap-2 cursor-pointer p-3 rounded-xl hover:bg-blue-50 transition-colors duration-200"
                            >
                                <div className="relative h-24 w-28 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-md shadow-sm group-hover:shadow-md transition-shadow">
                                    <img
                                        src={cert.image}
                                        alt={cert.label}
                                        className="max-h-full max-w-full object-contain p-2"
                                        onError={(e) => { e.target.style.display='none' }}
                                    />
                                </div>
                                <span className="text-center text-sm font-medium text-gray-700 leading-tight line-clamp-2 group-hover:text-blue-600">
                                    {cert.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WindowWrapper(Safari, "safari");