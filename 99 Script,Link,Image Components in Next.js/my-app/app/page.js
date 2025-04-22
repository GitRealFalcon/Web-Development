import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-6 size-80 bg-amber-200 relative">
      <Image className=" mx-auto object-contain" fill={true} src="https://media.istockphoto.com/id/1161878589/photo/bueatiful-tea-plantation-on-mountain.jpg?s=1024x1024&w=is&k=20&c=wgGafYAVLguIeeNPpU8z7K0ejO0JunU0oec2PtrPMzQ=" alt="hello" />
    </div>
  );
}
