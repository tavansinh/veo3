import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const History = ({ setCurrentMode, mode }) => {
    return (
        <div className="rounded-lg border border-[#4e5764] shadow-sm">
            <div className="p-6">
                <div className="space-y-6">
                    <div className="border-border/50 flex min-h-[400px] w-full flex-col items-center justify-center rounded-lg border-2 border-dashed bg-[#1e2733]/50 p-8 text-center text-[#434f5f]">
                        <FontAwesomeIcon icon={faVideo} size="4x" className="mb-4" />
                        <h3 className="mb-2 text-xl font-medium text-[#93a3b5]">
                            Your Generated Videos
                        </h3>
                        <p className="mb-4 text-sm">You haven't generated any videos yet.</p>
                        <button onClick={()=>{
                            setCurrentMode(mode[1])
                        }} className="text-primary-foreground flex h-10 items-center justify-center gap-2 rounded-md bg-[#EA962D] px-4 py-2 text-sm font-medium whitespace-nowrap text-black transition-colors hover:bg-[#EA962D]/90 focus-visible:outline-none">
                            Generate Your First Video
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
