'use client'; // 클라이언트 컴포넌트로 설정

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  const handleSignOut = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    window.location.href = '/login'; // 로그아웃 후 로그인 페이지로 리디렉션
  };

  return (
    <button onClick={handleSignOut} disabled={loading}>
      {loading ? 'Loading...' : '로그아웃'}
    </button>
  );
}