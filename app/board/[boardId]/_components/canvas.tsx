"use client";

import Info from "./info";
import Participants from "./participants";
import Toolbar from "./toolbar";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  return <main>
    <Info boardId={boardId} />
    <Participants/>
    {/* <Toolbar/> */}
  </main>;
};

export default Canvas;
