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
      <div className="flex justify-between items-center w-full h-20 bg-white absolute bottom-0 z-20 px-6 md:px-36 pt-2">
        <a href="https://www.instagram.com/ubcclimbingclub/"
          target="_blank" rel="noopener noreferrer" >
          <img src="/instagram-logo.svg" className="w-10" />
        </a>

        <img
          src="/logo.png"
          alt="UBCCC logo"
          className="w-26"
        />
      </div>
    </footer>
  );
}
