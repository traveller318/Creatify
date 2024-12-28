import { api } from "@/convex/_generated/api";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Liveblocks } from "@liveblocks/node";
import { log } from "console";

import { ConvexHttpClient } from "convex/browser";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const liveblocks = new Liveblocks({
    secret: process.env.NEXT_PUBLIC_LIVEBLOCKS_SECRET_KEY!,
});

export async function POST(request: Request) {
    const authorization = await auth();
    const user = await currentUser();

    if (!authorization || !user) {
        return new Response("Unauthorized", { status: 403 });
    }
    console.log("AUTH_INFO", {authorization, user});

    const { room } = await request.json();
    const board = await convex.query(api.board.get, { id: room });

    console.log("BOARD", {
        room,
        board,
        boardOrgId: board?.orgId,
        userOrgId: authorization?.orgId,

    });
    

    if (board?.orgId !== authorization.orgId) {
        return new Response("Unauthorized", { status: 401 });
    }

    const userInfo = {
        name: user.firstName || "Anonymous",
        picture: user.imageUrl!,
    };

    console.log("USER_INFO:", {userInfo});
    
    const session = liveblocks.prepareSession(user.id, {
        userInfo,
    });

    if (room) {
        session.allow(room, session.FULL_ACCESS);
    }

    const { status, body } = await session.authorize();
    console.log({ status, body });
    
    return new Response(body, { status });
}