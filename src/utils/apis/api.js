const getBardUrl = () =>
  `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${process.env.BARD_API_KEY}`;

export { getBardUrl };
