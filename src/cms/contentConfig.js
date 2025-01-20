const contentTypes = {
  testimonial: {
    collection: 'content',
    docId: 'testimonials',
    subCollection: 'entries',
    formatUpdate: ({ text }) => ({
      content: {
        // Remove leading and trailing double quotes
        text: text.replace(/^"|"$/g, ''),
      },
    }),
  },
  // Add more content types as needed
};

export default contentTypes;
