"use server";
import { headers } from "next/headers";
import {permanentRedirect, redirect} from "next/navigation";
import {createClient} from "../../../../utils/supabase/server";

export const signIn = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { data,error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        console.log("ERROR IN DATA", error);
    }
    return redirect("/dashboard");
};
export const signOut = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    console.log("ERROR IN signout", error);
    if (error) {
        console.log("ERROR IN signout", error);
    }
    // pulisco la pagina
    return permanentRedirect("/login");
}
export const signUp = async (formData: FormData) => {
    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error, data } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        console.log("SIGN UP ERROR");
        console.log(error);
        return redirect(`/login?message=${error.message}`);
    }
    console.log(data, error);
    return redirect("/login?message=Check email to continue sign in process");
};

export const signInWithGoogleOAuth = async () => {
    const origin = headers().get("origin");
    const supabase = createClient();
    const { error, data } = await supabase.auth.signInWithOAuth({
        options: {
            redirectTo: `${origin}/auth/callback`,
        },
        provider: "google",
    });

    if (error) {
        return redirect(`/login?message=${error.message}`);
    }
    return redirect(data.url);
};
