/* eslint-disable @typescript-eslint/no-explicit-any */

import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navigation from "~/components/Navigation/Navigation";
import Transition from "~/components/Transition";

import Head from "next/head";
import "swiper/css";
import AnimatedStars from "~/components/AnimatedStars";
import { Button } from "~/components/Button";
import TextReveal from "~/components/Text/TextReveal";

import Marquee from "react-fast-marquee";

import {
  CallRinging04Icon,
  InternetAntenna01Icon,
  LiveStreaming01Icon,
  NewTwitterIcon
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import Carousel from "~/components/Carousel";
import FadeIn from "~/components/FadeIn";
import FAQAccordion from "~/components/FAQ";
import Footer from "~/components/Footer";
import GradientReveal from "~/components/Text/Gradient";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [showAllProviders, setShowAllProviders] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [contentVariationIndex, setContentVariationIndex] = useState([0, 0, 0]); // Track content variation for each item
  const [lastDataStepOne, setLastDataStepOne] = useState([false, false, false]); // Track when each item was last at data-step 1

  // Content data for each item with 2 variations
  const itemContent = [
    // Item 0 content variations
    [
      { heading: "@RealDonaldTrump", text: "Trump just posted a new X post" },
      { heading: "@ElonMusk", text: "ElonMusk replied to a X post" },
    ],
    // Item 1 content variations
    [
      { heading: "@aeyakovenko", text: "Aeyakovenko posted a new IG reel" },
      { heading: "@Cupseyy", text: "Cupsey posted a carousel on IG" },
    ],
    // Item 2 content variations
    [
      { heading: "@daumeneth", text: "Daumeneth posted a Thread on X" },
      { heading: "@sama", text: "Sam Altman posted a new X post" },
    ],
  ];

  const getStepForItemWithStep = (itemIndex: number, step: number) => {
    const steps = [1, 2, 3];
    const rotatedIndex = (itemIndex + (step - 1)) % 3;
    return steps[rotatedIndex];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => {
        const nextStep = prevStep === 3 ? 1 : prevStep + 1;
        return nextStep;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLastDataStepOne((prevLastStepOne) => {
        const newLastStepOne = [...prevLastStepOne];

        for (let itemIndex = 0; itemIndex < 3; itemIndex++) {
          const itemDataStep = getStepForItemWithStep(itemIndex, currentStep);
          const wasAtStepOne = prevLastStepOne[itemIndex];
          const isAtStepOne = itemDataStep === 1;

          if (isAtStepOne && !wasAtStepOne) {
            setContentVariationIndex((prevVariations) => {
              const newVariations = [...prevVariations];
              newVariations[itemIndex] = newVariations[itemIndex] === 0 ? 1 : 0;
              return newVariations;
            });
          }

          newLastStepOne[itemIndex] = isAtStepOne;
        }

        return newLastStepOne;
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, [currentStep]);

  const getStepForItem = (itemIndex: number) => {
    return getStepForItemWithStep(itemIndex, currentStep);
  };

  const getItemContent = (itemIndex: number) => {
    const variationIndex = contentVariationIndex[itemIndex];
    return itemContent[itemIndex][variationIndex];
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const clientApiKey = process.env.NEXT_PUBLIC_CLIENT_API_KEY as string;
  const collectionId = process.env.NEXT_PUBLIC_COLLECTION_ID as string;

  return (
    <Transition>
      <Head>
        <title>Elevate | Where the Crypto Elite Connect</title>
        <meta
          name="description"
          content="Join a private network of top-tier crypto traders, founders, and analysts. Get exclusive insights, real-time strategies, marketplace rewards, and direct access to proven experts in the crypto space."
        />
        <meta
          name="keywords"
          content="crypto trading community, crypto discord, trading signals, crypto experts, memecoin trading, blockchain analysis, crypto marketplace, trading education"
        />
        <link rel="canonical" href="https://elevate.com" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Elevate | Where the Crypto Elite Connect"
        />
        <meta
          property="og:description"
          content="Join an exclusive crypto trading community with top-tier traders, real-time insights, custom tools, and marketplace rewards. Connect with proven experts like Cupsey, Marcell, and Daumen."
        />
        <meta property="og:url" content="https://elevate.com" />
        <meta property="og:image" content="/ogbanner.png" />
        <meta property="og:site_name" content="Elevate" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Elevate | Where the Crypto Elite Connect"
        />
        <meta
          name="twitter:description"
          content="Join an exclusive crypto trading community with top-tier traders, real-time insights, custom tools, and marketplace rewards. Connect with proven experts."
        />
        <meta name="twitter:image" content="/ogbanner.png" />
        <meta name="twitter:site" content="@elevate" />
      </Head>

      <Navigation />

      <main>
        <section id="hero">
          <div className="wrapper">
            <div className="content">
              <div className="title">
                <div className="w-full flex h-center">
                  <FadeIn delay={0.5}>
                    <div className="news">
                      <div className="tag">News</div>
                      <span className="text">Welcome to Elevate!</span>
                    </div>
                  </FadeIn>
                </div>
                <TextReveal
                  type="h1"
                  text="Where the Crypto Elite Connect"
                  style="heading"
                  align="center"
                />
                <FadeIn delay={0.5}>
                  <p className="paragraph">
                    Join a private network of top-tier traders, founders, and
                    analysts shaping the future of crypto. Get exclusive
                    insights, real-time strategies you wont find on any social
                    media.
                  </p>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <div className="w-full flex h-center">
                    <Button variant="main">Join the Community</Button>
                  </div>
                </FadeIn>
                <div className="footer">
                  <FadeIn
                    direction="down"
                    delay={0.5}
                    duration={1.5}
                    distance={5}
                  >
                    <span className="text">Our Partners</span>
                  </FadeIn>
                  <div className="logos desktop-only">
                    <FadeIn
                      direction="up"
                      delay={0.6}
                      distance={10}
                      duration={1.5}
                      hasBlur
                    >
                      <Image
                        width={500}
                        height={100}
                        className="logo"
                        src="/companies/coinbase.png"
                        alt="partner"
                      />
                    </FadeIn>
                    <FadeIn
                      direction="up"
                      delay={0.8}
                      distance={10}
                      duration={1.5}
                      hasBlur
                    >
                      <Image
                        width={500}
                        height={100}
                        className="logo small"
                        src="/companies/okx.png"
                        alt="partner"
                      />
                    </FadeIn>
                    <FadeIn
                      direction="up"
                      delay={1}
                      distance={10}
                      duration={1.5}
                      hasBlur
                    >
                      <Image
                        width={500}
                        height={100}
                        className="logo large"
                        src="/companies/axiomexchange.png"
                        alt="partner"
                      />
                    </FadeIn>
                    <FadeIn
                      direction="up"
                      delay={1.2}
                      distance={10}
                      duration={1.5}
                      hasBlur
                    >
                      <Image
                        width={500}
                        height={100}
                        className="logo"
                        src="/companies/bloom.png"
                        alt="partner"
                      />
                    </FadeIn>
                    <FadeIn
                      direction="up"
                      delay={1.4}
                      distance={10}
                      duration={1.5}
                      hasBlur
                    >
                      <Image
                        width={500}
                        height={100}
                        className="logo large"
                        src="/companies/gmgn.png"
                        alt="partner"
                      />
                    </FadeIn>
                    <FadeIn
                      direction="up"
                      delay={1.6}
                      distance={10}
                      duration={1.5}
                      hasBlur
                    >
                      <Image
                        width={500}
                        height={100}
                        className="logo"
                        src="/companies/photon.png"
                        alt="partner"
                      />
                    </FadeIn>
                  </div>
                </div>
              </div>
            </div>
            <div className="mockupwrap">
              <Image
                width={2500}
                height={2500}
                className="mockup blur-fade-in"
                src="/discord-channels.png"
                alt=""
                data-delay="1"
                priority
              />
              <Image
                width={2500}
                height={2500}
                className="mockup margin blur-fade-in"
                src="/discord-messages.png"
                alt=""
                data-delay="1.2"
                priority
              />
              <Image
                width={2500}
                height={2500}
                className="mockup margin-plus blur-fade-in"
                src="/discord-members.png"
                alt=""
                data-delay="1.4"
                priority
              />
              <div className="overlay"></div>
              <div className="glass"></div>
            </div>
          </div>
          <Marquee className="marquee mobile-only">
            <FadeIn
              direction="up"
              delay={0.6}
              distance={10}
              duration={1.5}
              hasBlur
            >
              <Image
                width={500}
                height={100}
                className="logo"
                src="/companies/coinbase.png"
                alt="partner"
              />
            </FadeIn>
            <FadeIn
              direction="up"
              delay={0.8}
              distance={10}
              duration={1.5}
              hasBlur
            >
              <Image
                width={500}
                height={100}
                className="logo"
                src="/companies/zoomex.png"
                alt="partner"
              />
            </FadeIn>
            <FadeIn
              direction="up"
              delay={1}
              distance={10}
              duration={1.5}
              hasBlur
            >
              <Image
                width={500}
                height={100}
                className="logo large"
                src="/companies/axiomexchange.png"
                alt="partner"
              />
            </FadeIn>
            <FadeIn
              direction="up"
              delay={1.2}
              distance={10}
              duration={1.5}
              hasBlur
            >
              <Image
                width={500}
                height={100}
                className="logo"
                src="/companies/bloom.png"
                alt="partner"
              />
            </FadeIn>
            <FadeIn
              direction="up"
              delay={1.4}
              distance={10}
              duration={1.5}
              hasBlur
            >
              <Image
                width={500}
                height={100}
                className="logo"
                src="/companies/bybit.png"
                alt="partner"
              />
            </FadeIn>
            <FadeIn
              direction="up"
              delay={1.6}
              distance={10}
              duration={1.5}
              hasBlur
            >
              <Image
                width={500}
                height={100}
                className="logo"
                src="/companies/photon.png"
                alt="partner"
              />
            </FadeIn>
          </Marquee>
          <AnimatedStars />
          <Image
            width={1920}
            height={1080}
            className="noise"
            src="/noise.png"
            alt=""
          />
          <Image
            width={1920}
            height={1080}
            className="star"
            src="/star.svg"
            alt=""
            data-delay="0.2"
          />
          <Image
            width={1920}
            height={1080}
            className="shadow right fade-in"
            src="/shadow-right.png"
            alt=""
            data-delay="0.4"
            priority
          />
          <Image
            width={1920}
            height={1080}
            className="shadow left fade-in"
            src="/shadow-left.png"
            alt=""
            data-delay="0.6"
            priority
          />
          <Image
            width={1920}
            height={1080}
            className="shadow center"
            src="/shadow-center.png"
            alt=""
            data-delay="0.8"
            priority
          />
          <Image
            width={1920}
            height={1080}
            className="grid"
            src="/grid.svg"
            alt=""
            priority
          />
        </section>
        <section id="features">
          <div className="wrapper fixed">
            <div className="title">
              <TextReveal
                type="h2"
                variant="words"
                paragraphs={["Tap into all", "of our features"]}
                style="heading"
                align="center"
              />
            </div>
            <div className="row desktop-only laptop-hidden">
              <div className="col-md-4">
                <motion.div
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="content">
                    <h3 className="heading">Marketplace</h3>
                    <p className="paragraph">
                      Earn points by doing reps, engaging with tweets, or
                      hopping on calls — then redeem them for rewards like free
                      SOL, free whitelists, free memberships, and more.
                    </p>
                  </div>
                  <div className="graphic">
                    <div className="marketplace">
                      <ul className="items">
                        <li className="item">
                          <div className="left">
                            <h4 className="heading">27 SOL</h4>
                            <p className="text">Collect your free SOL</p>
                          </div>
                          <Button variant="main-graphic">Redeem</Button>
                        </li>
                        <li className="item">
                          <div className="left">
                            <h4 className="heading">Membership</h4>
                            <p className="text">Redeem a free membership</p>
                          </div>
                          <Button variant="main-graphic">Redeem</Button>
                        </li>
                        <li className="item">
                          <div className="left">
                            <h4 className="heading">More items</h4>
                            <p className="text">Get more items!</p>
                          </div>
                          <Button variant="primary-small">See more</Button>
                        </li>
                      </ul>
                    </div>
                    <Image
                      width={1920}
                      height={1080}
                      className="coin"
                      src="/crypto_coin.png"
                      alt=""
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="content">
                    <h3 className="heading">X, IG, Truth Tracker</h3>
                    <p className="paragraph">
                      Updated daily with 500+ of the best Influencers, Crypto
                      natives, Political figures, and relevant accounts in the
                      space.
                    </p>
                  </div>
                  <div className="graphic">
                    <div className="tracker">
                      <div className="w-full flex h-center">
                        <div className="track">
                          <HugeiconsIcon
                            icon={InternetAntenna01Icon}
                            size={34}
                            color="#000000"
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>
                      <ul className="items">
                        <li className="item" data-step={getStepForItem(0)}>
                          <div className="left">
                            <h4 className="heading">
                              {getItemContent(0).heading}
                            </h4>
                            <p className="text">{getItemContent(0).text}</p>
                          </div>
                          <Button variant="primary-small">See more</Button>
                        </li>
                        <li className="item" data-step={getStepForItem(1)}>
                          <div className="left">
                            <h4 className="heading">
                              {getItemContent(1).heading}
                            </h4>
                            <p className="text">{getItemContent(1).text}</p>
                          </div>
                          <Button variant="primary-small">See more</Button>
                        </li>
                        <li className="item" data-step={getStepForItem(2)}>
                          <div className="left">
                            <h4 className="heading">
                              {getItemContent(2).heading}
                            </h4>
                            <p className="text">{getItemContent(2).text}</p>
                          </div>
                          <Button variant="main-graphic">See more</Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="col-md-4">
                <motion.div
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="content">
                    <h3 className="heading">1 on 1 calls & messages</h3>
                    <p className="paragraph">
                      Choose a time and date, write a quick brief, and schedule
                      a private one on one call with any of our providers.
                    </p>
                    <div className="graphic">
                      <div className="calls">
                        <div className="call">
                          <div className="avatar">
                            <span className="initials">GM</span>
                          </div>
                          <div className="line"></div>
                          <div className="ring">
                            <HugeiconsIcon
                              icon={CallRinging04Icon}
                              size={34}
                              color="#000000"
                              strokeWidth={1.5}
                            />
                          </div>
                          <div className="line"></div>
                          <div className="avatar">
                            <span className="initials">ZK</span>
                          </div>
                        </div>
                        <div className="status">
                          <div className="flex dir-column">
                            <span className="time">12:43</span>
                            <span className="text">
                              Ongoing call with Daumeneth
                            </span>
                          </div>
                          <Button variant="end">End call</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="content">
                    <h3 className="heading">Support</h3>
                    <p className="paragraph">
                      24/7 around the clock support team waiting to answer your
                      questions / concerns.
                    </p>
                  </div>
                  <div className="graphic">
                    <div className="support">
                      <ul className="items">
                        <li className="item">
                          <div className="avatar">
                            <span className="initials">GM</span>
                          </div>
                          <div className="right">
                            <span className="name">John Doe</span>
                            <span className="message">
                              Hey! How do I upgrade my membership?
                            </span>
                          </div>
                        </li>
                        <li className="item you">
                          <div className="avatar">
                            <span className="initials">GM</span>
                          </div>
                          <div className="right">
                            <span className="name">John Doe</span>
                            <span className="message">
                              Hey! How do I upgrade my membership?
                            </span>
                          </div>
                        </li>
                      </ul>
                      <div className="input">
                        <span className="text">
                          Send a message to support...
                        </span>
                        <Button variant="main-graphic">Send</Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="col-md-4">
                <motion.div
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="content">
                    <h3 className="heading">Streams</h3>
                    <p className="paragraph">
                      Daily trenching , perp livestreams, dev talk, market
                      anylsis and discussion with members.
                    </p>
                  </div>
                  <div className="graphic">
                    <div className="streams">
                      <div className="stream">
                        <div className="live">
                          <HugeiconsIcon
                            icon={LiveStreaming01Icon}
                            size={34}
                            color="#000000"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div>
                          <span className="text">LetterBomb is Live!</span>
                          <span className="description">
                            Let's talk about the latest news in the crypto space
                          </span>
                        </div>
                      </div>
                      <div className="screen">
                        <div className="avatar"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="content">
                    <h3 className="heading">Elevate Custom Bots</h3>
                    <p className="paragraph">
                      Take advantage of our tools; volume tracker, rep system,
                      marketplace, twitter tracker, migration bot, insider
                      activity, and more.
                    </p>
                  </div>
                  <div className="graphic">
                    <div className="bots">
                      <ul className="items">
                        <li className="item">
                          <p className="text">Volume</p>
                          <h4 className="heading">150M+</h4>
                        </li>
                        <li className="item separate">
                          <p className="text">Twitter Engagement</p>
                          <h4 className="heading">Very High</h4>
                        </li>
                        <li className="item">
                          <p className="text">Migration Status</p>
                          <h4 className="heading">In Progress</h4>
                        </li>
                      </ul>
                      <svg
                        width="400"
                        height="238"
                        viewBox="0 0 400 238"
                        className="chart"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-129.529 184.517L-137 182.654V246H536.282V1L531.613 3.79468L523.209 25.2205L518.54 28.9468L510.136 27.0836L500.797 17.7681L495.194 18.6996L486.79 39.1939L481.187 52.2357H473.717L466.246 40.1255L461.238 39.1939H455.974L445.702 69.0038L442.901 70.8669L438.232 72.73L433.562 66.2091L426.092 27.0836L421.423 22.4259L416.754 24.289L407.416 55.962L401.813 59.6882L391.541 54.0989L385.938 49.4411H378.467L370.997 67.1407L366.328 73.6616L356.989 75.5247L349.519 84.8403L344.85 86.7034L340.181 84.8403L329.909 60.6198L321.504 58.7567L311.232 83.9087L307.497 87.635L301.894 86.7034L290.688 70.8669L282.284 69.9354L275.747 59.6882L271.078 52.2357L266.409 50.3726L262.674 53.1673L253.336 88.5665L250.534 94.1559L246.799 95.0874L242.13 85.7719L232.792 36.3992L229.99 32.673H228.123L223.454 35.4677L215.983 63.4144L212.248 69.0038L204.777 70.8669L195.439 89.4981L192.638 92.2928H187.968L182.366 88.5665L176.763 80.1825L172.094 78.3194L164.623 82.9772L159.954 98.8137L155.285 104.403L150.616 106.266L142.211 101.608L135.675 96.019L129.138 95.0874L126.336 92.2928L118.866 82.0456L114.197 79.2509L109.528 82.0456L102.057 122.103L96.4543 137.008H90.8514L82.4471 126.76L77.778 124.897L70.3074 123.966L63.7707 137.939L57.234 145.392L53.4987 146.323L46.0282 135.144L37.6238 130.487L32.0209 132.35L20.8151 174.27L16.146 176.133L8.67549 168.681L-1.59648 161.228H-6.26558L-11.8685 154.707L-20.2728 151.913L-25.8757 154.707L-33.3463 177.996L-40.8168 182.654L-45.4859 184.517L-52.0226 187.312L-62.2946 189.175L-67.8975 184.517L-74.4343 174.27L-82.8386 172.407L-90.3092 166.817L-96.8459 163.091L-100.581 164.023L-104.316 171.475L-111.787 189.175L-116.456 192.901L-122.059 191.97L-129.529 184.517Z"
                          fill="url(#paint0_linear_93_338)"
                        />
                        <path
                          d="M536.283 1C526.664 1 526.664 29.4931 517.046 29.4931C507.428 29.4931 507.829 17.5362 497.809 17.5362C487.79 17.5362 488.592 52.6437 478.573 52.6437C468.554 52.6437 470.157 38.5498 459.336 38.5498C448.516 38.5498 451.321 72.7924 440.1 72.7924C428.878 72.7924 430.481 22.3698 420.863 22.3698C411.245 22.3698 412.046 59.1564 401.626 59.1564C391.206 59.1564 392.809 49.0821 382.39 49.0821C371.97 49.0821 373.573 74.2679 363.153 74.2679C352.733 74.2679 353.935 86.4792 343.916 86.4792C333.897 86.4792 334.699 59.0038 324.68 59.0038C314.661 59.0038 315.863 87.9039 305.443 87.9039C295.023 87.9039 297.428 70.4519 286.206 70.4519C274.985 70.4519 276.989 51.0155 266.97 51.0155C256.951 51.0155 258.153 95.3833 247.733 95.3833C237.313 95.3833 238.916 32.0371 228.496 32.0371C218.077 32.0371 219.279 69.8922 209.26 69.8922C199.241 69.8922 201.245 92.534 190.023 92.534C178.802 92.534 181.607 78.7963 170.787 78.7963C159.966 78.7963 162.771 106.781 151.55 106.781C140.329 106.781 143.134 95.9939 132.313 95.9939C121.493 95.9939 123.496 79.6613 113.077 79.6613C102.657 79.6613 104.26 138.326 93.84 138.326C83.4202 138.326 85.8247 123.978 74.6033 123.978C63.382 123.978 64.985 146.416 55.3667 146.416C45.7484 146.416 46.9507 130.389 36.13 130.389C25.3094 130.389 26.9125 176.69 16.8934 176.69C6.87434 176.69 8.87817 162.749 -2.3432 162.749C-13.5646 162.749 -10.7592 152.624 -21.5798 152.624C-32.4004 152.624 -30.3967 183.661 -40.8165 183.661C-51.2364 183.661 -48.8318 190.174 -60.0531 190.174C-71.2745 190.174 -68.0684 173.027 -79.2898 173.027C-90.5111 173.027 -88.9081 163.868 -98.5264 163.868C-108.145 163.868 -108.145 193.634 -117.763 193.634C-127.381 193.634 -126.58 183.152 -137 183.152"
                          stroke="#BFFB4F"
                          strokeWidth="2"
                          className="chart-line"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_93_338"
                            x1="199.641"
                            y1="1"
                            x2="199.641"
                            y2="246"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#BFFB4F" stop-opacity="0.12" />
                            <stop
                              offset="1"
                              stop-color="#BFFB4F"
                              stop-opacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="laptop-only">
              <Carousel>
                <motion.div
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="content">
                    <h3 className="heading">Marketplace</h3>
                    <p className="paragraph">
                      Earn points by doing reps, engaging with tweets, or
                      hopping on calls — then redeem them for rewards like free
                      SOL, free whitelists, free memberships, exclusive items,
                      and more.
                    </p>
                  </div>
                  <div className="graphic">
                    <div className="marketplace">
                      <ul className="items">
                        <li className="item">
                          <div className="left">
                            <h4 className="heading">27 SOL</h4>
                            <p className="text">Collect your free SOL</p>
                          </div>
                          <Button variant="main-graphic">Redeem</Button>
                        </li>
                        <li className="item">
                          <div className="left">
                            <h4 className="heading">Membership</h4>
                            <p className="text">Redeem a free membership</p>
                          </div>
                          <Button variant="main-graphic">Redeem</Button>
                        </li>
                        <li className="item">
                          <div className="left">
                            <h4 className="heading">More items</h4>
                            <p className="text">Get more items!</p>
                          </div>
                          <Button variant="primary-small">See more</Button>
                        </li>
                      </ul>
                    </div>
                    <Image
                      width={1920}
                      height={1080}
                      className="coin"
                      src="/crypto_coin.png"
                      alt=""
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="content">
                    <h3 className="heading">X, IG, Truth Tracker</h3>
                    <p className="paragraph">
                      Updated daily with 500+ of the best Influencers, Crypto
                      natives, Political figures, and relevant accounts in the
                      space.
                    </p>
                  </div>
                  <div className="graphic">
                    <div className="tracker">
                      <div className="w-full flex h-center">
                        <div className="track">
                          <HugeiconsIcon
                            icon={InternetAntenna01Icon}
                            size={34}
                            color="#000000"
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>
                      <ul className="items">
                        <li className="item" data-step={getStepForItem(0)}>
                          <div className="left">
                            <h4 className="heading">
                              {getItemContent(0).heading}
                            </h4>
                            <p className="text">{getItemContent(0).text}</p>
                          </div>
                          <Button variant="primary-small">See more</Button>
                        </li>
                        <li className="item" data-step={getStepForItem(1)}>
                          <div className="left">
                            <h4 className="heading">
                              {getItemContent(1).heading}
                            </h4>
                            <p className="text">{getItemContent(1).text}</p>
                          </div>
                          <Button variant="primary-small">See more</Button>
                        </li>
                        <li className="item" data-step={getStepForItem(2)}>
                          <div className="left">
                            <h4 className="heading">
                              {getItemContent(2).heading}
                            </h4>
                            <p className="text">{getItemContent(2).text}</p>
                          </div>
                          <Button variant="main-graphic">See more</Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="content">
                    <h3 className="heading">1 on 1 calls & messages</h3>
                    <p className="paragraph">
                      Choose a time and date, write a quick brief, and schedule
                      a private one on one call with any of our providers.
                    </p>
                    <div className="graphic">
                      <div className="calls">
                        <div className="call">
                          <div className="avatar">
                            <span className="initials">GM</span>
                          </div>
                          <div className="line"></div>
                          <div className="ring">
                            <HugeiconsIcon
                              icon={CallRinging04Icon}
                              size={34}
                              className="icon"
                              color="#000000"
                              strokeWidth={1.5}
                            />
                          </div>
                          <div className="line"></div>
                          <div className="avatar">
                            <span className="initials">ZK</span>
                          </div>
                        </div>
                        <div className="status">
                          <div className="flex dir-column">
                            <span className="time">12:43</span>
                            <span className="text">
                              Ongoing call with Daumeneth
                            </span>
                          </div>
                          <Button variant="end">End call</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="content">
                    <h3 className="heading">Support</h3>
                    <p className="paragraph">
                      24/7 around the clock support team waiting to answer your
                      questions / concerns.
                    </p>
                  </div>
                  <div className="graphic">
                    <div className="support">
                      <ul className="items">
                        <li className="item">
                          <div className="avatar">
                            <span className="initials">GM</span>
                          </div>
                          <div className="right">
                            <span className="name">John Doe</span>
                            <span className="message">
                              Hey! How do I upgrade my membership?
                            </span>
                          </div>
                        </li>
                        <li className="item you">
                          <div className="avatar">
                            <span className="initials">GM</span>
                          </div>
                          <div className="right">
                            <span className="name">John Doe</span>
                            <span className="message">
                              Hey! How do I upgrade my membership?
                            </span>
                          </div>
                        </li>
                      </ul>
                      <div className="input">
                        <span className="text">
                          Send a message to support...
                        </span>
                        <Button variant="main-graphic">Send</Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="content">
                    <h3 className="heading">Streams</h3>
                    <p className="paragraph">
                      Daily trenching , perp livestreams, dev talk, market
                      anylsis and discussion with members.
                    </p>
                  </div>
                  <div className="graphic">
                    <div className="streams">
                      <div className="stream">
                        <div className="live">
                          <HugeiconsIcon
                            icon={LiveStreaming01Icon}
                            size={34}
                            color="#000000"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div>
                          <span className="text">You're live!</span>
                          <span className="description">
                            Let's talk about Tokenomics
                          </span>
                        </div>
                      </div>
                      <div className="screen">
                        <div className="avatar">
                          <span className="initials">GM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="content">
                    <h3 className="heading">Elevate Custom Bots</h3>
                    <p className="paragraph">
                      Take advantage of our tools; volume tracker, rep system,
                      marketplace, twitter tracker, migration bot, insider
                      activity, and more.
                    </p>
                  </div>
                  <div className="graphic">
                    <div className="bots">
                      <ul className="items">
                        <li className="item">
                          <p className="text">Volume</p>
                          <h4 className="heading">150M+</h4>
                        </li>
                        <li className="item separate">
                          <p className="text">Twitter Engagement</p>
                          <h4 className="heading">Very High</h4>
                        </li>
                        <li className="item">
                          <p className="text">Migration Status</p>
                          <h4 className="heading">In Progress</h4>
                        </li>
                      </ul>
                      <svg
                        width="400"
                        height="238"
                        viewBox="0 0 400 238"
                        className="chart"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-129.529 184.517L-137 182.654V246H536.282V1L531.613 3.79468L523.209 25.2205L518.54 28.9468L510.136 27.0836L500.797 17.7681L495.194 18.6996L486.79 39.1939L481.187 52.2357H473.717L466.246 40.1255L461.238 39.1939H455.974L445.702 69.0038L442.901 70.8669L438.232 72.73L433.562 66.2091L426.092 27.0836L421.423 22.4259L416.754 24.289L407.416 55.962L401.813 59.6882L391.541 54.0989L385.938 49.4411H378.467L370.997 67.1407L366.328 73.6616L356.989 75.5247L349.519 84.8403L344.85 86.7034L340.181 84.8403L329.909 60.6198L321.504 58.7567L311.232 83.9087L307.497 87.635L301.894 86.7034L290.688 70.8669L282.284 69.9354L275.747 59.6882L271.078 52.2357L266.409 50.3726L262.674 53.1673L253.336 88.5665L250.534 94.1559L246.799 95.0874L242.13 85.7719L232.792 36.3992L229.99 32.673H228.123L223.454 35.4677L215.983 63.4144L212.248 69.0038L204.777 70.8669L195.439 89.4981L192.638 92.2928H187.968L182.366 88.5665L176.763 80.1825L172.094 78.3194L164.623 82.9772L159.954 98.8137L155.285 104.403L150.616 106.266L142.211 101.608L135.675 96.019L129.138 95.0874L126.336 92.2928L118.866 82.0456L114.197 79.2509L109.528 82.0456L102.057 122.103L96.4543 137.008H90.8514L82.4471 126.76L77.778 124.897L70.3074 123.966L63.7707 137.939L57.234 145.392L53.4987 146.323L46.0282 135.144L37.6238 130.487L32.0209 132.35L20.8151 174.27L16.146 176.133L8.67549 168.681L-1.59648 161.228H-6.26558L-11.8685 154.707L-20.2728 151.913L-25.8757 154.707L-33.3463 177.996L-40.8168 182.654L-45.4859 184.517L-52.0226 187.312L-62.2946 189.175L-67.8975 184.517L-74.4343 174.27L-82.8386 172.407L-90.3092 166.817L-96.8459 163.091L-100.581 164.023L-104.316 171.475L-111.787 189.175L-116.456 192.901L-122.059 191.97L-129.529 184.517Z"
                          fill="url(#paint0_linear_93_338)"
                        />
                        <path
                          d="M536.283 1C526.664 1 526.664 29.4931 517.046 29.4931C507.428 29.4931 507.829 17.5362 497.809 17.5362C487.79 17.5362 488.592 52.6437 478.573 52.6437C468.554 52.6437 470.157 38.5498 459.336 38.5498C448.516 38.5498 451.321 72.7924 440.1 72.7924C428.878 72.7924 430.481 22.3698 420.863 22.3698C411.245 22.3698 412.046 59.1564 401.626 59.1564C391.206 59.1564 392.809 49.0821 382.39 49.0821C371.97 49.0821 373.573 74.2679 363.153 74.2679C352.733 74.2679 353.935 86.4792 343.916 86.4792C333.897 86.4792 334.699 59.0038 324.68 59.0038C314.661 59.0038 315.863 87.9039 305.443 87.9039C295.023 87.9039 297.428 70.4519 286.206 70.4519C274.985 70.4519 276.989 51.0155 266.97 51.0155C256.951 51.0155 258.153 95.3833 247.733 95.3833C237.313 95.3833 238.916 32.0371 228.496 32.0371C218.077 32.0371 219.279 69.8922 209.26 69.8922C199.241 69.8922 201.245 92.534 190.023 92.534C178.802 92.534 181.607 78.7963 170.787 78.7963C159.966 78.7963 162.771 106.781 151.55 106.781C140.329 106.781 143.134 95.9939 132.313 95.9939C121.493 95.9939 123.496 79.6613 113.077 79.6613C102.657 79.6613 104.26 138.326 93.84 138.326C83.4202 138.326 85.8247 123.978 74.6033 123.978C63.382 123.978 64.985 146.416 55.3667 146.416C45.7484 146.416 46.9507 130.389 36.13 130.389C25.3094 130.389 26.9125 176.69 16.8934 176.69C6.87434 176.69 8.87817 162.749 -2.3432 162.749C-13.5646 162.749 -10.7592 152.624 -21.5798 152.624C-32.4004 152.624 -30.3967 183.661 -40.8165 183.661C-51.2364 183.661 -48.8318 190.174 -60.0531 190.174C-71.2745 190.174 -68.0684 173.027 -79.2898 173.027C-90.5111 173.027 -88.9081 163.868 -98.5264 163.868C-108.145 163.868 -108.145 193.634 -117.763 193.634C-127.381 193.634 -126.58 183.152 -137 183.152"
                          stroke="#BFFB4F"
                          strokeWidth="2"
                          className="chart-line"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_93_338"
                            x1="199.641"
                            y1="1"
                            x2="199.641"
                            y2="246"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#BFFB4F" stop-opacity="0.12" />
                            <stop
                              offset="1"
                              stop-color="#BFFB4F"
                              stop-opacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Carousel>
            </div>
            <div className="mb-only">
              <Carousel>
                <motion.div
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="content">
                    <h3 className="heading">Marketplace</h3>
                    <p className="paragraph">
                      Earn points by doing reps, engaging with tweets, or
                      hopping on calls — then redeem them for rewards like free
                      SOL, free whitelists, free memberships, exclusive items,
                      and more.
                    </p>
                  </div>
                  <div className="graphic">
                    <div className="marketplace">
                      <ul className="items">
                        <li className="item">
                          <div className="left">
                            <h4 className="heading">27 SOL</h4>
                            <p className="text">Collect your free SOL</p>
                          </div>
                          <Button variant="main-graphic">Redeem</Button>
                        </li>
                        <li className="item">
                          <div className="left">
                            <h4 className="heading">Membership</h4>
                            <p className="text">Redeem a free membership</p>
                          </div>
                          <Button variant="main-graphic">Redeem</Button>
                        </li>
                        <li className="item">
                          <div className="left">
                            <h4 className="heading">More items</h4>
                            <p className="text">Get more items!</p>
                          </div>
                          <Button variant="primary-small">See more</Button>
                        </li>
                      </ul>
                    </div>
                    <Image
                      width={1920}
                      height={1080}
                      className="coin"
                      src="/crypto_coin.png"
                      alt=""
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="content">
                    <h3 className="heading">X, IG, Truth Tracker</h3>
                    <p className="paragraph">
                      Updated daily with 500+ of the best Influencers, Crypto
                      natives, Political figures, and relevant accounts in the
                      space.
                    </p>
                  </div>
                  <div className="graphic">
                    <div className="tracker">
                      <div className="w-full flex h-center">
                        <div className="track">
                          <HugeiconsIcon
                            icon={InternetAntenna01Icon}
                            size={34}
                            color="#000000"
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>
                      <ul className="items">
                        <li className="item" data-step={getStepForItem(0)}>
                          <div className="left">
                            <h4 className="heading">
                              {getItemContent(0).heading}
                            </h4>
                            <p className="text">{getItemContent(0).text}</p>
                          </div>
                          <Button variant="primary-small">See more</Button>
                        </li>
                        <li className="item" data-step={getStepForItem(1)}>
                          <div className="left">
                            <h4 className="heading">
                              {getItemContent(1).heading}
                            </h4>
                            <p className="text">{getItemContent(1).text}</p>
                          </div>
                          <Button variant="primary-small">See more</Button>
                        </li>
                        <li className="item" data-step={getStepForItem(2)}>
                          <div className="left">
                            <h4 className="heading">
                              {getItemContent(2).heading}
                            </h4>
                            <p className="text">{getItemContent(2).text}</p>
                          </div>
                          <Button variant="main-graphic">See more</Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="content">
                    <h3 className="heading">1 on 1 calls & messages</h3>
                    <p className="paragraph">
                      Choose a time and date, write a quick brief, and schedule
                      a private one on one call with any of our providers.
                    </p>
                    <div className="graphic">
                      <div className="calls">
                        <div className="call">
                          <div className="avatar">
                            <span className="initials">GM</span>
                          </div>
                          <div className="line"></div>
                          <div className="ring">
                            <HugeiconsIcon
                              icon={CallRinging04Icon}
                              size={34}
                              className="icon"
                              color="#000000"
                              strokeWidth={1.5}
                            />
                          </div>
                          <div className="line"></div>
                          <div className="avatar">
                            <span className="initials">ZK</span>
                          </div>
                        </div>
                        <div className="status">
                          <div className="flex dir-column">
                            <span className="time">12:43</span>
                            <span className="text">
                              Ongoing call with Daumeneth
                            </span>
                          </div>
                          <Button variant="end">End call</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="content">
                    <h3 className="heading">Support</h3>
                    <p className="paragraph">
                      24/7 around the clock support team waiting to answer your
                      questions / concerns.
                    </p>
                  </div>
                  <div className="graphic">
                    <div className="support">
                      <ul className="items">
                        <li className="item">
                          <div className="avatar">
                            <span className="initials">GM</span>
                          </div>
                          <div className="right">
                            <span className="name">John Doe</span>
                            <span className="message">
                              Hey! How do I upgrade my membership?
                            </span>
                          </div>
                        </li>
                        <li className="item you">
                          <div className="avatar">
                            <span className="initials">GM</span>
                          </div>
                          <div className="right">
                            <span className="name">John Doe</span>
                            <span className="message">
                              Hey! How do I upgrade my membership?
                            </span>
                          </div>
                        </li>
                      </ul>
                      <div className="input">
                        <span className="text">
                          Send a message to support...
                        </span>
                        <Button variant="main-graphic">Send</Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="content">
                    <h3 className="heading">Streams</h3>
                    <p className="paragraph">
                      Daily trenching , perp livestreams, dev talk, market
                      anylsis and discussion with members.
                    </p>
                  </div>
                  <div className="graphic">
                    <div className="streams">
                      <div className="stream">
                        <div className="live">
                          <HugeiconsIcon
                            icon={LiveStreaming01Icon}
                            size={34}
                            color="#000000"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div>
                          <span className="text">You're live!</span>
                          <span className="description">
                            Let's talk about Tokenomics
                          </span>
                        </div>
                      </div>
                      <div className="screen">
                        <div className="avatar">
                          <span className="initials">GM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="content">
                    <h3 className="heading">Elevate Custom Bots</h3>
                    <p className="paragraph">
                      Take advantage of our tools; volume tracker, rep system,
                      marketplace, twitter tracker, migration bot, insider
                      activity, and more.
                    </p>
                  </div>
                  <div className="graphic">
                    <div className="bots">
                      <ul className="items">
                        <li className="item">
                          <p className="text">Volume</p>
                          <h4 className="heading">150M+</h4>
                        </li>
                        <li className="item separate">
                          <p className="text">Twitter Engagement</p>
                          <h4 className="heading">Very High</h4>
                        </li>
                        <li className="item">
                          <p className="text">Migration Status</p>
                          <h4 className="heading">In Progress</h4>
                        </li>
                      </ul>
                      <svg
                        width="400"
                        height="238"
                        viewBox="0 0 400 238"
                        className="chart"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-129.529 184.517L-137 182.654V246H536.282V1L531.613 3.79468L523.209 25.2205L518.54 28.9468L510.136 27.0836L500.797 17.7681L495.194 18.6996L486.79 39.1939L481.187 52.2357H473.717L466.246 40.1255L461.238 39.1939H455.974L445.702 69.0038L442.901 70.8669L438.232 72.73L433.562 66.2091L426.092 27.0836L421.423 22.4259L416.754 24.289L407.416 55.962L401.813 59.6882L391.541 54.0989L385.938 49.4411H378.467L370.997 67.1407L366.328 73.6616L356.989 75.5247L349.519 84.8403L344.85 86.7034L340.181 84.8403L329.909 60.6198L321.504 58.7567L311.232 83.9087L307.497 87.635L301.894 86.7034L290.688 70.8669L282.284 69.9354L275.747 59.6882L271.078 52.2357L266.409 50.3726L262.674 53.1673L253.336 88.5665L250.534 94.1559L246.799 95.0874L242.13 85.7719L232.792 36.3992L229.99 32.673H228.123L223.454 35.4677L215.983 63.4144L212.248 69.0038L204.777 70.8669L195.439 89.4981L192.638 92.2928H187.968L182.366 88.5665L176.763 80.1825L172.094 78.3194L164.623 82.9772L159.954 98.8137L155.285 104.403L150.616 106.266L142.211 101.608L135.675 96.019L129.138 95.0874L126.336 92.2928L118.866 82.0456L114.197 79.2509L109.528 82.0456L102.057 122.103L96.4543 137.008H90.8514L82.4471 126.76L77.778 124.897L70.3074 123.966L63.7707 137.939L57.234 145.392L53.4987 146.323L46.0282 135.144L37.6238 130.487L32.0209 132.35L20.8151 174.27L16.146 176.133L8.67549 168.681L-1.59648 161.228H-6.26558L-11.8685 154.707L-20.2728 151.913L-25.8757 154.707L-33.3463 177.996L-40.8168 182.654L-45.4859 184.517L-52.0226 187.312L-62.2946 189.175L-67.8975 184.517L-74.4343 174.27L-82.8386 172.407L-90.3092 166.817L-96.8459 163.091L-100.581 164.023L-104.316 171.475L-111.787 189.175L-116.456 192.901L-122.059 191.97L-129.529 184.517Z"
                          fill="url(#paint0_linear_93_338)"
                        />
                        <path
                          d="M536.283 1C526.664 1 526.664 29.4931 517.046 29.4931C507.428 29.4931 507.829 17.5362 497.809 17.5362C487.79 17.5362 488.592 52.6437 478.573 52.6437C468.554 52.6437 470.157 38.5498 459.336 38.5498C448.516 38.5498 451.321 72.7924 440.1 72.7924C428.878 72.7924 430.481 22.3698 420.863 22.3698C411.245 22.3698 412.046 59.1564 401.626 59.1564C391.206 59.1564 392.809 49.0821 382.39 49.0821C371.97 49.0821 373.573 74.2679 363.153 74.2679C352.733 74.2679 353.935 86.4792 343.916 86.4792C333.897 86.4792 334.699 59.0038 324.68 59.0038C314.661 59.0038 315.863 87.9039 305.443 87.9039C295.023 87.9039 297.428 70.4519 286.206 70.4519C274.985 70.4519 276.989 51.0155 266.97 51.0155C256.951 51.0155 258.153 95.3833 247.733 95.3833C237.313 95.3833 238.916 32.0371 228.496 32.0371C218.077 32.0371 219.279 69.8922 209.26 69.8922C199.241 69.8922 201.245 92.534 190.023 92.534C178.802 92.534 181.607 78.7963 170.787 78.7963C159.966 78.7963 162.771 106.781 151.55 106.781C140.329 106.781 143.134 95.9939 132.313 95.9939C121.493 95.9939 123.496 79.6613 113.077 79.6613C102.657 79.6613 104.26 138.326 93.84 138.326C83.4202 138.326 85.8247 123.978 74.6033 123.978C63.382 123.978 64.985 146.416 55.3667 146.416C45.7484 146.416 46.9507 130.389 36.13 130.389C25.3094 130.389 26.9125 176.69 16.8934 176.69C6.87434 176.69 8.87817 162.749 -2.3432 162.749C-13.5646 162.749 -10.7592 152.624 -21.5798 152.624C-32.4004 152.624 -30.3967 183.661 -40.8165 183.661C-51.2364 183.661 -48.8318 190.174 -60.0531 190.174C-71.2745 190.174 -68.0684 173.027 -79.2898 173.027C-90.5111 173.027 -88.9081 163.868 -98.5264 163.868C-108.145 163.868 -108.145 193.634 -117.763 193.634C-127.381 193.634 -126.58 183.152 -137 183.152"
                          stroke="#BFFB4F"
                          strokeWidth="2"
                          className="chart-line"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_93_338"
                            x1="199.641"
                            y1="1"
                            x2="199.641"
                            y2="246"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#BFFB4F" stop-opacity="0.12" />
                            <stop
                              offset="1"
                              stop-color="#BFFB4F"
                              stop-opacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Carousel>
            </div>
            <div className="footer">
              <p className="text">
                Join a private network of top-tier traders, founders, and
                analysts shaping the future of crypto. Get exclusive insights,
                real-time strategies you wont find on any social media.
              </p>
              <div className="w-full flex h-center">
                <Button variant="main">Join the Community</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="manifesto">
          <div className="wrapper fixed">
            <div className="content">
              <div className="title">
                <TextReveal
                  type="h2"
                  variant="words"
                  paragraphs={["About Elevate."]}
                  style="heading"
                />
                <GradientReveal
                  paragraph={`When we were making Elevate we wanted to make something that not only has never been done before. Not like these other paid groups.

After 6+ months of work, we have perfectly selected the best people to help you Elevate your game.

After getting the best people and covering all areas from Trenching, Perp trading, NFT's, Business, Devving and more. This is the place to build, connect and get your serious advantage in crypto.

There has truly never been something like this and we seriously do think we have made something people will appreciate and find value in. Something people will want to be a part of month after month.

That's how Elevate was born.
                  `}
                  style="paragraph"
                  align="left"
                />
              </div>
              <FadeIn duration={1.2} hasBlur>
                <Image
                  width={700}
                  height={500}
                  className="signatures"
                  src="/signatures.svg"
                  alt=""
                />
              </FadeIn>
            </div>
          </div>
        </section>
        <section id="providers">
          <div className="wrapper fixed">
            <div className="title">
              <TextReveal
                type="h2"
                variant="words"
                paragraphs={["Meet some", "of our providers"]}
                style="heading"
              />
              <p className="text">
                Connect directly with vetted crypto experts who share insights,
                answer questions, and guide you through the ever-changing
                market.
              </p>
              <div className="w-full flex h-end">
                <Button variant="main">Join the Community</Button>
              </div>
            </div>
            <div className="providers-container">
              <div className="row">
                <div className="col-md-3 col-tb-6 col-lp-4">
                  <FadeIn delay={0} direction="up" distance={30} duration={0.8}>
                    <div className="card flex gap-sm">
                      <div
                        className="avatar"
                        style={{
                          backgroundImage: "url('/providers/cupsey.jpg')",
                          backgroundSize: "cover",
                        }}
                      ></div>
                      <div className="flex dir-column">
                        <div className="flex v-center gap-sm">
                          <h4 className="name">Cupsey</h4>
                          <div className="icons">
                            <Link href="https://x.com/Cupseyy" target="_blank">
                              <HugeiconsIcon
                                icon={NewTwitterIcon}
                                size={18}
                                color="#ffffff"
                                strokeWidth={1.5}
                              />
                            </Link>
                            <Image
                              width={50}
                              height={50}
                              className="icon"
                              src="/check.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <p className="description">
                          A legendary memecoin trader who made $1M in a month
                          with inhuman trading pace. Pumpfun honored him by
                          naming their trading pill after him.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
                <div className="col-md-3 col-tb-6 col-lp-4">
                  <FadeIn
                    delay={0.1}
                    direction="up"
                    distance={30}
                    duration={0.8}
                  >
                    <div className="card flex gap-sm">
                      <div
                        className="avatar"
                        style={{
                          backgroundImage: "url('/providers/marcell.jpg')",
                          backgroundSize: "cover",
                        }}
                      ></div>
                      <div className="flex dir-column">
                        <div className="flex v-center gap-sm">
                          <h4 className="name">Marcell</h4>
                          <div className="icons">
                            <Link
                              href="https://x.com/MarcellxMarcell"
                              target="_blank"
                            >
                              <HugeiconsIcon
                                icon={NewTwitterIcon}
                                size={18}
                                color="#ffffff"
                                strokeWidth={1.5}
                              />
                            </Link>
                            <Image
                              width={50}
                              height={50}
                              className="icon"
                              src="/check.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <p className="description">
                          Respected crypto trader known for successful calls on
                          $USELESS, $PEPE, $PNUT, $GOAT, and consistent market
                          analysis regarded as some of the best.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
                <div className="col-md-3 col-tb-6 col-lp-4">
                  <FadeIn
                    delay={0.2}
                    direction="up"
                    distance={30}
                    duration={0.8}
                  >
                    <div className="card flex gap-sm">
                      <div
                        className="avatar"
                        style={{
                          backgroundImage: "url('/providers/daumen.jpg')",
                          backgroundSize: "cover",
                        }}
                      ></div>
                      <div className="flex dir-column">
                        <div className="flex v-center gap-sm">
                          <h4 className="name">Daumen</h4>
                          <div className="icons">
                            <Link
                              href="https://x.com/daumenxyz"
                              target="_blank"
                            >
                              <HugeiconsIcon
                                icon={NewTwitterIcon}
                                size={18}
                                color="#ffffff"
                                strokeWidth={1.5}
                              />
                            </Link>
                            <Image
                              width={50}
                              height={50}
                              className="icon"
                              src="/check.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <p className="description">
                          Technical analyst with early belief in Pudgy Penguins,
                          known for spotting momentum shifts in major coins and
                          memecoins like $KORI, $michi.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
                <div className="col-md-3 col-tb-6 col-lp-4">
                  <FadeIn
                    delay={0.3}
                    direction="up"
                    distance={30}
                    duration={0.8}
                  >
                    <div className="card flex gap-sm">
                      <div
                        className="avatar"
                        style={{
                          backgroundImage: "url('/providers/letterbomb.jpg')",
                          backgroundSize: "cover",
                        }}
                      ></div>
                      <div className="flex dir-column">
                        <div className="flex v-center gap-sm">
                          <h4 className="name">Letterbomb</h4>
                          <div className="icons">
                            <Link href="https://x.com/ihateoop" target="_blank">
                              <HugeiconsIcon
                                icon={NewTwitterIcon}
                                size={18}
                                color="#ffffff"
                                strokeWidth={1.5}
                              />
                            </Link>
                            <Image
                              width={50}
                              height={50}
                              className="icon"
                              src="/check.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <p className="description">
                          Rising "Korean Quant" favorite with emotional
                          disassociation to trades and magnetic timeline
                          presence that connects effortlessly with traders.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
                <div className="col-md-3 col-tb-6 col-lp-4">
                  <FadeIn
                    delay={0.8}
                    direction="up"
                    distance={30}
                    duration={0.8}
                  >
                    <div className="card flex gap-sm">
                      <div
                        className="avatar"
                        style={{
                          backgroundImage: "url('/providers/joji.jpg')",
                          backgroundSize: "cover",
                        }}
                      ></div>
                      <div className="flex dir-column">
                        <div className="flex v-center gap-sm">
                          <h4 className="name">Joji</h4>
                          <div className="icons">
                            <Link
                              href="https://x.com/metaversejoji"
                              target="_blank"
                            >
                              <HugeiconsIcon
                                icon={NewTwitterIcon}
                                size={18}
                                color="#ffffff"
                                strokeWidth={1.5}
                              />
                            </Link>
                            <Image
                              width={50}
                              height={50}
                              className="icon"
                              src="/check.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <p className="description">
                          Veteran memecoin trader with 260k+ followers, earned
                          trust with precise market reads and early calls on
                          Solana and Base projects.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
                <div className="col-md-3 col-tb-6 col-lp-4">
                  <FadeIn
                    delay={1.0}
                    direction="up"
                    distance={30}
                    duration={0.8}
                  >
                    <div className="card flex gap-sm">
                      <div
                        className="avatar"
                        style={{
                          backgroundImage: "url('/providers/shmoo.png')",
                          backgroundSize: "cover",
                        }}
                      ></div>
                      <div className="flex dir-column">
                        <div className="flex v-center gap-sm">
                          <h4 className="name">Shmoo</h4>
                          <div className="icons">
                            <Link href="https://x.com/ShmooNFT" target="_blank">
                              <HugeiconsIcon
                                icon={NewTwitterIcon}
                                size={18}
                                color="#ffffff"
                                strokeWidth={1.5}
                              />
                            </Link>
                            <Image
                              width={50}
                              height={50}
                              className="icon"
                              src="/check.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <p className="description">
                          Leader of 500k+ members with sharp chart analysis and
                          early calls like $Zeus, $Hood, $Wolf and $Brett.
                          Focuses on education.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
                <div className="col-md-3 col-tb-6 col-lp-4">
                  <FadeIn
                    delay={0.8}
                    direction="up"
                    distance={30}
                    duration={0.8}
                  >
                    <div className="card flex gap-sm">
                      <div
                        className="avatar"
                        style={{
                          backgroundImage: "url('/providers/srpeters.jpg')",
                          backgroundSize: "cover",
                        }}
                      ></div>
                      <div className="flex dir-column">
                        <div className="flex v-center gap-sm">
                          <h4 className="name">Sr Peters</h4>
                          <div className="icons">
                            <Link
                              href="https://x.com/SrPetersETH"
                              target="_blank"
                            >
                              <HugeiconsIcon
                                icon={NewTwitterIcon}
                                size={18}
                                color="#ffffff"
                                strokeWidth={1.5}
                              />
                            </Link>
                            <Image
                              width={50}
                              height={50}
                              className="icon"
                              src="/check.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <p className="description">
                          OG with 4,500+ subscribers beloved for generosity,
                          free-mint NFTs, spontaneous giveaways, and
                          community-first approach.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
                <div className="col-md-3 col-tb-6 col-lp-4">
                  <FadeIn delay={0} direction="up" distance={30} duration={0.8}>
                    <div className="card flex gap-sm">
                      <div
                        className="avatar"
                        style={{
                          backgroundImage: "url('/providers/spider.jpg')",
                          backgroundSize: "cover",
                        }}
                      ></div>
                      <div className="flex dir-column">
                        <div className="flex v-center gap-sm">
                          <h4 className="name">Spider</h4>
                          <div className="icons">
                            <Link
                              href="https://x.com/SpiderCrypto0x"
                              target="_blank"
                            >
                              <HugeiconsIcon
                                icon={NewTwitterIcon}
                                size={18}
                                color="#ffffff"
                                strokeWidth={1.5}
                              />
                            </Link>
                            <Image
                              width={50}
                              height={50}
                              className="icon"
                              src="/check.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <p className="description">
                          Precision trader with 150K+ followers who targets
                          risk-meets-precision opportunities, posts detailed
                          trade plans like a seasoned sniper.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
                <div className="col-md-3 col-tb-6 col-lp-4">
                  <FadeIn
                    delay={1.1}
                    direction="up"
                    distance={30}
                    duration={0.8}
                  >
                    <div className="card flex gap-sm">
                      <div
                        className="avatar"
                        style={{
                          backgroundImage: "url('/providers/lyxe.jpg')",
                          backgroundSize: "cover",
                        }}
                      ></div>
                      <div className="flex dir-column">
                        <div className="flex v-center gap-sm">
                          <h4 className="name">Lyxe</h4>
                          <div className="icons">
                            <Link
                              href="https://x.com/cryptolyxe"
                              target="_blank"
                            >
                              <HugeiconsIcon
                                icon={NewTwitterIcon}
                                size={18}
                                color="#ffffff"
                                strokeWidth={1.5}
                              />
                            </Link>
                            <Image
                              width={50}
                              height={50}
                              className="icon"
                              src="/check.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <p className="description">
                          Masked trader with viral Instagram Reels showing messy
                          memecoin truth, 100K+ followers trust his no-nonsense
                          crypto approach.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
                <div className="col-md-3 col-tb-6 col-lp-4">
                  <FadeIn
                    delay={0.2}
                    direction="up"
                    distance={30}
                    duration={0.8}
                  >
                    <div className="card flex gap-sm">
                      <div
                        className="avatar"
                        style={{
                          backgroundImage: "url('/providers/patty.jpg')",
                          backgroundSize: "cover",
                        }}
                      ></div>
                      <div className="flex dir-column">
                        <div className="flex v-center gap-sm">
                          <h4 className="name">Patty</h4>
                          <div className="icons">
                            <Link href="https://x.com/patty_fi" target="_blank">
                              <HugeiconsIcon
                                icon={NewTwitterIcon}
                                size={18}
                                color="#ffffff"
                                strokeWidth={1.5}
                              />
                            </Link>
                            <Image
                              width={50}
                              height={50}
                              className="icon"
                              src="/check.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <p className="description">
                          Bold influential voice in memecoin space known for
                          sharp commentary, high-risk insights, and notable
                          calls on DeGods projects.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
                <div className="col-md-3 col-tb-6 col-lp-4">
                  <FadeIn
                    delay={0.6}
                    direction="up"
                    distance={30}
                    duration={0.8}
                  >
                    <div className="card flex gap-sm">
                      <div
                        className="avatar"
                        style={{
                          backgroundImage: "url('/providers/minister.jpg')",
                          backgroundSize: "cover",
                        }}
                      ></div>
                      <div className="flex dir-column">
                        <div className="flex v-center gap-sm">
                          <h4 className="name">Minister</h4>
                          <div className="icons">
                            <Link
                              href="https://x.com/MinisterOfNFTs"
                              target="_blank"
                            >
                              <HugeiconsIcon
                                icon={NewTwitterIcon}
                                size={18}
                                color="#ffffff"
                                strokeWidth={1.5}
                              />
                            </Link>
                            <Image
                              width={50}
                              height={50}
                              className="icon"
                              src="/check.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <p className="description">
                          Secret co-founder of mfers with 165K followers,
                          advocate for Pudgy Penguins, Azuki, and Honeyland,
                          champions "Make NFTs Great Again."
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
                <div className="col-md-3 col-tb-6 col-lp-4">
                  <FadeIn
                    delay={0.7}
                    direction="up"
                    distance={30}
                    duration={0.8}
                  >
                    <div className="card flex gap-sm">
                      <div
                        className="avatar"
                        style={{
                          backgroundImage: "url('/providers/loopier.jpg')",
                          backgroundSize: "cover",
                        }}
                      ></div>
                      <div className="flex dir-column">
                        <div className="flex v-center gap-sm">
                          <h4 className="name">Loopier</h4>
                          <div className="icons">
                            <Link href="https://x.com/Loopierr" target="_blank">
                              <HugeiconsIcon
                                icon={NewTwitterIcon}
                                size={18}
                                color="#ffffff"
                                strokeWidth={1.5}
                              />
                            </Link>
                            <Image
                              width={50}
                              height={50}
                              className="icon"
                              src="/check.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <p className="description">
                          Street-smart authentic voice in Solana ecosystem,
                          known for heavy longs on sub-100M launchpads with
                          no-hype approach.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
              {!showAllProviders && (
                <div className="providers-overlay">
                  <div className="gradient-overlay"></div>
                  <div className="see-all-btn">
                    <Button
                      variant="secondary"
                      onClick={() => setShowAllProviders(true)}
                    >
                      See all providers
                    </Button>
                  </div>
                </div>
              )}
              {showAllProviders && (
                <div className="additional-providers">
                  <div className="row">
                    <div className="col-md-3 col-tb-6 col-lp-4">
                      <FadeIn
                        delay={0.4}
                        direction="up"
                        distance={30}
                        duration={0.8}
                      >
                        <div className="card flex gap-sm">
                          <div
                            className="avatar"
                            style={{
                              backgroundImage: "url('/providers/risk.jpg')",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <div className="flex dir-column">
                            <div className="flex v-center gap-sm">
                              <h4 className="name">Risk</h4>
                              <div className="icons">
                                <Link
                                  href="https://x.com/risk100x"
                                  target="_blank"
                                >
                                  <HugeiconsIcon
                                    icon={NewTwitterIcon}
                                    size={18}
                                    color="#ffffff"
                                    strokeWidth={1.5}
                                  />
                                </Link>
                                <Image
                                  width={50}
                                  height={50}
                                  className="icon"
                                  src="/check.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="description">
                              Rising Solana memecoin star known for spotting
                              early narratives and holding with conviction.
                              Strategic calls like $KORI earned him praise.
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </div>
                    <div className="col-md-3 col-tb-6 col-lp-4">
                      <FadeIn
                        delay={0.9}
                        direction="up"
                        distance={30}
                        duration={0.8}
                      >
                        <div className="card flex gap-sm">
                          <div
                            className="avatar"
                            style={{
                              backgroundImage:
                                "url('/providers/missoralways.jpg')",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <div className="flex dir-column">
                            <div className="flex v-center gap-sm">
                              <h4 className="name">Missoralways</h4>
                              <div className="icons">
                                <Link
                                  href="https://x.com/missoralways"
                                  target="_blank"
                                >
                                  <HugeiconsIcon
                                    icon={NewTwitterIcon}
                                    size={18}
                                    color="#ffffff"
                                    strokeWidth={1.5}
                                  />
                                </Link>
                                <Image
                                  width={50}
                                  height={50}
                                  className="icon"
                                  src="/check.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="description">
                              Savvy trader who turned 10 ETH into $2 million
                              backing $KTA early, now champions $MEMECOIN with
                              strategic positioning.
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </div>
                    <div className="col-md-3 col-tb-6 col-lp-4">
                      <FadeIn
                        delay={0.4}
                        direction="up"
                        distance={30}
                        duration={0.8}
                      >
                        <div className="card flex gap-sm">
                          <div
                            className="avatar"
                            style={{
                              backgroundImage: "url('/providers/kickz.jpg')",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <div className="flex dir-column">
                            <div className="flex v-center gap-sm">
                              <h4 className="name">Kickz</h4>
                              <div className="icons">
                                <Link
                                  href="https://x.com/kickzeth"
                                  target="_blank"
                                >
                                  <HugeiconsIcon
                                    icon={NewTwitterIcon}
                                    size={18}
                                    color="#ffffff"
                                    strokeWidth={1.5}
                                  />
                                </Link>
                                <Image
                                  width={50}
                                  height={50}
                                  className="icon"
                                  src="/check.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="description">
                              50K+ followers, $150M+ raised, drove early wins
                              like AstroVerse and Monsters.fun, pairs on-chain
                              sleuthing with CT sentiment.
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </div>
                    <div className="col-md-3 col-tb-6 col-lp-4">
                      <FadeIn
                        delay={0.5}
                        direction="up"
                        distance={30}
                        duration={0.8}
                      >
                        <div className="card flex gap-sm">
                          <div
                            className="avatar"
                            style={{
                              backgroundImage: "url('/providers/frags.jpg')",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <div className="flex dir-column">
                            <div className="flex v-center gap-sm">
                              <h4 className="name">Frags</h4>
                              <div className="icons">
                                <Link
                                  href="https://x.com/cryptofrags"
                                  target="_blank"
                                >
                                  <HugeiconsIcon
                                    icon={NewTwitterIcon}
                                    size={18}
                                    color="#ffffff"
                                    strokeWidth={1.5}
                                  />
                                </Link>
                                <Image
                                  width={50}
                                  height={50}
                                  className="icon"
                                  src="/check.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="description">
                              "Former Believer, Turned Trader" who reads
                              memecoin narratives like orderbooks, vocal about
                              $CRCL early and cultural catalyst trading.
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </div>
                    <div className="col-md-3 col-tb-6 col-lp-4">
                      <FadeIn
                        delay={0.6}
                        direction="up"
                        distance={30}
                        duration={0.8}
                      >
                        <div className="card flex gap-sm">
                          <div
                            className="avatar"
                            style={{
                              backgroundImage: "url('/providers/lama.jpg')",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <div className="flex dir-column">
                            <div className="flex v-center gap-sm">
                              <h4 className="name">Lama</h4>
                              <div className="icons">
                                <Link
                                  href="https://x.com/Lamaxbt"
                                  target="_blank"
                                >
                                  <HugeiconsIcon
                                    icon={NewTwitterIcon}
                                    size={18}
                                    color="#ffffff"
                                    strokeWidth={1.5}
                                  />
                                </Link>
                                <Image
                                  width={50}
                                  height={50}
                                  className="icon"
                                  src="/check.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="description">
                              Rare blend of trader, builder, and storyteller who
                              backs technical foresight with wins, turning $BNB
                              & $ETH gains into real-world milestones.
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </div>
                    <div className="col-md-3 col-tb-6 col-lp-4">
                      <FadeIn
                        delay={1}
                        direction="up"
                        distance={30}
                        duration={0.8}
                      >
                        <div className="card flex gap-sm">
                          <div
                            className="avatar"
                            style={{
                              backgroundImage: "url('/providers/tactical.jpg')",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <div className="flex dir-column">
                            <div className="flex v-center gap-sm">
                              <h4 className="name">Tactical</h4>
                              <div className="icons">
                                <Link
                                  href="https://x.com/tacticalexe"
                                  target="_blank"
                                >
                                  <HugeiconsIcon
                                    icon={NewTwitterIcon}
                                    size={18}
                                    color="#ffffff"
                                    strokeWidth={1.5}
                                  />
                                </Link>
                                <Image
                                  width={50}
                                  height={50}
                                  className="icon"
                                  src="/check.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="description">
                              Built reputation calling key tops and bottoms on
                              BTC and SPX using sentiment analysis, champions
                              "gameplan first, reaction second."
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </div>
                    <div className="col-md-3 col-tb-6 col-lp-4">
                      <FadeIn
                        delay={1.2}
                        direction="up"
                        distance={30}
                        duration={0.8}
                      >
                        <div className="card flex gap-sm">
                          <div
                            className="avatar"
                            style={{
                              backgroundImage: "url('/providers/poizer.jpg')",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <div className="flex dir-column">
                            <div className="flex v-center gap-sm">
                              <h4 className="name">Poizer</h4>
                              <div className="icons">
                                <Link
                                  href="https://x.com/POIZERR"
                                  target="_blank"
                                >
                                  <HugeiconsIcon
                                    icon={NewTwitterIcon}
                                    size={18}
                                    color="#ffffff"
                                    strokeWidth={1.5}
                                  />
                                </Link>
                                <Image
                                  width={50}
                                  height={50}
                                  className="icon"
                                  src="/check.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="description">
                              "Lakewood Slasher of CT," huge Solana player known
                              for front-running narrative rotations, nailed
                              plays like $WIF, $BODEN, $CAT.
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </div>
                    <div className="col-md-3 col-tb-6 col-lp-4">
                      <FadeIn
                        delay={1.4}
                        direction="up"
                        distance={30}
                        duration={0.8}
                      >
                        <div className="card flex gap-sm">
                          <div
                            className="avatar"
                            style={{
                              backgroundImage: "url('/providers/catdev.png')",
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <div className="flex dir-column">
                            <div className="flex v-center gap-sm">
                              <h4 className="name">Cat Dev</h4>
                              <div className="icons">
                                <Link
                                  href="https://x.com/cryptofrags"
                                  target="_blank"
                                >
                                  <HugeiconsIcon
                                    icon={NewTwitterIcon}
                                    size={18}
                                    color="#ffffff"
                                    strokeWidth={1.5}
                                  />
                                </Link>
                                <Image
                                  width={50}
                                  height={50}
                                  className="icon"
                                  src="/check.png"
                                  alt=""
                                />
                              </div>
                            </div>
                            <p className="description">
                              Crypto OG dev since 2017, token and smart contract
                              developer for Ethereum and Solana, pioneer in
                              profitable token contracts.
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* <section id="plans">
          <div className="wrapper fixed">
            <div className="title">
              <TextReveal
                type="h2"
                variant="words"
                paragraphs={["Unlock the Full", "Experience"]}
                style="heading"
                align="center"
              />
            </div>
            <div className="row">
              <div className="col-md-2 desktop-only laptop-hidden"></div>
              <div className="col-md-4 col-tb-6 col-lp-6">
                <FadeIn
                  delay={0}
                  direction="down"
                  distance={30}
                  duration={1.2}
                  hasBlur
                >
                  <div className="card">
                    <span className="name">Second Area</span>
                    <div className="price">
                      <h4 className="heading">$199.00</h4>
                      <p className="cycle">
                        <span>/month</span>
                      </p>
                    </div>
                    <p className="text">
                      Start your journey in crypto with the best community in
                      web3
                    </p>
                    <Button variant="primary-price">Subscribe</Button>
                    <ul className="items">
                      <li className="item">
                        <div className="icon">
                          <HugeiconsIcon
                            icon={Tick01Icon}
                            size={16}
                            className="tick"
                            color="#000000"
                            strokeWidth={3}
                          />
                        </div>
                        <p className="feature">General trenching chat</p>
                      </li>
                      <li className="item">
                        <div className="icon">
                          <HugeiconsIcon
                            icon={Tick01Icon}
                            size={16}
                            className="tick"
                            color="#000000"
                            strokeWidth={3}
                          />
                        </div>
                        <p className="feature">Tools and trackers</p>
                      </li>
                      <li className="item">
                        <div className="icon">
                          <HugeiconsIcon
                            icon={Tick01Icon}
                            size={16}
                            className="tick"
                            color="#000000"
                            strokeWidth={3}
                          />
                        </div>
                        <p className="feature">
                          2 tweets a month in engage system
                        </p>
                      </li>
                      <li className="item">
                        <div className="icon">
                          <HugeiconsIcon
                            icon={Tick01Icon}
                            size={16}
                            className="tick"
                            color="#000000"
                            strokeWidth={3}
                          />
                        </div>
                        <p className="feature">1 livestream a week</p>
                      </li>
                      <li className="item">
                        <div className="icon">
                          <HugeiconsIcon
                            icon={Tick01Icon}
                            size={16}
                            className="tick"
                            color="#000000"
                            strokeWidth={3}
                          />
                        </div>
                        <p className="feature">
                          4 1-on-1 message convos a month
                        </p>
                      </li>
                      <li className="item">
                        <div className="icon">
                          <HugeiconsIcon
                            icon={Tick01Icon}
                            size={16}
                            className="tick"
                            color="#000000"
                            strokeWidth={3}
                          />
                        </div>
                        <p className="feature">
                          Monthly giveaways or rep rewards
                        </p>
                      </li>
                    </ul>
                  </div>
                </FadeIn>
              </div>
              <div className="col-md-4 col-tb-6 col-lp-6">
                <FadeIn
                  delay={0.2}
                  direction="down"
                  distance={30}
                  duration={1.2}
                  hasBlur
                >
                  <div className="card recommended">
                    <div className="w-full flex v-center between">
                      <span className="name">Third Area</span>
                      <div className="spots">
                        <div className="circle"></div>
                        Limited Spots
                      </div>
                    </div>
                    <div className="price">
                      <h4 className="heading">$799.00</h4>
                      <p className="cycle">
                        <span>/month</span>
                      </p>
                    </div>
                    <p className="text">
                      Level up your crypto game with the best community in web3
                    </p>
                    <Button variant="primary-price">Subscribe</Button>
                    <ul className="items">
                      <li className="item">
                        <div className="icon">
                          <HugeiconsIcon
                            icon={Tick01Icon}
                            size={16}
                            className="tick"
                            color="#000000"
                            strokeWidth={3}
                          />
                        </div>
                        <p className="feature">
                          Everything from the Second Area
                        </p>
                      </li>
                      <li className="item">
                        <div className="icon">
                          <HugeiconsIcon
                            icon={Tick01Icon}
                            size={16}
                            className="tick"
                            color="#000000"
                            strokeWidth={3}
                          />
                        </div>
                        <p className="feature">
                          Exclusive guidance by the best providers
                        </p>
                      </li>
                      <li className="item">
                        <div className="icon">
                          <HugeiconsIcon
                            icon={Tick01Icon}
                            size={16}
                            className="tick"
                            color="#000000"
                            strokeWidth={3}
                          />
                        </div>
                        <p className="feature">
                          Guidance on how to grow social media
                        </p>
                      </li>
                      <li className="item">
                        <div className="icon">
                          <HugeiconsIcon
                            icon={Tick01Icon}
                            size={16}
                            className="tick"
                            color="#000000"
                            strokeWidth={3}
                          />
                        </div>
                        <p className="feature">
                          Build connections in Crypto and Business
                        </p>
                      </li>
                      <li className="item">
                        <div className="icon">
                          <HugeiconsIcon
                            icon={Tick01Icon}
                            size={16}
                            className="tick"
                            color="#000000"
                            strokeWidth={3}
                          />
                        </div>
                        <p className="feature">
                          Direct technical analysis on the market
                        </p>
                      </li>
                      <li className="item">
                        <div className="icon">
                          <HugeiconsIcon
                            icon={Tick01Icon}
                            size={16}
                            className="tick"
                            color="#000000"
                            strokeWidth={3}
                          />
                        </div>
                        <p className="feature">Access to the marketplace</p>
                      </li>
                    </ul>
                  </div>
                </FadeIn>
              </div>
              <div className="col-md-2 desktop-only laptop-hidden"></div>
            </div>
            <div className="footer">
              <span className="text">Trusted by global companies</span>
              <div className="logos desktop-only">
                <FadeIn
                  delay={0}
                  direction="down"
                  distance={20}
                  duration={1.2}
                  hasBlur
                >
                  <Image
                    width={500}
                    height={100}
                    className="logo"
                    src="/companies/coinbase.png"
                    alt="partner"
                  />
                </FadeIn>
                <FadeIn
                  delay={0.2}
                  direction="down"
                  distance={20}
                  duration={1.2}
                  hasBlur
                >
                  <Image
                    width={500}
                    height={100}
                    className="logo"
                    src="/companies/zoomex.png"
                    alt="partner"
                  />
                </FadeIn>
                <FadeIn
                  delay={0.4}
                  direction="down"
                  distance={20}
                  duration={1.2}
                  hasBlur
                >
                  <Image
                    width={500}
                    height={100}
                    className="logo large"
                    src="/companies/axiomexchange.png"
                    alt="partner"
                  />
                </FadeIn>
                <FadeIn
                  delay={0.6}
                  direction="down"
                  distance={20}
                  duration={1.2}
                  hasBlur
                >
                  <Image
                    width={500}
                    height={100}
                    className="logo"
                    src="/companies/bloom.png"
                    alt="partner"
                  />
                </FadeIn>
                <FadeIn
                  delay={0.8}
                  direction="down"
                  distance={20}
                  duration={1.2}
                  hasBlur
                >
                  <Image
                    width={500}
                    height={100}
                    className="logo"
                    src="/companies/bybit.png"
                    alt="partner"
                  />
                </FadeIn>
                <FadeIn
                  delay={1}
                  direction="down"
                  distance={20}
                  duration={1.2}
                  hasBlur
                >
                  <Image
                    width={500}
                    height={100}
                    className="logo"
                    src="/companies/photon.png"
                    alt="partner"
                  />
                </FadeIn>
              </div>
              <Marquee className="marquee mb-only">
                <FadeIn
                  direction="up"
                  delay={0.6}
                  distance={10}
                  duration={1.5}
                  hasBlur
                >
                  <Image
                    width={500}
                    height={100}
                    className="logo"
                    src="/companies/coinbase.png"
                    alt="partner"
                  />
                </FadeIn>
                <FadeIn
                  direction="up"
                  delay={0.8}
                  distance={10}
                  duration={1.5}
                  hasBlur
                >
                  <Image
                    width={500}
                    height={100}
                    className="logo"
                    src="/companies/zoomex.png"
                    alt="partner"
                  />
                </FadeIn>
                <FadeIn
                  direction="up"
                  delay={1}
                  distance={10}
                  duration={1.5}
                  hasBlur
                >
                  <Image
                    width={500}
                    height={100}
                    className="logo large"
                    src="/companies/axiomexchange.png"
                    alt="partner"
                  />
                </FadeIn>
                <FadeIn
                  direction="up"
                  delay={1.2}
                  distance={10}
                  duration={1.5}
                  hasBlur
                >
                  <Image
                    width={500}
                    height={100}
                    className="logo"
                    src="/companies/bloom.png"
                    alt="partner"
                  />
                </FadeIn>
                <FadeIn
                  direction="up"
                  delay={1.4}
                  distance={10}
                  duration={1.5}
                  hasBlur
                >
                  <Image
                    width={500}
                    height={100}
                    className="logo"
                    src="/companies/bybit.png"
                    alt="partner"
                  />
                </FadeIn>
                <FadeIn
                  direction="up"
                  delay={1.6}
                  distance={10}
                  duration={1.5}
                  hasBlur
                >
                  <Image
                    width={500}
                    height={100}
                    className="logo"
                    src="/companies/photon.png"
                    alt="partner"
                  />
                </FadeIn>
              </Marquee>
            </div>
          </div>
        </section> */}
        <section id="faq">
          <div className="wrapper fixed">
            <div className="title">
              <TextReveal
                type="h2"
                variant="words"
                paragraphs={["Frequently Asked", "Questions"]}
                style="heading"
                align="center"
              />
            </div>
            <FadeIn delay={0} direction="down" distance={30} duration={1.2}>
              <FAQAccordion />
            </FadeIn>
          </div>
        </section>
        <section id="contact">
          <div className="wrapper fixed">
            <div className="row">
              <div className="col-md-6">
                <div className="title">
                  <TextReveal
                    type="h2"
                    variant="words"
                    paragraphs={["Any questions?", "Send us a message"]}
                    style="heading"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <form action="" className="form">
                  <input type="text" className="input" placeholder="Name *" />
                  <input type="email" className="input" placeholder="Email *" />
                  <input
                    type="text"
                    className="input"
                    placeholder="Phone Number"
                  />
                  <textarea
                    className="input textarea"
                    placeholder="Message *"
                  />
                  <Button variant="primary-price">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Transition>
  );
}
