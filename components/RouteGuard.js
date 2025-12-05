// components/RouteGuard.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { isAuthenticated, readToken } from '@/lib/authenticate';
import { useAtom } from 'jotai';
import { favouritesAtom } from '@/store';
import { getFavourites } from '@/lib/userData';

const PUBLIC_PATHS = ['/login', '/register', '/']; // Assignment requirement [cite: 184]

export default function RouteGuard(props) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [favouritesList, setFavouritesList] = useAtom(favouritesAtom); // Assignment requirement [cite: 185]

  // Copy the asynchronous function updateAtom() from the Login component [cite: 187]
  async function updateAtom() {
    setFavouritesList(await getFavourites());
  }

  useEffect(() => {
    // Check authentication status
    const token = readToken();
    const isPublicPath = PUBLIC_PATHS.includes(router.pathname);

    if (!isAuthenticated() && !isPublicPath) {
      setAuthorized(false);
      router.push("/login");
    } else {
      setAuthorized(true);
    }
    
    // 🛑 FIX: Invoke the updateAtom() at the beginning of useEffect [cite: 188]
    if (token) {
        updateAtom(); 
    }

  }, [router.pathname]);

  return authorized ? <>{props.children}</> : null;
}
