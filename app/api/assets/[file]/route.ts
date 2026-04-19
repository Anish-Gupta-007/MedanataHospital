import { readFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET(request: Request, { params }: { params: { file: string } }) {
  const file = params.file;
  // Point strictly to the local brain dir where generated artifacts live based on the current workspace context
  const targetDir = 'C:\\Users\\anish\\.gemini\\antigravity\\brain\\854a984e-e1a4-404f-861e-c2d04c5c3a80';
  
  try {
    const buffer = await readFile(path.join(targetDir, file));
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'image/png', // Safe default mapping for the generated outputs
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (error) {
    return new NextResponse('File not found', { status: 404 });
  }
}
