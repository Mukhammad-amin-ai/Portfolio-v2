import { NextResponse } from "next/server";

const TG_BOT_TOKEN = "8623262910:AAEM99CaGB8NDyaXh5FGTrdqw8b7A9_mh3A";
const TG_CHAT_ID = 526075074;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    if (!message) {
      return NextResponse.json({ error: "Message required" }, { status: 400 });
    }

    const text = `
📩 New Contact Message

👤 Name: ${name || "-"}
📧 Email: ${email || "-"}
💬 Message:
${message}
`;

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          text,
        }),
      },
    );

    if (!telegramRes.ok) {
      throw new Error("Telegram error");
    }

    return NextResponse.json({ ok: true });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
