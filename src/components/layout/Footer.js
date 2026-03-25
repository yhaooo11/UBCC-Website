import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-35 mt-25 text-background relative overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: 'url(/paper.png), url(/paper.png)',
        backgroundRepeat: 'repeat-x, repeat-x',
        backgroundPosition: '0 0, 60px 0',
        backgroundSize: 'auto 100%',
        backgroundColor: 'transparent',
        transform: 'rotate(180deg)'
      }}></div>
      <div className="flex justify-between items-center w-full h-24 bg-white absolute bottom-0 z-20 px-6 md:px-36 pt-2 pb-4">
        <a href="https://www.instagram.com/ubcclimbingclub/"
          target="_blank" rel="noopener noreferrer" >
          <Image
            src="/instagram-logo.svg"
            alt="Instagram"
            width={48}
            height={48}
            className="w-12"
          />
        </a>

        <Image
          src="/logo.png"
          alt="UBCCC logo"
          width={112}
          height={60}
          className="w-28"
        />
      </div>
    </footer>
  );
}
