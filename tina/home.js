export const homeCollectionSchema = {
  name: "Home",
  label: "Home",
  path: "_data/home",
  format: "yml",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    { name: "topper", label: "Topper", type: "string" },
    { name: "headline", label: "Headline", type: "string" },
    { name: "subheadline", label: "Subheadline", type: "string" },
    {
      name: "button",
      label: "Buttons",
      type: "object",
      fields: [
        {
          name: "primary",
          label: "Primary Button",
          type: "object",
          fields: [
            { name: "text", label: "Text", type: "string" },
            { name: "url", label: "URL", type: "string" },
          ],
        },
        {
          name: "secondary",
          label: "Secondary Button",
          type: "object",
          fields: [
            { name: "text", label: "Text", type: "string" },
            { name: "url", label: "URL", type: "string" },
          ],
        },
      ],
    },
  ],
}