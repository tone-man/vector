import { NextResponse } from "next/server";

/**
 * This file contains all backend api routes.
 */

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request) {
    return Response.json({"message":"Vector time?"}, {status: 200});
}
