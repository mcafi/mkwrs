import axios from "axios";
import { NextResponse } from "next/server";
import { load } from "cheerio";

export async function GET(req: Request, context: any) {
    const { params } = context;

    console.log(params.game);

    const url = "https://mkwrs.com/mk64/display.php?track=Luigi+Raceway"
    const { data: html } = await axios.get(url);

    const $ = load(html);

    return NextResponse.json({
        message: "Hello, World!"
    },
        {
            status: 200
        });
}
