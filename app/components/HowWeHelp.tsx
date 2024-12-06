import { useEffect, useRef } from "react";
import { gsap } from "~/utils/gsap";

export default function HowWeHelp() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.set([headingRef.current, ...cardsRef.current], {
      opacity: 0,
      y: 30
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 1
    })
    .to(cardsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2
    }, "-=0.5");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4 mt-24">
        <h2 ref={headingRef} className="text-3xl md:text-4xl lg:text-5xl mb-12 md:mb-16 font-serif text-center">
          How we help
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div ref={el => cardsRef.current[0] = el} className="card rounded-xl p-8 opacity-0">
            <svg width="42" height="42" className="w-[42px] h-[42px] md:w-[58px] md:h-[58px] mb-6" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M48.72 12.0832C46.1431 9.53292 42.7395 7.98762 39.1235 7.72617C35.5074 7.46471 31.9169 8.50431 29 10.6574C25.9251 8.37034 22.098 7.33329 18.2891 7.75506C14.4803 8.17683 10.9727 10.0261 8.47274 12.9305C5.97278 15.8348 4.66613 19.5786 4.81591 23.4078C4.96569 27.2369 6.56078 30.8672 9.27997 33.5674L23.78 48.1882C25.1394 49.5459 26.9821 50.3085 28.9033 50.3085C30.8246 50.3085 32.6673 49.5459 34.0266 48.1882L48.5266 33.5674C49.9547 32.1721 51.093 30.5084 51.876 28.6718C52.659 26.8352 53.0714 24.862 53.0893 22.8655C53.1073 20.869 52.7305 18.8887 51.9807 17.0383C51.2309 15.1879 50.1227 13.504 48.72 12.0832V12.0832ZM45.3125 30.1116L30.8125 44.6116C30.5878 44.8381 30.3205 45.0179 30.026 45.1405C29.7315 45.2632 29.4157 45.3264 29.0966 45.3264C28.7776 45.3264 28.4617 45.2632 28.1672 45.1405C27.8728 45.0179 27.6055 44.8381 27.3808 44.6116L12.8808 30.1116C10.9856 28.1742 9.92428 25.5718 9.92428 22.8616C9.92428 20.1513 10.9856 17.5489 12.8808 15.6116C14.8121 13.7048 17.4168 12.6356 20.1308 12.6356C22.8448 12.6356 25.4495 13.7048 27.3808 15.6116C27.6055 15.8381 27.8728 16.0178 28.1672 16.1405C28.4617 16.2632 28.7776 16.3264 29.0966 16.3264C29.4157 16.3264 29.7315 16.2632 30.026 16.1405C30.3205 16.0178 30.5878 15.8381 30.8125 15.6116C32.796 14.0332 35.2911 13.2401 37.8219 13.3836C40.3527 13.5271 42.7421 14.5971 44.5345 16.3895C46.327 18.1819 47.3969 20.5714 47.5404 23.1022C47.6839 25.633 46.8908 28.128 45.3125 30.1116V30.1116Z" fill="black"/>
            </svg>
            <h3 className="text-xl md:text-2xl mb-4 font-serif">Support services</h3>
            <p className="text-base md:text-lg">Providing financial assistance and supplies to local rescue groups and individuals dedicated to helping community cats.</p>
          </div>

          <div ref={el => cardsRef.current[1] = el} className="card rounded-xl p-8 opacity-0">
            <svg width="42" height="42" className="w-[42px] h-[42px] md:w-[58px] md:h-[58px] mb-6" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M45.9167 9.66663H12.0833C9.41396 9.66663 7.25 11.8306 7.25 14.5V48.3333C7.25 51.0027 9.41396 53.1666 12.0833 53.1666H45.9167C48.586 53.1666 50.75 51.0027 50.75 48.3333V14.5C50.75 11.8306 48.586 9.66663 45.9167 9.66663Z" stroke="black" strokeWidth="4.83333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.25 24.1666H50.75" stroke="black" strokeWidth="4.83333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M38.6666 4.83337V14.5" stroke="black" strokeWidth="4.83333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.3334 4.83337V14.5" stroke="black" strokeWidth="4.83333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="text-xl md:text-2xl mb-4 font-serif">TNR Programs</h3>
            <p className="text-base md:text-lg">Coordinating and conducting Trap-Neuter-Return operations throughout Wayne County to humanely manage feral cat populations.</p>
          </div>

          <div ref={el => cardsRef.current[2] = el} className="card rounded-xl p-8 opacity-0">
            <svg width="42" height="42" className="w-[42px] h-[42px] md:w-[58px] md:h-[58px] mb-6" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M55.5833 50.75V45.9167C55.5817 43.7749 54.8688 41.6942 53.5566 40.0015C52.2443 38.3087 50.4071 37.0997 48.3333 36.5642" stroke="black" strokeWidth="4.83333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M41.0834 50.75V45.9167C41.0834 43.3529 40.065 40.8942 38.2521 39.0813C36.4393 37.2685 33.9805 36.25 31.4167 36.25H12.0834C9.51966 36.25 7.0609 37.2685 5.24805 39.0813C3.4352 40.8942 2.41675 43.3529 2.41675 45.9167V50.75" stroke="black" strokeWidth="4.83333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M38.6667 7.56421C40.7461 8.0966 42.5891 9.3059 43.9052 11.0015C45.2213 12.697 45.9357 14.7824 45.9357 16.9288C45.9357 19.0752 45.2213 21.1606 43.9052 22.8561C42.5891 24.5517 40.7461 25.761 38.6667 26.2934" stroke="black" strokeWidth="4.83333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21.7499 26.5833C27.0887 26.5833 31.4166 22.2554 31.4166 16.9167C31.4166 11.5779 27.0887 7.25 21.7499 7.25C16.4112 7.25 12.0833 11.5779 12.0833 16.9167C12.0833 22.2554 16.4112 26.5833 21.7499 26.5833Z" stroke="black" strokeWidth="4.83333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="text-xl md:text-2xl mb-4 font-serif">Community Education</h3>
            <p className="text-base md:text-lg">Raising awareness about feline overpopulation and providing resources for community members to get involved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
