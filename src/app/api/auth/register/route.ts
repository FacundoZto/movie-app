import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { User } from '@/models/User';
import bcrypt from 'bcryptjs';

export const POST = async (req: Request) => {
  await connectDB();
  const { email, password } = await req.json();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({error: 'User already exists'},{status: 400});
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({email, password: hashedPassword});
  await user.save();

  return NextResponse.json({message: 'User registered successfully'});
};