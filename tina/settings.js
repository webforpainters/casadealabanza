export const settingsCollectionSchema = {
  name: "settings",
  label: "Site Settings",
  path: "_data",
  format: "yml",
  fields: [
    {
      type: "object",
      name: "navigation_settings",
      label: "Navigation Settings",
      fields: [
        {
          type: "object",
          name: "socials",
          label: "Social Icons",
          list: true,
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
              required: true,
            },
            {
              type: "string",
              name: "url",
              label: "URL",
              required: true,
            },
            {
              type: "string",
              name: "icon",
              label: "Icon URL",
              required: true,
            },
          ],
        },
      ],
    },
  ],
}