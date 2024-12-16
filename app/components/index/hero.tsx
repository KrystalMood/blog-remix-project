import { useEffect, useState, useCallback, memo } from "react";
import { postList as blogResources } from "~/data/content-index";

const Indicator = memo(({ isActive, onClick }: { isActive: boolean; onClick: () => void }) => (
  <button
    className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
      isActive ? "bg-white scale-125" : "bg-gray-400"
    }`}
    onClick={onClick}
  />
));

Indicator.displayName = "Indicator";

export default function IndexHero() {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPostIndex((prevIndex) => (prevIndex + 1) % blogResources.length);
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleIndicatorClick = useCallback((index: number) => {
    if (index === currentPostIndex || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPostIndex(index);
      setIsAnimating(false);
    }, 500);
  }, [currentPostIndex, isAnimating]);

  const currentPost = blogResources[currentPostIndex];

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="hidden">
        {blogResources.map((post) => (
          <link key={post.id} rel="preload" as="image" href={post.image} />
        ))}
      </div>

      <div className="absolute inset-0">
        <img
          src={currentPost.image}
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            objectPosition: "center 40%",
            filter: "brightness(40%)",
          }}
          alt={currentPost.title}
          onLoad={() => setIsLoading(false)}
          loading="eager"
        />

        <div className="h-screen w-screen absolute inset-0 bg-gradient-to-t from-orange-400 via-transparent to-transparent opacity-30" />

        <div
          className={`absolute inset-0 flex h-full items-end justify-start transition-opacity duration-500 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="mb-10 text-white text-left max-w-5xl px-4">
            <h3 className="font-semibold mb-4 backdrop-blur-2xl outline outline-1 outline-white text-gray-100 w-fit px-5 py-2 rounded-full shadow-2xl">
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

        <HeroMetadata 
          post={currentPost} 
          isAnimating={isAnimating} 
        />
      </div>
    </div>
  );
}

const HeroMetadata = memo(({ post, isAnimating }: { post: typeof blogResources[0], isAnimating: boolean }) => (
  <div
    className={`absolute inset-0 flex h-full items-end justify-end transition-opacity duration-500 ${
      isAnimating ? "opacity-0" : "opacity-100"
    }`}
  >
    <div className="mb-10 text-white max-w-5xl px-4">
      <div className="flex gap-5 items-center">
        <img
          src={post.creatorImage}
          alt={post.creatorProfile}
          className="w-8 h-8 rounded-full object-cover shadow-md"
          loading="lazy"
        />
        <h2 className="font-semibold text-xl">{post.creatorProfile}</h2>
      </div>
      <div className="flex gap-5 justify-end">
        <h3>{new Date(post.date).toLocaleDateString()}</h3>
        <h3>{post.minsToRead} min read</h3>
      </div>
    </div>
  </div>
));

HeroMetadata.displayName = "HeroMetadata";
