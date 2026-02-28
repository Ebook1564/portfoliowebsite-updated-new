// src/app/api/users/route.ts
import { NextResponse } from "next/server";
import pool from "../../../lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      username,
      useremail,
      phonenumber,
      countrycode,
      countryName,      // from frontend
      dailyactiveuser,
      producturl,
    } = body;

    const client = await pool.connect();

    try {
      await client.query(
        `INSERT INTO usertable
         (username, useremail, phonenumber, countrycode, countryname, dailyactiveuser, producturl)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [
          username,
          useremail,
          phonenumber,
          countrycode,
          countryName,   // goes into column "countryname"
          dailyactiveuser,
          producturl,    // goes into column "producturl"
        ]
      );

      return NextResponse.json({ success: true }, { status: 201 });
    } finally {
      client.release();
    }
  } catch (err: any) {
    console.error("API /api/users POST error:", err);
    return NextResponse.json(
      { success: false, error: err?.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: true });
}
