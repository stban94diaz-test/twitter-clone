import { createClient } from "@/app/utils/supabase/sever"
import { NextRequest, NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const reqURL = new URL(req.url)
  const code = reqURL.searchParams.get('code')

  if (code !== null) {
    const supabase = await createClient()
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(reqURL.origin)
}