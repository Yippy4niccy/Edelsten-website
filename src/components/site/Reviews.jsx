import { Star } from "lucide-react";
import SectionReveal from "./SectionReveal";

const REVIEWS = [
  "Zac & his team are absolutely awesome, from the first phone call, the first meet & quote. Zac was very professional & friendly. Paint had peeled off on the sides of my bonnet in two places on my Trax SUV. Zac explained thoroughly what needed to be done, even blending in both guards to suit the bonnet - which I didn't originally want done. When I picked my car up after 3 days, Zac told me he'd blended the guards in and didn't charge me any extra. Absolutely brilliant job. Thank you Zac, I would 100% recommend.",
  "Zac and the guys resprayed the whole of my HSV Clubsport and it looked better than it did when I bought it new. Zac went out of his way to do extra work on my car and the price was so affordable - I'd definitely recommend Edelsten Paint & Panel for any paint work on your car. They even helped me out with other issues on my car that I'm grateful for. 10/10 guys.",
  "From the moment I went to see Zac after I was rear ended, the whole experience was easy and stress free. Zac organised a loan car for me and was great with the process and communication. Did a great job repairing my vehicle in a timely manner - could not fault the service and professionalism from Zac and his team. Highly recommend Edelsten Paint & Panel, why would you go anywhere else when you can get 100% satisfaction here.",
  "Zac and his staff were wonderful to deal with. After my (no fault) car accident, Zac was so helpful with the process. He was very supportive and knew exactly what I needed to do. He organised a vehicle to be picked up from his workshop, taking the stress out of me having to organise it.",
  "A huge thank you to Zac and the wonderful team at Edelsten Paint & Panel for the amazing job they did on my car. The paint work is absolutely beautiful, and the customer service was outstanding from start to finish. Everyone was friendly, professional, and took great pride in their work. I couldn't be more happy with the result and would highly recommend them to anyone looking for a quality paint and panel shop. Thanks again, Zac and team!",
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28">
      <SectionReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider">Reviews</p>
          <h2 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl text-white">
            What the Gold Coast is saying.
          </h2>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-[#1a1d24] border border-white/10 shadow-sm px-4 py-2 text-sm font-semibold text-white">
          <span className="font-bold text-brand">5.0</span>
          <span className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={15} className="fill-brand text-brand" />
            ))}
          </span>
          <span className="text-[#9aa1ac] font-medium">208 Google reviews</span>
        </span>
      </SectionReveal>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {REVIEWS.map((r, i) => (
          <SectionReveal key={i} delay={(i % 3) * 0.08}>
            <div className="h-full flex flex-col rounded-2xl bg-[#1a1d24] border border-white/10 shadow-[0_8px_30px_-16px_rgba(0,0,0,0.12)] p-6 sm:p-7">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={18} className="fill-brand text-brand" />
                ))}
              </div>
              <p className="mt-4 text-sm text-white leading-relaxed italic flex-1">"{r}"</p>
              <p className="mt-5 text-sm font-medium text-[#9aa1ac]">Google review</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}