import { useEffect, useRef } from "react";
import { gsap } from "~/utils/gsap";

export default function OurImpact() {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate content
            gsap.from(contentRef.current, {
              opacity: 0,
              y: 30,
              duration: 1,
              ease: "power3.out"
            });

            // Animate numbers
            gsap.to(numberRef.current, {
              innerText: 300,
              duration: 2,
              snap: { innerText: 1 },
              ease: "power1.inOut"
            });

            gsap.to(percentRef.current, {
              innerText: 100,
              duration: 2,
              snap: { innerText: 1 },
              ease: "power1.inOut"
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div ref={contentRef}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
              Our impact
            </h2>
            <p className="text-lg mb-8">
              Every day, we work tirelessly to make a difference in our community. Through partnerships with local veterinarians and rescue groups, we&apos;ve helped hundreds of cats receive the care they need.
            </p>
            <div className="card p-6">
              <p className="text-lg">
                Recently participated in a mass spay/neuter clinic that altered & vaccinated over 300 community cats in a single day!
              </p>
            </div>
          </div>

          {/* Right metrics */}
          <div className="relative flex justify-center items-center min-h-[400px]">
            {/* Background shape SVG */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-auto" width="686" height="608" viewBox="0 0 686 608" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.1546 21.2753L33.1547 21.2751C35.7226 15.8315 37.3108 12.8178 39.0225 10.6376C40.6787 8.52817 42.5125 7.12264 45.7939 5.06638C47.7464 3.84302 49.2522 3.17721 51.0541 2.82687C52.9152 2.46501 55.2042 2.41701 58.7724 2.6173L58.7727 2.61732C62.5397 2.82817 65.0589 3.22254 68.2329 4.4517C71.4989 5.71651 75.4938 7.87835 82.1674 11.7552L82.1675 11.7552C104.869 24.942 141.672 49.4593 158.005 62.267L159.239 60.6931L158.005 62.267C174.619 75.2938 196.275 96.1991 203.679 106.28L203.68 106.28C205.188 108.332 206.96 110.297 208.619 111.826C209.448 112.59 210.274 113.268 211.046 113.799C211.78 114.304 212.61 114.778 213.428 114.983L213.429 114.983C214.162 115.167 215.094 115.21 216.023 115.196C216.995 115.181 218.127 115.099 219.34 114.965C221.766 114.696 224.609 114.206 227.303 113.557C302.917 95.341 376.667 94.8628 453.407 112.096L453.846 110.145L453.408 112.096C457.899 113.104 462.312 113.922 465.813 114.428C467.56 114.68 469.107 114.858 470.334 114.941C470.946 114.982 471.507 115.001 471.988 114.99C472.421 114.98 472.963 114.944 473.442 114.791L473.443 114.791C474.166 114.561 474.915 114.073 475.563 113.588C476.26 113.067 477.031 112.403 477.824 111.655C479.413 110.157 481.182 108.237 482.766 106.242L482.766 106.242C490.868 96.0338 510.535 76.7528 523.174 66.6477C545.785 48.5739 575.721 28.5227 606.435 10.8936C613.096 7.06979 616.62 5.15019 619.595 4.14108C622.46 3.16957 624.865 3.02626 629.417 3.02626C633.657 3.02626 636.049 3.17945 637.936 3.69708C639.744 4.19278 641.213 5.05892 643.516 6.81613L644.728 5.22779L643.516 6.81616C647.271 9.68132 651.229 15.4442 655.036 23.9156C658.814 32.3245 662.345 43.1734 665.368 55.9438C675.229 97.6061 674.336 167.874 663.04 230.434C661.313 240 660.395 245.397 660.489 249.413C660.589 253.653 661.812 256.364 663.9 260.484C672.011 276.497 677.966 294.256 681.82 313.978C683.764 323.924 684.363 343.243 683.796 363.36C683.229 383.446 681.509 404.023 678.914 416.435C671.267 453.002 658.623 482.713 639.839 507.219C621.057 531.721 596.058 551.124 563.552 566.96C523.259 586.59 479.561 597.252 414.368 603.246C385.618 605.889 308.272 606.306 279.456 603.972C212.29 598.533 160.312 585.774 118.112 564.481C68.6884 539.542 31.6578 497.417 16.7712 449.388C15.0139 443.718 13.0007 437.374 12.2961 435.294C11.6437 433.368 10.4244 428.435 9.60861 424.354C-3.71625 357.69 0.452496 305.043 22.1754 261.735L20.3877 260.838L22.1755 261.735L24.2504 257.597C26.4314 253.247 27.1091 248.298 26.1774 243.522L25.2602 238.821L23.3011 239.204L25.2602 238.821C7.99095 150.326 11.1288 67.9565 33.1546 21.2753Z" fill="#D59460" stroke="black" strokeWidth="4"/>
            </svg>

            {/* Metrics */}
            <div className="relative z-10 text-center mt-16">
              <div className="mb-4 lg:mb-8">
                <span ref={numberRef} className="text-6xl md:text-7xl lg:text-8xl font-serif">0</span>
                <span className="text-6xl md:text-7xl lg:text-8xl font-serif">+</span>
                <p className="lg:text-xl ">Cats helped in 2023</p>
              </div>
              <div>
                <span ref={percentRef} className="text-6xl md:text-7xl lg:text-8xl font-serif">0</span>
                <span className="text-6xl md:text-7xl lg:text-8xl font-serif">%</span>
                <p className="lg:text-xl ">Volunteer Powered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
