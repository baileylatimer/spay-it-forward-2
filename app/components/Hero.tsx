import { useEffect, useRef } from "react";
import { gsap } from "~/utils/gsap";
import heroUrl from "~/images/hero.jpg?url";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], {
      opacity: 0,
      y: 30
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1
    }, "-=0.5")
    .to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 1
    }, "-=0.7");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative h-[500px] rounded-xl overflow-hidden mx-2.5 md:mx-5">
      <div className="w-full h-full">
        <img 
          src={heroUrl} 
          alt="Kitten with milk bottle" 
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0" 
          style={{
            background: "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)"
          }}
        />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 opacity-0"
              style={{ color: "#DBCDC2" }}
            >
              Supporting Animal Welfare in Wayne County
            </h1>
            <p 
              ref={subtitleRef}
              className="text-lg md:text-xl mb-8 opacity-0"
              style={{ color: "#DBCDC2" }}
            >
              Helping stop feline overpopulation through community support and action.
            </p>
            <button
              ref={buttonRef}
              className="bg-[#DBCDC2] text-black px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#CCB5A3] transition-colors opacity-0"
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
