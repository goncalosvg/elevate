/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { matrixEffect } from "~/utils/matrixEffect";
import useScrollToSection from "~/utils/scrollToSection";
import { Button } from "../Button";
import Logotype from "../Icons/Logotype";
import { getLenisInstance } from "../SmoothScroll";
import styles from "./Navigation.module.scss";

interface INavigation {
  variant?: string;
  hero?: any;
}

// Matrix Text Component
interface MatrixTextProps {
  text: string;
  className?: string;
  isActive?: boolean;
}

export default function Navigation({ variant, hero }: INavigation) {
  const fixedNavRef = useRef(null) as any;

  const scrollToSection = useScrollToSection();
  const lenis = getLenisInstance();

  const [menuActive, setMenuActive] = useState<boolean>(false);

  useEffect(() => {
    matrixEffect();
  }, []);

  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
      document
        .querySelector(`.${styles.content}`)
        ?.addEventListener("wheel", (e) => {
          e.stopPropagation();
        });
      document
        .querySelector(`.${styles.widget}`)
        ?.addEventListener("wheel", (e) => {
          e.stopPropagation();
        });

      document
        .querySelector(`.${styles.content}`)
        ?.addEventListener("touchmove", (e) => {
          e.stopPropagation();
        });
      document
        .querySelector(`.${styles.widget}`)
        ?.addEventListener("touchmove", (e) => {
          e.stopPropagation();
        });
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }

    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [menuActive]);

  useEffect(() => {
    if (!hero?.current || !fixedNavRef.current) return;

    const navElement = fixedNavRef.current;

    let prevScrollpos = window.scrollY;
    let heroInView = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          heroInView = entry.isIntersecting;
          if (heroInView) {
            navElement.style.transform = "translateY(-130%) translateX(-50%)";
          } else {
            navElement.removeAttribute("style");
          }
        });
      },
      { threshold: 0.0 }
    );

    observer.observe(hero.current);

    const handleScroll = () => {
      if (!heroInView) {
        const currentScrollPos = window.scrollY;
        if (prevScrollpos < currentScrollPos) {
          navElement.style.transform = "translateY(-130%) translateX(-50%)";
        } else if (prevScrollpos > currentScrollPos) {
          navElement.style.transform = "translateY(0%) translateX(-50%)";
        }
        prevScrollpos = currentScrollPos;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [hero]);

  return (
    <>
      <nav
        id={styles.nav}
        className={clsx(
          styles[`${variant}`],
          menuActive && styles.active,
          "fade-in"
        )}
        data-delay="1"
      >
        <div className="wrapper lg-w">
          <div className={styles.content}>
            <div className={styles.left}>
              <Link href="/" passHref>
                <Logotype
                  style={styles.logo}
                  color={
                    menuActive
                      ? "#121212"
                      : variant === "dark"
                      ? "#121212"
                      : "#ffffff"
                  }
                />
              </Link>
              <ul className={styles.items}>
                <li
                  id="matrix"
                  className={styles.item}
                  data-item="Features"
                  onClick={() => scrollToSection("features")}
                >
                  Features
                </li>
                {/* <Link href="/chatting#refer">
                  <li id="matrix" className={styles.item} data-item="Pricing">
                    Pricing
                  </li>
                </Link> */}
                <li
                  id="matrix"
                  className={styles.item}
                  data-item="FAQ"
                  onClick={() => scrollToSection("faq")}
                >
                  FAQ
                </li>
                <li
                  id="matrix"
                  className={styles.item}
                  data-item="Providers"
                  onClick={() => scrollToSection("providers")}
                >
                  Providers
                </li>
              </ul>
            </div>
            <div className={styles.right}>
              <div onClick={() => scrollToSection("contact")}>
                <Button variant="glass">Contact us</Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        id={styles.fixedMenu}
        className={clsx(menuActive && styles.active)}
        style={{
          transform: menuActive ? "translateX(0%)" : "translateX(-100%)",
        }}
      >
        <div className="wrapper">
          <ul className={styles.items}>
            <Link href="/" passHref>
              <li className={styles.item}>Full Management</li>
            </Link>
            <Link href="/chatting" passHref>
              <li className={styles.item}>Chatting</li>
            </Link>
          </ul>
          <div className="mgtop-md">
            <Button>Apply now</Button>
          </div>
        </div>
      </div>
      <div id={styles.fixednav} ref={fixedNavRef}>
        <div className="wrapper">
          <div className={styles.content}>
            <div className={styles.left}>
              <Link href="/" passHref>
                <Logotype color="#121212" />
              </Link>
            </div>
            <div className={styles.center}>
              <ul className={styles.items}>
                <li
                  id="matrix"
                  className={styles.item}
                  data-item="Solutions"
                  onClick={() => scrollToSection("services")}
                >
                  Solutions
                </li>
                <Link href="/chatting#refer">
                  <li id="matrix" className={styles.item} data-item="Referrals">
                    Referrals
                  </li>
                </Link>
                <li
                  id="matrix"
                  className={styles.item}
                  data-item="Frequent Questions"
                  onClick={() => scrollToSection("faq")}
                >
                  Frequent Questions
                </li>
                <Link href="/chatting" passHref>
                  <li id="matrix" className={styles.item} data-item="Chatting">
                    Chatting
                  </li>
                </Link>
              </ul>
            </div>
            <div className={styles.right}>
              <Button>Apply now</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
