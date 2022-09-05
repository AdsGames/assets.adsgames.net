export const formatName = (name: string) =>
  name
    .replace(/_/g, " ")
    .replace(/(^\w{1})|(\s+\w{1})/g, (l) => l.toUpperCase());
