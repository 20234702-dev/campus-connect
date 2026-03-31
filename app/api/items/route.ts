import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

// GET all items (with optional filtering)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const status = searchParams.get('status') || 'ACTIVE';
    const limit = searchParams.get('limit');
    
    // Build query
    const query: any = {
      where: {
        status: status as any
      },
      orderBy: {
        createdAt: 'desc'
      }
    };
    
    if (type) query.where.type = type as any;
    if (limit) query.take = parseInt(limit);
    
    const items = await prisma.item.findMany(query);
    return NextResponse.json(items);
  } catch (error) {
    console.error('Failed to fetch items:', error);
    return NextResponse.json({ message: 'Failed to fetch items' }, { status: 500 });
  }
}

// POST new item
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    
    const body = await request.json();
    
    // Create new item in DB
    const newItem = await prisma.item.create({
      data: {
        ...body,
        userId: (session.user as any).id,
      }
    });
    
    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error('Failed to create item:', error);
    return NextResponse.json({ message: 'Failed to create item' }, { status: 500 });
  }
}
