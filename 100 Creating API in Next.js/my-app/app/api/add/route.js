import { NextResponse } from "next/server";
import fs from "fs/promises"
import path from "path";

export async function POST(request) {
    let Entry = await request.json();

    const filePath = path.join(process.cwd(), 'naeem.json');
    const fileContents = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(fileContents);

    if (!Array.isArray(jsonData)) {
        throw new Error('JSON is not an array');
    }

    // 2. Find the max Key in the array
    const maxKey = jsonData.reduce((max, item) => {
        return item.Key > max ? item.Key : max;
    }, 0);

    const newEntry = {
        Key: maxKey + 1,
        Value: Entry.Value,
        Description: Entry.Description
    };

    // 3. Push the new entry
    jsonData.push(newEntry);

    let a = await fs.writeFile("naeem.json", JSON.stringify(jsonData, null, 2), 'utf-8');
    console.log(Entry);
    return NextResponse.json({ success: true, Entry })
}

export async function GET(request) {
    try {
      const { searchParams } = new URL(request.url);
      const keyParam = searchParams.get('key'); // ?key=2
  
      const filePath = path.join(process.cwd(), 'naeem.json');
      const fileContents = await fs.readFile(filePath, 'utf-8');
      const jsonData = JSON.parse(fileContents);
  
      if (!Array.isArray(jsonData)) {
        throw new Error('JSON is not an array');
      }
  
      if (keyParam) {
        const keyAsNumber = parseInt(keyParam, 10);
        const entry = jsonData.find(item => item.Key === keyAsNumber);
  
        if (entry) {
          return NextResponse.json({ success: true, entry });
        } else {
          return NextResponse.json({ success: false, message: 'No entry found' }, { status: 404 });
        }
      }
  
      // Return full data if no key provided
      return NextResponse.json({ success: true, data: jsonData });
  
    } catch (err) {
      console.error('Error in GET /api/add:', err);
      return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
  }