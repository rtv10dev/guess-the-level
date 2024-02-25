import { NextResponse } from "next/server";
import fs from "fs";
import csvParser from "csv-parser";
import sampleSize from "lodash.samplesize";

export const revalidate = 0;

export async function GET() {
  const readFile = () =>
    new Promise((resolve) => {
      const results: any[] = [];
      fs.createReadStream(process.cwd() + "/src/app/files/words.csv", "utf8")
        .pipe(csvParser())
        .on("data", (data) => results.push(data))
        .on("end", () => {
          resolve(sampleSize(results, 500));
        });
    });
  const words = await readFile();

  return NextResponse.json(words, {
    status: 200,
  });
}
