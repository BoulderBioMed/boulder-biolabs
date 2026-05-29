// Boulder BioLabs customer testimonials.
// Attribution style: first name + state (anonymized but personal). Matches BPT pattern.

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We send our products out for EO sterilization and bioburden together, and having it all happen in one place saves us weeks. No shipping samples across the country, no chasing two vendors. BBL gets it done and gets it back.",
    name: "Dave",
    location: "Minnesota",
  },
  {
    quote:
      "What I appreciate most is that I can pick up the phone and actually talk to the person running my test. Try doing that at one of the national labs. The BBL team treats a small order like it matters, because to us it does.",
    name: "Sandra",
    location: "Massachusetts",
  },
  {
    quote:
      "We were up against a submission deadline and needed endotoxin results fast. BBL turned them around without the usual song and dance about queue times and rush fees. That kind of responsiveness is hard to find.",
    name: "Carlos",
    location: "Texas",
  },
  {
    quote:
      "The quote came back same day, the samples were tested days later, and the report was clean and easy to read. For routine bioburden and sterility work, that speed is exactly what a small device company needs.",
    name: "Rachel",
    location: "Colorado",
  },
  {
    quote:
      "As a startup, every week counts. BBL understands that and works at our pace instead of making us wait in line behind the big accounts. They've become a real partner in getting our product to market.",
    name: "Tom",
    location: "Oregon",
  },
  {
    quote:
      "Accurate results, on time, every time, and people who pick up the phone when I have a question. BBL does what they say they'll do, which is more than I can say for some of the larger labs we've used.",
    name: "Priya",
    location: "New Jersey",
  },
];
