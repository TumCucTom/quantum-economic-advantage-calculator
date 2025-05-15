import {
  a as l,
  f as a,
  g as o,
  j as e,
  F as i,
  q as r,
  t as n,
  m as u
} from "./index-niMaZqBZ.js";
const h = {
    class: "max-w-5xl mx-auto my-8 px-4"
  },
  g = e("h1", {
    class: "text-3xl font-bold text-gray-800 mb-6 text-center",
    id: "Models"
  }, "Team", -1),
  f = e("p", {
    class: "text-center mb-8"
  }, " The Quantum Economic Advantage Calculator is a joint effort between MIT FutureTech and Accenture. ", -1),
  _ = {
    class: "grid gap-8 sm:grid-cols-3"
  },
  p = {
    class: "sm:col-span-2"
  },
  x = e("h2", {
    class: "text-xl font-semibold text-gray-700 mb-4 text-center"
  }, "MIT FutureTech", -1),
  b = {
    class: "grid gap-4 sm:grid-cols-2"
  },
  T = ["src"],
  y = {
    key: 1,
    class: "w-24 h-24 rounded-full mb-4 bg-gray-200 shadow-lg"
  },
  v = {
    class: "text-lg font-semibold text-gray-800"
  },
  j = {
    class: "text-sm text-gray-600"
  },
  M = {
    class: "border-l border-gray-300 pl-6"
  },
  F = e("h2", {
    class: "text-xl font-semibold text-gray-700 mb-4 text-center"
  }, "Accenture", -1),
  k = {
    class: "flex flex-col gap-4"
  },
  I = ["src"],
  w = {
    key: 1,
    class: "w-24 h-24 rounded-full mb-4 bg-gray-200 shadow-lg"
  },
  A = {
    class: "text-lg font-semibold text-gray-800"
  },
  D = {
    class: "text-sm text-gray-600"
  },
  C = e("div", {
    class: "mt-12 text-center text-gray-700 text-sm"
  }, [e("p", null, [u(" If you have any questions or concerns, feel free to contact "), e("a", {
    href: "mailto:someone@example.com",
    class: "text-blue-600 hover:underline"
  }, "someone@example.com"), u(". ")])], -1),
  E = {
    __name: "Team",
    setup(H) {
      const c = [{
          name: "Neil Thompson",
          image: "/650353e37ba6cf9c37b2db67_neil-thompson.jpg",
          affiliation: "MIT FutureTech",
          role: "Director of FutureTech"
        }, {
          name: "Jayson Lynch",
          image: "/650353e88fadc59390b6639b_jayson-lynch-p-500.jpg",
          affiliation: "MIT FutureTech",
          role: "Head of Algorithms"
        }, {
          name: "Frederick Mejia",
          image: "/654bb5d93f6840c86a2fea17_headshot - Fred Mejia-p-500.png",
          affiliation: "MIT FutureTech",
          role: "MEng Student, Developer"
        }, {
          name: "Hans Gundlach",
          image: "/660c392f18a635bb348acc70_profilemay2023 - Hans Gundlach-p-500.png",
          affiliation: "MIT FutureTech",
          role: "Researcher"
        }, {
          name: "Hrvoje Kukina",
          image: "/6616978ed50987169fb845b7_hrvoje_picture - Hrvoje Kukina-p-500.jpg",
          affiliation: "MIT FutureTech",
          role: "PhD Candidate"
        }, {
          name: "Eleanor Crane",
          image: "/eleanor_crane.jpeg",
          affiliation: "MIT FutureTech",
          role: "Researcher"
        }, {
          name: "Johannes Galatsanos-Dueck",
          image: "",
          affiliation: "MIT FutureTech",
          role: "Title"
        }, {
          name: "Prashant P. Shukla",
          image: "PrashantShukla.jpg",
          affiliation: "Accenture",
          role: "Accenture Research Lead - MIT IDE"
        }, {
          name: "Carl Dukatz",
          image: "Carl_Dukatz_Profile_Picture 1.jpeg",
          affiliation: "Accenture",
          role: "Managing Director - Next Gen Compute"
        }, {
          name: "Kung-Chuan Hsu",
          image: "profile_pic_KC.jpg",
          affiliation: "Accenture",
          role: "Quantum Information Scientist - Next Gen Compute"
        }, {
          name: "Victoria Hazoglou",
          image: "",
          affiliation: "Accenture",
          role: "Title"
        }, {
          name: "Andrew Souza",
          image: "/650353ea2e6029b3cea2ee24_andrew-lucas-p-500.jpg",
          affiliation: "MIT FutureTech",
          role: "Former Developer"
        }],
        d = l(() => c.filter(s => s.affiliation === "MIT FutureTech")),
        m = l(() => c.filter(s => s.affiliation === "Accenture"));
      return (s, P) => (a(), o("div", h, [g, f, e("div", _, [e("div", p, [x, e("div", b, [(a(!0), o(i, null, r(d.value, t => (a(), o("div", {
        key: t.name,
        class: "flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md"
      }, [t.image ? (a(), o("img", {
        key: 0,
        src: t.image,
        alt: "Team member photo",
        class: "w-24 h-24 rounded-full mb-4 object-cover object-top shadow-lg"
      }, null, 8, T)) : (a(), o("div", y)), e("h2", v, n(t.name), 1), e("p", j, n(t.role), 1)]))), 128))])]), e("div", M, [F, e("div", k, [(a(!0), o(i, null, r(m.value, t => (a(), o("div", {
        key: t.name,
        class: "flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md"
      }, [t.image ? (a(), o("img", {
        key: 0,
        src: t.image,
        alt: "Team member photo",
        class: "w-24 h-24 rounded-full mb-4 object-cover object-top shadow-lg"
      }, null, 8, I)) : (a(), o("div", w)), e("h2", A, n(t.name), 1), e("p", D, n(t.role), 1)]))), 128))])])]), C]))
    }
  };
export {
  E as
  default
};