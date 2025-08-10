import { useEffect, useState } from "react";
import AIChatWidget from "./components/AIChatWidget";
import {
  Phone, Mail, MapPin, GraduationCap, Award, BookOpen, Stethoscope,
  Building2, CalendarDays, Sun, Moon, Send
} from "lucide-react";
import drImg from "./assets/dr-deepak.png";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Dark mode: init from localStorage, then sync <html> class + storage
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  const phone = "+919108336267";
  const displayPhone = "+91 91083 36267";
  const email = "deepakskarthika@gmail.com";

  // === UPDATED HOSPITAL LIST ===
  const clinics = [
    { name: "New Era Hospital", area: "Vashi" },
    { name: "Tej Vedant Hospital", area: "Koparkhairane", onCall: true },
    { name: "Nirmal Hospital", area: "Koparkhairane", onCall: true },
    { name: "Credence Care Hospital", area: "Ghansoli" },
  ];

  const personal = { fullName: "Dr. Deepak Sasikumar", specialties: ["Medical Gastroenterologist"] };

  const education = [
    { degree: "DM – Medical Gastroenterology", place: "LTMMC & Sion Hospital", year: "2025", score: "62.6%" },
    { degree: "DNB – General Medicine", place: "Bhagwan Mahaveer Jain Hospital (NBE)", year: "2020", score: "63.2%" },
    { degree: "MBBS", place: "Silchar Government Medical College, Assam", year: "2016", score: "1st:64%  2nd:72%  3rd:61%  4th:61%" },
  ];

  const achievements = [
    "4th position in MUHS (DM Gastroenterology)",
    "1st position in LTMMC Sion",
    "Honors in Pathology & Pharmacology",
    "Best Oral Paper – ISG Maharashtra Chapter (MAHAISGCON Nashik 2023)",
  ];

  const experience = [
    "Casualty Medical Officer, Govt. Taluk Hospital, Changanacherry",
    "Ad-hoc CMO, CHC Ezhumatoor",
    "Emergency Medical Officer, St. Thomas Hospital, Malakkara",
    "Neurology – NIMHANS (2 months)",
    "Cardiology – Sri Jayadeva Institute of Cardiology (1 month)",
    "Senior Resident & Assistant Professor, Malabar Medical College (Sep 2020 – Feb 2022)",
  ];

  const interests = [
    "Luminal Gastroenterology",
    "Functional Bowel Disorders",
    "Hepatology",
    "Diagnostic & Therapeutic Endoscopy",
  ];

  const publications = [
    "JDE: ERCP with balloon sweeps during stent removal (original)",
    "IJGI: Biliopleural fistula closure post endoscopic biliary stenting (case report)",
    "Case report: Wintergreen oil poisoning",
    "Additional publications in DDS & IJGI",
  ];

  const mapsLink = (name, area) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + " " + area)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: personal.fullName,
    medicalSpecialty: "Gastroenterology",
    telephone: `+${phone}`,
    email: `mailto:${email}`,
    sameAs: [`tel:${phone}`, `mailto:${email}`, `https://wa.me/${phone}`],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-emerald-50 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 text-gray-900 dark:text-neutral-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <Stethoscope className="w-6 h-6" />
            <span className="font-semibold">{personal.fullName}</span>
          </a>
          <div className="flex items-center gap-2">
            <a href="#appointments" className="hidden sm:inline-flex text-sm px-3 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700">Book</a>
            <button
              className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-xl border border-neutral-300 dark:border-neutral-700"
              onClick={() => setDarkMode(v => !v)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span className="hidden md:inline">{darkMode ? "Light" : "Dark"} mode</span>
            </button>
            <button
              aria-label="Menu"
              className="sm:hidden p-2 rounded-lg border border-neutral-300 dark:border-neutral-700"
              onClick={() => setMenuOpen(v => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="sm:hidden px-4 py-2 space-y-2 border-t border-neutral-200 dark:border-neutral-800">
            {["about","clinics","services","education","experience","publications","appointments","contact"].map(id => (
              <a key={id} href={`#${id}`} className="block py-1" onClick={() => setMenuOpen(false)}>
                {id[0].toUpperCase() + id.slice(1)}
              </a>
            ))}
            <button className="w-full text-left py-1" onClick={() => { setDarkMode(v=>!v); setMenuOpen(false);}}>
              {darkMode ? "Light mode" : "Dark mode"}
            </button>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-4 pt-8 sm:pt-12">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.2)]">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="relative p-6 sm:p-10 grid md:grid-cols-[1.2fr,0.8fr] gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">{personal.fullName}</h1>
              <p className="mt-2 text-base sm:text-lg text-neutral-600 dark:text-neutral-300">{personal.specialties.join(" • ")}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={`tel:${phone}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-300 dark:border-neutral-700 shadow-sm"><Phone className="w-4 h-4" /> Call {displayPhone}</a>
                <a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-300 dark:border-neutral-700 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.45 0 .07 5.38.07 12c0 2.1.54 4.1 1.57 5.9L0 24l6.26-1.62A11.86 11.86 0 0 0 12.06 24c6.61 0 11.98-5.38 11.98-12 0-3.2-1.25-6.21-3.52-8.52ZM12.06 22a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.72 .96 .99-3.62 -.23 -.37 A9.93 9.93 0 0 1 2.07 12 c0 -5.5 4.48 -10 9.99 -10 s 9.99 4.5 9.99 10 c0 5.5 -4.48 10 -9.99 10 Zm5.47 -7.48 c -.3 -.15 -1.78 -.87 -2.06 -.97 -.28 -.1 -.49 -.15 -.7 .15 -.21 .3 -.8 .97 -.98 1.17 -.18 .2 -.36 .22 -.66 .07 -.3 -.15 -1.25 -.45 -2.38 -1.45 -.88 -.77 -1.48 -1.72 -1.65 -2.01 -.17 -.3 -.02 -.46 .13 -.6 .14 -.14 .3 -.36 .45 -.54 .15 -.18 .2 -.3 .3 -.5 .1 -.2 .05 -.37 -.03 -.52 -.08 -.15 -.7 -1.68 -.95 -2.29 -.25 -.6 -.5 -.52 -.7 -.53 l -.6 -.01 c -.2 0 -.52 .07 -.79 .37 -.27 .3 -1.04 1.02 -1.04 2.5 s 1.07 2.9 1.22 3.1 c .15 .2 2.1 3.2 5.06 4.49 .71 .31 1.26 .49 1.69 .63 .71 .23 1.35 .2 1.86 .12 .57 -.08 1.78 -.73 2.03 -1.44 .25 -.71 .25 -1.32 .17 -1.45 -.08 -.13 -.27 -.2 -.57 -.35 Z"/></svg>
                  WhatsApp
                </a>
                <a href={`mailto:${email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-300 dark:border-neutral-700 shadow-sm"><Mail className="w-4 h-4" /> Email</a>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <InfoCard title="Attached To" icon={<Building2 className="w-5 h-5" />}>
                  <ul className="text-sm space-y-1">
                    {clinics.map(c => (
                      <li key={c.name} className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5" />
                        <a
                          className="underline decoration-dotted hover:opacity-80"
                          href={mapsLink(c.name, c.area)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {c.name} — {c.area}
                        </a>
                        {c.onCall && (
                          <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full border border-neutral-300 dark:border-neutral-700">
                            On-call
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </InfoCard>

                <InfoCard title="Clinical Interests" icon={<Stethoscope className="w-5 h-5" />}>
                  <div className="flex flex-wrap gap-2">
                    {interests.map(i => (
                      <span key={i} className="px-3 py-1.5 rounded-full border text-sm border-neutral-300 dark:border-neutral-700">
                        {i}
                      </span>
                    ))}
                  </div>
                </InfoCard>
              </div>
            </div>

            <div className="justify-self-center">
              <div className="relative w-40 h-40 sm:w-56 sm:h-56">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-200 to-emerald-200 dark:from-sky-900 dark:to-emerald-900 blur-xl" />
                <img src={drImg} alt="Dr. Deepak Sasikumar" className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover ring-4 ring-white dark:ring-neutral-900 shadow-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <Section id="education" title="Education" icon={<GraduationCap className="w-5 h-5" />}>
        <div className="grid md:grid-cols-3 gap-4">
          {education.map((e) => (
            <div key={e.degree} className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60">
              <div className="font-semibold">{e.degree}</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">{e.place}</div>
              <div className="text-xs text-neutral-500 mt-1 flex items-center gap-3">
                <span className="inline-flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5" /> {e.year}</span>
                {e.score && <span className="inline-flex items-center gap-1"><Award className="w-3.5 h-3.5" /> {e.score}</span>}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section title="Achievements" icon={<Award className="w-5 h-5" />}>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm">
          {achievements.map((a) => (
            <li key={a} className="p-3 rounded-xl bg-white/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
              {a}
            </li>
          ))}
        </ul>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" icon={<Building2 className="w-5 h-5" />}>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm">
          {experience.map((exp) => (
            <li key={exp} className="p-3 rounded-xl bg-white/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
              {exp}
            </li>
          ))}
        </ul>
      </Section>

      {/* Publications */}
      <Section id="publications" title="Research & Publications" icon={<BookOpen className="w-5 h-5" />}>
        <ul className="list-disc pl-5 text-sm space-y-1">
          {publications.map((p) => (<li key={p}>{p}</li>))}
        </ul>
        <p className="mt-3 text-xs text-neutral-500">For full-text links and recent work, please request via email or WhatsApp.</p>
      </Section>

      {/* Appointments */}
      <AppointmentsSection phone={phone} email={email} clinics={clinics} />

      {/* Contact */}
      <Section id="contact" title="Contact" icon={<Mail className="w-5 h-5" />}>
        <div className="grid sm:grid-cols-3 gap-4">
          <InfoCard title="Call / WhatsApp" icon={<Phone className="w-5 h-5" />}>
            <a href={`tel:${phone}`} className="block text-blue-600 dark:text-emerald-400 font-medium">{displayPhone}</a>
            <a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer" className="block text-sm mt-1 underline">Open WhatsApp</a>
          </InfoCard>

          <InfoCard title="Email" icon={<Mail className="w-5 h-5" />}>
            <a href={`mailto:${email}`} className="block text-blue-600 dark:text-emerald-400 font-medium">{email}</a>
          </InfoCard>

          <InfoCard title="Maps (quick open)" icon={<MapPin className="w-5 h-5" />}>
            <ul className="text-sm space-y-1">
              {clinics.map(c => (
                <li key={c.name} className="flex items-center">
                  <a className="underline decoration-dotted" href={mapsLink(c.name, c.area)} target="_blank" rel="noreferrer">
                    {c.name} — {c.area}
                  </a>
                  {c.onCall && (
                    <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full border border-neutral-300 dark:border-neutral-700">
                      On-call
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>
        <p className="text-xs text-neutral-500 mt-3">Place: Mumbai • Date: 03/04/2025</p>
      </Section>

      {/* Footer sticky action */}
      <footer className="max-w-6xl mx-auto px-4 pb-28 sm:pb-10 pt-6 text-xs text-neutral-500">
        <div>© {new Date().getFullYear()} {personal.fullName}. All rights reserved.</div>
      </footer>

      {/* Mobile bottom actions */}
      <div className="fixed inset-x-0 bottom-0 sm:hidden bg-white/95 dark:bg-neutral-900/95 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-2 grid grid-cols-3 gap-2">
          <a href={`tel:${phone}`} className="flex items-center justify-center gap-2 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700">
            <Phone className="w-4 h-4" /> Call
          </a>
          <a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.45 0 .07 5.38.07 12c0 2.1.54 4.1 1.57 5.9L0 24l6.26-1.62A11.86 11.86 0 0 0 12.06 24c6.61 0 11.98-5.38 11.98-12 0-3.2-1.25-6.21-3.52-8.52ZM12.06 22a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.72 .96 .99-3.62 -.23 -.37 A9.93 9.93 0 0 1 2.07 12 c0 -5.5 4.48 -10 9.99 -10 s 9.99 4.5 9.99 10 c0 5.5 -4.48 10 -9.99 10 Zm5.47 -7.48 c -.3 -.15 -1.78 -.87 -2.06 -.97 -.28 -.1 -.49 -.15 -.7 .15 -.21 .3 -.8 .97 -.98 1.17 -.18 .2 -.36 .22 -.66 .07 -.3 -.15 -1.25 -.45 -2.38 -1.45 -.88 -.77 -1.48 -1.72 -1.65 -2.01 -.17 -.3 -.02 -.46 .13 -.6 .14 -.14 .3 -.36 .45 -.54 .15 -.18 .2 -.3 .3 -.5 .1 -.2 .05 -.37 -.03 -.52 -.08 -.15 -.7 -1.68 -.95 -2.29 -.25 -.6 -.5 -.52 -.7 -.53 l -.6 -.01 c -.2 0 -.52 .07 -.79 .37 -.27 .3 -1.04 1.02 -1.04 2.5 s 1.07 2.9 1.22 3.1 c .15 .2 2.1 3.2 5.06 4.49 .71 .31 1.26 .49 1.69 .63 .71 .23 1.35 .2 1.86 .12 .57 -.08 1.78 -.73 2.03 -1.44 .25 -.71 .25 -1.32 .17 -1.45 -.08 -.13 -.27 -.2 -.57 -.35 Z"/></svg>
            WhatsApp
          </a>
          <a href={`mailto:${email}`} className="flex items-center justify-center gap-2 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700">
            <Mail className="w-4 h-4" /> Email
          </a>
        </div>
      </div>

      {/* Floating AI chatbot (on every page) */}
      <div className="fixed z-50 right-3 bottom-20 sm:right-6 sm:bottom-6">
        <AIChatWidget />
      </div>
    </div>
  );
}

function Section({ id, title, icon, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center gap-2 mb-5">
        {icon}
        <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function InfoCard({ title, icon, children }) {
  return (
    <div className="rounded-2xl p-4 border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/40 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <div className="font-medium">{title}</div>
      </div>
      <div>{children}</div>
    </div>
  );
}

function AppointmentsSection({ phone, email, clinics }) {
  const [form, setForm] = useState({
    name: "", phone: "", clinic: clinics[0]?.name || "",
    date: "", time: "", concern: ""
  });

  const disabled = !form.name || !form.phone || !form.clinic;

  const text = `Hello Dr. Deepak,%0A%0AI'd like to book an appointment.%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AClinic: ${encodeURIComponent(form.clinic)}%0ADate: ${encodeURIComponent(form.date || "-")}%0ATime: ${encodeURIComponent(form.time || "-")}%0AConcern: ${encodeURIComponent(form.concern || "-")}%0A%0AThank you.`;
  const waHref = `https://wa.me/${phone.replace("+","")}?text=${text}`;
  const mailHref = `mailto:${email}?subject=${encodeURIComponent("Appointment request: " + (form.name || ""))}&body=${text.replace(/%0A/g, "\n")}`;

  // ---------- Add-to-Calendar helpers ----------
  const toICSDate = (d) =>
    `${d.getUTCFullYear()}${String(d.getUTCMonth()+1).padStart(2,'0')}${String(d.getUTCDate()).padStart(2,'0')}T${String(d.getUTCHours()).padStart(2,'0')}${String(d.getUTCMinutes()).padStart(2,'0')}00Z`;

  // Build .ics for 30 minutes
  function buildICS({ title, description, location, startLocalISO }) {
    const start = new Date(startLocalISO);
    const end = new Date(start.getTime() + 30 * 60 * 1000);
    const dtstamp = new Date();
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//DrDeepak//Appointments//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:${Date.now()}@drdeepak`,
      `DTSTAMP:${toICSDate(dtstamp)}`,
      `DTSTART:${toICSDate(start)}`,
      `DTEND:${toICSDate(end)}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description.replace(/\n/g,"\\n")}`,
      `LOCATION:${location}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    return ics;
  }

  function downloadICS(filename, text) {
    const blob = new Blob([text], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function buildGoogleCalendarURL({ title, details, location, startLocalISO }) {
    const start = new Date(startLocalISO);
    const end = new Date(start.getTime() + 30 * 60 * 1000);
    const fmt = (d) =>
      `${d.getUTCFullYear()}${String(d.getUTCMonth()+1).padStart(2,'0')}${String(d.getUTCDate()).padStart(2,'0')}T${String(d.getUTCHours()).padStart(2,'0')}${String(d.getUTCMinutes()).padStart(2,'0')}00Z`;

    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: title,
      dates: `${fmt(start)}/${fmt(end)}`,
      details,
      location,
    });
    return `https://www.google.com/calendar/render?${params.toString()}`;
  }
  // --------------------------------------------

  // Compute start datetime ISO if user selected date+time
  const startLocalISO = (form.date && form.time)
    ? new Date(`${form.date}T${form.time}:00`).toISOString()
    : null;

  const eventTitle = `Appointment with Dr. Deepak Sasikumar`;
  const eventLocation = form.clinic || "Clinic";
  const eventDetails =
    `Name: ${form.name || "-"}\nPhone: ${form.phone || "-"}\nClinic: ${form.clinic || "-"}\nConcern: ${form.concern || "-"}`;

  function handleICS() {
    if (!startLocalISO) return; // need date+time
    const ics = buildICS({
      title: eventTitle,
      description: eventDetails,
      location: eventLocation,
      startLocalISO
    });
    downloadICS("appointment.ics", ics);
  }

  return (
    <Section id="appointments" title="Book an Appointment" icon={<CalendarDays className="w-5 h-5" />}>
      <div className="grid md:grid-cols-2 gap-6">
        <form className="space-y-3 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60" onSubmit={(e)=>e.preventDefault()}>
          <Field label="Full name">
            <input value={form.name} onChange={e=>setForm(f=>({...f, name:e.target.value}))} placeholder="Your name" className="w-full px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent outline-none" />
          </Field>

          <Field label="Phone number">
            <input value={form.phone} onChange={e=>setForm(f=>({...f, phone:e.target.value}))} placeholder="+91 ..." className="w-full px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent outline-none" />
          </Field>

          <Field label="Preferred clinic">
            <select
              value={form.clinic}
              onChange={e=>setForm(f=>({...f, clinic:e.target.value}))}
              className="w-full px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent outline-none"
            >
              {clinics.map(c => (
                <option key={c.name} value={c.name}>
                  {c.name} — {c.area}{c.onCall ? " (On-call)" : ""}
                </option>
              ))}
            </select>
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Date (optional)">
              <input type="date" value={form.date} onChange={e=>setForm(f=>({...f, date:e.target.value}))} className="w-full px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent outline-none" />
            </Field>
            <Field label="Time (optional)">
              <input type="time" value={form.time} onChange={e=>setForm(f=>({...f, time:e.target.value}))} className="w-full px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent outline-none" />
            </Field>
          </div>

          <Field label="Concern (optional)">
            <textarea value={form.concern} onChange={e=>setForm(f=>({...f, concern:e.target.value}))} rows={3} placeholder="e.g., abdominal pain, acidity..." className="w-full px-3 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent outline-none" />
          </Field>

          <div className="flex flex-wrap gap-3 pt-1">
            <a href={waHref} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl border ${disabled ? "opacity-50 pointer-events-none" : ""} border-neutral-300 dark:border-neutral-700`}>
              <Send className="w-4 h-4" /> WhatsApp
            </a>
            <a href={mailHref} className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl border ${disabled ? "opacity-50 pointer-events-none" : ""} border-neutral-300 dark:border-neutral-700`}>
              <Mail className="w-4 h-4" /> Email
            </a>

            {/* Add to Calendar (.ics) */}
            <button type="button" onClick={handleICS}
              disabled={!startLocalISO}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl border ${!startLocalISO ? "opacity-50 pointer-events-none" : ""} border-neutral-300 dark:border-neutral-700`}>
              📅 Add to Calendar (.ics)
            </button>

            {/* Google Calendar */}
            <a
              href={startLocalISO ? buildGoogleCalendarURL({
                title: eventTitle,
                details: eventDetails,
                location: eventLocation,
                startLocalISO
              }) : undefined}
              target="_blank" rel="noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl border ${!startLocalISO ? "opacity-50 pointer-events-none" : ""} border-neutral-300 dark:border-neutral-700`}>
              🗓️ Google Calendar
            </a>
          </div>

          <p className="text-xs text-neutral-500">We’ll confirm the slot over WhatsApp or email.</p>
        </form>

        <div className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60">
          <h3 className="font-semibold mb-2">Quick tips</h3>
          <ul className="text-sm list-disc pl-5 space-y-1">
            <li>Choose the clinic closest to you—tap clinic names above to open Google Maps.</li>
            <li>If it’s urgent, please call directly.</li>
            <li>Bring prior lab reports, prescriptions, and allergy info.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block text-sm">
      <span className="text-neutral-600 dark:text-neutral-300">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
