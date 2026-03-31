import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    
    const body = await request.json();
    const { itemId, messageBody } = body;
    
    if (!itemId || !messageBody) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }
    
    // Create new message
    const newMessage = await prisma.message.create({
      data: {
        itemId,
        senderName: session.user.name || 'Anonymous User',
        senderEmail: session.user.email || 'unknown@campus.edu',
        messageBody,
        isRead: false
      }
    });

    // In a real application, you would also trigger an email notification here
    // using a service like Resend, SendGrid or AWS SES to actually send the email
    // to the item poster.
    
    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error('Failed to send message:', error);
    return NextResponse.json({ message: 'Failed to send message' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    
    // Get all items owned by the user
    const userItems = await prisma.item.findMany({
      where: { userId: (session.user as any).id },
      select: { id: true }
    });
    
    const itemIds = userItems.map(item => item.id);
    
    // Get all messages for those items
    const messages = await prisma.message.findMany({
      where: {
        itemId: { in: itemIds }
      },
      orderBy: { createdAt: 'desc' }
    });
    
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Failed to fetch messages:', error);
    return NextResponse.json({ message: 'Failed to fetch messages' }, { status: 500 });
  }
}
