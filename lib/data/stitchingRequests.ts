export const stitchingStatuses = [
  "New Request",
  "Fabric Pending",
  "Fabric Received",
  "Measurement Confirmed",
  "In Stitching",
  "Ready for Delivery",
  "Delivered",
  "Cancelled",
] as const;

export type StitchingStatus = (typeof stitchingStatuses)[number];

export const statusTone: Record<StitchingStatus, "blush" | "ink" | "ivory" | "muted"> = {
  "New Request": "blush",
  "Fabric Pending": "muted",
  "Fabric Received": "ivory",
  "Measurement Confirmed": "ivory",
  "In Stitching": "blush",
  "Ready for Delivery": "blush",
  "Delivered": "ink",
  "Cancelled": "muted",
};

export type StitchingRequest = {
  id: string;
  createdAt: string; // ISO
  customer: {
    name: string;
    phone: string;
    email: string;
    address: string;
  };
  orderOption: "own" | "buy";
  stitchingType: string;
  dressType: string;
  fabricDetails?: string;
  measurements: Record<string, string>;
  referenceImage?: string;
  paymentScreenshot?: string;
  payment: "cod" | "easypaisa";
  delivery: string;
  notes?: string;
  status: StitchingStatus;
};

export const stitchingRequests: StitchingRequest[] = [
  {
    id: "CS-2026-0142",
    createdAt: "2026-05-24T10:14:00Z",
    customer: {
      name: "Ayesha Khan",
      phone: "0301-2345678",
      email: "ayesha.k@example.com",
      address: "House 24-B, Gulberg III, Lahore",
    },
    orderOption: "own",
    stitchingType: "Designer stitching",
    dressType: "Shalwar Kameez",
    fabricDetails: "Lawn cotton, 2.5m, light pink with floral print",
    measurements: {
      Bust: "36",
      Waist: "30",
      Hip: "38",
      Shoulder: "14",
      "Sleeve length": "22",
      "Kameez length": "44",
      "Trouser length": "40",
      "Ghera (flare)": "60",
    },
    referenceImage:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=600&q=80",
    payment: "cod",
    delivery: "Standard (3–5 days)",
    notes: "Boat neckline, three-quarter sleeves. Please add lining.",
    status: "New Request",
  },
  {
    id: "CS-2026-0141",
    createdAt: "2026-05-23T16:48:00Z",
    customer: {
      name: "Sara Iqbal",
      phone: "0345-9876543",
      email: "sara.i@example.com",
      address: "Flat 4-A, Clifton Block 7, Karachi",
    },
    orderOption: "buy",
    stitchingType: "Bridal stitching",
    dressType: "Lehenga",
    fabricDetails: "Wine raw silk lehenga, purchased from /shop/wine-bridal-lehenga",
    measurements: {
      Bust: "34",
      Waist: "28",
      Hip: "36",
      Shoulder: "13.5",
    },
    referenceImage:
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&w=600&q=80",
    paymentScreenshot:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=400&q=80",
    payment: "easypaisa",
    delivery: "Express (1–2 days)",
    notes: "Needed before 15th June for wedding. Sweetheart neckline.",
    status: "In Stitching",
  },
  {
    id: "CS-2026-0140",
    createdAt: "2026-05-22T09:02:00Z",
    customer: {
      name: "Hina Bashir",
      phone: "0312-1122334",
      email: "hina.b@example.com",
      address: "House 11, F-7/2, Islamabad",
    },
    orderOption: "own",
    stitchingType: "Standard stitching",
    dressType: "Kurta",
    fabricDetails: "Cambric, 2m, dusty rose",
    measurements: {
      Bust: "38",
      Waist: "32",
      "Kameez length": "42",
    },
    payment: "cod",
    delivery: "Standard (3–5 days)",
    status: "Fabric Received",
  },
  {
    id: "CS-2026-0139",
    createdAt: "2026-05-20T13:33:00Z",
    customer: {
      name: "Mahnoor Tariq",
      phone: "0333-5566778",
      email: "mahnoor.t@example.com",
      address: "House 9, DHA Phase 5, Lahore",
    },
    orderOption: "buy",
    stitchingType: "Designer stitching",
    dressType: "Maxi / Gown",
    fabricDetails: "Ivory raw silk, from /shop/ivory-pearl-formal-suit",
    measurements: {
      Bust: "36",
      Waist: "30",
      Hip: "38",
      "Kameez length": "52",
    },
    referenceImage:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=600&q=80",
    paymentScreenshot:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=400&q=80",
    payment: "easypaisa",
    delivery: "Standard (3–5 days)",
    status: "Ready for Delivery",
  },
  {
    id: "CS-2026-0138",
    createdAt: "2026-05-18T11:20:00Z",
    customer: {
      name: "Nadia Pervez",
      phone: "0300-2233445",
      email: "nadia.p@example.com",
      address: "House 88, Bahria Town, Rawalpindi",
    },
    orderOption: "own",
    stitchingType: "Standard stitching",
    dressType: "Shalwar Kameez",
    fabricDetails: "Khaddar, 3m, charcoal",
    measurements: {
      Bust: "40",
      Waist: "34",
      Hip: "42",
    },
    payment: "cod",
    delivery: "Standard (3–5 days)",
    status: "Delivered",
  },
];

export function getStitchingRequest(id: string): StitchingRequest | undefined {
  return stitchingRequests.find((r) => r.id === id);
}
