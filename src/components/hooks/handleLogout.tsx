import { useRouter } from 'next/router';
import { useState } from 'react';
import { deleteStorage } from '../../lib/storage';

// ログアウトのhooks
type Logout = {
  handleLogout: (e: React.MouseEvent<HTMLInputElement>) => void;
  isLogout: boolean;
};

export const useHandleLogout = async (): Promise<() => Promise<Logout>> => {
  const router = useRouter();
  const [isLogout, setIsLogout] = useState(true);
  if (isLogout) {
    const handleLogout = async () => {
      deleteStorage('jwt');
      await router.push('/');
    };
    return { isLogout, handleLogout };
  }
  await setIsLogout(false);
};
