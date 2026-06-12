// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "@tanstack/react-router";
// import { ChevronLeft, ChevronRight, Heart, ArrowRight } from "lucide-react";

// import buddha from "../assets/hero-buddha.jpg";
// import ashoka from "../assets/hero-ashoka.jpg";
// import stupa from "../assets/hero-stupa.jpg";
// import community from "../assets/hero-community.jpg";
// import education from "../assets/hero-education.jpg";

// const SLIDES = [
//   { img: buddha, eyebrow: "The Path", title: "Dhamma is the Path, Humanity is the Goal", desc: "Walking in the wisdom of the Awakened One — toward a kinder, more compassionate world." },
//   { img: ashoka, eyebrow: "Equality", title: "Compassion for All, Equality for Everyone", desc: "An ancient promise renewed — dignity, justice and care for every human being." },
//   { img: community, eyebrow: "Together", title: "Together We Build a Just and Peaceful Society", desc: "Hand in hand with communities, lifting one another through service and solidarity." },
//   { img: education, eyebrow: "Wisdom", title: "Following the Wisdom of Buddha & the Vision of Ambedkar", desc: "Education, empowerment and ethics — the three pillars of our movement." },
//   { img: stupa, eyebrow: "Heritage", title: "Honouring 2,500 Years of Living Wisdom", desc: "Preserving the spirit of Sanchi, Sarnath, Nalanda and the timeless teachings they hold." },
// ] as const;

// export function HeroSlider() {
//   const [i, setI] = useState(0);
//   useEffect(() => {
//     const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5500);
//     return () => clearInterval(t);
//   }, []);
//   const slide = SLIDES[i];
//   return (
//     <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[var(--royal-deep)] text-white">
//       <AnimatePresence mode="sync">
//         <motion.div
//           key={i}
//           initial={{ opacity: 0, scale: 1.08 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 1.02 }}
//           transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//           className="absolute inset-0"
//         >
//           <img src={slide.img} alt="" className="h-full w-full object-contain bg-[var(--royal-deep)]" />
//           <div className="absolute inset-0 bg-gradient-to-r from-[var(--royal-deep)]/90 via-[var(--royal-deep)]/55 to-[var(--royal-deep)]/30" />
//           <div className="absolute inset-0 bg-gradient-to-t from-[var(--royal-deep)] via-transparent to-transparent" />
//         </motion.div>
//       </AnimatePresence>

//       <div className="container-page relative z-10 flex h-full items-center pt-20">
//         <div className="max-w-3xl">
//           <AnimatePresence mode="wait">
//             <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
//               <span className="eyebrow !text-[var(--gold)]">{slide.eyebrow}</span>
//               <h1 className="mt-5 text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
//                 {slide.title}
//               </h1>
//               <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">{slide.desc}</p>
//               <div className="mt-9 flex flex-wrap gap-3">
//                 <Link to="/about" className="btn-primary"><ArrowRight className="h-4 w-4" /> Learn More</Link>
//                 <Link to="/contact" className="btn-outline"><Heart className="h-4 w-4" /> Join Us</Link>
//                 <Link to="/contact" className="btn-outline">Donate Now</Link>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Controls */}
//       <div className="absolute bottom-10 left-0 right-0 z-10">
//         <div className="container-page flex items-center justify-between">
//           <div className="flex gap-2">
//             {SLIDES.map((_, idx) => (
//               <button key={idx} aria-label={`Slide ${idx + 1}`} onClick={() => setI(idx)}
//                 className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-[var(--gold)]" : "w-5 bg-white/35 hover:bg-white/60"}`} />
//             ))}
//           </div>
//           <div className="hidden gap-2 sm:flex">
//             <button aria-label="Previous" onClick={() => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length)}
//               className="grid h-11 w-11 place-items-center rounded-full border border-white/25 backdrop-blur transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--royal-deep)]"><ChevronLeft className="h-5 w-5" /></button>
//             <button aria-label="Next" onClick={() => setI((p) => (p + 1) % SLIDES.length)}
//               className="grid h-11 w-11 place-items-center rounded-full border border-white/25 backdrop-blur transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--royal-deep)]"><ChevronRight className="h-5 w-5" /></button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "@tanstack/react-router";
// import { ChevronLeft, ChevronRight, Heart, ArrowRight } from "lucide-react";

// import buddha from "../assets/hero-buddha.jpg";
// import ashoka from "../assets/hero-ashoka.jpg";
// import stupa from "../assets/hero-stupa.jpg";
// import community from "../assets/hero-community.jpg";
// import education from "../assets/hero-education.jpg";

// const SLIDES = [
//   { img: buddha, eyebrow: "The Path", title: "Dhamma is the Path, Humanity is the Goal", desc: "Walking in the wisdom of the Awakened One — toward a kinder, more compassionate world." },
//   { img: ashoka, eyebrow: "Equality", title: "Compassion for All, Equality for Everyone", desc: "An ancient promise renewed — dignity, justice and care for every human being." },
//   { img: community, eyebrow: "Together", title: "Together We Build a Just and Peaceful Society", desc: "Hand in hand with communities, lifting one another through service and solidarity." },
//   { img: education, eyebrow: "Wisdom", title: "Following the Wisdom of Buddha & the Vision of Ambedkar", desc: "Education, empowerment and ethics — the three pillars of our movement." },
//   { img: stupa, eyebrow: "Heritage", title: "Honouring 2,500 Years of Living Wisdom", desc: "Preserving the spirit of Sanchi, Sarnath, Nalanda and the timeless teachings they hold." },
// ] as const;

// export function HeroSlider() {
//   const [i, setI] = useState(0);
//   useEffect(() => {
//     const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5500);
//     return () => clearInterval(t);
//   }, []);
//   const slide = SLIDES[i];
//   return (
//     <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[var(--royal-deep)] text-white">
//       <div className="container-page relative z-10 flex h-full items-center justify-between pt-20">
//         {/* Left side - Text Content */}
//         <div className="max-w-2xl">
//           <AnimatePresence mode="wait">
//             <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
//               <span className="eyebrow !text-[var(--gold)]">{slide.eyebrow}</span>
//               <h1 className="mt-5 text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
//                 {slide.title}
//               </h1>
//               <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">{slide.desc}</p>
//               <div className="mt-9 flex flex-wrap gap-3">
//                 <Link to="/about" className="btn-primary"><ArrowRight className="h-4 w-4" /> Learn More</Link>
//                 <Link to="/contact" className="btn-outline"><Heart className="h-4 w-4" /> Join Us</Link>
//                 <Link to="/contact" className="btn-outline">Donate Now</Link>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Right side - Image */}
//         <div className="hidden lg:block w-1/2">
//           <AnimatePresence mode="sync">
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -30 }}
//               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//               className="relative"
//             >
//               <img 
//                 src={slide.img} 
//                 alt="" 
//                 className="h-[70vh] w-full rounded-2xl object-cover object-center shadow-2xl"
//               />
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Controls */}
//       <div className="absolute bottom-10 left-0 right-0 z-10">
//         <div className="container-page flex items-center justify-between">
//           <div className="flex gap-2">
//             {SLIDES.map((_, idx) => (
//               <button key={idx} aria-label={`Slide ${idx + 1}`} onClick={() => setI(idx)}
//                 className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-[var(--gold)]" : "w-5 bg-white/35 hover:bg-white/60"}`} />
//             ))}
//           </div>
//           <div className="hidden gap-2 sm:flex">
//             <button aria-label="Previous" onClick={() => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length)}
//               className="grid h-11 w-11 place-items-center rounded-full border border-white/25 backdrop-blur transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--royal-deep)]"><ChevronLeft className="h-5 w-5" /></button>
//             <button aria-label="Next" onClick={() => setI((p) => (p + 1) % SLIDES.length)}
//               className="grid h-11 w-11 place-items-center rounded-full border border-white/25 backdrop-blur transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--royal-deep)]"><ChevronRight className="h-5 w-5" /></button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Heart, ArrowRight, UserPlus } from "lucide-react";

import buddha from "../assets/hero-buddha.jpg";
import ashoka from "../assets/hero-ashoka.jpg";
import stupa from "../assets/hero-stupa.jpg";
import community from "../assets/hero-community.jpg";
import education from "../assets/hero-education.jpg";

const SLIDES = [
  { img: buddha, eyebrow: "The Path", title: "Dhamma is the Path, Humanity is the Goal", desc: "Walking in the wisdom of the Awakened One — toward a kinder, more compassionate world." },
  { img: ashoka, eyebrow: "Equality", title: "Compassion for All, Equality for Everyone", desc: "An ancient promise renewed — dignity, justice and care for every human being." },
  { img: community, eyebrow: "Together", title: "Together We Build a Just and Peaceful Society", desc: "Hand in hand with communities, lifting one another through service and solidarity." },
  { img: education, eyebrow: "Wisdom", title: "Following the Wisdom of Buddha & the Vision of Ambedkar", desc: "Education, empowerment and ethics — the three pillars of our movement." },
  { img: stupa, eyebrow: "Heritage", title: "Honouring 2,500 Years of Living Wisdom", desc: "Preserving the spirit of Sanchi, Sarnath, Nalanda and the timeless teachings they hold." },
] as const;

export function HeroSlider() {
  const [i, setI] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  
  useEffect(() => {
    SLIDES.forEach((_, idx) => {
      const img = new Image();
      img.src = SLIDES[idx].img;
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [idx]: true }));
      };
    });
  }, []);
  
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);
  
  const slide = SLIDES[i];
  
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[var(--royal-deep)] text-white">
      <div className="container-page relative z-10 flex h-full flex-col items-center justify-center gap-6 pt-20 pb-24 lg:flex-row lg:justify-between lg:gap-8">
        
        {/* Right side - Image */}
        <div className="order-1 w-full max-w-md lg:order-2 lg:w-1/2 lg:max-w-full">
          <div className="relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative w-full flex justify-center"
              >
                {!loadedImages[i] && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-[var(--gold)] border-t-transparent" />
                  </div>
                )}
                <div className="rounded-2xl shadow-2xl overflow-hidden bg-[var(--royal-deep)]">
                  <img 
                    src={slide.img} 
                    alt="" 
                    className={`transition-all duration-300 ${
                      loadedImages[i] ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                    style={{ 
                      willChange: "transform",
                      width: "auto",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "55vh",
                      objectFit: "contain",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Left side - Text Content */}
        <div className="order-2 w-full max-w-2xl text-center lg:order-1 lg:text-left">
          <AnimatePresence mode="wait">
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -15 }} 
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="eyebrow !text-[var(--gold)] text-sm tracking-wider">{slide.eyebrow}</span>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.05]">
                {slide.title}
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-white/85 md:text-base lg:mt-6 lg:text-lg">
                {slide.desc}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2 lg:mt-9 lg:justify-start lg:gap-3">
                <Link to="/about" className="btn-primary text-sm px-5 py-2.5 lg:px-6 lg:py-3"><ArrowRight className="h-3.5 w-3.5 lg:h-4 lg:w-4" /> Learn More</Link>
                <Link to="/contact" className="btn-outline text-sm px-5 py-2.5 lg:px-6 lg:py-3"><UserPlus className="h-3.5 w-3.5 lg:h-4 lg:w-4" /> Join Us</Link>
                <Link to="/contact" className="btn-outline text-sm px-5 py-2.5 lg:px-6 lg:py-3">Donate Now</Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-0 right-0 z-10 lg:bottom-10">
        <div className="container-page flex items-center justify-between">
          <div className="flex gap-1.5 lg:gap-2">
            {SLIDES.map((_, idx) => (
              <button key={idx} aria-label={`Slide ${idx + 1}`} onClick={() => setI(idx)}
                className={`h-1 rounded-full transition-all lg:h-1.5 ${idx === i ? "w-6 bg-[var(--gold)] lg:w-10" : "w-3 bg-white/40 hover:bg-white/60 lg:w-5"}`} />
            ))}
          </div>
          <div className="flex gap-2 sm:gap-2">
            <button 
              aria-label="Previous" 
              onClick={() => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length)}
              className="grid h-8 w-8 place-items-center rounded-full border border-white/25 backdrop-blur transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--royal-deep)] lg:h-11 lg:w-11"
            >
              <ChevronLeft className="h-4 w-4 lg:h-5 lg:w-5" />
            </button>
            <button 
              aria-label="Next" 
              onClick={() => setI((p) => (p + 1) % SLIDES.length)}
              className="grid h-8 w-8 place-items-center rounded-full border border-white/25 backdrop-blur transition hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--royal-deep)] lg:h-11 lg:w-11"
            >
              <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}