export default function Hero() {
  return (
    <>
    <section className="flex flex-col items-center justify-center text-center text-white py-20">
      <h2 className="text-4xl font-bold">Hi, I’m Zuha Liaqat👋</h2>
      <p className="mt-4 text-lg ">
        Frontend Developer | React | TailwindCSS
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-white text-black rounded-lg shadow hover:bg-[#32a4c3] hover:border border-white transition"
      >
        View My Work
      </a>
    
    </section>
    <hr className="mt-10  border-t-2 border-white" />
    </>
  );
}
