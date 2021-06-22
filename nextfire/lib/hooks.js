import { auth } from '../lib/firebase';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user] = useAuthState(auth);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    return unsubscribe;
  }, [user]);

  return { user, username };
}