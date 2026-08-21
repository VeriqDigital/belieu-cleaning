export const primaryServices = [
  {
    title: "Regular House Cleaning",
    shortTitle: "Regular Cleaning",
    description:
      "Routine care for the kitchens, bathrooms, bedrooms, and living spaces that keep a home feeling good day to day.",
    image: "/livingroom.jpg",
    alt: "Freshly cleaned living room arranged with care",
  },
  {
    title: "Deep Cleaning",
    shortTitle: "Deep Cleaning",
    description:
      "A more detailed reset for homes that need extra time and attention, whether things have piled up or it is simply time for a thorough clean.",
    image: "/kitchen.jpg",
    alt: "Clean kitchen counters with a polished finish",
  },
  {
    title: "Move-In / Move-Out Cleaning",
    shortTitle: "Moving Cleans",
    description:
      "Cleaning for homes in transition, helping you leave a space ready for what comes next or start fresh in a new one.",
    image: "/clean_room.jpg",
    alt: "Empty room with freshly cleaned floors",
  },
  {
    title: "Airbnb & Short-Term Rental Cleaning",
    shortTitle: "Airbnb Cleaning",
    description:
      "Dependable cleaning between guests to help short-term rentals feel fresh, orderly, and ready for the next arrival.",
    image: "/bedroom.jpg",
    alt: "Clean bedroom prepared with neatly arranged bedding",
  },
  {
    title: "Construction Cleaning",
    shortTitle: "Construction Cleaning",
    description:
      "Post-project cleanup for spaces that need dust, debris, and the final layer of mess handled before they are ready to use.",
    image: "/clean_floor.jpg",
    alt: "Freshly cleaned hardwood floor after detailed work",
  },
  {
    title: "Commercial Cleaning & Resets",
    shortTitle: "Commercial Cleaning",
    description:
      "Practical cleaning and reset help for local businesses and commercial spaces, planned around the needs of the job.",
    image: "/kitchen2.jpg",
    alt: "Bright polished interior after a professional cleaning",
  },
] as const;

export const additionalServices = [
  {
    title: "Junk Removal",
    description: "Help clearing unwanted items when a space needs more than surface cleaning.",
  },
  {
    title: "Decluttering & Organizing",
    description: "Hands-on help creating breathing room and getting everyday spaces back in order.",
  },
  {
    title: "Water Cleanup",
    description: "Flooded basement and water-cleanup help. Call to discuss the situation and scope.",
  },
  {
    title: "Dog Walking & Potty Breaks",
    description: "An extra helping hand for dogs when your schedule gets busy.",
  },
] as const;

export const frequencyOptions = ["One-time", "Weekly", "Biweekly", "Monthly"] as const;

export const services = primaryServices;
