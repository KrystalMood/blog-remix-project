import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type TabType =
  | "All"
  | "Destination"
  | "Culinary"
  | "Lifestyle"
  | "Tips & Hacks";
type SortOption = "Most Recent" | "Oldest" | "Most Viewed" | "Most Liked";

const tabs: TabType[] = [
  "All",
  "Destination",
  "Culinary",
  "Lifestyle",
  "Tips & Hacks",
];
const sortOptions: SortOption[] = [
  "Most Recent",
  "Oldest",
  "Most Viewed",
  "Most Liked",
];

interface Post {
  id: number;
  title: string;
  category: TabType;
  date: Date;
  views: number;
  likes: number;
  image: string;
}

const postList: Post[] = [
  {
    id: 1,
    title: "Exploring Paris",
    category: "Destination",
    date: new Date(2023, 5, 1),
    views: 1000,
    likes: 150,
    image: "/template.jpg",
  },
  {
    id: 2,
    title: "Best Pasta Recipes",
    category: "Culinary",
    date: new Date(2023, 4, 15),
    views: 800,
    likes: 120,
    image: "/template2.jpg",
  },
  {
    id: 3,
    title: "Morning Routines",
    category: "Lifestyle",
    date: new Date(2023, 3, 30),
    views: 1200,
    likes: 180,
    image: "/template3.jpg",
  },
  {
    id: 4,
    title: "Packing Tips",
    category: "Tips & Hacks",
    date: new Date(2023, 3, 1),
    views: 950,
    likes: 140,
    image: "/template.jpg",
  },
  {
    id: 5,
    title: "Tokyo Night Life",
    category: "Destination",
    date: new Date(2023, 2, 15),
    views: 1100,
    likes: 160,
    image: "/template2.jpg",
  },
  {
    id: 6,
    title: "Vegan Desserts",
    category: "Culinary",
    date: new Date(2023, 2, 1),
    views: 750,
    likes: 110,
    image: "/template3.jpg",
  },
  {
    id: 7,
    title: "Home Workouts",
    category: "Lifestyle",
    date: new Date(2023, 1, 15),
    views: 900,
    likes: 130,
    image: "/template.jpg",
  },
  {
    id: 8,
    title: "Budget Travel",
    category: "Tips & Hacks",
    date: new Date(2023, 1, 1),
    views: 1050,
    likes: 155,
    image: "/template2.jpg",
  },
  {
    id: 9,
    title: "Bali Beaches",
    category: "Destination",
    date: new Date(2023, 0, 15),
    views: 1150,
    likes: 170,
    image: "/template3.jpg",
  },
];

export default function IndexContentSection(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] =
    useState<SortOption>("Most Recent");
  const [selectedTab, setSelectedTab] = useState<TabType>("All");
  const [posts, setPosts] = useState<Post[]>(postList);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (): void => setIsOpen(!isOpen);

  const handleOptionClick = (option: SortOption): void => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleTabClick = (tab: TabType): void => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let filteredPosts =
      selectedTab === "All"
        ? postList
        : postList.filter((post) => post.category === selectedTab);
    switch (selectedOption) {
      case "Most Recent":
        filteredPosts = filteredPosts.sort(
          (a, b) => b.date.getTime() - a.date.getTime()
        );
        break;
      case "Oldest":
        filteredPosts = filteredPosts.sort(
          (a, b) => a.date.getTime() - b.date.getTime()
        );
        break;
      case "Most Viewed":
        filteredPosts = filteredPosts.sort((a, b) => b.views - a.views);
        break;
      case "Most Liked":
        filteredPosts = filteredPosts.sort((a, b) => b.likes - a.likes);
        break;
      default:
        break;
    }
    setPosts(filteredPosts);
  }, [selectedTab, selectedOption, postList]);

  return (
    <div className="min-h-screen py-10">
      <div className="w-[90vw] mx-auto">
        <h1 className="mb-2 font-semibold text-3xl">Blog</h1>
        <h3 className="text-lg text-gray-400">
          Browse Our Curated Categories and Uncover Stories, Tips, and Ideas
          that Resonate with You
        </h3>
      </div>
      <div className="w-[90vw] mx-auto mt-4 flex justify-between">
        <div className="flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`outline outline-1 px-4 py-2 rounded-lg ${
                selectedTab === tab
                  ? "bg-gray-600 text-white"
                  : "text-gray-600 outline-gray-500"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center">
          <h3 className="mr-2 text-gray-600">Sort by:</h3>
          <div className="relative" ref={dropDownRef}>
            <button
              onClick={toggleDropdown}
              className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded inline-flex items-center"
            >
              <span className="mr-1">{selectedOption}</span>
              <FiChevronDown className="h-4 w-4" />
            </button>
            {isOpen && (
              <ul className="absolute text-gray-700 pt-1 w-full bg-white border border-gray-300 mt-1 rounded shadow-lg z-10">
                {sortOptions.map((option) => (
                  <li key={option}>
                    <button
                      className="hover:bg-gray-100 py-2 px-4 block w-full text-left"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="w-[90vw] mx-auto mt-8 grid grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded shadow">
          <img src={post.image} alt={post.title}  className="object-cover h-[40vh] w-full rounded-lg shadow-md"/>
            <h2 className="mt-5 text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-1">Category: {post.category}</p>
            <p className="text-gray-600 mb-1">
              Date: {post.date.toLocaleDateString()}
            </p>
            <p className="text-gray-600 mb-1">Views: {post.views}</p>
            <p className="text-gray-600">Likes: {post.likes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
