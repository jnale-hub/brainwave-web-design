import Section from "./Section";
import Heading from "./Heading";
import { roadmap } from "../constants";
import { check2, grid, loading } from "../assets";
import Tagline from "./Tagline";

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we're working on" />

        <div className="realtive grid gap-6 md:grid-cols-2 md:gap-4 md:pb-28">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                key={item.key}
                className={`rounded-[2.5rem] p-0.25 md:flex even:md:translate-y-28 ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}`}
              >
                <div className="relative overflow-hidden rounded-[2.4375rem] bg-n-8 p-8 xl:p-15">
                  <div className="absolute left-0 top-0 max-w-full">
                    <img
                      src={grid}
                      alt="Grid"
                      className="w-full"
                      width={550}
                      height={550}
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="mb-8 flex max-w-[27rem] items-center justify-between md:mb-20">
                      <Tagline>{item.date}</Tagline>
                      <div className="flex items-center rounded bg-n-1 px-4 py-1 text-n-8">
                        <img
                          src={item.status === "done" ? check2 : loading}
                          alt="Status"
                          className="mr-2.5"
                          width={16}
                          height={16}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>
                    <div className="-mx-15 -my-10 mb-10">
                      <img
                        src={item.imageUrl}
                        className="w-full"
                        width={630}
                        height={420}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
