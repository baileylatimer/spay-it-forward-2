import { useEffect, useRef } from "react";
import { gsap } from "~/utils/gsap";
import cats5Url from "~/images/moms-cats-5.jpg?url";
import cats6Url from "~/images/moms-cats-6.jpg?url";

export default function OurStory() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    gsap.set([headingRef.current, textRef.current, image1Ref.current, image2Ref.current], {
      opacity: 0
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 1
    })
    .to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1
    }, "-=0.5")
    .to(image1Ref.current, {
      opacity: 1,
      x: 0,
      duration: 1
    }, "-=0.7")
    .to(image2Ref.current, {
      opacity: 1,
      x: 0,
      duration: 1
    }, "-=0.7");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="max-w-6xl mx-auto px-4 pt-8 md:pt-16 relative about-us">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="pr-4 md:pr-8">
          <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 font-serif opacity-0">
            From Sonni&apos;s Pet Pantry to Spay It Forward
          </h2>
          <div ref={textRef} className="space-y-4 md:space-y-6 text-base md:text-lg opacity-0">
            <p>Founded by Bentley in honor of his beloved cat, Sonni, we&apos;ve evolved from Sonni&apos;s Pet Pantry into Spay It Forward, focusing on making a lasting impact on feline overpopulation in Wayne County.</p>
            <p>Through donations, supplies, and spay/neuter certificates, we support local rescue groups and individuals in their mission to help community cats. Our work includes TNR (trap/neuter/release) initiatives and fostering.</p>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[600px]">
          <div ref={image1Ref} className="absolute -left-4 md:-left-8 top-8 z-20 opacity-0">
            <img 
              src={cats6Url} 
              alt="Cat with Santa hat" 
              className="rounded-xl shadow-lg w-full max-w-[280px] md:max-w-[320px]"
            />
          </div>
          <div ref={image2Ref} className="absolute -right-4 md:-right-8 top-32 z-10 opacity-0">
            <img 
              src={cats5Url} 
              alt="Cats resting together" 
              className="rounded-xl shadow-lg w-full max-w-[280px] md:max-w-[320px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
