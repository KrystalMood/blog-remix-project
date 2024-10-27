import { BiChevronRight } from "react-icons/bi";
import { profileList } from "~/data/profiles";

export default function AboutUsTeam(): JSX.Element {
  return (
    <div className="h-fit bg-gray-100 py-16">
      <div className="w-[80vw] mx-auto py-16">
        <h1 className="text-6xl font-semibold">Meet Our Amazing Team</h1>
      </div>

      <div className="w-[80vw] mx-auto py-8">
        <hr className="border-t-2 border-gray-500 " />
      </div>
      <div className="grid gap-4 grid-cols-4 w-[80vw] mx-auto justify-center items-center">
        {profileList.map((profile) => (
          <div
            key={profile.id}
            className="my-8 mx-auto flex flex-col py-4 shadow-xl px-4 rounded-lg hover:scale-105 transition-all duration-500"
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-fit h-80 object-cover rounded-lg shadow-lg"
            />
            <h1 className="mt-4 text-2xl font-semibold">{profile.name}</h1>
            <h2 className="italic font-light text-sm">{profile.job}</h2>
          </div>
        ))}
      </div>

      <div className="w-[80vw] mx-auto py-16">
        <hr className="border-t-2 border-gray-500 " />
      </div>

      <div className="flex w-[80vw] mx-auto justify-between">
        <h1 className="font-semibold text-6xl">Join our team</h1>
        <div className="">
          <p className="max-w-xl font-light">
            We believe it takes great people to make a great product. That's why
            we hire not only the perfect professional fits, but people who
            embody our company values.
          </p>
          <div className="flex mt-8 items-center text-green-800">
            <button className="text-black underline font-semibold">
              See open options
            </button>
            <BiChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
