import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { channelId: string } }
) {
  try {
    const series = await fs.readdir(
      process.cwd() + `/data/${params.channelId}`
    );
    console.log("series", series);
    return NextResponse.json(series);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch series" },
      { status: 500 }
    );
  }
}
