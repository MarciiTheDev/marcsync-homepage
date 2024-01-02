import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full h-screen flex items-center justify-center flex-col bg-[#261a39]">
            <div className="flex flex-col items-center">
                <Image src="https://cdn.marcthedev.it/marcsync/MarcSync%20Logo%20Clean%20Transparent.png" alt="logo" width={100} height={100} />
                <h1 className="font-bold text-4xl mt-1">MARC<span className="text-[#ee1e7c]">SYNC</span></h1>
                <h2 className="text-gray-300 mt-2 text-md font-bold">An external Database Service for storing your data.</h2>
            </div>
            <div className="absolute bottom-0 mb-5 flex flex-row gap-3">
                <a className="flex items-center gap-2 bg-[#2b3392] text-[#5865F2] hover:bg-[#242b7a] transition-colors p-3 rounded font-bold shadow-sm" href="https://discord.com/invite/pyysgrUeYE" target="_blank" rel="noreferrer">
                    Join our Discord <Image src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg" alt="discord" width={30} height={30} />
                </a>
                <a className="flex items-center gap-1 bg-[#125c43] text-[#10b981] hover:bg-[#19523f] transition-colors p-3 rounded font-bold shadow-sm" href="https://status.marcsync.dev" target="_blank" rel="noreferrer">
                    Check Status <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 18" fill="none" height="28" width="28"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.50005 16.2008C11.4096 16.2008 13.241 15.4422 14.5912 14.092C15.9415 12.7417 16.7 10.9103 16.7 9.00078C16.7 7.09122 15.9415 5.25987 14.5912 3.90961C13.241 2.55935 11.4096 1.80078 9.50005 1.80078C7.59049 1.80078 5.75914 2.55935 4.40888 3.90961C3.05862 5.25987 2.30005 7.09122 2.30005 9.00078C2.30005 10.9103 3.05862 12.7417 4.40888 14.092C5.75914 15.4422 7.59049 16.2008 9.50005 16.2008ZM12.8894 7.20888C12.9536 7.14766 13.005 7.07441 13.0408 6.99331C13.0766 6.91221 13.0961 6.82485 13.0981 6.73622C13.1002 6.64759 13.0848 6.55943 13.0527 6.47676C13.0207 6.3941 12.9727 6.31855 12.9115 6.25443C12.8503 6.19031 12.777 6.13888 12.6959 6.10307C12.6148 6.06727 12.5275 6.04778 12.4388 6.04573C12.3502 6.04369 12.262 6.05912 12.1794 6.09114C12.0967 6.12317 12.0212 6.17116 11.957 6.23238C10.6037 7.52551 9.41617 8.98176 8.42185 10.5677L7.05205 9.19878C6.99025 9.13246 6.91573 9.07927 6.83293 9.04238C6.75013 9.00549 6.66075 8.98565 6.57012 8.98405C6.47949 8.98245 6.38946 8.99912 6.30541 9.03307C6.22136 9.06702 6.14501 9.11755 6.08091 9.18165C6.01682 9.24574 5.96629 9.32209 5.93234 9.40614C5.89839 9.49019 5.88172 9.58022 5.88332 9.67085C5.88492 9.76148 5.90475 9.85087 5.94165 9.93367C5.97854 10.0165 6.03173 10.091 6.09805 10.1528L8.07805 12.1337C8.15136 12.207 8.24059 12.2625 8.33881 12.2958C8.43703 12.3291 8.5416 12.3393 8.64441 12.3256C8.74721 12.3119 8.84548 12.2748 8.93159 12.217C9.0177 12.1592 9.08934 12.0823 9.14095 11.9924C10.1547 10.2265 11.4171 8.61548 12.8894 7.20888Z" fill="currentColor"></path></svg>
                </a>
            </div>
        </header>
    )
}