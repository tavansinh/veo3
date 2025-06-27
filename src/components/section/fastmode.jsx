import { faInfo, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Fastmode = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [activeTab, setActiveTab] = useState('text');
    const [activeDuration, setActiveDuration] = useState('5s');
    const [activeQuality, setActiveQuality] = useState('360p');
    const [activeRatio, setActiveRatio] = useState('16:9');
    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-[#4e5764] shadow-sm">
                <div className="p-6">
                    <div className="mb-6 grid h-10 w-full grid-cols-2 items-center justify-center rounded-md bg-[#1d2733] p-1">
                        <button
                            onClick={() => setActiveTab('text')}
                            className={`inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all ${activeTab === 'text' ? 'bg-black' : ''}`}
                        >
                            Text-to-Video
                        </button>
                        <button
                            onClick={() => setActiveTab('image')}
                            className={`inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all focus-visible:outline-none disabled:opacity-50 ${activeTab === 'image' ? 'bg-black' : ''}`}
                        >
                            Image-to-Video
                        </button>
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <p className="text-sm leading-none font-medium text-[#93a3b5] peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Prompt
                            </p>
                            <textarea
                                className="flex max-h-[400px] min-h-[120px] w-full rounded-md border bg-[#1c232d] px-3 py-2 text-base placeholder:font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                placeholder="Describe the video you want to generate..."
                            ></textarea>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <p className="flex items-center gap-2 text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Video Duration
                                    <div className="flex h-4 w-4 items-center justify-center rounded-full border border-[#93a3b5]">
                                        <FontAwesomeIcon icon={faInfo} size="xs" />
                                    </div>
                                </p>
                                <div className="border-border mt-1 flex max-w-xs overflow-hidden rounded-md border">
                                    <button
                                        onClick={() => setActiveDuration('5s')}
                                        className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${activeDuration === '5s' ? 'bg-[#EA962D] text-black' : 'bg-background text-[#93a3b5] hover:bg-[#1d2733]/50'}`}
                                    >
                                        5 seconds
                                    </button>
                                    <div className="bg-border w-px"></div>
                                    <button
                                        onClick={() => setActiveDuration('8s')}
                                        className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${activeDuration === '8s' ? 'bg-[#EA962D] text-black' : 'bg-background text-[#93a3b5] hover:bg-[#1d2733]/50'}`}
                                    >
                                        8 seconds
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <p className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Video Quality
                                </p>
                                <div className="mt-1 grid max-w-xs grid-cols-4 gap-2">
                                    <button
                                        onClick={() => setActiveQuality('360p')}
                                        className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${activeQuality === '360p' ? 'bg-[#EA962D] text-black' : 'bg-background /50 border-border border text-[#93a3b5] hover:bg-[#1d2733]'}`}
                                    >
                                        360p
                                    </button>
                                    <button
                                        onClick={() => setActiveQuality('540p')}
                                        className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${activeQuality === '540p' ? 'bg-[#EA962D] text-black' : 'bg-background /50 border-border border text-[#93a3b5] hover:bg-[#1d2733]'}`}
                                    >
                                        540p
                                    </button>
                                    <button
                                        onClick={() => setActiveQuality('720p')}
                                        className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${activeQuality === '720p' ? 'bg-[#EA962D] text-black' : 'bg-background /50 border-border border text-[#93a3b5] hover:bg-[#1d2733]'}`}
                                    >
                                        720p
                                    </button>
                                    <button
                                        onClick={() => setActiveQuality('1080p')}
                                        className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${activeQuality === '1080p' ? 'bg-[#EA962D] text-black' : 'bg-background /50 border-border border text-[#93a3b5] hover:bg-[#1d2733]'}`}
                                    >
                                        1080p
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <p className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Aspect Ratio
                                </p>
                                <div className="mt-1 flex gap-3">
                                    <button
                                        onClick={() => setActiveRatio('16:9')}
                                        className={`flex h-20 w-20 flex-col items-center justify-center rounded-lg border-2 p-2 transition-all ${activeRatio === '16:9' ? 'border-[#EA962D] bg-[#EA962D]/10' : 'border-border bg-background /50 hover:bg-[#1d2733]'}`}
                                    >
                                        <div className="h-7 w-12 rounded bg-[#f6f8f9]/20"></div>
                                        <span className="mt-1 text-xs">16:9</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveRatio('9:16')}
                                        className={`flex h-20 w-20 flex-col items-center justify-center rounded-lg border-2 p-2 transition-all ${activeRatio === '9:16' ? 'border-[#EA962D] bg-[#EA962D]/10' : 'border-border bg-background /50 hover:bg-[#1d2733]'}`}
                                    >
                                        <div className="h-12 w-7 rounded bg-[#f6f8f9]/20"></div>
                                        <span className="mt-1 text-xs">9:16</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveRatio('1:1')}
                                        className={`flex h-20 w-20 flex-col items-center justify-center rounded-lg border-2 p-2 transition-all ${activeRatio === '1:1' ? 'border-[#EA962D] bg-[#EA962D]/10' : 'border-border bg-background /50 hover:bg-[#1d2733]'}`}
                                    >
                                        <div className="h-10 w-10 rounded bg-[#f6f8f9]/20"></div>
                                        <span className="mt-1 text-xs">1:1</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveRatio('3:4')}
                                        className={`flex h-20 w-20 flex-col items-center justify-center rounded-lg border-2 p-2 transition-all ${activeRatio === '3:4' ? 'border-[#EA962D] bg-[#EA962D]/10' : 'border-border bg-background /50 hover:bg-[#1d2733]'}`}
                                    >
                                        <div className="h-11 w-8 rounded bg-[#f6f8f9]/20"></div>
                                        <span className="mt-1 text-xs">3:4</span>
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between space-y-2">
                                    <div className="flex w-full items-center gap-2">
                                        <p className="flex w-full flex-1 items-center gap-2 text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Sound
                                            <div className="flex h-4 w-4 items-center justify-center rounded-full border border-[#93a3b5]">
                                                <FontAwesomeIcon icon={faInfo} size="xs" />
                                            </div>
                                        </p>
                                        <label
                                            htmlFor="checkbox"
                                            className="inline-flex cursor-pointer items-center"
                                        >
                                            <input
                                                onChange={() => {
                                                    setIsChecked(!isChecked);
                                                }}
                                                id="checkbox"
                                                type="checkbox"
                                            />
                                            <div
                                                className={`relative h-6 w-12 rounded-full transition-colors duration-300 ${isChecked ? 'bg-[#EA962D]' : 'bg-gray-300'} `}
                                            >
                                                <div
                                                    className={`absolute top-[2px] left-[2px] h-5 w-5 rounded-full bg-white transition-transform duration-300 ${isChecked && 'translate-x-6'}`}
                                                ></div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {isChecked && (
                                <div className="space-y-2">
                                    <p className="text-sm leading-none font-medium text-[#93a3b5] peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Sound Effect Description
                                    </p>
                                    <textarea
                                        className="flex max-h-[400px] min-h-[120px] w-full rounded-md border bg-[#1c232d] px-3 py-2 text-base placeholder:font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                        placeholder="[Optional] Describe the Sound, for example: the sound of waves hitting the shore."
                                    ></textarea>
                                </div>
                            )}
                            <div className="flex justify-between">
                                <button className="hover:border-primary hover:bg-primary/10 hidden h-10 items-center justify-center gap-2 rounded-md border border-[#EA962D]/50 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:inline-flex">
                                    Reset
                                </button>
                                <div className="flex">
                                    <div className="mr-2 flex flex-col items-end justify-center">
                                        <p className="text-xs">Credits: 1000 remaining</p>
                                        <p className="text-xs font-semibold text-[#EA962D]">
                                            This generation will cost: 20 Credits
                                        </p>
                                    </div>
                                    <button className="text-primary-foreground flex h-12 items-center justify-center gap-2 rounded-md bg-[#EA962D] px-4 py-2 text-sm font-medium whitespace-nowrap text-black transition-colors hover:bg-[#EA962D]/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                                        <FontAwesomeIcon icon={faPlay} />
                                        Generate
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex items-center rounded-lg border border-[#4e5764] shadow-sm">
                <div className="relative w-full p-0">
                    <div className="border-border /50 flex h-full min-h-[400px] w-full flex-col items-center justify-center rounded-lg border-2 border-dashed bg-[#1e2733]/50 text-center text-[#434f5f]">
                        <FontAwesomeIcon icon={faPlay} size="4x" className="mb-2" />
                        <p className="mb-2 text-lg font-medium">Your Video Will Appear Here</p>
                        <p className="-[#f6f8f9] text-sm">
                            Generate a video to see the preview in this area
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fastmode;
