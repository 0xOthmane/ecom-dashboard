import { getUserAuth } from "@/lib/auth";
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const user = await getUserAuth();
    const body = await req.json();
    const { name } = body;

    if (!user) return new NextResponse("Unauthenticated", { status: 401 });
    if (!name) return new NextResponse("Name is required", { status: 400 });
    if (!params.storeId)
      return new NextResponse("Store id is required", { status: 400 });

    const store = await db.store.updateMany({
      where: {
        id: params.storeId,
        userId: user.id,
      },
      data: {
        name,
      },
    });
    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORE_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const user = await getUserAuth();

    if (!user) return new NextResponse("Unauthenticated", { status: 401 });
    if (!params.storeId)
      return new NextResponse("Store id is required", { status: 400 });

    const store = await db.store.deleteMany({
      where: {
        id: params.storeId,
        userId: user.id,
      },
    });
    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORE_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
