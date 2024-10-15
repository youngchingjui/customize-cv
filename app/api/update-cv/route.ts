// app/api/update-cv/route.js
import { db } from '@vercel/postgres';

export async function POST(request: Request) {
  try {
    const { cvData, userId } = await request.json();

    const query = `
      UPDATE users
      SET cv_data = $1
      WHERE id = $2
    `;
    const values = [cvData, userId];
    await db.query(query, values);

    return new Response(JSON.stringify({ message: 'CV updated successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error updating CV:', error);
    return new Response(JSON.stringify({ error: 'Failed to update CV' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}