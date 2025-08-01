import { NextResponse } from "next/server";

const collection = [
  { id: 1, name: "Item 1", description: "Description 1" },
  { id: 2, name: "Item 2", description: "Description 2" },
  { id: 3, name: "Item 3", description: "Description 3" },
];

export async function GET() {
  try {
    return NextResponse.json(collection, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch collection" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const item = {
      id: collection.length + 1,
      name: body.name,
      description: body.description,
    };
    collection.push(item);

    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create item" },
      { status: 500 }
    );
  }
}
