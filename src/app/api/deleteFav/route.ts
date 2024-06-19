import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const jsonServerUrl = "http://localhost:3001/fav";

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  console.log(`Deleting location with ID ${id}`);

  try {
    const response = await axios.delete(`${jsonServerUrl}/${id}`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error deleting location:", error);

    return NextResponse.json(
      { error: "Failed to delete location" },
      { status: 500 },
    );
  }
}
