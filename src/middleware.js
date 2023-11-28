import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';

export async function middleware(request) {
  try {
    const path = request.nextUrl.pathname;
    const isPublicPath = ['/login', '/register', '/', '/about'].includes(path);
    const token = request.cookies.get('token')?.value || '';

    if (isPublicPath) {
      // If the route is public, allow access
      return;
    }

    if (!token) {
      // If there's no token, redirect to the login page
      return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

    const secretKey = process.env.TOKEN_SECRET; // Replace with your actual secret key

    if (!secretKey) {
      throw new Error('Token secret key is missing');
    }

    const secretKeyUint8 = new TextEncoder().encode(secretKey);
    const decodedToken = await jwtVerify(token, secretKeyUint8, { algorithms: ['HS256'] });

    if (!decodedToken.payload.userRole) {
      throw new Error("User role not found");
    }

    console.log(decodedToken.payload.userRole);

    if (decodedToken.payload.userRole === "Admin") {
      // Allow access to all routes for Admin
      return;
    } else if (['Patient', 'Donor', 'Organization'].includes(decodedToken.payload.userRole)) {
      // Allow access to specific routes for Patient, Donor, Organization
      if (['/profile', '/organization', '/findblood'].includes(path)) {
        return;
      }
    }

    // Redirect to the login page for invalid or missing roles
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  } catch (error) {
    console.error('Error in middleware:', error);
    // Handle errors if needed and redirect to the login page
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/donors', '/login', '/register', '/about', '/findblood', '/organization', '/dashboard/:path', '/dashboard','/profile','/profile/:path'],
};
