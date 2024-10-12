import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [{ title: "Home | Serene" }, { name: "description", content: "" }];
};

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
    image: "template.jpg",
    profileImage: "template.jpg",
    profileName: "Luna Hernandez",
    date: "2024-10-12",
    estimatedReadTime: "5 min read",
  },
  {
    id: 2,
    title: "Quick & Healthy: Recipes for a Busy Life",
    subtitle: "Delicious meals that nourish your body and fit your lifestyle.",
    category: "Health & Wellness",
    image: "template2.jpg",
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
    image: "template3.jpg",
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
      isActive ? 'bg-white scale-125' : 'bg-gray-400'
    }`}
    onClick={onClick}
  />
);

export default function Index() {
  const [currentPostIndex, setCurrentPostIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPostIndex(
        (prevIndex) => (prevIndex + 1) % blogResources.length
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const currentPost = blogResources[currentPostIndex];

  const handleIndicatorClick = (index: number) => {
    setCurrentPostIndex(index);
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src={currentPost.image}
          className="object-cover w-full h-full transition-opacity duration-500"
          style={{
            objectPosition: "center 20%",
            filter: "brightness(40%)",
          }}
          alt={currentPost.title}
        />
        <div className="h-screen w-screen absolute inset-0 bg-gradient-to-t from-orange-400 via-transparent to-transparent opacity-50"></div>
        <div className="absolute inset-0 flex h-full items-end justify-start">
          <div className="mb-10 text-white text-left max-w-5xl px-4">
            <h3 className="font-semibold mb-4 bg-white text-black w-fit px-4 py-2 rounded-full shadow-2xl">
              {currentPost.category}
            </h3>
            <h1 className="text-2xl font-bold">{currentPost.title}</h1>
            <h2 className="text-gray-400 text-lg">{currentPost.subtitle}</h2>
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
        <div className="absolute inset-0 flex h-full items-end justify-end">
          <div className="mb-10 text-white max-w-5xl px-4">
            <div className="flex gap-5 items-center">
              <img
                src={currentPost.profileImage}
                alt={currentPost.profileName}
                className="w-8 h-8 rounded-full object-cover shadow-md"
              />
              <h2 className="font-semibold text-xl">
                {currentPost.profileName}
              </h2>
            </div>
            <div className="flex gap-5 justify-end">
              <h3>{currentPost.date}</h3>
              <h3>{currentPost.estimatedReadTime}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}