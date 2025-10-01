"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function ClientScripts() {
  const typedInstancesRef = useRef<Map<Element, any>>(new Map());

  useEffect(() => {
    // Initialize Typed.js after all scripts are loaded
    const initTyped = () => {
      if (typeof window !== "undefined" && (window as any).Typed) {
        const typedElements = document.querySelectorAll(".typed");
        typedElements.forEach((element) => {
          // Check if this element already has a Typed instance
          if (!typedInstancesRef.current.has(element)) {
            try {
              const typedInstance = new (window as any).Typed(element, {
                stringsElement: ".typed-strings",
                loop: true,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 100000000000,
              });
              // Store the instance for cleanup
              typedInstancesRef.current.set(element, typedInstance);
            } catch (error) {
              console.warn("Failed to initialize Typed.js:", error);
            }
          }
        });
      }
    };

    // Cleanup function to destroy existing instances
    const cleanupTyped = () => {
      typedInstancesRef.current.forEach((instance, element) => {
        try {
          if (instance && typeof instance.destroy === "function") {
            instance.destroy();
          }
        } catch (error) {
          console.warn("Failed to destroy Typed.js instance:", error);
        }
      });
      typedInstancesRef.current.clear();
    };

    // Initialize Owl Carousel
    const initCarousel = () => {
      if (
        typeof window !== "undefined" &&
        (window as any).$ &&
        (window as any).$.fn.owlCarousel
      ) {
        (window as any)
          .$(".owl-carousel")
          .each(function (this: any, index: number) {
            const a = (window as any).$(this);
            const rtlVal = (window as any).$("html").attr("dir") === "rtl";
            a.owlCarousel({
              rtl: rtlVal,
              autoplay: a.data("autoplay"),
              center: a.data("center"),
              autoplayTimeout: a.data("autoplaytimeout"),
              autoplayHoverPause: a.data("autoplayhoverpause"),
              loop: a.data("loop"),
              speed: a.data("speed"),
              nav: a.data("nav"),
              dots: a.data("dots"),
              margin: a.data("margin"),
              stagePadding: a.data("stagepadding"),
              items: a.data("items"),
              responsive: a.data("responsive"),
              navText: [
                '<i className="fas fa-chevron-left"></i>',
                '<i className="fas fa-chevron-right"></i>',
              ],
            });
          });
      }
    };

    // Try to initialize immediately
    initTyped();
    initCarousel();

    // Also try after a short delay to ensure scripts are loaded
    const timer = setTimeout(() => {
      initTyped();
      initCarousel();
    }, 1000);

    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
      cleanupTyped();
    };
  }, []);

  return (
    <>
      <Script
        src="/outstride-website/vendor/jquery/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/outstride-website/vendor/bootstrap/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/outstride-website/vendor/jquery.easing/jquery.easing.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/outstride-website/vendor/wow/wow.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/outstride-website/vendor/typed/typed.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/outstride-website/vendor/jquery.appear/jquery.appear.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/outstride-website/vendor/owl.carousel/owl.carousel.min.js"
        strategy="lazyOnload"
      />
    </>
  );
}
