import { postList } from "~/data/content-index";

export default function AboutUsForeword(): JSX.Element {
  const teamMember = 4;
  const SERENE_FOUNDING_YEAR = 2019;
  const yearsOfExperience = new Date().getFullYear() - SERENE_FOUNDING_YEAR;
  const activeCommunityCount = 17291;
  const activeCommunity = formatNumber(activeCommunityCount);

  function formatNumber(num: number): number {
    if (num >= 1000) {
      const roundedNum = Math.round(num / 1000) * 1000;
      return roundedNum;
    }
    return num;
  }
  return (
    <div className="h-[230vh]">
      <div className="w-[80vw] mx-auto my-20">
        <hr className="border-t-1 border-gray-600" />
      </div>

      <div className="flex h-[70vh] w-[80vw] mx-auto my-auto justify-between">
        <h1 className="text-black font-semibold text-6xl max-w-2xl">
          Together we <br /> are strong.
        </h1>
        <div className="flex flex-col h-[40vh] justify-between">
          <h2 className="text-gray italic max-w-2xl text-lg font-medium">
            We believe that inner peace is a journey we embark on together. Our
            community grows stronger every day, united by one purpose: to
            cultivate calmness, mindfulness, and a sense of balance in our
            lives.
          </h2>
          <p className="text-gray max-w-2xl font-light">
            In 2024, Serene was created with a single mission in mind: to
            provide a haven for those seeking peace amidst life's chaos. Whether
            you're here to explore mindfulness practices, engage in thoughtful
            discussions, or simply find a moment of tranquility, Serene is your
            sanctuary. Our platform brings together like-minded individuals who
            understand the importance of taking a break, breathing deeply, and
            reconnecting with themselves. Through shared experiences, articles,
            and resources, we make serenity not just a possibility, but a
            reality.
          </p>
        </div>
      </div>

      <div className="flex h-[80vh] w-[80vw] mx-auto my-auto justify-between">
        <div className="flex justify-center">
          <img
            src="about-us/profiles/p1.jpeg"
            alt="CEO of Serene"
            className="w-12 h-12 object-cover rounded-full shadow-md"
          />
          <div className="ml-5 flex flex-col">
            <h1 className="font-semibold text-lg">Pramudya Surya</h1>
            <h2 className="font-light italic text-gray-500">Founder & CEO</h2>
          </div>
        </div>
        <div>
          <h1 className="max-w-3xl font-bold text-6xl">
            “Our goal is to guide each soul toward serenity, offering a space
            where calmness and mindfulness bloom, fostering inner peace and
            balance in all aspects of life.”
          </h1>
        </div>
      </div>

      <div className="w-[80vw] mx-auto my-20">
        <hr className="border-t-1 border-gray-600" />
      </div>

      <div className="flex h-[50vh] w-[80vw] gap-x-8 mx-auto my-auto justify-between">
        {" "}
        <div className="flex flex-col justify-start">
          <h1 className="text-center font-bold text-6xl mb-4">
            {teamMember} <span className="text-5xl font-semibold">Dev</span>
          </h1>
          <p className="text-gray-700 max-w-lg">
            <b>Talented individuals</b> who bring their unique insights and
            expertise to help you find peace and mindfulness.
          </p>
        </div>
        <div className="flex flex-col jusity-start">
          <h1 className="text-center font-bold text-6xl mb-4">
            {yearsOfExperience}{" "}
            <span className="text-5xl font-semibold">Years</span>
          </h1>
          <p className="text-gray-700 max-w-lg">
            <b>With over years</b> of collective experience, the Serene team has
            honed their craft to provide thoughtful and inspiring content.
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <h1 className="text-center font-bold text-6xl mb-4">
            {postList.length}
            <span className="text-5xl font-semibold"> Posts</span>
          </h1>
          <p className="text-gray-700 max-w-lg">
            <b>We’ve published over {postList.length}</b> insightful articles to
            guide you on your journey toward inner tranquility.
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <h1 className="text-center font-bold text-6xl mb-4">
            {activeCommunity}
            <span className="text-5xl font-semibold">+</span>
          </h1>
          <p className="text-gray-700 max-w-lg">
            <b>Our growing community of {activeCommunity}+</b> inspired readers
            finds solace and mindfulness with Serene.
          </p>
        </div>
      </div>
    </div>
  );
}
