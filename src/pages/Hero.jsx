export default function Hero() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center text-white py-20">
        <h2 className="text-4xl font-bold">Hi, I’m Zuha Liaqat👋</h2>
        <p className="mt-4 text-lg ">
          Frontend Developer | React | TailwindCSS
        </p>
        <div className="mt-6 flex gap-4">
          <a href="/CV.pdf" download="CV.pdf">
            <button className="border px-4 py-2  text-white rounded-lg hover:bg-white hover:text-black transition">
              Download CV
            </button>
          </a>

          <a
            href="#projects"
            className="px-6 py-2 bg-white text-black rounded-lg shadow hover:bg-[#32a4c3] hover:border border-white transition"
          >
            View My Work
          </a>
        </div>
      </section>
      <hr className="mt-10  border-t-2 border-white" />
    </>
  );
}
