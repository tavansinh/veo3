import { faDownload, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Video from '../../assets/video/video.mp4';

const Googlemode = () => {
    const [activeTab, setActiveTab] = useState('text');
    const [activeMode, setActiveMode] = useState('fast');

    const downloadSetup = () => {
        const link = document.createElement('a');
        link.href = '/setup-veo3.exe';
        link.download = 'setup-veo3.exe';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-[#4e5764] shadow-sm">
                <div className="p-6">
                    <div className="mb-4 rounded-md border border-yellow-500/20 bg-yellow-500/10 p-3">
                        <p className="text-sm text-yellow-400">
                            Audio is still an experimental feature, so some generated videos may not
                            include sound. High-quality mode is more likely to generate videos with
                            sound.
                        </p>
                    </div>

                    <div className="mb-4 space-y-1">
                        <p className="text-sm text-gray-400">Video duration: 8 seconds</p>
                        <p className="text-sm text-gray-400">Aspect ratio: 16:9</p>
                    </div>

                    <div className="mb-6 grid h-10 w-full grid-cols-2 items-center justify-center rounded-md bg-[#1d2733] p-1">
                        <button
                            onClick={() => setActiveTab('text')}
                            className={`inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all ${activeTab === 'text' ? 'bg-black' : ''}`}
                        >
                            Text-to-video
                        </button>
                        <button
                            onClick={() => setActiveTab('image')}
                            className={`inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all focus-visible:outline-none disabled:opacity-50 ${activeTab === 'image' ? 'bg-black' : ''}`}
                        >
                            Image-to-video
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <p className="text-sm leading-none font-medium text-[#93a3b5]">
                                Prompt
                            </p>
                            <textarea
                                className="flex max-h-[400px] min-h-[120px] w-full rounded-md border bg-[#1c232d] px-3 py-2 text-base placeholder:font-medium focus:outline-none"
                                defaultValue="A medium shot, historical adventure setting: warm lamplight illuminates a cartographer in a cluttered study, poring over an ancient, sprawling map spread across a large table. Cartographer: 'According to this old sea chart, the lost island isn't myth! We must prepare an expedition immediately!'"
                                placeholder="Describe what you want to see in the video. Be detailed and specific. Speech works better with longer transcripts."
                            />
                        </div>

                        <div className="space-y-2">
                            <p className="text-sm leading-none font-medium text-[#93a3b5]">
                                Generation mode
                            </p>
                            <div className="border-border mt-1 flex max-w-xs overflow-hidden rounded-md border">
                                <button
                                    onClick={() => setActiveMode('fast')}
                                    className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${activeMode === 'fast' ? 'bg-[#EA962D] text-black' : 'bg-background text-[#93a3b5] hover:bg-[#1d2733]/50'}`}
                                >
                                    Fast
                                </button>
                                <div className="bg-border w-px"></div>
                                <button
                                    onClick={() => setActiveMode('quality')}
                                    className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${activeMode === 'quality' ? 'bg-[#EA962D] text-black' : 'bg-background text-[#93a3b5] hover:bg-[#1d2733]/50'}`}
                                >
                                    Quality
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <button className="hover:border-primary hover:bg-primary/10 inline-flex h-10 items-center justify-center gap-2 rounded-md border border-[#EA962D]/50 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                                Reset
                            </button>
                            <div className="flex">
                                <div className="mr-2 flex flex-col items-end justify-center">
                                    <p className="text-xs">Credits: 1000 remaining</p>
                                    <p className="text-xs font-semibold text-[#EA962D]">
                                        This generation will cost: 200 credits
                                    </p>
                                </div>
                                <button className="text-primary-foreground flex h-12 items-center justify-center gap-2 rounded-md bg-[#EA962D] px-4 py-2 text-sm font-medium whitespace-nowrap text-black transition-colors hover:bg-[#EA962D]/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                                    <FontAwesomeIcon icon={faPlay} />
                                    Generate video
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative flex flex-col rounded-lg border border-[#4e5764] p-6 shadow-sm">
                <p className="mb-4 leading-none font-medium text-[#93a3b5]">Preview</p>

                <div className="relative mb-4 w-full">
                    <video
                        src={Video}
                        controls
                        className="h-full min-h-[400px] w-full rounded-lg object-cover"
                        poster=""
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={downloadSetup}
                        className="text-primary-foreground flex h-12 items-center justify-center gap-2 rounded-md bg-[#EA962D] px-4 py-2 text-sm font-medium whitespace-nowrap text-black transition-colors hover:bg-[#EA962D]/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                        <FontAwesomeIcon icon={faDownload} />
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Googlemode;
