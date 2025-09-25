"use client"

import { useState } from "react"
import styles from "./FAQ.module.scss"

type FAQItem = {
  question: string
  answer: string
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqItems: FAQItem[] = [
    {
      question: "What is Elevate?",
      answer:
        "Elevate is a private, high-quality community built for traders, crypto natives, and anyone looking to level up their game in the markets. We combine unique tools, live discussions, 24/7 activity from the best of the best and hand-picked members to create a space that actually delivers value — not just a chatroom.",
    },
    {
      question: "I'm a beginner. Can I still join?",
      answer:
        "Absolutely. Some of our members started with zero experience and have grown. Whether you're just getting started or already seasoned, there's a clear path to learn, contribute, and earn rewards once you join the group.",
    },
    {
      question: "How do I earn rewards?",
      answer:
        "You earn points by contributing to the community — whether that's giving solid trade calls, engaging with posts, or repping other members. These points can be redeemed in our Marketplace for things like free SOL, memberships, whitelist spots, physical items, and more.",
    },
    {
      question: "What's inside the Marketplace?",
      answer:
        "The Marketplace is your reward hub. Trade in your points for crypto, exclusive access, or limited-time items. We're constantly updating it with new perks, so there's always something new.",
    },
    {
      question: "Can I talk directly with other members?",
      answer:
        "Yes, not only are they active all day in the chats, Our 1-on-1 feature lets you connect directly with other members via call or text for advice, strategy, or anything else you hand in mind.",
    },
    {
      question: "What is Engage?",
      answer:
        "Engage is our built-in X (Twitter) interaction system. You get free engagement on your posts from members and the team, and you earn points for every post you interact with — boosting both your reach and your rewards which will convert to a marketplace with rewards.",
    },
    {
      question: "Do you host live sessions?",
      answer:
        "Yes! We run daily and weekly livestreams covering trenches, perpetuals, market trends, and more. Hosted by experienced members, these streams are your chance to see high-level trading in action, copy their trades, and ask questions live.",
    },
    {
      question: "What are the X, IG, and Truth Trackers?",
      answer:
        "We monitor over 500+ top influencers, crypto accounts, political voices, and relevant accounts — updated daily. You'll always know what the most important people in the space are saying, all in one channel.",
    },
    {
      question: "How does the Wallet Tracker work?",
      answer:
        "Our Wallet Tracker follows some of the best traders in the space. You'll see their moves in real time, with notifications for big buys and smart plays so you can act quick.",
    },
    {
      question: "What other tools do you offer?",
      answer:
        "We've built custom bots for volume tracking, rep systems, wallet monitoring, migration alerts, and more — all designed to give you an edge.",
    },
    {
      question: "Is support available if I need help?",
      answer:
        "Yes — our team is online 24/7 to assist you with any questions, issues, or technical help.",
    },
    {
      question: "How do I join?",
      answer:
        "Go over to buy page to unlock all features for 30 days, with guaranteed re-entry if you choose to extend.",
    },
  ]

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.accordion}>
          {faqItems.map((item, index) => (
            <div key={index} className={`${styles.accordionItem} ${openIndex === index ? styles.active : ""}`}>
              <button
                className={styles.accordionHeader}
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`content-${index}`}
              >
                {item.question}
                <span className={styles.icon}></span>
              </button>
              <div
                id={`content-${index}`}
                className={`${styles.accordionContent} ${openIndex === index ? styles.active : ""}`}
                aria-hidden={openIndex !== index}
              >
                <div className={styles.accordionBody}>{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
