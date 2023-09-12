"use client";

import { CldImage } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";

export default function Home() {
  const [imageId, setImageId] = useState("bxqkzg5tzm9ymnlezk0l");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(result: any) => {
          setImageId(result.info.public_id);
        }}
        uploadPreset="yp5vr08f"
      />
      {imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
