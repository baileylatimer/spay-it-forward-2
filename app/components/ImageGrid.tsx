import { useEffect, useRef } from "react";
import { gsap } from "~/utils/gsap";
import image1Url from "~/images/moms-cats-1.jpg?url";
import image2Url from "~/images/moms-cats-2.jpg?url";
import image3Url from "~/images/moms-cats-3.jpg?url";
import image4Url from "~/images/moms-cats-4.jpg?url";
import image7Url from "~/images/moms-cats-7.jpg?url";

export default function ImageGrid() {
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.set(imagesRef.current, {
      opacity: 0,
      y: 20
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(imagesRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-4 md:grid-rows-2 md:h-[750px]">
          {/* First two images */}
          <div 
            ref={el => imagesRef.current[0] = el}
            className="relative overflow-hidden rounded-xl md:col-start-1"
          >
            <img 
              src={image1Url} 
              alt="Cat resting on windowsill" 
              className="w-full h-[240px] md:h-[365px] object-cover"
            />
          </div>
          <div 
            ref={el => imagesRef.current[1] = el}
            className="relative overflow-hidden rounded-xl md:col-start-1 md:row-start-2"
          >
            <img 
              src={image2Url} 
              alt="Cat playing with toys" 
              className="w-full h-[240px] md:h-[365px] object-cover"
            />
          </div>

          {/* Center tall image */}
          <div 
            ref={el => imagesRef.current[2] = el}
            className="col-span-2 md:col-span-1 md:row-span-2 md:col-start-2 relative overflow-hidden rounded-xl"
          >
            <img 
              src={image3Url} 
              alt="Cat lounging in sunlight" 
              className="w-full h-[240px] md:h-full object-cover"
            />
          </div>

          {/* Last two images */}
          <div 
            ref={el => imagesRef.current[3] = el}
            className="relative overflow-hidden rounded-xl md:col-start-3 md:row-start-1"
          >
            <img 
              src={image4Url} 
              alt="Cat napping on couch" 
              className="w-full h-[240px] md:h-[365px] object-cover"
            />
          </div>
          <div 
            ref={el => imagesRef.current[4] = el}
            className="relative overflow-hidden rounded-xl md:col-start-3 md:row-start-2"
          >
            <img 
              src={image7Url} 
              alt="Cat stretching outdoors" 
              className="w-full h-[240px] md:h-[365px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
