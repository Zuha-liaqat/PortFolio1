const projects = [
  {
    title: "Fast Food Ordering Web App",
    description:
      "Developed a fast food ordering web app with wishlist, cart, order placement (email confirmation via Resend), and admin CRUD functionality. Built using React, TailwindCSS, Node.js/Express, and MongoDB with responsive design in Figma.",
    link: "https://first-project-pi-orpin.vercel.app/",
    FrontendRepository: "https://github.com/Zuha-liaqat/FirstProject",
    BackendRepository: "https://github.com/Zuha-liaqat/NODEJS-PROJECT",
    adminCredentials: {
      email: "admin@example.com",
      password: "123@456",
    },
  },
  {
    title: "Figma Designs",
    description: "Some of my UI/UX projects designed in Figma.",
    links: [
      {
        name: "Landing Page",
        url: "https://www.figma.com/proto/bTgnurZ8YhIKMCts3KkMnJ/Untitled?node-id=1-2&scaling=contain&content-scaling=fixed&t=TiF0tuIbeQOm5t44-1",
      },
      {
        name: "Teddy Trail App",
        url: "https://www.figma.com/design/ueNjo78JbupApAnZyVakMS/Untitled?node-id=0-1&t=Rq2Eua5WqWAFpu0H-1",
      },
      {
        name: "Cake Palace App",
        url: "https://www.figma.com/design/5pyGwi6T933OHa72UJ11IQ/Untitled?t=Rq2Eua5WqWAFpu0H-1",
      },
      {
        name: "Netflix Clone",
        url: "https://www.figma.com/design/YMYx6dDG350UlzBEheOpoq/Netflix?t=Rq2Eua5WqWAFpu0H-1",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow"
          >
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {p.description}
            </p>

            {/* ✅ Show Admin Credentials if available */}
            {p.adminCredentials && (
              <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                <p className="font-semibold text-lg"> Demo Admin Login:</p>
                <p>Email: {p.adminCredentials.email}</p>
                <p>Password: {p.adminCredentials.password}</p>
              </div>
            )}

            <div className="mt-4 flex flex-col gap-2">
              {p.links ? (
                p.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    className="text-[#32a4c3] hover:underline"
                  >
                    {link.name}
                  </a>
                ))
              ) : (
                <div className="flex gap-2">
                  <a
                    href={p.link}
                    target="_blank"
                    className="text-[#32a4c3] hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={p.FrontendRepository}
                    target="_blank"
                    className="text-[#32a4c3] hover:underline"
                  >
                    Frontend Repository
                  </a>
                  <a
                    href={p.BackendRepository}
                    target="_blank"
                    className="text-[#32a4c3] hover:underline"
                  >
                    Backend Repository
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
