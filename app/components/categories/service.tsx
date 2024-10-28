import { postList } from "~/data/content-index";
import { BsDot } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { allTabs, sortOptions } from "~/data/content-index";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "@remix-run/react";
import { SortOption } from "~/types/content";
export default function CategoriesService() {
  const slogan = "Explore the world through our categories!";

  //* Filter const
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("Most Recent");
  const [category, setCategory] = useState<string>("All");
  const [posts, setPosts] = useState(postList);

  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);

  // Constants
  const POST_PER_PAGE = 9;
  const TOTAL_PAGES = Math.ceil(postList.length / POST_PER_PAGE);

  // Memoized filtered posts
  const filteredPosts = useMemo(() => {
    let result = [...postList];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.subtitle.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query) ||
          post.creatorProfile.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (category !== "All") {
      result = result.filter((post) => post.category === category);
    }

    // Apply sorting
    switch (sortOption) {
      case "Most Recent":
        return result.sort((a, b) => b.date.getTime() - a.date.getTime());
      case "Oldest":
        return result.sort((a, b) => a.date.getTime() - b.date.getTime());
      case "Most Viewed":
        return result.sort((a, b) => b.views - a.views);
      case "Most Liked":
        return result.sort((a, b) => b.likes - a.likes);
      default:
        return result;
    }
  }, [searchQuery, category, sortOption]);

  // Pagination calculation
  const paginatedPosts = useMemo(() => {
    const indexOfLastPost = currentPage * POST_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POST_PER_PAGE;
    return showAll
      ? filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
      : filteredPosts.slice(0, POST_PER_PAGE);
  }, [filteredPosts, currentPage, showAll]);

  // URL sync handlers
  const updateSearchParams = (
    key: string,
    value: string | null,
    defaultValue?: string
  ) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      if (value && value !== defaultValue) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
      return newParams;
    });
  };

  // Event handlers
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    updateSearchParams("search", query);
  };

  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
    updateSearchParams("category", selectedCategory, "All");
  };

  const handleSortChange = (selectedSort: SortOption) => {
    setSortOption(selectedSort);
    updateSearchParams("sort", selectedSort, "Most Recent");
  };

  const handleReset = () => {
    setSearchQuery("");
    setCategory("All");
    setSortOption("Most Recent");
    setCurrentPage(1);
    setShowAll(false);
    setSearchParams({});
  };

  // Pagination helper
  const getPageNumbers = () => {
    if (TOTAL_PAGES <= 7) {
      return Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, "...", TOTAL_PAGES];
    }

    if (currentPage >= TOTAL_PAGES - 3) {
      return [1, "...", ...Array.from({ length: 5 }, (_, i) => TOTAL_PAGES - 4 + i)];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      TOTAL_PAGES,
    ];
  };

  // Sync URL params on mount
  useEffect(() => {
    const searchFromURL = searchParams.get("search") || "";
    const categoryFromURL = searchParams.get("category") || "All";
    const sortFromURL = (searchParams.get("sort") as SortOption) || "Most Recent";

    setSearchQuery(searchFromURL);
    setCategory(categoryFromURL);
    setSortOption(sortFromURL);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="w-[90vw] mx-auto mt-16 flex flex-col items-start justify-center h-full py-8">
        <h1 className="text-4xl font-bold">Categories</h1>
        <p>{slogan}</p>

        <div className="flex mt-8 gap-2">
          <div className="w-[20vw] rounded-lg h-fit px-6 py-6 shadow-md bg-gray-50/20">
            <div className="flex w-full justify-between  items-center">
              <h1 className="uppercase text-lg font-md font-semibold">
                Filters
              </h1>
              <button
                onClick={handleReset}
                className="uppercase font-light text-sm hover:underline"
              >
                Reset
              </button>
            </div>

            <div className="relative mt-3">
              <input
                type="text"
                placeholder={"Search"}
                value={searchQuery}
                onChange={handleSearch}
                className="relative shadow-md px-3 py-1 pr-4 rounded-lg text-gray-600"
              />
              <BiSearch className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-500" />
            </div>

            <hr className="border-t-2 border-gray-200 my-6" />

            <div className="mt-2">
              <h1 className="uppercase font-semibold">Category</h1>
              <div className="ml-4 mt-2 space-y-1 text-gray-600 font-light">
                {allTabs.map((tab, index) => (
                  <div key={tab}>
                    <button
                      onClick={() => handleCategoryChange(tab)}
                      className={`hover:font-semibold text-sm ${
                        category === tab ? "font-semibold" : ""
                      }`}
                    >
                      {tab}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h1 className="uppercase font-semibold">Sort Filters</h1>
              <div className="ml-4 mt-2 space-y-1 text-gray-600 font-light">
                {sortOptions.map((tab, index) => (
                  <div key={tab}>
                    <button
                      onClick={() => handleSortChange(tab)}
                      className={`hover:font-semibold text-sm ${
                        sortOption === tab ? "font-semibold" : ""
                      }`}
                    >
                      {tab}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="w-full grid grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
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

            <div className="flex justify-between items-center mt-4">
              {postList.length > POST_PER_PAGE && !showAll && (
                <button
                  onClick={() => {
                    setShowAll(true);
                    setCurrentPage(2);
                  }}
                  className="mx-auto mt-8 px-6 w-full py-2 border-2 text-black rounded-lg hover:text-white hover:bg-gray-700 transition-colors"
                >
                  See More
                </button>
              )}

              {showAll && (
                <div className="flex gap-2 items-center justify-center w-full">
                  {getPageNumbers().map((pageNum, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (typeof pageNum === "number") {
                          setCurrentPage(pageNum);
                        }
                      }}
                      className={`px-4 py-2 rounded-lg ${
                        pageNum === "..."
                          ? "cursor-default"
                          : pageNum === currentPage
                          ? "bg-gray-700 text-white"
                          : "border border-gray-300 hover:bg-gray-100"
                      }`}
                      disabled={pageNum === "..."}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
