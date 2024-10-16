
import { createClient } from '@/utils/supabase/server'
import Link from "next/link";
import LogoutButton from './_components/LogoutButton';


export default async function Home() {
  const supabase = createClient()

  console.log(supabase.auth);

  const { data } = await supabase.auth.getUser();



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
