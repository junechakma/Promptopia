import Feed from "../../components/Feed";

export default function Home() {
  return (
    <>
      <section className="w-full flex flex-col items-center">
        <h1 className="head_text text-center">
          Discover and Share
          <br className="max-md:hidden" />
          <span className="orange_gradient">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
          Propmtopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts.
        </p>
        {/* Feed */}
        <Feed/>
      </section>
    </>
  )
}
