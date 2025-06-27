import { faGlobe, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/logo.png';
const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-transparent bg-transparent py-4 transition-all duration-300">
            <div className="container mx-auto flex items-center justify-between px-4">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <img alt="" src={Logo} className="h-6 w-6 object-contain" />
                        <span className="text-lg font-bold">Veo 3</span>
                        <nav className="hidden space-x-6 md:flex">
                            <div className="text-muted-foreground cursor-pointer text-sm font-medium transition-colors hover:text-[#EA962D]">
                                Home
                            </div>
                            <div className="cursor-pointer text-sm font-medium transition-colors hover:text-[#EA962D]">
                                Generate
                            </div>
                            <div className="text-muted-foreground cursor-pointer text-sm font-medium transition-colors hover:text-[#EA962D]">
                                Pricing
                            </div>
                            <div className="text-muted-foreground cursor-pointer text-sm font-medium transition-colors hover:text-[#EA962D]">
                                My Creations
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-9 items-center justify-center gap-2 rounded-md px-0 text-sm font-medium whitespace-nowrap transition-colors hover:bg-[#d26c0a] hover:text-[#93a3b5] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <FontAwesomeIcon icon={faGlobe} />
                    </button>
                    <button className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-10 items-center justify-center gap-2 rounded-full border text-sm font-medium whitespace-nowrap transition-colors hover:bg-[#d26c0a] hover:text-[#93a3b5] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <FontAwesomeIcon icon={faMoon} />
                    </button>
                    <div className="hidden items-center gap-4 md:flex">
                        <button className="ring-offset-background focus-visible:ring-ring hover:bg-accent inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap text-[#93a3b5] transition-colors hover:bg-[#d26c0a] hover:text-[#EA962D] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                            Login
                        </button>
                        <button className="ring-offset-background focus-visible:ring-ring text-[#EA962D]-foreground button-3d cinematic-glow inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#EA962D] px-4 py-2 text-sm font-medium whitespace-nowrap text-black transition-colors hover:bg-[#EA962D]/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
