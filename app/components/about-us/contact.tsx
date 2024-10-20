import { BiChevronRight } from "react-icons/bi";

export default function AboutUsContact(): JSX.Element {
  return (
    <div className="h-screen bg-sky-950 text-white">
      <main className="flex w-[80vw] mx-auto py-8 items-center justify-between h-full">
        <div className="flex flex-col max-w-xl space-y-10">
          <h1 className="text-6xl font-semibold leading-snug">
            Have a question? Our team is happy to assist you
          </h1>
          <p className="text-lg max-w-[28rem]">
            Ask about Serene, our services, or anything else. Our highly trained
            reps are standing by, ready to help.
          </p>
          <hr className="border-t-2 border-gray-600" />
          <div className="flex space-x-6 items-center">
            <button className="flex items-center justify-between px-8 py-4 bg-white text-gray-800 rounded-xl shadow-xl font-bold hover:scale-110 transition-all duration-500">
              Contact Us <BiChevronRight size={25} />
            </button>
            <p>Or call us at +1 (555) 555-5555</p>
          </div>
        </div>
        <img
          src="about-us/about-us2.png"
          alt="Customer Service"
          className="rounded-xl shadow-xl w-fit h-fit hover:scale-[1.01] transition-all duration-300"
        />
      </main>
    </div>
  );
}
