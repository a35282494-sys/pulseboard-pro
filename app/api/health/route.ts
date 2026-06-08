import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    ok: true,
    service: "PulseBoard Pro API",
    timestamp: new Date().toISOString()
  });
}
