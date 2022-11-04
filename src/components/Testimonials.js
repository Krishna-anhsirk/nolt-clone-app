import "./assets/css/Testimonials.css";
import TestimonialGenerator from "./TestimonialGenerator";
import TryNoltBoard from "./TryNoltBoard";

const testimonials1 = [
  {
    feedback:
      "Nolt is great for collecting feedback and feature requests from our community of creators. It's given us clarity on what to build next for our users and has helped us improve our product decisions.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-sahil.2236960693.jpg",
    name: "Sahil Lavingia",
    from: "Gumroad",
  },
  {
    feedback:
      "It took us a while, but we finally found the perfect product to centralize feedback. Nolt is minimalistic, intuitive, and just beautiful. It's the most efficient way to listen and interact with our community.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-itamar.3f40e2ee78.png",
    name: "Itamar Madar",
    from: "The SCP Foundation",
  },
  {
    feedback:
      "Nolt works like a charm! Only after three days, more than 8000 votes, 220 comments, and 80 ideas have been submitted. A suggestion with over 1000 upvotes got implemented, and my users are engaged and happy like never before.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-michal.6b885fff05.png",
    name: "Michał Tajchert",
    from: "Kanarek",
  },
  {
    feedback: "Love the simplicity",
    img: "",
    name: "",
    from: "",
  },
  {
    feedback:
      "I really enjoy using Nolt! The app is focused on what's essential, and it's super easy to customize things and understand how things work. I also love the transparent and affordable PRO model.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-sebastiano.31c04f45c8.jpg",
    name: "Sebastiano Guerriero",
    from: "CodyHouse",
  },
  {
    feedback:
      "We used to have suggestions from our community all over the place, and it was hard to stay on top of it. But with Nolt, we now have this dedicated place for them that makes it super easy to see what the community wants most.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-richard.64b827b4bb.jpg",
    name: "Richard Rampas",
    from: "Volcanoids",
  },
  {
    feedback:
      "Our users love the simple, intuitive, and modern design of Nolt! It has allowed us to validate ideas, ideate new features, and connect with our users in a super easy and organized way.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-umberto.2540ef7933.jpg",
    name: "Umberto Greco",
    from: "OpenTabs",
  },
];

const testimonials2 = [
  {
    feedback: "We finally found the perfect product to centralize feedback",
    img: "",
    name: "",
    from: "",
  },
  {
    feedback:
      "We are big fans of Nolt. The amount of feedback, feature requests and discussions has increased significantly. With the voting system, it never feels overwhelming. We are so much more in control of our roadmap and closer to the community with our releases.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-bastian.e7fe6e24a1.jpg",
    name: "Bastian Allgeier",
    from: "Kirby CMS",
  },
  {
    feedback:
      "Nolt is a fast and simple solution for getting customer feedback for Archbee. We love the easy token integration for automatically authenticating our users.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-dragos.5ba1ec0a09.jpg",
    name: "Dragos Bulugean",
    from: "Archbee",
  },
  {
    feedback:
      "We tried several other tools for managing and gathering user feedback, but they were either too expensive, had an outdated look or were lacking functionalities. Besides the reasonable price and the very modern easy-to-use interface, what we love about Nolt is the ability to suggest ideas or vote on them anonymously. Most of the users don't like signing up for something they may use only once. Even if they act anonymously, they do have the option to subscribe to specific ideas, so it's a win-win situation.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-ervin.4e6de2d1f0.png",
    name: "Ervin Kalemi",
    from: "Publer",
  },
  {
    feedback: "We use @TryNolt for @rive_app and we love it!",
    img: "https://nolt.io/static/dist/images/landing/testimonial-guido.79ae0f4b86.jpg",
    name: "Guido Rosso",
    from: "Rive",
    social:
      "https://nolt.io/static/dist/images/landing/testimonial-tweet.366304717c.png",
  },
  {
    feedback: "My users are engaged and happy like never before",
    img: "",
    name: "",
    from: "",
  },
  {
    feedback:
      "Nolt enables us to get clarity over the features we should build next. By opening up our backlog, which is predominantly made up of feature requests from our users, we democratise our product build, ensuring the voice of our customer is at the center of our development. Nolt makes it super easy!",
    img: "https://nolt.io/static/dist/images/landing/testimonial-hassan.9e71415b4b.jpg",
    name: "Hassan Rajwani",
    from: "REFSIX",
  },
];

const testimonials3 = [
  {
    feedback:
      "The simplicity of Nolt made it easy for our small team to start collecting customer feedback. In just 30 days, we went from 0 customer feedback to over 60 customer suggestions about our product. We even started using Nolt to collect internal feedback from different team members. Overall, it's been the number one addition to our tech stack in terms of price, simplicity, ROI, and effectiveness.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-josh.827cc021f2.jpg",
    name: "Josh Merryman",
    from: "MessageDesk",
  },
  {
    feedback:
      "We’ve really liked @TryNolt. The fine folks at @Letterboxd_ have moved over to it as well. Highly recommended.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-tomwatson.c8c24550f9.jpg",
    name: "Tom Watson",
    from: "Glass",
    social:
      "https://nolt.io/static/dist/images/landing/testimonial-tweet.366304717c.png",
  },
  {
    feedback:
      "Thanks Tom! You tagged the handle of a fan account, but yes, we’re loving Nolt’s streamlined approach to feedback, not to mention the SSO and import options. ⚡️",

    img: "https://nolt.io/static/dist/images/landing/testimonial-letterboxd.d66b45c754.jpg",
    name: "Letterboxd",
    from: "@letterboxd",
    social:
      "https://nolt.io/static/dist/images/landing/testimonial-tweet.366304717c.png",
  },
  {
    feedback:
      "Nolt was very easy to set up, and the support was very fast. The tool helps us to get new ideas from people both inside and outside of The Salvation Army. We definitely recommend Nolt to anyone wanting an easy and fast way to collect ideas.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-dean.a9ae2d77df.jpg",
    name: "Dean Bates",
    from: "The Salvation Army",
  },
  {
    feedback: "Nolt is the best for this, by far",
    img: "",
    name: "",
    from: "",
  },
  {
    feedback:
      "As a startup on a tiny budget, we were looking for a super-lightweight customer feedback solution that just worked right out of the box. Nolt fits our needs perfectly!",
    img: "https://nolt.io/static/dist/images/landing/testimonial-greg.5cab24bdd2.jpg",
    name: "Greg Hamilton",
    from: "Lifecoach",
  },
  {
    feedback:
      "We are excited to now use a @TryNolt board for our user suggestions! We love hearing from users & this brings our community even closer to each other and our roadmap.",

    img: "https://nolt.io/static/dist/images/landing/testimonial-tiimo.b0acff8ade.jpg",
    name: "Tiimo",
    from: "@tiimoapp",
    social:
      "https://nolt.io/static/dist/images/landing/testimonial-tweet.366304717c.png",
  },
];

const tabletTestimonials1 = [
  {
    feedback:
      "Nolt is great for collecting feedback and feature requests from our community of creators. It's given us clarity on what to build next for our users and has helped us improve our product decisions.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-sahil.2236960693.jpg",
    name: "Sahil Lavingia",
    from: "Gumroad",
  },
  {
    feedback:
      "It took us a while, but we finally found the perfect product to centralize feedback. Nolt is minimalistic, intuitive, and just beautiful. It's the most efficient way to listen and interact with our community.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-itamar.3f40e2ee78.png",
    name: "Itamar Madar",
    from: "The SCP Foundation",
  },
  {
    feedback:
      "The simplicity of Nolt made it easy for our small team to start collecting customer feedback. In just 30 days, we went from 0 customer feedback to over 60 customer suggestions about our product. We even started using Nolt to collect internal feedback from different team members. Overall, it's been the number one addition to our tech stack in terms of price, simplicity, ROI, and effectiveness.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-josh.827cc021f2.jpg",
    name: "Josh Merryman",
    from: "MessageDesk",
  },
  {
    feedback: "We use @TryNolt for @rive_app and we love it!",
    img: "https://nolt.io/static/dist/images/landing/testimonial-guido.79ae0f4b86.jpg",
    name: "Guido Rosso",
    from: "Rive",
    social:
      "https://nolt.io/static/dist/images/landing/testimonial-tweet.366304717c.png",
  },
  {
    feedback:
      "Nolt was very easy to set up, and the support was very fast. The tool helps us to get new ideas from people both inside and outside of The Salvation Army. We definitely recommend Nolt to anyone wanting an easy and fast way to collect ideas.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-dean.a9ae2d77df.jpg",
    name: "Dean Bates",
    from: "The Salvation Army",
  },
  {
    feedback:
      "Nolt works like a charm! Only after three days, more than 8000 votes, 220 comments, and 80 ideas have been submitted. A suggestion with over 1000 upvotes got implemented, and my users are engaged and happy like never before.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-michal.6b885fff05.png",
    name: "Michał Tajchert",
    from: "Kanarek",
  },
  {
    feedback: "Love the simplicity",
    img: "",
    name: "",
    from: "",
  },
  {
    feedback:
      "I really enjoy using Nolt! The app is focused on what's essential, and it's super easy to customize things and understand how things work. I also love the transparent and affordable PRO model.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-sebastiano.31c04f45c8.jpg",
    name: "Sebastiano Guerriero",
    from: "CodyHouse",
  },
  {
    feedback:
      "We used to have suggestions from our community all over the place, and it was hard to stay on top of it. But with Nolt, we now have this dedicated place for them that makes it super easy to see what the community wants most.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-richard.64b827b4bb.jpg",
    name: "Richard Rampas",
    from: "Volcanoids",
  },
  {
    feedback:
      "Our users love the simple, intuitive, and modern design of Nolt! It has allowed us to validate ideas, ideate new features, and connect with our users in a super easy and organized way.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-umberto.2540ef7933.jpg",
    name: "Umberto Greco",
    from: "OpenTabs",
  },
];

const tabletTestimonials2 = [
  {
    feedback: "We finally found the perfect product to centralize feedback",
    img: "",
    name: "",
    from: "",
  },
  {
    feedback:
      "We are big fans of Nolt. The amount of feedback, feature requests and discussions has increased significantly. With the voting system, it never feels overwhelming. We are so much more in control of our roadmap and closer to the community with our releases.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-bastian.e7fe6e24a1.jpg",
    name: "Bastian Allgeier",
    from: "Kirby CMS",
  },
  {
    feedback:
      "We’ve really liked @TryNolt. The fine folks at @Letterboxd_ have moved over to it as well. Highly recommended.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-tomwatson.c8c24550f9.jpg",
    name: "Tom Watson",
    from: "Glass",
    social:
      "https://nolt.io/static/dist/images/landing/testimonial-tweet.366304717c.png",
  },
  {
    feedback:
      "Thanks Tom! You tagged the handle of a fan account, but yes, we’re loving Nolt’s streamlined approach to feedback, not to mention the SSO and import options. ⚡️",

    img: "https://nolt.io/static/dist/images/landing/testimonial-letterboxd.d66b45c754.jpg",
    name: "Letterboxd",
    from: "@letterboxd",
    social:
      "https://nolt.io/static/dist/images/landing/testimonial-tweet.366304717c.png",
  },
  {
    feedback: "My users are engaged and happy like never before",
    img: "",
    name: "",
    from: "",
  },
  {
    feedback:
      "Nolt is a fast and simple solution for getting customer feedback for Archbee. We love the easy token integration for automatically authenticating our users.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-dragos.5ba1ec0a09.jpg",
    name: "Dragos Bulugean",
    from: "Archbee",
  },
  {
    feedback:
      "We tried several other tools for managing and gathering user feedback, but they were either too expensive, had an outdated look or were lacking functionalities. Besides the reasonable price and the very modern easy-to-use interface, what we love about Nolt is the ability to suggest ideas or vote on them anonymously. Most of the users don't like signing up for something they may use only once. Even if they act anonymously, they do have the option to subscribe to specific ideas, so it's a win-win situation.",
    img: "https://nolt.io/static/dist/images/landing/testimonial-ervin.4e6de2d1f0.png",
    name: "Ervin Kalemi",
    from: "Publer",
  },
  {
    feedback:
      "Nolt enables us to get clarity over the features we should build next. By opening up our backlog, which is predominantly made up of feature requests from our users, we democratise our product build, ensuring the voice of our customer is at the center of our development. Nolt makes it super easy!",
    img: "https://nolt.io/static/dist/images/landing/testimonial-hassan.9e71415b4b.jpg",
    name: "Hassan Rajwani",
    from: "REFSIX",
  },
  {
    feedback: "Nolt is the best for this, by far",
    img: "",
    name: "",
    from: "",
  },
  {
    feedback:
      "As a startup on a tiny budget, we were looking for a super-lightweight customer feedback solution that just worked right out of the box. Nolt fits our needs perfectly!",
    img: "https://nolt.io/static/dist/images/landing/testimonial-greg.5cab24bdd2.jpg",
    name: "Greg Hamilton",
    from: "Lifecoach",
  },
  {
    feedback:
      "We are excited to now use a @TryNolt board for our user suggestions! We love hearing from users & this brings our community even closer to each other and our roadmap.",

    img: "https://nolt.io/static/dist/images/landing/testimonial-tiimo.b0acff8ade.jpg",
    name: "Tiimo",
    from: "@tiimoapp",
    social:
      "https://nolt.io/static/dist/images/landing/testimonial-tweet.366304717c.png",
  },
];

function Testimonials() {
  return (
    <div className="Testimonials">
      <div className="Testimonials-desc-container">
        <h1 className="Testimonials-statement">
          Nolt powers user research at thousands of companies around the globe.
        </h1>
        <p className="Testimonials-desc">
          Teams that switch to Nolt have a better understanding of what their
          customers really care about. They make strategic decisions faster and
          build better customer relationships while saving hundreds of hours of
          unnecessary work.
        </p>
      </div>

      <div className="People-testimonials" id="Testimonials-desktop">
        <div className="Col-Testimonials">
          <TestimonialGenerator data={testimonials1} />
        </div>

        <div className="Col-Testimonials">
          <TestimonialGenerator data={testimonials2} />
        </div>

        <div className="Col-Testimonials">
          <TestimonialGenerator data={testimonials3} />
        </div>
      </div>
      <div className="Tablet-grid">
        <div className="Tablet-testimonials Col-testimonials">
          <TestimonialGenerator data={tabletTestimonials1} />
        </div>
        <div className="Tablet-testimonials Col-testimonials">
          <TestimonialGenerator data={tabletTestimonials2} />
        </div>
      </div>
      <TryNoltBoard />
    </div>
  );
}

export default Testimonials;
