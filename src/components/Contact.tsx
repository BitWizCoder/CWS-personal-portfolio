import SectionIntro from "./shared/SectionIntro";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

function Contact() {
  return (
    <div className="mt-28 max-w-6xl mb-12">
      <SectionIntro
        heading="Let's make something awesome together!
"
        subHeading="Contact"
      />

      <div className="mb-6">
        <div className="flex gap-6 mb-6">
          <Input type="text" placeholder="Your Name" />
          <Input type="text" placeholder="Company Name" />
        </div>
        <div className="flex gap-6 mb-6">
          <Input type="email" placeholder="you@email.com" />
          <Input type="phone" placeholder="+0148257233" />
        </div>
        <Textarea placeholder="Write your message" className="min-h-18" />
      </div>

      <Button>Send Message</Button>
    </div>
  );
}

export default Contact;
