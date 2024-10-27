import { postList } from "~/data/content-index";
import { BsDot } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { allTabs } from "~/data/content-index";
export default function CategoriesService() {
  const slogan = "Explore the world through our categories!";

  return (
    <div className="min-h-screen">
      <div className="w-[90vw] mx-auto mt-16 flex flex-col items-start justify-center h-full py-8">
        <h1 className="text-4xl font-bold">Categories</h1>
        <p>{slogan}</p>

        <div className="flex mt-8 gap-2">
          <div className="w-[20vw] rounded-lg h-fit px-4 py-4">
            <div className="flex w-full justify-between  items-center">
              <h1 className="uppercase text-lg font-md font-semibold">
                Filters
              </h1>
              <button className="uppercase font-light text-sm hover:underline">
                Reset
              </button>
            </div>

            <div className="relative mt-3">
              <input
                type="text"
                placeholder={"Search"}
                className="relative shadow-md px-3 py-1 pr-4 rounded-lg text-gray-600"
              />
              <BiSearch className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-500" />
            </div>
            <hr className="border-t-2 border-gray-200 mt-4" />

            <div className="mt-2">
              <h1 className="uppercase font-semibold">Category</h1>
              <div>
                
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-3 gap-6">
            {postList.map((post) => (
              <div key={post.id} className="bg-white p-4 rounded shadow">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="relative object-cover h-[40vh] w-full rounded-lg shadow-md"
                  />
                  <h2 className="absolute z-20 top-3 left-3 rounded-full px-3 py-2 shadow-md backdrop-blur-3xl font-semibold text-gray-100">
                    {post.category}
                  </h2>
                </div>

                <div className="mt-2 space-x-1 flex text-gray-600 font-[200] items-center text-[0.92rem]">
                  <p>
                    {new Intl.DateTimeFormat("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }).format(post.date)}
                  </p>
                  <BsDot />
                  <p>
                    {`${post.minsToRead} ${
                      post.minsToRead > 1 ? "mins" : "min"
                    }`}{" "}
                    to read
                  </p>
                </div>
                <h2 className="mt-2 text-xl font-[500] mb-1">{post.title}</h2>
                <p className="text-gray-600 mb-2">
                  {post.subtitle.length > 100
                    ? `${post.subtitle.substring(0, 100)}...`
                    : post.subtitle}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <figure className="flex items-center space-x-2">
                    <img
                      src="/template.jpg"
                      alt={post.creatorProfile}
                      className="w-10 h-10 rounded-full shadow-md"
                    />
                    <h2 className="font-semibold">{post.creatorProfile}</h2>
                  </figure>
                  <h4 className="mr-3 underline text-sm font-[200] cursor-pointer">
                    Read more
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
