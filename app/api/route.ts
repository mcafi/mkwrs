import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    const url = "https://mkwrs.com/mk64/display.php?track=Luigi+Raceway"
    const { data: html } = await axios.get(url);

    console.log(html);

    return NextResponse.json({
        message: "Hello, World!"
    },
        {
            status: 200
        });
}