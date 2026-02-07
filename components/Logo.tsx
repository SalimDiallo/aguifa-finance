import Image from "next/image";

export default function Logo({
    className
}:{className?:string}) {
    return (
        <a href="/" className="flex items-center gap-4 group py-2">
            <div className={"w-30 h-10 rounded-lg flex items-center justify-center "+ className}>
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={300}
                    height={300}
                    className="drop-shadow-[0_2px_4px_rgba(255,255,255,0.5)]"
                />
            </div>
        </a>
    );
}