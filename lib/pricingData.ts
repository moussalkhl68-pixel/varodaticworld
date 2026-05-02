export const pricingData = {
  selector_style: "tab buttons — 1 Connection / 2 Connections / 3 Connections",
  selector_colors: "active tab: #00FF88 text on dark filled bg, inactive: white text on #1a1a1a, matching site palette",
  duration_display: "3 cards per row (3 months / 6 months / 12 months)",
  tiers: {
    "1_device": {
      id: "1_device",
      label: "1 Connection",
      plans: [
        { id: "1d_3m", duration: "3 Months", price: 35, original: null, saving: null, badge: null },
        { id: "1d_6m", duration: "6 Months", price: 49, original: null, saving: null, badge: "POPULAR" },
        { id: "1d_12m", duration: "12 Months", price: 69, original: null, saving: null, badge: "BEST VALUE" }
      ]
    },
    "2_devices": {
      id: "2_devices",
      label: "2 Connections",
      note: "Discounted from double the 1-device price — show original crossed-out price and savings badge",
      plans: [
        { id: "2d_3m", duration: "3 Months", original: 70, price: 59, saving: "Save $11", badge: null },
        { id: "2d_6m", duration: "6 Months", original: 98, price: 82, saving: "Save $16", badge: "POPULAR" },
        { id: "2d_12m", duration: "12 Months", original: 138, price: 115, saving: "Save $23", badge: "BEST VALUE" }
      ]
    },
    "3_devices": {
      id: "3_devices",
      label: "3 Connections",
      note: "Discounted from triple the 1-device price — show original crossed-out price and savings badge",
      plans: [
        { id: "3d_3m", duration: "3 Months", original: 105, price: 84, saving: "Save $21", badge: null },
        { id: "3d_6m", duration: "6 Months", original: 147, price: 117, saving: "Save $30", badge: "POPULAR" },
        { id: "3d_12m", duration: "12 Months", original: 207, price: 162, saving: "Save $45", badge: "BEST VALUE" }
      ]
    }
  },
  trial: "Free trial, no credit card required",
  currency: "USD"
};

export type DeviceTier = keyof typeof pricingData.tiers;
