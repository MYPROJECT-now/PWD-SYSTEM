import { db } from "@/db/drizzle";
import { notificationTable } from "@/db/schema";

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log("Fetching notifications...");
    const notifications = await db
      .select()
      .from(notificationTable)

    console.log("Notifications fetched:", notifications);
    return NextResponse.json(notifications, { status: 200 }); // Return JSON response with status
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching notifications:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.error("Unexpected error:", error);
      return NextResponse.json({ error: "Failed to fetch notifications" }, { status: 500 });
    }
  }
}
