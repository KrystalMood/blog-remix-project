import { useEffect, useState, useCallback } from "react";

interface BlogPost {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  profileImage: string;
  profileName: string;
  date: string;
  estimatedReadTime: string;
}

const blogResources: BlogPost[] = [
  {
    id: 1,
    title: "Mindfulness for Inner Peace: Calm in Chaos",
    subtitle:
      "Reduce stress, boost focus, and find balance through mindfulness.",
    category: "Mindfulness",
    image: "index/index1.jpg",
    profileImage: "/template.jpg",
    profileName: "Luna Hernandez",
    date: "2024-10-12",
    estimatedReadTime: "5 min read",
  },
  {
    id: 2,
    title: "Quick & Healthy: Recipes for a Busy Life",
    subtitle: "Delicious meals that nourish your body and fit your lifestyle.",
    category: "Health & Wellness",
    image: "index/index2.jpg",
    profileImage: "template2.jpg",
    profileName: "Kokoro Hernandez",
    date: "2024-10-10",
    estimatedReadTime: "7 min read",
  },
  {
    id: 3,
    title: "Mastering Communication: Strengthen Your Connections",
    subtitle: "Unlock the power of clear dialogue for better relationships.",
    category: "Personal Development",
    image: "index/index3.jpg",
    profileImage: "template3.jpg",
    profileName: "Honoka Hernandez",
    date: "2024-10-08",
    estimatedReadTime: "6 min read",
  },
];

interface IndicatorProps {
  isActive: boolean;
  onClick: () => void;
}

const Indicator: React.FC<IndicatorProps> = ({ isActive, onClick }) => (
  <button
    className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
      isActive ? "bg-white scale-125" : "bg-gray-400"
    }`}
    onClick={onClick}
  />
);

export default function IndexHero() {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPostIndex(
        (prevIndex) => (prevIndex + 1) % blogResources.length
      );
      setIsAnimating(false);
    }, 500);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleIndicatorClick = (index: number) => {
    if (index === currentPostIndex || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPostIndex(index);
      setIsAnimating(false);
    }, 500);
  };

  const getPreviousIndex = () =>
    (currentPostIndex - 1 + blogResources.length) % blogResources.length;

  const getNextIndex = () => (currentPostIndex + 1) % blogResources.length;

  return (
    <div className="relative h-screen mx-auto overflow-hidden">
      <div className="absolute inset-0">
        {[getPreviousIndex(), currentPostIndex, getNextIndex()].map(
          (index, i) => (
            <img
              key={`slide-${index}`}
              src={blogResources[index].image}
              className={`absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out ${
                i === 0
                  ? isAnimating
                    ? "translate-x-full"
                    : "-translate-x-full"
                  : i === 1
                  ? isAnimating
                    ? "translate-x-full"
                    : "translate-x-0"
                  : isAnimating
                  ? "translate-x-0"
                  : "translate-x-full"
              }`}
              style={{
                objectPosition: "center 40%",
                filter: "brightness(40%)",
              }}
              alt={blogResources[index].title}
            />
          )
        )}

        <div className="h-screen w-screen absolute inset-0 bg-gradient-to-t from-orange-400 via-transparent to-transparent opacity-30" />

        <div
          className={`absolute inset-0 flex h-full items-end justify-start transition-opacity duration-500 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="mb-10 text-white text-left max-w-5xl px-4">
            <h3 className="font-semibold mb-4 backdrop-blur-2xl outline outline-1 outline-white  text-gray-100 w-fit px-5 py-2 rounded-full shadow-2xl hover:bg-black hover:text-black transition-all duration-300">
              {blogResources[currentPostIndex].category}
            </h3>
            <h1 className="text-2xl font-bold">
              {blogResources[currentPostIndex].title}
            </h1>
            <h2 className="text-gray-400 text-lg">
              {blogResources[currentPostIndex].subtitle}
            </h2>
            <div className="flex mt-4">
              {blogResources.map((_, index) => (
                <Indicator
                  key={index}
                  isActive={index === currentPostIndex}
                  onClick={() => handleIndicatorClick(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className={`absolute inset-0 flex h-full items-end justify-end transition-opacity duration-500 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="mb-10 text-white max-w-5xl px-4">
            <div className="flex gap-5 items-center">
              <img
                src={blogResources[currentPostIndex].profileImage}
                alt={blogResources[currentPostIndex].profileName}
                className="w-8 h-8 rounded-full object-cover shadow-md"
              />
              <h2 className="font-semibold text-xl">
                {blogResources[currentPostIndex].profileName}
              </h2>
            </div>
            <div className="flex gap-5 justify-end">
              <h3>{blogResources[currentPostIndex].date}</h3>
              <h3>{blogResources[currentPostIndex].estimatedReadTime}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
