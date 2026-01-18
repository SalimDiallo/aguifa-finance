import Image from "next/image";

export default function Logo() {
    return (
        <a href="/" className="flex items-center gap-4 group">
            <div className="w-40 h-20 rounded-lg flex items-center justify-center">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={500}
                    height={500}
                    className="drop-shadow-[0_2px_4px_rgba(255,255,255,0.5)]"
                />
            </div>
        </a>
    );
}