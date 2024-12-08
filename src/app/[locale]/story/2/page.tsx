"use client"
import NavBarSound from "@/components/SoundNavBar";
import { useRef, useEffect } from "react";
import { useRouter } from "@/navigation";
const Story2 = () => {
    const router = useRouter();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            const handleEnded = () => {
                router.push('/story/3')
            };
            videoElement.addEventListener('ended', handleEnded);
            return () => {
                videoElement.removeEventListener('ended', handleEnded);
            };
        }
    }, []);
    return (
        <div className="w-full min-h-[100dvh] p-10 bg-center bg-no-repeat relative">

            <div className="z-10 relative">
                <NavBarSound></NavBarSound>
            </div>
 
            <video
                ref={videoRef}
                className="z-0 absolute top-0 left-0 w-full h-full object-cover"
                src="/STORY 2/STORY 2.mp4"
                autoPlay
                muted
            />
        </div>
    )
}

export default Story2