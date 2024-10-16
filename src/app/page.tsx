import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import Link from "next/link";
import LogoutButton from './_components/LogoutButton';


export default async function Home() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }




  return (
    <div> 
      {
        data.user 
        ? (
          <>
            <p>Hello {data.user.email}</p>
            <LogoutButton/>
          </>
        )
        : <Link href={"/login"}>로그인</Link>
      }            
    </div>
  );
}
