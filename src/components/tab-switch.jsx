/**
 * @param {string} currentMode
 * @param {React.Dispatch<React.SetStateAction<string>} setCurrentMode
 * @param {string[]} mode
 */
const TabSwitch = ({ currentMode, setCurrentMode, mode }) => {
    return (
        <div className="mb-8 flex h-10 w-full min-w-max items-center justify-center rounded-md bg-[#1d2733] p-1 text-[#91a4bb]">
            <button
                onClick={() => {
                    setCurrentMode(mode[0]);
                }}
                className={`ring-offset-background focus-visible:ring-ring disabled:opacity-50:bg-background:text-foreground:shadow-sm inline-flex items-center justify-center rounded-sm px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none ${currentMode === mode[0] && 'bg-[#0a0b0d]'}`}
            >
                Fast Mode
            </button>
            <button
                onClick={() => {
                    setCurrentMode(mode[1]);
                }}
                className={`ring-offset-background focus-visible:ring-ring disabled:opacity-50:bg-background:text-foreground:shadow-sm inline-flex items-center justify-center rounded-sm px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none ${currentMode === mode[1] && 'bg-[#0a0b0d]'} flex items-center gap-2`}
            >
                Google VEO3{' '}
                <span className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-2 py-0.5 text-xs font-medium text-white">
                    NEW
                </span>
            </button>
            <button
                onClick={() => {
                    setCurrentMode(mode[2]);
                }}
                className={`ring-offset-background focus-visible:ring-ring disabled:opacity-50:bg-background:text-foreground:shadow-sm inline-flex items-center justify-center rounded-sm px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none ${currentMode === mode[2] && 'bg-[#0a0b0d]'}`}
            >
                Normal Mode
            </button>
            <button
                onClick={() => {
                    setCurrentMode(mode[3]);
                }}
                className={`ring-offset-background focus-visible:ring-ring disabled:opacity-50:bg-background:text-foreground:shadow-sm inline-flex items-center justify-center rounded-sm px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none ${currentMode === mode[3] && 'bg-[#0a0b0d]'}`}
            >
                History
            </button>
        </div>
    );
};

export default TabSwitch;
