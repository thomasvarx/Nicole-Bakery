import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CakeSlice, ChevronDown, Mail, MapPin, Menu, MessageCircle, Phone, ShoppingBag, X } from "lucide-react";

export default function TwoSassySpoonsNakedCupcakeInspired() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("monthly");
  const [textOpen, setTextOpen] = useState(false);
  const [email, setEmail] = useState("");

  const monthly = [
    { name: "Birthday Party", desc: "Vanilla cupcake, vanilla frosting, topped with rainbow sprinkles." },
    { name: "I Love Chocolate", desc: "Chocolate cupcake, chocolate frosting, mini chocolate chips, and chocolate drizzle." },
    { name: "Red Velvet Sass", desc: "Red velvet cupcake, cream cheese frosting, and mini chocolate chips." },
    { name: "Guava", desc: "Vanilla cupcake, guava filling, cream cheese frosting, and coconut flakes." },
    { name: "Cookies-n-Cream", desc: "Chocolate cupcake, cookies-and-cream frosting, and crushed cookie topping." },
    { name: "Dulce de Leche", desc: "Vanilla cupcake, dulce de leche frosting, and caramel drizzle." },
  ];

  const seasonal = [
    { name: "Strawberry Shortcake", desc: "Vanilla cupcake with strawberry filling, vanilla buttercream, and strawberry drizzle." },
    { name: "Ice Cream Sundae", desc: "Chocolate cupcake, ice cream buttercream, sundae syrup, sprinkles, and a cherry." },
    { name: "Lavender Blackberry", desc: "Lavender cupcake, blackberry filling, and lavender buttercream." },
    { name: "Snickers", desc: "Chocolate cupcake, peanut butter frosting, peanuts, and caramel drizzle." },
    { name: "Churrolicious", desc: "Cinnamon cupcake, cinnamon buttercream, and a churro bite topping." },
    { name: "Cake + Ice Cream", desc: "Upgrade your dessert with a scoop of homemade-style ice cream." },
  ];

  const customFlavors = [
    { category: "Signature Flavors – $4.50", items: ["Birthday Party", "Dirty Blonde", "Peanut Butter & Jelly", "Marbled Twist", "Rocky Road", "Cookies-n-Cream", "The Classic", "Mint Chocolate Chip", "I Love Chocolate", "Guava", "Salted Caramel", "Dulce de Leche"] },
    { category: "Specialty Recipes – $5.50", items: ["Strawberry Lemonade", "Oreo Madness", "Pumpkin Spice", "Strawberry Goddess", "Turtle Love", "Strawberry Cheesecake", "Hazelnut Truffle", "Chantilly", "Carrot Cake", "Tiramisu", "S’mores", "Churrolicious"] },
    { category: "Celebration Creations – Quote Required", items: ["Custom Cakes", "Wedding Cupcakes", "Birthday Dessert Tables", "Baby Shower Treats", "Corporate Catering", "Party Favor Boxes"] },
  ];

  const shownCards = useMemo(() => (activeTab === "monthly" ? monthly : seasonal), [activeTab]);

  function fakeSubmit(e) {
    e.preventDefault();
    alert(email ? `Thanks! ${email} was added to the mailing list demo.` : "Please enter your email.");
  }

  return (
    <div className="min-h-screen bg-[#fff6f9] font-sans text-[#3a2730]">
      <header className="sticky top-0 z-50 border-b border-[#f7c9d8] bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f15c9b] text-white shadow-md">
              <CakeSlice className="h-7 w-7" />
            </div>
            <div className="leading-tight">
              <p className="text-2xl font-black text-[#f15c9b]">Two Sassy Spoons</p>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#b47b8d]">Bakery</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-bold uppercase tracking-wide lg:flex">
            <a href="#catering" className="hover:text-[#f15c9b]">Catering</a>
            <a href="#truck" className="hover:text-[#f15c9b]">Cupcake Truck</a>
            <div className="group relative">
              <button className="flex items-center gap-1 hover:text-[#f15c9b]">Custom Orders <ChevronDown className="h-4 w-4" /></button>
              <div className="invisible absolute left-0 top-7 w-52 rounded-2xl border border-[#f7c9d8] bg-white p-3 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                <a className="block rounded-xl px-4 py-3 hover:bg-[#fff0f5]" href="#custom">Cakes/Cupcakes</a>
                <a className="block rounded-xl px-4 py-3 hover:bg-[#fff0f5]" href="#custom">Weddings</a>
                <a className="block rounded-xl px-4 py-3 hover:bg-[#fff0f5]" href="#custom">Birthday Parties</a>
              </div>
            </div>
            <a href="#flavors" className="text-[#f15c9b]">Flavor Menu</a>
            <a href="#visit" className="hover:text-[#f15c9b]">Visit Us</a>
            <a href="#about" className="hover:text-[#f15c9b]">About Us</a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button className="rounded-full bg-[#f15c9b] px-6 py-5 font-black text-white hover:bg-[#d94385]">
              <ShoppingBag className="mr-2 h-4 w-4" /> Order Online
            </Button>
          </div>

          <button className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu className="h-8 w-8 text-[#f15c9b]" />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-[#3a2730]/50 lg:hidden">
          <div className="ml-auto h-full w-80 bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <p className="text-xl font-black text-[#f15c9b]">Menu</p>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu"><X /></button>
            </div>
            <div className="mt-8 grid gap-5 font-bold uppercase text-[#3a2730]">
              {["Catering", "Cupcake Truck", "Custom Orders", "Flavor Menu", "Visit Us", "About Us"].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} onClick={() => setMobileOpen(false)}>{item}</a>
              ))}
              <Button className="mt-4 rounded-full bg-[#f15c9b] text-white hover:bg-[#d94385]">Order Online</Button>
            </div>
          </div>
        </div>
      )}

      <main id="home">
        <section className="relative overflow-hidden bg-[#fff6f9] px-6 py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute -right-32 top-8 h-72 w-72 rounded-full bg-[#ffe28a]/30 blur-3xl" />
            <div className="absolute -left-28 bottom-0 h-96 w-96 rounded-full bg-[#ffd1df]/35 blur-3xl" />
            <div className="absolute left-[45%] top-20 h-64 w-64 rounded-full bg-[#d6f4f0]/20 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#f15c9b]">Cupcakes • Cakes • Catering</p>
              <h1 className="mt-5 text-6xl font-black leading-[0.95] text-[#4a3340] md:text-8xl">Flavors</h1>
              <p className="mt-6 max-w-xl text-xl leading-9 text-[#6f5662]">
                Whether you want your cupcake fix now or you’re planning for a celebration, we have the sweet flavors you’re looking for.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="rounded-full bg-[#f15c9b] px-8 py-6 text-base font-black text-white shadow-md shadow-[#ffd1df] hover:bg-[#d94385]">Order Online</Button>
                <Button variant="outline" className="rounded-full border-2 border-[#f15c9b] bg-white px-8 py-6 text-base font-black text-[#f15c9b] shadow-sm hover:bg-[#fff0f5]">Get A Quote</Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
              <div className="rounded-[2.5rem] border-[10px] border-white bg-[#ffd1df] p-5 shadow-2xl shadow-[#f7c9d8]">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[2rem] bg-white p-6 shadow-sm">
                    <div className="h-48 rounded-[1.5rem] bg-gradient-to-br from-[#f15c9b] via-[#ffd1df] to-[#fff0b8]" />
                    <p className="mt-4 text-center text-xl font-black">Signature Favorites</p>
                  </div>
                  <div className="rounded-[2rem] bg-white p-6 shadow-sm sm:translate-y-8">
                    <div className="h-48 rounded-[1.5rem] bg-gradient-to-br from-[#fff0b8] via-[#ffd1df] to-[#d6f4f0]" />
                    <p className="mt-4 text-center text-xl font-black">Seasonal Flavours</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="flavors" className="bg-white px-6 py-16">
          <div className="mx-auto max-w-7xl text-center">
            <div className="mx-auto inline-flex items-center gap-3 rounded-full bg-[#fff0f5] px-6 py-3 font-black text-[#f15c9b]">
              <CakeSlice className="h-5 w-5" /> Allergen Friendly Options Available
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button onClick={() => setActiveTab("monthly")} className={`rounded-full px-8 py-4 text-sm font-black uppercase tracking-wide transition ${activeTab === "monthly" ? "bg-[#f15c9b] text-white shadow-lg shadow-[#ffd1df]" : "bg-[#fff0f5] text-[#f15c9b]"}`}>This Month’s Flavors</button>
              <button onClick={() => setActiveTab("seasonal")} className={`rounded-full px-8 py-4 text-sm font-black uppercase tracking-wide transition ${activeTab === "seasonal" ? "bg-[#f15c9b] text-white shadow-lg shadow-[#ffd1df]" : "bg-[#fff0f5] text-[#f15c9b]"}`}>Custom Order Flavors</button>
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#755967]">
              {activeTab === "monthly" ? "These flavors are available in-store, online, and for custom orders. But hurry — they’re featured for this month!" : "These flavors are available when you order custom cakes or cupcakes for birthdays, weddings, anniversaries, graduations, showers, and more."}
            </p>
          </div>
        </section>

        <section className="bg-[#fff6f9] px-6 py-18">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between gap-4 border-b-4 border-[#ffd1df] pb-5">
              <h2 className="text-4xl font-black text-[#3a2730]">{activeTab === "monthly" ? "Signature Favorites" : "Seasonal Flavours"}</h2>
              <Button className="rounded-full bg-[#f15c9b] px-7 font-black text-white hover:bg-[#d94385]">Order Online</Button>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {shownCards.map((item) => (
                <Card key={item.name} className="group overflow-hidden rounded-[2rem] border-0 bg-white shadow-md shadow-[#ffd1df]/50 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ffd1df]">
                  <CardContent className="p-0">
                    <div className="h-40 bg-gradient-to-br from-[#f15c9b] via-[#ffd1df] to-[#fff0b8] transition group-hover:scale-[1.02]" />
                    <div className="p-7">
                      <h3 className="text-2xl font-black text-[#3a2730]">{item.name}</h3>
                      <p className="mt-3 min-h-20 leading-7 text-[#755967]">{item.desc}</p>
                      <Button variant="link" className="mt-3 px-0 font-black text-[#f15c9b]">Order this flavor</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="custom" className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-4xl font-black md:text-5xl">Custom Order Flavors</h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#755967]">
                Minimum order of 12 per flavor. Great for birthdays, weddings, baby showers, graduations, corporate events, and dessert tables.
              </p>
              <Button className="mt-8 rounded-full bg-[#f15c9b] px-9 py-6 text-base font-black text-white hover:bg-[#d94385]">Get A Quote</Button>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {customFlavors.map((group) => (
                <div key={group.category} className="rounded-[2rem] bg-[#fff6f9] p-8 shadow-sm">
                  <h3 className="border-b-4 border-[#ffd1df] pb-4 text-2xl font-black text-[#f15c9b]">{group.category}</h3>
                  <p className="mt-3 text-sm font-black uppercase tracking-wide text-[#b47b8d]">Minimum order of 12 per flavor</p>
                  <div className="mt-6 grid gap-4">
                    {group.items.map((flavor) => (
                      <div key={flavor} className="rounded-2xl bg-white p-4 shadow-sm">
                        <p className="font-black text-[#3a2730]">{flavor}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="allergy" className="bg-[#f15c9b] px-6 py-18 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] bg-white/15 p-8">
              <h3 className="text-3xl font-black">What if I have food allergies?</h3>
              <p className="mt-4 leading-8 text-[#fff5f8]">We can offer gluten-free, vegan, dairy-free, and other allergy-friendly options. Tell us your allergy needs when requesting your order.</p>
            </div>
            <div className="rounded-[2rem] bg-white/15 p-8">
              <h3 className="text-3xl font-black">Do you deliver in Orlando?</h3>
              <p className="mt-4 leading-8 text-[#fff5f8]">Yes. Delivery is available based on distance and event details. We’ll confirm timing and day-of contact information before delivery.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#fff6f9] px-6 py-20">
          <div className="mx-auto grid max-w-5xl items-center gap-8 rounded-[2.5rem] bg-white p-8 shadow-xl shadow-[#ffd1df]/60 md:grid-cols-[0.7fr_1.3fr]">
            <div className="h-64 rounded-[2rem] bg-gradient-to-br from-[#ffd1df] via-[#fff0b8] to-[#f15c9b]" />
            <div>
              <p className="font-black uppercase tracking-[0.3em] text-[#f15c9b]">Subscribe</p>
              <h2 className="mt-3 text-4xl font-black">Get 10% off your first order</h2>
              <p className="mt-4 leading-8 text-[#755967]">Join the mailing list for new flavors, specials, event ideas, and seasonal dessert drops.</p>
              <form onSubmit={fakeSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" className="min-h-12 flex-1 rounded-full border-2 border-[#ffd1df] px-5 outline-none focus:border-[#f15c9b]" />
                <Button className="rounded-full bg-[#f15c9b] px-8 font-black text-white hover:bg-[#d94385]">Subscribe</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer id="visit" className="bg-[#3a2730] px-6 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-black text-[#ffd1df]">Two Sassy Spoons Bakery</h2>
            <p className="mt-4 leading-8 text-[#f7d8e3]">A scratch-style custom bakery proudly serving Orlando and Central Florida celebrations.</p>
          </div>
          <div>
            <h3 className="font-black uppercase tracking-wide text-[#ffd1df]">Links</h3>
            <div className="mt-4 grid gap-2 text-[#f7d8e3]">
              <a href="#custom">Custom Orders</a><a href="#catering">Catering</a><a href="#flavors">Menu</a><a href="#visit">Location</a><a href="#about">About</a>
            </div>
          </div>
          <div>
            <h3 className="font-black uppercase tracking-wide text-[#ffd1df]">Contact</h3>
            <div className="mt-4 grid gap-3 text-[#f7d8e3]">
              <p className="flex gap-3"><MapPin className="h-5 w-5 text-[#ffd1df]" /> Orlando, Florida</p>
              <p className="flex gap-3"><Phone className="h-5 w-5 text-[#ffd1df]" /> 689-237-5744</p>
              <p className="flex gap-3"><Mail className="h-5 w-5 text-[#ffd1df]" /> Twosassyspoons@yahoo.com</p>
            </div>
          </div>
          <div>
            <h3 className="font-black uppercase tracking-wide text-[#ffd1df]">Hours</h3>
            <div className="mt-4 grid gap-1 text-sm text-[#f7d8e3]">
              <p>mon: 7:30 am - 5:00 pm</p><p>tue: 7:30 am - 8:00 pm</p><p>wed: 7:30 am - 8:00 pm</p><p>thu: 7:30 am - 8:00 pm</p><p>fri: 7:30 am - 9:30 pm</p><p>sat: 11:00 am - 9:30 pm</p><p>sun: 12:00 pm - 8:00 pm</p>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50">
        {textOpen && (
          <div className="mb-4 w-80 rounded-[2rem] bg-white p-6 shadow-2xl shadow-[#3a2730]/20">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-[#f15c9b]">💬 Text Us!</h3>
              <button onClick={() => setTextOpen(false)}><X className="h-5 w-5" /></button>
            </div>
            <p className="mt-2 text-sm text-[#755967]">We’ll reply as soon as we can 🧁</p>
            <div className="mt-4 grid gap-3">
              <input placeholder="Your name" className="rounded-full border border-[#ffd1df] px-4 py-3 outline-none" />
              <input placeholder="Your number" className="rounded-full border border-[#ffd1df] px-4 py-3 outline-none" />
              <textarea placeholder="Your message" className="min-h-24 rounded-2xl border border-[#ffd1df] px-4 py-3 outline-none" />
              <Button className="rounded-full bg-[#f15c9b] font-black text-white hover:bg-[#d94385]">Open Texting App</Button>
            </div>
          </div>
        )}
        <button onClick={() => setTextOpen(!textOpen)} className="flex items-center gap-2 rounded-full bg-[#f15c9b] px-6 py-4 font-black text-white shadow-xl hover:bg-[#d94385]">
          <MessageCircle className="h-5 w-5" /> Text Us
        </button>
      </div>
    </div>
  );
}
