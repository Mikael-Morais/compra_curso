import { Pool } from 'pg';
import fs from 'fs';
import path from 'path';

let pool: Pool | null = null;

export async function connectDatabase(): Promise<void> {
  if (pool) return;

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL is not set in environment variables');
  }

  // For Neon/postgres hosted with TLS
  pool = new Pool({
    connectionString,
    ssl: {
      rejectUnauthorized: false,
    } as any,
  });

  // Verify connection
  await pool.query('SELECT 1');

  
  const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      course TEXT,
      active BOOLEAN NOT NULL DEFAULT TRUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `;

  try {
    await pool.query(createUsersTable);
  } catch (err) {
    console.error('Error creating users table:', err);
    throw err;
  }

  console.log('Connected to database');
}

export async function disconnectDatabase(): Promise<void> {
  if (!pool) return;
  await pool.end();
  pool = null;
  console.log('Database connection closed');
}

export function query(text: string, params?: any[]) {
  if (!pool) throw new Error('Database not connected');
  return pool.query(text, params);
}
