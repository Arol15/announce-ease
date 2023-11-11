import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createAnnouncementSchema = z.object({
  header: z.string().min(1).max(255),
  body: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createAnnouncementSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  const newAnnoucement = await prisma.announcement.create({
    data: { header: body.header, body: body.body },
  });

  return NextResponse.json(newAnnoucement, { status: 201 });
}
