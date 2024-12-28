"use client";

import { use } from "react";
import Canvas from "./_components/canvas";
import { Room } from "@/components/room";
import { Loading } from "./_components/loading";
import { useEffect } from "react";

interface BoardIdPageProps {
    params: Promise<{ boardId: string }>;
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
    const resolvedParams = use(params);
    
    useEffect(() => {
        document.title = `Creatify`;
    }, []);

    return (
        <Room roomId={resolvedParams.boardId} fallback={<Loading />}>
            <Canvas boardId={resolvedParams.boardId} />
        </Room>
    );
};

export default BoardIdPage;