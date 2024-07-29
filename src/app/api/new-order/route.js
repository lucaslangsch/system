import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  const body = JSON.stringify(request.body);
  try {
    const result =
      await sql`INSERT INTO pets1 (name) VALUES (${body});`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}