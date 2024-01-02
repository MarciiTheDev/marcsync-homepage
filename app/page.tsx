import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="bg-[#1f1f1f] pt-10 pb-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-md font-bold text-gray-300">WHAT IS MARCSYNC?</h1>
          <p className="text-3xl font-bold mt-1 text-center">A simple Database Service</p>
        </div>
        <div className="flex justify-center mt-5">
          <div className="flex flex-col w-[50rem] gap-3 max-w-[90%]">
            <h3>With the help of MarcSync, you can store your data inside of a Document-Based Database. (MongoDB) <br /> This is a simple and easy way to store your data.</h3>
            <p>MarcSync is especially useful for Roblox Developers, who want to store their data in a Database outside of the Roblox Network, or just want to store thier data inside of a Document-Based Database instead of a Key-Value-Based one. But it's also useful for Developers who simply want to store their data in a Database, but don't want to host it on their own.</p>
            <p>With the help of MarcSync's powerful API, you can easily access and store your data from anywhere, at any time. MarcSync also offers clients for different programming languages including Luau (Roblox), NodeJS & Java which will make it even easier to access your data.</p>
          </div>
        </div>
      </section>
      <section className="bg-[#3d088a] pt-10 pb-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-md font-bold text-gray-300">WHY SHOULD I USE MARCSYNC?</h1>
          <p className="text-3xl font-bold mt-1 text-center">It's simple, easy and free!</p>
        </div>
        <div className="flex justify-center mt-5 flex-col items-center">
          <div className="grid grid-cols-3 w-[50rem] gap-3 max-w-[90%]">
            <div className="flex flex-col gap-3">
              <p className="font-bold">Simple</p>
              <p>MarcSync is simple to use. You can easily store your data in a Database without having to host it on your own.</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold">Easy</p>
              <p>It's easy to use. Just create a Database, get an API Key and with it's simple API (and clients) you are good to go!</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold">Free</p>
              <p>MarcSync is 100% free to use. You can store your data in a Database for free, without having to pay anything.</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold">Support</p>
              <p>Need help? No problem! Just join our Discord Server and ask your question in the support channel.</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold">Client Support</p>
              <p>MarcSync offers clients for different programming languages including Luau (Roblox), NodeJS & Java and even more are coming soon!</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold">Maintenence</p>
              <p>MarcSync is up-to-date with the most latest modern security standers and is always getting new features and bug fixes.</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold">Community</p>
              <p>Join our Discord Server and be part of a growing community of Developers who use MarcSync.</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold">Trusted by Developers</p>
              <p>MarcSync is trusted by Developers like RoMart, a Roblox Game with over 3 Million Visits.</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold">Uptime</p>
              <p>MarcSync is hosted almost completely in the cloud, making sure that it's always online and ready to use.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#1f1f1f] pt-10 pb-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-md font-bold text-gray-300">HOW DO I GET STARTED?</h1>
          <p className="text-3xl font-bold mt-1 text-center">It's easy!</p>
        </div>
        <div className="flex justify-center mt-5">
          <div className="flex flex-col w-[50rem] gap-3 max-w-[90%]">
            <p>Head over to our <a className="text-[#ee1e7c] hover:underline" href="https://manage.marcsync.api.marcthedev.it" target="_blank" rel="noreferrer">Dashboard</a> and create a Database. After that, you can get your API Key by clicking on Manage {">"} Create Access Token.</p>
            <p>Now you can start storing data in MarcSync! For more information on how to install and use MarcSync in your Roblox Game, check out our <a className="text-[#ee1e7c] hover:underline" href="https://docs.marcsync.dev" target="_blank" rel="noreferrer">Documentation</a>.</p>
            <p>All of our clients are open-source and can be found on our GitHub:</p>
            <ul className="list-disc list-inside ml-3">
              <li><a className="text-[#ee1e7c] hover:underline" href="https://github.com/MarciiTheDev/marcsync-rbx-client" target="_blank" rel="noreferrer">Luau (Roblox)</a></li>
              <li><a className="text-[#ee1e7c] hover:underline" href="https://github.com/marciithedev/marcsync-nodejs-client" target="_blank" rel="noreferrer">NodeJS</a></li>
              <li><a className="text-[#ee1e7c] hover:underline" href="https://github.com/marcsync/marcsync-java-client" target="_blank" rel="noreferrer">Java</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-[#3d088a] pt-10 pb-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-md font-bold text-gray-300">CONTACT US</h1>
          <p className="text-3xl font-bold mt-1 text-center">We are here to help!</p>
        </div>
        <div className="flex justify-center mt-5">
          <div className="flex flex-col w-[50rem] gap-3 max-w-[90%]">
            <p>If you need help, you can join our <a className="text-[#ee1e7c] hover:underline" href="https://discord.com/invite/pyysgrUeYE" target="_blank" rel="noreferrer">Discord Server</a> and ask your question in the support channel.</p>
            <p>You can also contact us via email: <a className="text-[#ee1e7c] hover:underline" href="mailto:contact@marcsync.dev">contact@marcsync.dev</a></p>
          </div>
        </div>
      </section>
      <footer className="bg-[#1f1f1f] h-16">
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-gray-300">© 2022-2024 MarcSync Database</p>
        </div>
      </footer>
    </main>
  )
}