import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Accordion } from "radix-ui";
import styles from "./page.css";

export default function Page() {
  return (
    <section className="flex flex-col items-center min-h-screen space-y-6 px-4 mt-20 max-w-sm md:max-w-4xl">
      <div className="text-center  mb-15">
        <p>
          WorkWise is a community-driven platform designed to bring honesty and
          transparency to the job search experience. We believe finding the
          right job goes beyond salary or location. It’s about finding a company
          that reflects your values, supports your goals, and prioritises your
          wellbeing.
        </p>
        <br />
        <p>
          By empowering people to share genuine insights about their workplace
          experiences, WorkWise helps job seekers make confident, informed
          career decisions and encourages employers to build better, more open
          workplace cultures.
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="mb-4 font-bold text-2xl">FAQs</h2>
        <Accordion.Root
          type="single"
          collapsible
          className="w-full rounded-md shadow-[0_2px_10px] shadow-black/5 items-center"
        >
          <Accordion.Item value="item-1">
            <Accordion.Trigger className="AccordionTrigger flex items-center justify-between w-full text-black  bg-ww-grey p-2 shadow-md">
              Who can post a review on WorkWise?
              <ChevronDownIcon className="AccordionChevron" aria-hidden />
            </Accordion.Trigger>
            <Accordion.Content className="p-2 text-lg">
              Anyone with an account can share their experiences, as long as
              their review follows our community guidelines and remains
              respectful and constructive.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Trigger className="AccordionTrigger flex items-center justify-between w-full text-black  bg-ww-grey p-2 shadow-md">
              Do companies see who wrote the reviews?
              <ChevronDownIcon className="AccordionChevron" aria-hidden />
            </Accordion.Trigger>
            <Accordion.Content className="p-2 text-lg">
              No, reviews are displayed anonymously to protect the privacy of
              contributors while maintaining integrity in the feedback process
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-3">
            <Accordion.Trigger className="AccordionTrigger flex items-center justify-between w-full text-black  bg-ww-grey p-2 shadow-md">
              What if I can&apos;t find my company listed?
              <ChevronDownIcon className="AccordionChevron" aria-hidden />
            </Accordion.Trigger>
            <Accordion.Content className="p-2 text-lg">
              We&apos;ve started with a curated list of companies, but
              we&apos;re always looking to add more. Drop us an email with your
              suggestions.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-4">
            <Accordion.Trigger className="AccordionTrigger flex items-center justify-between w-full text-black  bg-ww-grey p-2 shadow-md">
              How is WorkWise different from job boards or LinkedIn?
              <ChevronDownIcon className="AccordionChevron" aria-hidden />
            </Accordion.Trigger>
            <Accordion.Content className="p-2 text-lg">
              Instead of focusing on job vacancies, WorkWise is about experience
              and culture - helping you understand what daily life inside a
              company is like before you apply!
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </section>
  );
}
