import { redirect } from 'next/navigation'
import {createClient} from "../../../utils/supabase/server";


export default async function PrivatePage() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    console.log("Error", error)
    if (error || !data) {
        redirect('/login')
    }

    return <p>Hello {data?.user?.email}</p>
}
